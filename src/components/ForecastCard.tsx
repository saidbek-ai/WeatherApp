import type React from "react";
import type { UnitType, WeatherCode } from "../types/weather";
import { WeatherIcon } from "./WeatherIcon";

interface ForecastCardProps {
  day: string;
  icon: string;
  temp: number;
  unit: UnitType;
}

const ForecastCard: React.FC<ForecastCardProps> = ({
  day,
  icon,
  temp,
  unit,
}) => {
  return (
    <div
      className="
        flex flex-col items-center w-24 p-4 rounded-2xl
        bg-[#e0e0e0]
        
        hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]
        transition-all duration-300
      "
    >
      {/* Day */}
      <p className="text-gray-600 font-semibold mb-2">{day}</p>

      {/* Icon with circular neumorphic background */}
      <div
        className="
          flex items-center justify-center w-16 h-16 rounded-full
          bg-[#e0e0e0]
          shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]
          mb-2
        "
      >
        <WeatherIcon code={icon as WeatherCode} size={40} color={"#f140f"} />
      </div>

      {/* Temperature */}
      <p className="text-gray-800 font-bold text-lg">
        {temp}°{unit === "metric" ? "C" : "F"}
      </p>
    </div>
  );
};

export default ForecastCard;
