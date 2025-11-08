// src/types/weather.ts

export type UnitType = "imperial" | "metric";

export interface Coord {
  lat: number;
  lon: number;
}

export type WeeklyWeatherType = {
  day: string;
  icon: string;
  temp: number;
}[];

export interface TodayWeather {
  dt: number;
  city: string;
  coord: Coord;
  country: string;
  avgTemp: number;
  description: string;
  icon: string;
  sunrise: number;
  sunset: number;
  temp_max: number;
  temp_min: number;
  feels_like: number;
  wind_speed: number;
  humidity: number;
  pressure: number;
}

export interface DailyWeather {
  day: string;
  temp: number;
  icon: string;
}

export type WeatherCode =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n";
