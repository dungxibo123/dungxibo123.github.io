import"./index.DNv99Bg_.js";const a=o=>o.title?"article":o.image?"photo":o.audio?"audio":o.video?"video":o.bookmark_of?"bookmark":o.like_of?"like":o.repost_of?"repost":o.in_reply_to?"reply":"note",r=o=>[...new Set(o.reduce((e,t)=>t.tags?[...e,...t.tags]:e,[""]).slice(1))];export{r as g,a as t};
