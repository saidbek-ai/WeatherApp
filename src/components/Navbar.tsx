import type React from "react";
import type { UnitType } from "../types/weather";

interface Props {
  onSearch: () => void;
  unit: UnitType;
  setUnit: React.Dispatch<React.SetStateAction<UnitType>>;
  city: string;
  setCity: (city: string) => void;
}

const Navbar: React.FC<Props> = ({
  onSearch,
  unit,
  setUnit,
  city,
  setCity,
}) => {
  return (
    <nav
      role="navigation"
      className="w-full flex items-center justify-between p-4 bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] rounded-2xl mx-4 mt-2"
    >
      <h1 className="hidden md:inline text-xl font-bold text-gray-800 pl-3">
        WeatherApp
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (city.length > 0) onSearch();
        }}
        className="flex items-center gap-2 w-48 md:w-72"
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
          className="w-full px-4 py-2 rounded-xl bg-[#e0e0e0] shadow-inner focus:outline-none focus:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-gray-800 transition"
          onKeyDown={(e) => e.key === "Enter" && city.length > 0 && onSearch()}
          aria-label="Enter city name"
        />
        <button
          // onClick={}
          type="submit"
          className="hidden sm:inline px-4 py-2 rounded-xl bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-inner transition text-gray-800"
          aria-label="Search city"
        >
          Search
        </button>
      </form>

      <div className="hidden sm:flex items-center gap-2">
        <button
          onClick={() => setUnit("metric")}
          className={`px-3 py-1 rounded-xl transition ${
            unit === "metric"
              ? "bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-gray-800"
              : "bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-gray-500 hover:shadow-inner"
          }`}
          aria-label="Switch to Celsius"
        >
          °C
        </button>
        <button
          onClick={() => setUnit("imperial")}
          className={`px-3 py-1 rounded-xl transition ${
            unit === "imperial"
              ? "bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-gray-800"
              : "bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-gray-500 hover:shadow-inner"
          }`}
          aria-label="Switch to Fahrenheit"
        >
          °F
        </button>
      </div>

      <button
        onClick={() =>
          setUnit((prev) => (prev === "metric" ? "imperial" : "metric"))
        }
        className={`sm:hidden px-3 py-1 rounded-xl transition bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-gray-500 hover:shadow-inner`}
        aria-label="Switch to Celsius"
      >
        °{unit === "metric" ? "C" : "F"}
      </button>
    </nav>
  );
};

export default Navbar;
