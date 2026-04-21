import { defineConfig, loadEnv, type UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { $fetch } from "ofetch";
import type { ApiResponse } from "./types/api";

export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      vue({
        customElement: true,
      }),
    ],

    define: {
      __REMOTE_NAV_DATA__: await $fetch<ApiResponse>(
        `https://hc-county-data-stack.netlify.app/api/v1/content_types/hillsgovhub_wrapper/entries`
      ),
    },

    build: {
      rollupOptions: {
        output: {
          format: "es",
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        },
      },
    },

    base: env.VITE_BASE_URL || "/",
  };
});
