import { WeatherIcon } from "./WeatherIcon";
import type { UnitType, WeatherCode } from "../types/weather";
import React from "react";

interface Props {
  dt: number;
  city: string;
  country: string;
  icon: string;
  description: string;
  avgTemp: number;
  unit: UnitType;
}

const TodaysWeather: React.FC<Props> = ({
  dt,
  city,
  country,
  icon,
  description,
  avgTemp,
  unit,
}) => {
  return (
    <div className="w-full md:1/4 lg:w-1/3 bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] rounded-2xl p-6 flex flex-col items-center justify-center text-center select-none">
      <h2 className="text-2xl font-bold text-gray-800">
        {city}, {country}
      </h2>

      {/* Date and Day of the Week */}
      <p className="text-gray-600 text-sm mt-1">
        {new Date(dt * 1000).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>

      <WeatherIcon code={icon as WeatherCode} size={56} color={"#f140f"} />

      <p className="text-xl text-gray-700">{description}</p>

      <p className="text-5xl font-bold mt-2">
        {avgTemp && Math.round(avgTemp)}°{unit === "metric" ? "C" : "F"}
      </p>
    </div>
  );
};

export default TodaysWeather;
