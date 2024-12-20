
import type { Publication } from '$lib/types/publication'


export const publications: Publication[] = [
  {
    id: "styletransfer01",
    title: "Colloquial Singaporean English Style Transfer with Fine-Grained Explainable Control",
    tags: ["Multi-agent systems", "Large language models", "Prompting"],
    img: "/assets/stylecontrol.png",
    authors: [
      {
        name: "Liang Jinggui",
        url: "https://scholar.google.com/citations?user=fDjmQw8AAAAJ&hl=zh-CN"
      },
      {
        name: "Dung Vo",
        url: "https://dungxibo123.github.io"
      },
      {
        name: "Hai Leong Chieu"
      },
      {
        name: "Kian Ming A. Chai"
      },
      {
        name: "Jing Jiang"
      },
      {
        name: "Lizi Liao",
        url: "https://lzliao.github.io"
      },
    ]
  },

  {
    id: "intellect",
    title: "IntellectNavigator: Enhancing Search Tools with LLMs-Powered Query Instruction",
    tags: ["Workshop", "Idea paper"],
    img: "/assets/intellect.png",
    authors: [
      {
        name: "Dung Vo",
        url: "https://dungxibo123.github.io"
      },
    ]
  }
]
