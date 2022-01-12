const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://harundogdu-portfolio.vercel.app"
    : "http://localhost:3000";

export { BASE_URL };
