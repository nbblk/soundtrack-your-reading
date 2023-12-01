import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flash: {
          "0%": {
            "background-color": "#FFF2",
            "box-shadow": "32px 0 #FFF2, -32px 0 #FFF",
          },
          "50%": {
            "background-color": "#FFF",
            "box-shadow": "32px 0 #FFF2, -32px 0 #FFF2",
          },
          "100%": {
            "background-color": "FFF2",
            "box-shadow": "32px 0 #FFF, -32px 0 #FFF2",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
