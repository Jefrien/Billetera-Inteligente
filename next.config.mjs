import analyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        nextScriptWorkers: true,
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        }
    },
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        );

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                resourceQuery: {not: [/url/]},
                use: ['@svgr/webpack'],
            },
        );
        fileLoaderRule.exclude = /\.svg$/i;
        return config;
    },
};

const withBundleAnalyzer = analyzer({
    enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig);
