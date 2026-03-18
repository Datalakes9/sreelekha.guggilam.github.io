import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import daisyuiThemes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [typography, daisyui],
    daisyui: {
        themes: [
            {
                light: {
                    ...daisyuiThemes["light"],
                    "primary": "oklch(39% 0.31 275.75)",
                    "secondary": "oklch(55% 0.33 342.55)",
                    "accent": "oklch(55% 0.184 183.61)",
                    "neutral": "#1a2030",
                    "neutral-content": "#D7DDE4",
                    "base-100": "#ffffff",
                    "base-200": "#ebebeb",
                    "base-300": "#d4d4d4",
                    "base-content": "#111827",
                },
            },
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
        ],
    },
    // darkMode: ['selector', '[data-theme="synthwave"]']
};
