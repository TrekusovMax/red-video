import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `${process.env.SERVER_URL}/uploads/:path*` // Proxy to Backend
			}
		]
	},
	images: {
		remotePatterns: [new URL('https://avatars.githubusercontent.com/**')]
	}
}

export default nextConfig
