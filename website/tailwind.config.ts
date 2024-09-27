import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./lisa-docs/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lisa-docs/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lisa-docs/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
