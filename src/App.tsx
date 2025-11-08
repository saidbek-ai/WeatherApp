import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import WeatherDashboard from "./components/WeatherDashboard";
import { type TodayWeather, type UnitType } from "./types/weather";
import Footer from "./components/Footer";
import WeatherDashboardLoader from "./components/WeatherDashboardLoader";
import AppHeadSEO from "./components/AppHeadSEO";

function App() {
  const [unit, setUnit] = useState<UnitType>("metric");
  const [city, setCity] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<TodayWeather | null>(null);

  const imageUrl = `${window.location.origin}/assets/social_preview.webp`;
  const url = window.location.href;

  const getWeatherByCity = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_OPENWEATHER_KEY
        }&units=${unit}`
      );

      const jsonData = await res.json();

      if (jsonData.cod === "404") {
        toast.error("City not found.");

        throw new Error("not_found");
      }

      const {
        dt,
        coord,
        main: { temp, temp_min, temp_max, pressure, feels_like, humidity },
        sys: { country, sunset, sunrise },
        name,
        wind: { speed: wind_speed },
        weather,
      } = jsonData;

      setData({
        city: name,
        dt,
        country,
        coord,
        avgTemp: temp,
        description: weather[0]?.main,
        icon: weather[0]?.icon,
        sunrise,
        sunset,
        temp_max,
        temp_min,
        feels_like,
        wind_speed,
        humidity,
        pressure,
      });
    } catch (error: unknown) {
      // ✅ Safely check and narrow the type
      if (error instanceof Error) {
        if (error.message === "not_found") return;
        else setError(error.message);
      } else {
        setError(String(error)); // fallback in case it's not an Error
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getWeatherGeolocation = async (): Promise<void> => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported. Please use search field.");
    }

    const error = (err: GeolocationPositionError) => {
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      if (!lat || !lon) {
        setError("Please enable geolocation and refresh the page!");
      }

      setIsLoading(true);
      setError(null);

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_OPENWEATHER_KEY
        }&units=${unit}`
      )
        .then((res) => res.json())
        .then((jsonData) => {
          const {
            dt,
            coord,
            main: { temp, temp_min, temp_max, pressure, feels_like, humidity },
            sys: { country, sunset, sunrise },
            name,
            wind: { speed: wind_speed },
            weather,
          } = jsonData;

          setData({
            dt,
            city: name,
            coord,
            country,
            avgTemp: temp,
            description: weather[0]?.main,
            icon: weather[0]?.icon,
            sunrise,
            sunset,
            temp_max,
            temp_min,
            feels_like,
            wind_speed,
            humidity,
            pressure,
          });
        })
        .catch((error) => {
          // ✅ Safely check and narrow the type
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError(String(error)); // fallback in case it's not an Error
          }
        })
        .finally(() => setIsLoading(false));
    }, error);
  };

  useEffect(() => {
    if (!city) getWeatherGeolocation();
    else getWeatherByCity();
  }, [unit]);

  return (
    <>
      <AppHeadSEO
        title="Weather in Your City | WeatherApp"
        description="Check local conditions, radar, and forecasts instantly."
        url={url}
        imageUrl={imageUrl}
      />

      <div className="h-full w-full bg-[#e0e0e0] flex justify-center items-center">
        <div className="min-h-screen box-border max-w-7xl mx-auto w-full flex flex-col justify-between items-center overflow-hidden p-4 ">
          <Navbar
            city={city}
            setCity={setCity}
            onSearch={getWeatherByCity}
            unit={unit}
            setUnit={setUnit}
          />
          {/* Weather Card goes here */}

          {error && (
            <div className="text-base text-rose-500 flex-1 h-full w-full flex justify-center items-center">
              {error}
            </div>
          )}
          {isLoading ? (
            <WeatherDashboardLoader />
          ) : (
            !error && data && <WeatherDashboard today={data} unit={unit} />
          )}

          <Footer />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
