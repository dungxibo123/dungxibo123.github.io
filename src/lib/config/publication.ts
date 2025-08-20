import type { Publication } from '$lib/types/publication'
import { people } from './people'

// Helper function to transform our internal author references to the format expected by components
const createAuthorEntry = (personId: string, options?: { co?: boolean; me?: boolean }) => {
  const person = people[personId];
  return {
    name: person.name,
    url: person.url,
    ...(options || {})
  };
};

export const publications: Publication[] = [
  {
    id: "styletransfer01",
    title: "Colloquial Singaporean English Style Transfer with Fine-Grained Explainable Control",
    tags: ["Multi-agent systems", "Large language models", "Prompting"],
    img: "/assets/stylecontrol.png",
    cate: "Conference",
    conf: "ACL 2025 Main",
    authors: [
      createAuthorEntry('liangJinggui'),
      createAuthorEntry('dungvo', { me: true }),
      createAuthorEntry('yapHongXian'),
      createAuthorEntry('haiLeongChieu'),
      createAuthorEntry('kianMingChai'),
      createAuthorEntry('jingJiang'),
      createAuthorEntry('liziLiao')
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
      createAuthorEntry('dungvo', { me: true })
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
      createAuthorEntry('dungvo', { me: true }),
      createAuthorEntry('tungLe'),
      createAuthorEntry('huyTienNguyen')
    ]
  },
  {
    id: "intentionframe",
    title: "IntentionFrame: A Semi-Structured Framework for Fine-Grained Conversational Intention Understanding",
    tags: ["Data", "Semi-supervised learning"],
    img: "/assets/convsint.png",
    cate: "Conference",
    conf: "EMNLP 2025",
    authors: [
      createAuthorEntry('liangJinggui'),
      createAuthorEntry('dungvo', { me: true }),
      createAuthorEntry('liziLiao')
    ]
  }
]
