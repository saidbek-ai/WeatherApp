import { Helmet } from "react-helmet-async";
import { WebsiteSchema } from "../data/WebsiteSchema";

interface Props {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const AppHeadSEO: React.FC<Props> = ({ title, description, url, imageUrl }) => {
  const defaultTitle = "Global Real-Time Weather Forecast & Radar | WeatherApp";
  const defaultDescription =
    "Get fast, accurate weather conditions, 7-day forecasts, and live rain radar for any location worldwide.";
  const BASE_DOMAIN =
    import.meta.env.VITE_APP_SITE_URL || "http://localhost:5173";
  const defaultImageUrl = `${BASE_DOMAIN}/assets/social_preview.webp`;

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={url || BASE_DOMAIN} />

      {/* Open Graph */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:url" content={url || BASE_DOMAIN} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl || defaultImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="WeatherApp" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={imageUrl || defaultImageUrl} />

      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ff1144" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WebsiteSchema) }}
      />
    </Helmet>
  );
};

export default AppHeadSEO;
