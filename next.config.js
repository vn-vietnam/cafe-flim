/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"lh3.googleusercontent.com",
			"images.unsplash.com",
			"res.cloudinary.com",
			"image.tmdb.org",
			"img.youtube.com",
		],
	},
};

module.exports = nextConfig;
