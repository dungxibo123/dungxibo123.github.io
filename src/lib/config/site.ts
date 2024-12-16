import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/site_avatar.jpeg',
    bio: 'Research Engineer @ Singapore Management University',
    name: 'Vo Tien Dung',
    status: '📦',
		metadata: [
			{
				//text: 'Github',
				link: 'https://github.com/dungxibo123',
				icon: 'github'
			},
			{
				link: 'https://x.com/dungxibo123_',
				icon: 'x'
			},
			{
				link: 'https://facebook.com/dungtv.tv',
				icon: 'facebook'
			},
		]
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  themeColor: '#3D4451',
  title: 'Dung Vo',
}