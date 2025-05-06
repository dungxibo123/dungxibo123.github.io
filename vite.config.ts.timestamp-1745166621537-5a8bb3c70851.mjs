// vite.config.ts
import { sveltekit } from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/@sveltejs+kit@2.5.0_@sveltejs+vite-plugin-svelte@3.0.2_svelte@4.2.10_vite@5.1.1_@types+node@2_koq3ersix6ahwrpqcmv22k3req/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { SvelteKitPWA as pwa } from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/@vite-pwa+sveltekit@0.1.3_@sveltejs+kit@2.5.0_@sveltejs+vite-plugin-svelte@3.0.2_svelte@4.2.1_ztlmhh7lgxbgom3xh2gfgxna3a/node_modules/@vite-pwa/sveltekit/dist/index.mjs";
import LightningCSS from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/postcss-lightningcss@0.7.0_postcss@8.4.35/node_modules/postcss-lightningcss/src/index.js";
import TailwindCSS from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/tailwindcss@3.4.1/node_modules/tailwindcss/lib/index.js";
import unoCSS from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/unocss@0.58.5_postcss@8.4.35_rollup@2.79.1_vite@5.1.1_@types+node@20.11.17_lightningcss@1.23.0_terser@5.27.0_/node_modules/unocss/dist/vite.mjs";
import { defineConfig as defineConfig2 } from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/vite@5.1.1_@types+node@20.11.17_lightningcss@1.23.0_terser@5.27.0/node_modules/vite/dist/node/index.js";
import { imagetools } from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/vite-imagetools@4.0.19_rollup@2.79.1/node_modules/vite-imagetools/dist/index.mjs";

// tailwind.config.ts
import typography from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/@tailwindcss+typography@0.5.10_tailwindcss@3.4.1/node_modules/@tailwindcss/typography/src/index.js";
import daisyui from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/daisyui@4.6.2_postcss@8.4.35/node_modules/daisyui/src/index.js";

// src/lib/config/general.ts
var theme = [
  {
    name: "cmyk",
    text: "\u{1F5A8} Light"
  },
  {
    name: "dracula",
    text: "\u{1F9DB} Dark"
  },
  //  {
  //    name: 'valentine',
  //    text: '🌸 Valentine',
  //  },
  //  {
  //    name: 'aqua',
  //    text: '💦 Aqua',
  //  },
  //  {
  //    name: 'synthwave',
  //    text: '🌃 Synthwave',
  //  },
  //  {
  //    name: 'night',
  //    text: '🌃 Night',
  //  },
  {
    name: "lofi",
    text: "\u{1F3B6} Lo-Fi"
  },
  {
    name: "retro",
    text: "\u{1F307} Retro"
  }
];

// tailwind.config.ts
var tailwind_config_default = {
  content: ["./src/**/*.{html,md,js,svelte,ts}"],
  daisyui: { themes: theme.map(({ name }) => name) },
  plugins: [typography, daisyui],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
      typography: {
        DEFAULT: {
          css: {
            'ul > li:has(input[type="checkbox"])': {
              listStyle: "none"
            },
            'ul > li:has(input[type="checkbox"]) ul li': {
              paddingLeft: 30
            },
            'ul:has(li):has(input[type="checkbox"])': {
              padding: 0
            }
          }
        }
      }
    }
  }
};

// uno.config.ts
import extractorSvelte from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/@unocss+extractor-svelte@0.55.7/node_modules/@unocss/extractor-svelte/dist/index.mjs";
import { defineConfig, presetIcons, presetTagify } from "file:///Users/dungvo/dungxibo123_blog/node_modules/.pnpm/unocss@0.58.5_postcss@8.4.35_rollup@2.79.1_vite@5.1.1_@types+node@20.11.17_lightningcss@1.23.0_terser@5.27.0_/node_modules/unocss/dist/index.mjs";
var uno_config_default = defineConfig({
  content: { pipeline: { include: [/\.svelte$/, /\.md?$/, /\.ts$/] } },
  extractors: [extractorSvelte],
  presets: [
    presetTagify({
      extraProperties: (matched) => matched.startsWith("i-") ? { display: "inline-block" } : {}
    }),
    presetIcons({ scale: 1.5 })
  ]
});

// vite.config.ts
var vite_config_default = defineConfig2({
  css: {
    postcss: {
      plugins: [TailwindCSS(tailwind_config_default), LightningCSS()]
    }
  },
  envPrefix: "URARA_",
  plugins: [
    unoCSS(uno_config_default),
    imagetools(),
    sveltekit(),
    pwa({
      manifest: false,
      registerType: "autoUpdate",
      scope: "/",
      workbox: {
        globIgnores: ["**/sw*", "**/workbox-*"],
        globPatterns: ["posts.json", "**/*.{js,css,html,svg,ico,png,webp,avif}"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidGFpbHdpbmQuY29uZmlnLnRzIiwgInNyYy9saWIvY29uZmlnL2dlbmVyYWwudHMiLCAidW5vLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9kdW5ndm8vZHVuZ3hpYm8xMjNfYmxvZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2R1bmd2by9kdW5neGlibzEyM19ibG9nL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kdW5ndm8vZHVuZ3hpYm8xMjNfYmxvZy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSdcbmltcG9ydCB7IFN2ZWx0ZUtpdFBXQSBhcyBwd2EgfSBmcm9tICdAdml0ZS1wd2Evc3ZlbHRla2l0J1xuLy8gQHRzLWV4cGVjdC1lcnJvciB0cyg3MDE2KVxuaW1wb3J0IExpZ2h0bmluZ0NTUyBmcm9tICdwb3N0Y3NzLWxpZ2h0bmluZ2NzcydcbmltcG9ydCBUYWlsd2luZENTUyBmcm9tICd0YWlsd2luZGNzcydcbmltcG9ydCB1bm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gJ3ZpdGUtaW1hZ2V0b29scydcblxuaW1wb3J0IHRhaWx3aW5kQ29uZmlnIGZyb20gJy4vdGFpbHdpbmQuY29uZmlnJ1xuaW1wb3J0IHVub0NvbmZpZyBmcm9tICcuL3Vuby5jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFtUYWlsd2luZENTUyh0YWlsd2luZENvbmZpZyksIExpZ2h0bmluZ0NTUygpXSxcbiAgICB9LFxuICB9LFxuICBlbnZQcmVmaXg6ICdVUkFSQV8nLFxuICBwbHVnaW5zOiBbXG4gICAgdW5vQ1NTKHVub0NvbmZpZyksXG4gICAgaW1hZ2V0b29scygpLFxuICAgIHN2ZWx0ZWtpdCgpLFxuICAgIHB3YSh7XG4gICAgICBtYW5pZmVzdDogZmFsc2UsXG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIHNjb3BlOiAnLycsXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIGdsb2JJZ25vcmVzOiBbJyoqL3N3KicsICcqKi93b3JrYm94LSonXSxcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJ3Bvc3RzLmpzb24nLCAnKiovKi57anMsY3NzLGh0bWwsc3ZnLGljbyxwbmcsd2VicCxhdmlmfSddLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9kdW5ndm8vZHVuZ3hpYm8xMjNfYmxvZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2R1bmd2by9kdW5neGlibzEyM19ibG9nL3RhaWx3aW5kLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZHVuZ3ZvL2R1bmd4aWJvMTIzX2Jsb2cvdGFpbHdpbmQuY29uZmlnLnRzXCI7aW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICd0YWlsd2luZGNzcydcblxuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnQHRhaWx3aW5kY3NzL3R5cG9ncmFwaHknXG5pbXBvcnQgZGFpc3l1aSBmcm9tICdkYWlzeXVpJ1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vc3JjL2xpYi9jb25maWcvZ2VuZXJhbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250ZW50OiBbJy4vc3JjLyoqLyoue2h0bWwsbWQsanMsc3ZlbHRlLHRzfSddLFxuICBkYWlzeXVpOiB7IHRoZW1lczogdGhlbWUubWFwKCh7IG5hbWUgfSkgPT4gbmFtZSkgfSxcbiAgcGx1Z2luczogW3R5cG9ncmFwaHksIGRhaXN5dWldLFxuICB0aGVtZToge1xuICAgIGV4dGVuZDoge1xuICAgICAga2V5ZnJhbWVzOiB7XG4gICAgICAgIHR5cGluZzoge1xuICAgICAgICAgIFwiMCVcIjoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMCVcIixcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFwiaGlkZGVuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiMTAwJVwiOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJsaW5rOiB7XG4gICAgICAgICAgXCI1MCVcIjoge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCIxMDAlXCI6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIndoaXRlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgdHlwaW5nOiBcInR5cGluZyAycyBzdGVwcygyMCkgaW5maW5pdGUgYWx0ZXJuYXRlLCBibGluayAuN3MgaW5maW5pdGVcIlxuICAgICAgfSxcbiAgICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgREVGQVVMVDoge1xuICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgJ3VsID4gbGk6aGFzKGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSknOiB7XG4gICAgICAgICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd1bCA+IGxpOmhhcyhpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0pIHVsIGxpJzoge1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMzAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3VsOmhhcyhsaSk6aGFzKGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSknOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59IHNhdGlzZmllcyBDb25maWdcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2R1bmd2by9kdW5neGlibzEyM19ibG9nL3NyYy9saWIvY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZHVuZ3ZvL2R1bmd4aWJvMTIzX2Jsb2cvc3JjL2xpYi9jb25maWcvZ2VuZXJhbC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZHVuZ3ZvL2R1bmd4aWJvMTIzX2Jsb2cvc3JjL2xpYi9jb25maWcvZ2VuZXJhbC50c1wiO2ltcG9ydCB0eXBlIHsgRGF0ZUNvbmZpZywgRmVlZENvbmZpZywgRm9vdGVyQ29uZmlnLCBIZWFkQ29uZmlnLCBIZWFkZXJDb25maWcsIFRoZW1lQ29uZmlnIH0gZnJvbSAnJGxpYi90eXBlcy9nZW5lcmFsJ1xuXG5leHBvcnQgY29uc3QgdGhlbWU6IFRoZW1lQ29uZmlnID0gW1xuICB7XG4gICAgbmFtZTogJ2NteWsnLFxuICAgIHRleHQ6ICdcdUQ4M0RcdUREQTggTGlnaHQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2RyYWN1bGEnLFxuICAgIHRleHQ6ICdcdUQ4M0VcdUREREIgRGFyaycsXG4gIH0sXG4vLyAge1xuLy8gICAgbmFtZTogJ3ZhbGVudGluZScsXG4vLyAgICB0ZXh0OiAnXHVEODNDXHVERjM4IFZhbGVudGluZScsXG4vLyAgfSxcbi8vICB7XG4vLyAgICBuYW1lOiAnYXF1YScsXG4vLyAgICB0ZXh0OiAnXHVEODNEXHVEQ0E2IEFxdWEnLFxuLy8gIH0sXG4vLyAge1xuLy8gICAgbmFtZTogJ3N5bnRod2F2ZScsXG4vLyAgICB0ZXh0OiAnXHVEODNDXHVERjAzIFN5bnRod2F2ZScsXG4vLyAgfSxcbi8vICB7XG4vLyAgICBuYW1lOiAnbmlnaHQnLFxuLy8gICAgdGV4dDogJ1x1RDgzQ1x1REYwMyBOaWdodCcsXG4vLyAgfSxcbiAge1xuICAgIG5hbWU6ICdsb2ZpJyxcbiAgICB0ZXh0OiAnXHVEODNDXHVERkI2IExvLUZpJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdyZXRybycsXG4gICAgdGV4dDogJ1x1RDgzQ1x1REYwNyBSZXRybycsXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBoZWFkOiBIZWFkQ29uZmlnID0ge31cblxuZXhwb3J0IGNvbnN0IGhlYWRlcjogSGVhZGVyQ29uZmlnID0ge1xuICBuYXY6IFtcbiAgICB7XG4gICAgICBsaW5rOiAnL2Fib3V0LW1lJyxcbiAgICAgIHRleHQ6ICdBYm91dCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICcvcHVibGljYXRpb25zJyxcbiAgICAgIHRleHQ6ICdQdWJsaWNhdGlvbnMnXG4gICAgfSxcbiAgXSxcbiAgc2VhcmNoOiB7XG4gICAgY29sb3JzOiB0cnVlLFxuICAgIHByb3ZpZGVyOiAnZ29vZ2xlJ1xuXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZvb3RlcjogRm9vdGVyQ29uZmlnID0ge1xuICBuYXY6IFtcbiAgICB7XG4gICAgICBsaW5rOiAnL2F0b20ueG1sJyxcbiAgICAgIHRleHQ6ICdGZWVkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICcvc2l0ZW1hcC54bWwnLFxuICAgICAgdGV4dDogJ1NpdGVtYXAnLFxuICAgIH0sXG4gIF0sXG59XG5cbmV4cG9ydCBjb25zdCBkYXRlOiBEYXRlQ29uZmlnID0ge1xuICBsb2NhbGVzOiAnZW4tVVMnLFxuICBvcHRpb25zOiB7XG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgbW9udGg6ICdzaG9ydCcsXG4gICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIHllYXI6ICcyLWRpZ2l0JyxcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGZlZWQ6IEZlZWRDb25maWcgPSB7fVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZHVuZ3ZvL2R1bmd4aWJvMTIzX2Jsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9kdW5ndm8vZHVuZ3hpYm8xMjNfYmxvZy91bm8uY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kdW5ndm8vZHVuZ3hpYm8xMjNfYmxvZy91bm8uY29uZmlnLnRzXCI7aW1wb3J0IGV4dHJhY3RvclN2ZWx0ZSBmcm9tICdAdW5vY3NzL2V4dHJhY3Rvci1zdmVsdGUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIHByZXNldEljb25zLCBwcmVzZXRUYWdpZnkgfSBmcm9tICd1bm9jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGNvbnRlbnQ6IHsgcGlwZWxpbmU6IHsgaW5jbHVkZTogWy9cXC5zdmVsdGUkLywgL1xcLm1kPyQvLCAvXFwudHMkL10gfSB9LFxuICBleHRyYWN0b3JzOiBbZXh0cmFjdG9yU3ZlbHRlXSxcbiAgcHJlc2V0czogW1xuICAgIHByZXNldFRhZ2lmeSh7XG4gICAgICBleHRyYVByb3BlcnRpZXM6IChtYXRjaGVkOiBzdHJpbmcpID0+IChtYXRjaGVkLnN0YXJ0c1dpdGgoJ2ktJykgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0gOiB7fSksXG4gICAgfSksXG4gICAgcHJlc2V0SWNvbnMoeyBzY2FsZTogMS41IH0pLFxuICBdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFEsU0FBUyxpQkFBaUI7QUFDdFMsU0FBUyxnQkFBZ0IsV0FBVztBQUVwQyxPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFlBQVk7QUFDbkIsU0FBUyxnQkFBQUEscUJBQW9CO0FBQzdCLFNBQVMsa0JBQWtCOzs7QUNMM0IsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhOzs7QUNEYixJQUFNLFFBQXFCO0FBQUEsRUFDaEM7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBaUJBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0Y7OztBRDVCQSxJQUFPLDBCQUFRO0FBQUEsRUFDYixTQUFTLENBQUMsbUNBQW1DO0FBQUEsRUFDN0MsU0FBUyxFQUFFLFFBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sSUFBSSxFQUFFO0FBQUEsRUFDakQsU0FBUyxDQUFDLFlBQVksT0FBTztBQUFBLEVBQzdCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLFdBQVc7QUFBQSxRQUNULFFBQVE7QUFBQSxVQUNOLE1BQU07QUFBQSxZQUNKLE9BQU87QUFBQSxZQUNQLFlBQVk7QUFBQSxVQUNkO0FBQUEsVUFDQSxRQUFRO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE9BQU87QUFBQSxVQUNMLE9BQU87QUFBQSxZQUNMLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQSxRQUFRO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxRQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0EsWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFlBQ0gsdUNBQXVDO0FBQUEsY0FDckMsV0FBVztBQUFBLFlBQ2I7QUFBQSxZQUNBLDZDQUE2QztBQUFBLGNBQzNDLGFBQWE7QUFBQSxZQUNmO0FBQUEsWUFDQSwwQ0FBMEM7QUFBQSxjQUN4QyxTQUFTO0FBQUEsWUFDWDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBRXBEMFEsT0FBTyxxQkFBcUI7QUFDdFMsU0FBUyxjQUFjLGFBQWEsb0JBQW9CO0FBRXhELElBQU8scUJBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLGFBQWEsVUFBVSxPQUFPLEVBQUUsRUFBRTtBQUFBLEVBQ25FLFlBQVksQ0FBQyxlQUFlO0FBQUEsRUFDNUIsU0FBUztBQUFBLElBQ1AsYUFBYTtBQUFBLE1BQ1gsaUJBQWlCLENBQUMsWUFBcUIsUUFBUSxXQUFXLElBQUksSUFBSSxFQUFFLFNBQVMsZUFBZSxJQUFJLENBQUM7QUFBQSxJQUNuRyxDQUFDO0FBQUEsSUFDRCxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFBQSxFQUM1QjtBQUNGLENBQUM7OztBSEFELElBQU8sc0JBQVFDLGNBQWE7QUFBQSxFQUMxQixLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsWUFBWSx1QkFBYyxHQUFHLGFBQWEsQ0FBQztBQUFBLElBQ3ZEO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLElBQ1AsT0FBTyxrQkFBUztBQUFBLElBQ2hCLFdBQVc7QUFBQSxJQUNYLFVBQVU7QUFBQSxJQUNWLElBQUk7QUFBQSxNQUNGLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxNQUNkLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGFBQWEsQ0FBQyxVQUFVLGNBQWM7QUFBQSxRQUN0QyxjQUFjLENBQUMsY0FBYywwQ0FBMEM7QUFBQSxNQUN6RTtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIl0KfQo=
