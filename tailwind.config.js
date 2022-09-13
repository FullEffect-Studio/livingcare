/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/*.{html,ts}'],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: '#1FA9FF',
          'primary-focus': '#0477BF' /* Primary color - focused */,
          'primary-content': '#ffffff' /* Foreground content color to use on primary color */,
          //
          // secondary: '#ef9fbc' /* Secondary color */,
          // 'secondary-focus': '#e8739e' /* Secondary color - focused */,
          // 'secondary-content':
          //   '#ffffff' /* Foreground content color to use on secondary color */,
          //
          // accent: '#BF7104' /* Accent color */,
          // 'accent-focus': '#734300' /* Accent color - focused */,
          // 'accent-content':
          //   '#ffffff' /* Foreground content color to use on accent color */,
          //
          // neutral: '#291334' /* Neutral color */,
          // 'neutral-focus': '#200f29' /* Neutral color - focused */,
          // 'neutral-content':
          //   '#ffffff' /* Foreground content color to use on neutral color */,
          //
          // 'base-100':
          //   '#faf7f5' /* Base color of page, used for blank backgrounds */,
          // 'base-200': '#efeae6' /* Base color, a little darker */,
          // 'base-300': '#cbc5c3' /* Base color, even moreb darker */,
          // 'base-content':
          //   '#291334' /* Foreground content color to use on base color */,
          //
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
