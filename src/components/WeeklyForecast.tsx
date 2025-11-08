import React, { memo, useEffect, useState } from "react";
import type { Coord, UnitType, WeeklyWeatherType } from "../types/weather";

import ForecastCard from "./ForecastCard";
import { getWeeklyForecast } from "../utils/getWeeklyForecast";
import ForecastCardLoader from "./ForecastCardLoader";

interface Props {
  unit: UnitType;
  coord: Coord;
}

const WeeklyForecast: React.FC<Props> = memo(({ unit, coord }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeatherType | null>(
    null
  );

  const getWeeklyWeather = async () => {
    try {
      setIsLoading(true);
      const { lat, lon } = coord;
      const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

      const forecast = await getWeeklyForecast(lat, lon, unit, apiKey);

      setWeeklyWeather(forecast.slice(1));
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError(String(err));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (coord?.lat && coord?.lon) getWeeklyWeather();
  }, [unit, coord]);

  return (
    <div className="w-full h-full lg:w-2/3 bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] rounded-2xl p-6 flex flex-col items-center text-center select-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Weekly Forecast</h2>

      {/* Horizontal Scroll for mobile */}
      <div className="flex flex-wrap justify-center items-center gap-4 overflow-x-auto overflow-y-hidden px-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-full box-border">
        {/* <ForecastCard unit="metric" day="Fri" temp={12} icon="01n" />
        <ForecastCardLoader /> */}
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <ForecastCardLoader key={i} />
          ))
        ) : error ? (
          <div className="w-full text-base text-rose-500 p-2 text-center">
            {error}
          </div>
        ) : (
          weeklyWeather?.map((day) => (
            <ForecastCard
              unit={unit}
              key={day.day}
              day={day.day}
              icon={day.icon}
              temp={day.temp}
            />
          ))
        )}
      </div>
    </div>
  );
});

export default WeeklyForecast;
