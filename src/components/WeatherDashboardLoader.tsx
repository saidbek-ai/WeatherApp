import { WiDaySunny } from "react-icons/wi";

export default function WeatherDashboardLoader() {
  return (
    <div className="flex">
      <div className="w-full h-full flex justify-center items-center">
        <span className="text-6xl animate-spin duration-1000">
          <WiDaySunny />
        </span>
      </div>
    </div>
  );
}

// function WeatherDashboardLoader({}: Props) {
//   return (
//     <div className="flex flex-col gap-6 p-4">
//       {/* Top Section: Today + Weekly */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Today's Weather */}
//         <div className="flex-1 bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
//           <h2 className="text-2xl font-bold text-gray-800">
//             {"Tashkent"}, {"UZ"}
//           </h2>

//           <WeatherIcon code={"01n" as WeatherCode} size={40} color={"#f140f"} />
//           <p className="text-xl text-gray-700">Cloudy</p>
//           <p className="text-5xl font-bold mt-2">12 °C</p>
//         </div>

//         {/* Weekly Forecast */}
//         <div className="bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] rounded-2xl p-6 flex flex-col items-center text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Weekly Forecast
//           </h2>

//           {/* Horizontal Scroll for mobile */}
//           <div className="flex flex-wrap justify-center items-center gap-4 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//             {weekly?.map((day) => (
//               <div
//                 className="
//                       flex flex-col items-center w-24 p-4 rounded-2xl
//                       bg-[#e0e0e0]

//                       hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]
//                       transition-all duration-300
//                     "
//               >
//                 {/* Day */}
//                 <p className="text-gray-600 font-semibold mb-2">{day}</p>

//                 {/* Icon with circular neumorphic background */}
//                 <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] mb-2">
//                   <WeatherIcon
//                     code={"01n" as WeatherCode}
//                     size={40}
//                     color={"#f140f"}
//                   />
//                 </div>

//                 {/* Temperature */}
//                 <p className="text-gray-800 font-bold text-lg">12 °C</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Additional Details */}
//       <div className="bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 text-gray-700">
//         {/* Details */}
//         <div className="flex items-center gap-3 p-4 rounded-xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-200">
//           <div className="text-gray-600 text-3xl">
//             <WiSunrise />
//           </div>

//           <div className="flex flex-col items-start">
//             <p className="font-semibold text-gray-800">Sunrise</p>
//             <p className="text-gray-700">17:30</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-3 p-4 rounded-xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-200">
//           <div className="text-gray-600 text-3xl">
//             <WiSunrise />
//           </div>

//           <div className="flex flex-col items-start">
//             <p className="font-semibold text-gray-800">Sunrise</p>
//             <p className="text-gray-700">17:30</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-3 p-4 rounded-xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-200">
//           <div className="text-gray-600 text-3xl">
//             <WiSunrise />
//           </div>

//           <div className="flex flex-col items-start">
//             <p className="font-semibold text-gray-800">Sunrise</p>
//             <p className="text-gray-700">17:30</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-3 p-4 rounded-xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-200">
//           <div className="text-gray-600 text-3xl">
//             <WiSunrise />
//           </div>

//           <div className="flex flex-col items-start">
//             <p className="font-semibold text-gray-800">Sunrise</p>
//             <p className="text-gray-700">17:30</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-3 p-4 rounded-xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-200">
//           <div className="text-gray-600 text-3xl">
//             <WiSunrise />
//           </div>

//           <div className="flex flex-col items-start">
//             <p className="font-semibold text-gray-800">Sunrise</p>
//             <p className="text-gray-700">17:30</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-3 p-4 rounded-xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-200">
//           <div className="text-gray-600 text-3xl">
//             <WiSunrise />
//           </div>

//           <div className="flex flex-col items-start">
//             <p className="font-semibold text-gray-800">Sunrise</p>
//             <p className="text-gray-700">17:30</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-3 p-4 rounded-xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-200">
//           <div className="text-gray-600 text-3xl">
//             <WiSunrise />
//           </div>

//           <div className="flex flex-col items-start">
//             <p className="font-semibold text-gray-800">Sunrise</p>
//             <p className="text-gray-700">17:30</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-3 p-4 rounded-xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-200">
//           <div className="text-gray-600 text-3xl">
//             <WiSunrise />
//           </div>

//           <div className="flex flex-col items-start">
//             <p className="font-semibold text-gray-800">Sunrise</p>
//             <p className="text-gray-700">17:30</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WeatherDashboardLoader;
