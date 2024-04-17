/** @type {import('next').NextConfig} */ const imagesDomains =
  process?.env?.NEXT_PUBLIC_BASE_API_URL;
const nextConfig = { images: { domains: ['https://land-listing-psi.vercel.app','land-listing-rb5buy7wm-deepeshs-projects-78006c6a.vercel.app'] } };
module.exports = nextConfig;
