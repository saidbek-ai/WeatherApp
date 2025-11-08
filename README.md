# 🌦️ Weather App — React + TypeScript + TailwindCSS + OpenWeatherMap

A modern and responsive weather forecast application built with **React (TypeScript)** and **Tailwind CSS**, integrating **OpenWeatherMap API** for real-time and weekly weather data.  
It allows users to **find weather by city name** or **automatically detect their current location** using the browser’s geolocation API.

---

## 🚀 Features

- ✅ **Find Weather by City Name** — Search any global city and view real-time weather conditions.
- ✅ **Find Weather by Geolocation** — Automatically detect user location using the browser’s geolocation API.
- ✅ **5-Day Forecast** — Displays weather prediction for the next 5 days after the current date.
- ✅ **Responsive UI** — Built with TailwindCSS for smooth responsiveness across devices.
- ✅ **Temperature, Humidity, Wind, Description** — All key weather metrics displayed neatly.
- ✅ **Loading Skeletons** — (Optional) while data is fetched.
- ✅ **Type Safety** — Fully typed components and API responses using TypeScript.

---

## 🧰 Tech Stack

| Layer           | Technology                                        |
| --------------- | ------------------------------------------------- |
| **Frontend**    | React.js (with Vite)                              |
| **Language**    | TypeScript                                        |
| **Styling**     | Tailwind CSS                                      |
| **API**         | OpenWeatherMap (Current Weather + 5 Day Forecast) |
| **Geolocation** | HTML5 Geolocation API                             |

---

## 🔑 API Setup (OpenWeatherMap)

1. Create an account at [https://openweathermap.org/api](https://openweathermap.org/api)
2. Go to your **Dashboard → API Keys**
3. Copy your API key and place it in a `.env` file at the root:

```bash
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the app

```bash
npm run dev
```

### 4️⃣ Build for production

```bash
npm run build
```

---

## 🧠 Environment Variables

| Variable                   | Description                 |
| -------------------------- | --------------------------- |
| `VITE_OPENWEATHER_API_KEY` | Your OpenWeatherMap API Key |

---

## 🌍 API Endpoints Used

### Current Weather by City Name

```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units={unit}
```

### Current Weather by Coordinates

```
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units={unit}
```

### 5-Day Forecast

```
https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units={nit}
```

---

## 🎨 UI Example

- Displays **current weather** with icon, temperature, city, and date.
- Shows **forecast cards** for the next 5 days.

---

---

## 🧠 Future Improvements

- 🌅 Dynamic background based on weather condition
- 🧭 Caching for offline use (PWA)
- 🗺️ Interactive weather map integration
- 📱 Multilanguage ui

---

## 👨‍💻 Author

**Saidbek Khudayberdiev**  
💻 MERN / React Developer  
🌐 [LinkedIn](https://www.linkedin.com/in/saidbek-khudayberdiev) • [GitHub](https://github.com/saidbek-ai/) • [Official web app](https://www.saidbek.dev)

---
