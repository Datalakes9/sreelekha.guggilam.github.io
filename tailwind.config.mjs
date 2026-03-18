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
                    "primary": "#1e3a5f",
                    "primary-content": "#ffffff",
                    "secondary": "#3b5998",
                    "secondary-content": "#ffffff",
                    "accent": "#1d4ed8",
                    "accent-content": "#ffffff",
                    "neutral": "#111827",
                    "neutral-content": "#ffffff",
                    "base-100": "#ffffff",
                    "base-200": "#f0f0f0",
                    "base-300": "#d6d6d6",
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
