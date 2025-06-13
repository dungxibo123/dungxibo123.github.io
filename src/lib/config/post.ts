import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  comment: {
    use: ['giscus'],
    giscus: {
      repo: 'dungxibo123/dungxibo123.github.io',
      repoID: 'R_kgDONaumuQ',
      category: 'General',
      categoryID: 'DIC_kwDONaumuc4Crd6w',
      reactionsEnabled: true,
      emitMetadata: false,
      inputPosition: 'bottom',
      theme: 'dark',
      lang: 'en',
      loading: 'lazy',
    },
    style: 'none',
  },
}
