/** @type {import('next').NextConfig} */ const imagesDomains =
  process?.env?.NEXT_PUBLIC_BASE_API_URL;
const nextConfig = { images: { domains: ['https://land-listing-psi.vercel.app/'] } };
module.exports = nextConfig;
