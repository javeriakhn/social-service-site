// Filename - plugins.ts

//import { PluginOption } from "vite";
// For React Support
import react from "@vitejs/plugin-react";

const plugins = () => {
    return [
        react() // Automatically works with `.jsx` and `.tsx`
    ];
};

export default plugins;
