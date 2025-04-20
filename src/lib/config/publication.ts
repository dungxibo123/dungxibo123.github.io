import type { Publication } from '$lib/types/publication'


export const publications: Publication[] = [
  {
    id: "styletransfer01",
    title: "Colloquial Singaporean English Style Transfer with Fine-Grained Explainable Control",
    tags: ["Multi-agent systems", "Large language models", "Prompting"],
    img: "/assets/stylecontrol.png",
    cate: "Preprint",
    conf: null,
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
    cate: "Workshop",
    conf: 'WWW 2024',
    authors: [
      {
        name: "Dung Vo",
        url: "https://dungxibo123.github.io"
      },
    ]
  },
  {
    id: "vivqa",
		title: "From Vietnamese to English: Advancing VQA with Cross-Linguistic Mapping",
    tags: ["Embedding space mapping", "NLP"],
    img: "/assets/vivqa.png",
    cate: "Workshop",
    conf: "SCIDOCA 2024",
    authors: [
      {
        name: "Dung Vo",
        url: "https://dungxibo123.github.io"
      },
      {
        name: "Tung Le",
        url: "https://www.linkedin.com/in/tung-le-35228473/"
      },
      {
        name: "Huy Tien Nguyen",
        url: "https://scholar.google.com/citations?user=WBCZ2DcAAAAJ&hl=en&oi=ao"
      },
    ]
  },
  {
    id: "convsint",
		title: "IntentionFrame: A Semi-Structured Framework for Fine-Grained Conversational Intention Understanding",
    tags: ["Data", "Semi-supervised learning"],
    img: "/assets/convsint.png",
    cate: "Preprint",
    conf: null,
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
        name: "Lizi Liao",
        url: "https://lzliao.github.io"
      }
    ]
  }
]
