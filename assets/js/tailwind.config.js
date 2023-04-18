module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#3f51b5',
                secondary: '#2196f3',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};


module.exports = {
    theme: {
        extend: {
            maxWidth: {
                'screen-xl': '1024px',
            },
        },
    },
    variants: {},
    plugins: [],
};