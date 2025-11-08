import type { IconType } from "react-icons";
import type { WeatherCode } from "../types/weather";
import { weatherIconMap } from "../icons";
import type React from "react";

interface WeatherIconProps {
  code: WeatherCode;
  size?: number;
  color: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({
  code,
  size = 48,
  color = "#333",
}) => {
  // Assert code is a WeatherCode
  const weatherCode = code as WeatherCode;

  // Optional: fallback if the code is invalid
  const IconComponent: IconType =
    weatherIconMap[weatherCode] || weatherIconMap["01d"];
  return <IconComponent size={size} color={color} />;
};
