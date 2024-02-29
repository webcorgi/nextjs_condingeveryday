/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/about',
                destination: '/ab',
                permanent: true,
            },
            // Wildcard path matching
            {
                source: '/blog/:slug',
                destination: '/news/:slug',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
