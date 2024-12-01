import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                'big-stone': {
                    '50': '#f5f7fa',
                    '100': '#eaeef4',
                    '200': '#d0dbe7',
                    '300': '#a7bdd2',
                    '400': '#779bb9',
                    '500': '#567ea1',
                    '600': '#436586',
                    '700': '#37526d',
                    '800': '#31455b',
                    '900': '#253040',
                    '950': '#1a222c',
                },

            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
    darkMode: ['class'],
});
