/** @type {import('next').NextConfig} */
const nextConfig = {
    staticPageGenerationTimeout: 200,
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'picsum.photos'
        },
        ]
    }

};

export default nextConfig;
