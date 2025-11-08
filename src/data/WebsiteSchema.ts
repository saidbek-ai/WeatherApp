const BASE_DOMAIN =
  import.meta.env.VITE_APP_SITE_URL || "http://localhost:5173";

export const WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: BASE_DOMAIN,
  name: "WeatherApp",
  description:
    "Real-time global weather forecasts, radar, and severe weather alerts.",
};
