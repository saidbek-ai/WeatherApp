function ForecastCardLoader() {
  return (
    <div className="flex flex-col items-center w-24 p-4 rounded-2xl bg-[#e0e0e0] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
      {/* Day */}
      <p className="bg-gray-400/55 font-semibold mb-2 h-6 w-5 animate-pulse"></p>

      {/* Icon with circular neumorphic background */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
        <span className="h-10 w-10 rounded-full bg-gray-400/55 animate-pulse"></span>
      </div>

      {/* Temperature */}
      <p className="bg-gray-400/55 font-bold text-lg h-6 w-8 mt-3 animate-pulse"></p>
    </div>
  );
}

export default ForecastCardLoader;
