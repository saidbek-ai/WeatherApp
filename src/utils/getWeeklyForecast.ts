import type { UnitType } from "../types/weather";

export interface DailyWeather {
  day: string;
  temp: number;
  icon: string;
}

interface ForecastAPIResponse {
  list: {
    dt_txt: string;
    main: { temp: number };
    weather: { icon: string }[];
  }[];
}

export async function getWeeklyForecast(
  lat: number,
  lon: number,
  unit: UnitType,
  apiKey: string
): Promise<DailyWeather[]> {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("failed to fetch forecast");

  const data: ForecastAPIResponse = await res.json();

  const grouped: Record<string, { temp: number[]; icons: string[] }> = {};

  data?.list?.forEach((item) => {
    const date = item.dt_txt?.split(" ")[0];
    if (!grouped[date]) grouped[date] = { temp: [], icons: [] };

    grouped[date].temp.push(item.main.temp);
    grouped[date].icons.push(item.weather[0].icon);
  });

  const days = Object.entries(grouped).map(([date, info]) => {
    const avgTemp = info.temp.reduce((a, b) => a + b, 0) / info.temp.length;

    const icon = info.icons.sort(
      (a, b) =>
        info.icons.filter((v) => v === a).length -
        info.icons.filter((v) => v === b).length
    )[info.icons.length - 1];

    const weekday = new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    return { day: weekday, temp: Math.round(avgTemp), icon };
  });

  return days.slice(0, 7);
}
