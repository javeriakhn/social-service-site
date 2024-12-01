// Filename - vite.config.ts

import { defineConfig, loadEnv } from "vite";
import plugins from "./plugins";

export default defineConfig(({ mode }) => {
    const env = 'developement'//loadEnv(mode, process.cwd());

    return {
        plugins: plugins(),
        server: {
            port: 3001, // Runs the app on port 3001
            open: true, // Opens the app in the default browser once started
        },
        define: {
            // Dynamically load environment variables
            "process.env": {
                ...Object.fromEntries(Object.entries(env).map(([key, val]) => [key, JSON.stringify(val)]))
            },
        },
    };
});
