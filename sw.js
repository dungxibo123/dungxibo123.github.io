if(!self.define){let e,s={};const r=(r,a)=>(r=new URL(r+".js",a).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const n=e=>r(e,d),b={module:{uri:d},exports:c,require:n};s[d]=Promise.all(a.map((e=>b[e]||n(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/0.BCoI3H2x.css",revision:"3e5af9dd0cd26152c6cd179b3dc7ad61"},{url:"_app/immutable/assets/favicon.DiqaJUa5.avif",revision:"f050e0496f83086f7d74e0dcab87927d"},{url:"_app/immutable/assets/lin_reg.CE1qSDqf.avif",revision:"096bd28484f5680b7da95d3efd901121"},{url:"_app/immutable/assets/urara.CoHjeEFW.avif",revision:"b8391ec64660230725e0d1f758ecc8fe"},{url:"_app/immutable/chunks/entry.Cq4nRFQD.js",revision:"c4f945fabfd9cebfcc2a6247d15dea27"},{url:"_app/immutable/chunks/index.DKy1SXgI.js",revision:"71b8dca8d3f9e5f7d6186c4e73f9e482"},{url:"_app/immutable/chunks/index.DNv99Bg_.js",revision:"4b84861a9e9e33fcd4eb75b27194791b"},{url:"_app/immutable/chunks/post_card.CAPyz42r.js",revision:"5875376f9fd3d1b9c12549a6374ecb30"},{url:"_app/immutable/chunks/post_layout.CPV_uA7P.js",revision:"d5dc4ce39bc92ca5c1684140ebb70465"},{url:"_app/immutable/chunks/posts.BeHndIvW.js",revision:"7444080c9f608076f7c821a00ad48f38"},{url:"_app/immutable/chunks/posts.D9eQNBKO.js",revision:"09b2b7aff16299a96ffbc0ce1fabb9ab"},{url:"_app/immutable/chunks/preload-helper.BQ24v_F8.js",revision:"472c6113b1d8c07d0abf58e2dc75283f"},{url:"_app/immutable/chunks/scheduler.2P8c-m4g.js",revision:"807e8dbecd7be06db1d6b50b978fd25a"},{url:"_app/immutable/chunks/stores.DtrZyJ7W.js",revision:"bf75375afe30ab276796c707f6c51991"},{url:"_app/immutable/entry/app.De9HrojP.js",revision:"a699bed13f8cfd24bc4eeaa3c8f6033e"},{url:"_app/immutable/entry/start.eYdBcba8.js",revision:"6b5b6bfa47cf37a53cfd64d03293ddea"},{url:"_app/immutable/nodes/0.TLfKK3wc.js",revision:"9d51d215ca01cd50148982e01e2a6339"},{url:"_app/immutable/nodes/1.BOWM1d5f.js",revision:"279e6ec5130c79107081ba85b054d409"},{url:"_app/immutable/nodes/2.COjELzD1.js",revision:"17c74d9c850f57501dc246c963441263"},{url:"_app/immutable/nodes/3.zLHrphk3.js",revision:"fba8b74e255c133b2f54689e0537b50d"},{url:"_app/immutable/nodes/4.BncS8P_Q.js",revision:"58c394707933f8d4c24dc48df3d9e794"},{url:"_app/immutable/nodes/5.R-IYEX8-.js",revision:"4462043269c505b8f9039ee3e03ba292"},{url:"_app/immutable/nodes/6.BXFrzuB4.js",revision:"82b244cfe783bd638548bb8d2668cc03"},{url:"_app/immutable/nodes/7.CjUFDj2l.js",revision:"ec9ed77e07d8409789390aad60f535c9"},{url:"assets/any@180.png",revision:"f4f60db532ae6da52da5ede208b59988"},{url:"assets/any@192.png",revision:"5206db97ccfcfb7aa8250cd1ae88ca7b"},{url:"assets/any@512.png",revision:"18a88f7030b0f8485466d553489a55b9"},{url:"assets/maskable@192.png",revision:"6b777c4543f418b595d173d3d6839a26"},{url:"assets/maskable@512.png",revision:"4de74e06031ddc52aa54ff80f1300aa6"},{url:"favicon.png",revision:"137640ce164cb27fe96170080632de13"},{url:"hello-world/urara.webp",revision:"0984329d9559d011846b8360455d1410"},{url:"mathematics/lin_reg.webp",revision:"28aed2a9fb4404bb39a2ffa41526992a"},{url:"server/_app/immutable/assets/_layout.CZD0VBBR.css",revision:"f0c54682d2f31da8a0e4bb6732932c32"},{url:"server/_app/immutable/assets/favicon.DiqaJUa5.avif",revision:"f050e0496f83086f7d74e0dcab87927d"},{url:"server/_app/immutable/assets/lin_reg.CE1qSDqf.avif",revision:"096bd28484f5680b7da95d3efd901121"},{url:"server/_app/immutable/assets/urara.CoHjeEFW.avif",revision:"b8391ec64660230725e0d1f758ecc8fe"},{url:"server/chunks/exports.js",revision:"e920d81e281ea3c66d681d1d6b1ea6aa"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"963cfe0b891755bd1bb5fdb650a90262"},{url:"server/chunks/index.js",revision:"7d516ecf4065d6cd7f1cfd479a26ee95"},{url:"server/chunks/index2.js",revision:"8ebae786535102fbe234640fd4f6ebcc"},{url:"server/chunks/internal.js",revision:"1ce269068e118ac60812da1d818c4fed"},{url:"server/chunks/post_card.js",revision:"be203f4bb42c77024eb4dcbe2b1265ca"},{url:"server/chunks/posts.js",revision:"953e138dfefde9e023741a2bbf9f05e2"},{url:"server/chunks/prod-ssr.js",revision:"61cd30ecbbcd623b1d3535cb80266f5a"},{url:"server/chunks/site.js",revision:"a3cfdae0ac610469f291571e70509559"},{url:"server/chunks/ssr.js",revision:"47d1ebcbf5650d714c61c4e1161270ee"},{url:"server/chunks/stores.js",revision:"3f2ffa1498dcccbaaa2b35aa23b94315"},{url:"server/chunks/title.js",revision:"f3b365fb561c049ddda63ed66d1c1e02"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"ad6cdc1cbbf01bf5cf54700e9ba8f609"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"9683781fe90d1aca90c3ba085f82d4d2"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"a55751f0342c61e027c4401460e67ccc"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"48ac44a8bfeb2b172771a8410ce00d7a"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"5c9faeb7155f3e1dfda2753f8c54df83"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"2696d65cf912a1c762ac6c693cb1842c"},{url:"server/entries/fallbacks/error.svelte.js",revision:"872888901dc3cf741c337a764cc7f3bd"},{url:"server/entries/pages/_layout.svelte.js",revision:"bf067d739d50153415e4498b6ac9d2a3"},{url:"server/entries/pages/_layout.ts.js",revision:"c16450e3e496b092d739d84611674b71"},{url:"server/entries/pages/_page.svelte.js",revision:"085882541f25b5bc75caa85340cbfe97"},{url:"server/entries/pages/about-me/_page.md.js",revision:"ab28d9df6bef95228f154278e476af7e"},{url:"server/entries/pages/machine-learning/_page.md.js",revision:"566b6bf1fb3853aba9bc8ac334e02e09"},{url:"server/entries/pages/machine-learning/linear_regression_with_statistical_view/_page.md.js",revision:"53fb189fb03f8ab08437c8bbb366bc3d"},{url:"server/entries/pages/mathematics/_page.svelte.md.js",revision:"6aa87738b2b5c4fd55f055e1209d0d17"},{url:"server/entries/pages/mathematics/optimization/_page.md.js",revision:"d1ef7c69c3a05f4edb92d01543761a5c"},{url:"server/index.js",revision:"62dfafb09409741d2cf4a51bc6f3b054"},{url:"server/internal.js",revision:"3981fc423a6eed9c7b6608a12de568ea"},{url:"server/manifest-full.js",revision:"f07f2fc8690bf7994e566596362d9dc2"},{url:"server/nodes/0.js",revision:"94d35197cee576736e350e70a1f3b59f"},{url:"server/nodes/1.js",revision:"b9fb9548d69b97b47bf21126f1a9af89"},{url:"server/nodes/2.js",revision:"7ac808dd59dee58b6ed718a56c351662"},{url:"server/nodes/3.js",revision:"effbb4abe33b31915ff2d78b3488cee5"},{url:"server/nodes/4.js",revision:"149a7c44a52101e9b9aaca2d3a12d86c"},{url:"server/nodes/5.js",revision:"837e84927f204d781babeedb850232eb"},{url:"server/nodes/6.js",revision:"c2cc8f57b408fd6ecb7286c7f5a2f2ef"},{url:"server/nodes/7.js",revision:"e22e3d1ce8bb198a6783d7a2d6f24681"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
