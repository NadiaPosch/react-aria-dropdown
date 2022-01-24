module.exports = {
    content: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/pages/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            keyframes: {
                growDown: {
                    from: {
                        transform: "translateY(-10px)",
                        opacity: 0,
                    },

                    to: {
                        transform: "translateY(0)",
                        opacity: "100%",
                    },
                },
            },
            animation: {
                growDown: "growDown 300ms ease-in-out",
            },
        },
    },
    variants: {},
    plugins: [],
};
