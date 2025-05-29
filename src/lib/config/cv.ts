import type { CVData } from '$lib/types/cv'

export const cvData: CVData = {
  name: 'Vo Tien Dung',
  title: 'Machine Learning Engineer & Researcher',
  cvFile: '/assets/VoTienDung_CV.pdf', // Path to your CV file for download
  contactInfo: [
    { 
      icon: 'mail', 
      text: 'dung.vo@wayne.edu',
      link: 'mailto:dung.vo@wayne.edu'
    },
    { 
      icon: 'internetexplorer', 
      text: 'dungxibo123.github.io',
      link: 'https://dungxibo123.github.io'
    },
    { 
      icon: 'googlemaps', 
      text: 'Vietnam'
    }
  ],
  experience: [
    {
      title: 'PhD Student',
      company: 'Wayne State University',
      location: 'Detroit, MI, USA',
      period: '2025 - Present',
      responsibilities: [
        'Researching on Bi-level optimization problems in various settings',
        'Advisor: Professor Prashant Khanduri',
        'Co-advisor: Dr. Tran Ba Dat'
      ]
    },
    {
      title: 'Research Engineer',
      company: 'Singapore Management University',
      location: 'Singapore',
      period: 'Apr 2024 - Jan 2025',
      responsibilities: [
        'Conducted research on multi-agent conversational systems',
        'Developed and implemented advanced NLP models',
        'Published research papers in top-tier conferences'
      ]
    },
    {
      title: 'Data Scientist',
      company: 'Be Group JSC',
      location: 'Vietnam',
      period: 'Nov 2022 - Mar 2024',
      responsibilities: [
        'Developed machine learning models for ride-hailing optimization',
        'Implemented data pipelines for real-time analytics',
        'Collaborated with cross-functional teams to improve user experience'
      ]
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Moreh',
      location: 'Vietnam',
      period: 'July 2022 - Nov 2022',
      responsibilities: [
        'Designed and implemented machine learning algorithms',
        'Optimized model performance for production environments',
        'Contributed to the development of ML infrastructure'
      ]
    },
    {
      title: 'AI Resident',
      company: 'FPT Software',
      location: 'Vietnam',
      period: 'May 2021 - June 2022',
      responsibilities: [
        'Researched Neural Differential Equations and Graph Neural Networks',
        'Collaborated with senior researchers on cutting-edge AI projects',
        'Presented research findings at internal conferences'
      ]
    }
  ],
  education: [
    {
      degree: 'PhD in Computer Science',
      institution: 'Wayne State University',
      location: 'Detroit, MI, USA',
      period: '2025 - Present',
      details: [
        'Research focus: Bi-level optimization problems in various settings',
        'Advisor: Professor Prashant Khanduri'
      ]
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Ho Chi Minh University of Science',
      location: 'Ho Chi Minh, Vietnam',
      period: '2019 - 2024',
      details: [
        'Graduated with High Honors',
        'Specialized in Artificial Intelligence and Machine Learning'
      ]
    }
  ],
  skills: [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', icon: 'python' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'C++', icon: 'cplusplus' },
        { name: 'Java', icon: 'htmx' }
      ]
    },
    {
      category: 'Machine Learning',
      items: [
        { name: 'PyTorch', icon: 'pytorch' },
        { name: 'TensorFlow', icon: 'tensorflow' },
        { name: 'Scikit-learn', icon: 'scikitlearn' },
        { name: 'Keras', icon: 'keras' },
        'Hugging Face'
      ]
    },
    {
      category: 'Data Science',
      items: [
        { name: 'Pandas', icon: 'pandas' },
        { name: 'NumPy', icon: 'numpy' },
        { name: 'SQL', icon: 'mysql' },
        { name: 'Matplotlib', icon: 'plotly' },
        'Seaborn'
      ]
    },
    {
      category: 'MLOps',
      items: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Kubernetes', icon: 'kubernetes' },
        'CI/CD',
        { name: 'AWS', icon: 'amazon' },
        { name: 'GCP', icon: 'googlecloud' }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: 'git' },
        { name: 'Neovim', icon: 'neovim' },
        { name: 'Kafka', icon: 'apachekafka' },
        { name: 'Redis', icon: 'redis' },
        { name: 'Neo4j', icon: 'neo4j'},
        { name: 'Hugging Face', icon: 'huggingface' },
        { name: 'LaTeX', icon: 'latex' },
        { name: 'Jupyter', icon: 'jupyter' },
        { name: 'Arch Linux', icon: 'archlinux'}
      ]
    },
    {
      category: 'Research Areas',
      items: ['Optimization', 'Machine Learning', 'Large Models']
    },
    {
      category: 'Languages',
      items: ['English (Fluent)', 'Vietnamese (Native)']
    }
  ],
  references: [
    {
      name: 'Prof. Prashant Khanduri',
      title: 'Assistant Professor',
      institution: 'Wayne State University',
      contact: {
        email: 'prashant.khanduri@wayne.edu',
        phone: '+1 (313) 577 6936'
      }
    },
    {
      name: 'Mr. Vuong Phuc Thanh',
      title: 'Lead Data Scientist',
      institution: 'Masan Group',
      contact: {
        email: 'phucthanhvuong@gmail.com',
      }
    }
  ]
}