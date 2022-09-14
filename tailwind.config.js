/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/*.{html,ts}'],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'display': 'block, hidden'
      }
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#06a9b2",
          "primary-focus": "#05666c",
          'primary-content': '#ffffff',
          accent: '#f29e22',
          'accent-focus': '#734300',
          'accent-content': '#ffffff',
          neutral: '#fff',
          'neutral-focus': '#fff',
          'neutral-content': '#070707',
          'base-100': '#faf7f5',
          'base-200': '#efeae6',
          'base-300': '#cbc5c3',
          'base-content': '#291334'
        },
        lightx: {
          // secondary: '#ef9fbc' /* Secondary color */,
          // 'secondary-focus': '#e8739e' /* Secondary color - focused */,
          // 'secondary-content':
          //   '#ffffff' /* Foreground content color to use on secondary color */,

          // info: '#2094f3' /* Info */,
          // success: '#009485' /* Success */,
          // warning: '#ff9900' /* Warning */,
          // error: '#ff5724' /* Error */,
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
