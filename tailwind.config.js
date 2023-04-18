/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [],
}


// module.exports = {
//     theme: {
//         screens: {
//             '2xl': { 'max': '1535px' },
//             // => @media (max-width: 1535px) { ... }

//             'xl': { 'max': '1279px' },
//             // => @media (max-width: 1279px) { ... }

//             'lg': { 'max': '1023px' },
//             // => @media (max-width: 1023px) { ... }

//             'md': { 'max': '767px' },
//             // => @media (max-width: 767px) { ... }

//             'sm': { 'max': '639px' },
//             // => @media (max-width: 639px) { ... }
//         }
//     }
// }

module.exports = {
    theme: {
        screens: {
            'sm-max': { 'max': '639px' },
            'md-max': { 'max': '767px' },
            'lg-max': { 'max': '1023px' },
            'xl-max': { 'max': '1279px' },
            '2xl-max': { 'max': '1535px' },
        },
    },
    variants: {},
    plugins: [],
}