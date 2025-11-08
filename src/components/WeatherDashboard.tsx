import type { TodayWeather, UnitType } from "../types/weather";
import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiThermometer,
  WiThermometerExterior,
  WiThermometerInternal,
  WiStrongWind,
  WiDirectionDown,
} from "react-icons/wi";
import DetailsItem from "./DetailsItem";
import WeeklyForecast from "./WeeklyForecast";
import TodaysWeather from "./TodaysWeather";
import type React from "react";

interface DashboardProps {
  today: TodayWeather;
  unit: UnitType;
}

const WeatherDashboard: React.FC<DashboardProps> = ({
  today,
  unit,
}: DashboardProps) => {
  const formatTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center gap-6 py-6 lg:py-0">
      {/* Top Section: Today + Weekly */}
      <div className="w-full h-full flex flex-col lg:flex-row gap-6">
        {/* Today's Weather */}
        <TodaysWeather
          unit={unit}
          dt={today?.dt}
          country={today?.country}
          city={today?.city}
          icon={today?.icon}
          description={today?.description}
          avgTemp={today?.avgTemp}
        />

        {/* Weekly Forecast */}
        <WeeklyForecast unit={unit} coord={today?.coord} />
      </div>

      {/* Bottom Additional Details */}
      <div className="w-full h-full bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 text-gray-700">
        <DetailsItem
          icon={<WiSunrise />}
          title="Sunrise"
          value={formatTime(today?.sunrise)}
        />
        <DetailsItem
          icon={<WiSunset />}
          title="Sunset"
          value={formatTime(today?.sunset)}
        />
        <DetailsItem
          icon={<WiThermometer />}
          title="Max Temp"
          value={`${Math.round(today?.temp_max)}°${
            unit === "metric" ? "C" : "F"
          }`}
        />
        <DetailsItem
          icon={<WiThermometerExterior />}
          title="Min Temp"
          value={`${Math.round(today?.temp_min)}°${
            unit === "metric" ? "C" : "F"
          }`}
        />
        <DetailsItem
          icon={<WiThermometerInternal />}
          title="Feels like"
          value={`${Math.round(today?.feels_like)}°${
            unit === "metric" ? "C" : "F"
          }`}
        />
        <DetailsItem
          icon={<WiStrongWind />}
          title="Wind Speed"
          value={`${today?.wind_speed} ${unit === "metric" ? "m/s" : "mph"}`}
        />
        <DetailsItem
          icon={<WiHumidity />}
          title="Humidity"
          value={`${today?.humidity}%`}
        />
        <DetailsItem
          icon={<WiDirectionDown />}
          title="Pressure"
          value={`${today?.pressure} hPa`}
        />
      </div>
    </div>
  );
};

export default WeatherDashboard;
