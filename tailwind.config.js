module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/src/assets/FIFA22.png')",
                'footer-texture': "url('/src/assets/gow_1.png')",
            },
            width: {
                '128': '2rem',
            },
            fontFamily: {
                'home-font': "Play",
                'water-brush': "Water Brush"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};