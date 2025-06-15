const nextConfig = {
    env: {
        STRIPE_SECRET_KEY: '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',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'otkpdstimtuwgqtr.public.blob.vercel-storage.com',
            },
        ],
    },
};

module.exports = nextConfig;
