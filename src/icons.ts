import type { IconType } from "react-icons";
import type { WeatherCode } from "./types/weather";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

export const weatherIconMap: Record<WeatherCode, IconType> = {
  "01d": WiDaySunny,
  "01n": WiNightClear,
  "02d": WiDayCloudy,
  "02n": WiNightAltCloudy,
  "03d": WiDayCloudy,
  "03n": WiNightAltCloudy,
  "04d": WiDayCloudy,
  "04n": WiNightAltCloudy,
  "09d": WiRain,
  "09n": WiRain,
  "10d": WiRain,
  "10n": WiRain,
  "11d": WiThunderstorm,
  "11n": WiThunderstorm,
  "13d": WiSnow,
  "13n": WiSnow,
  "50d": WiFog,
  "50n": WiFog,
};
