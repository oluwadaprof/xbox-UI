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
            },
            screens: {
                sm: "428px",
                // @media (min-width:640px)

                md: "768px",
                // @media (min-width:768px)

                lg: "1024px",
                // @media (min-width:1024px)

                xl: "1280px",
                // @media (min-width:1280px)

                '2xl': '1536px'
                    // @media (min-width:1536px)

            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};