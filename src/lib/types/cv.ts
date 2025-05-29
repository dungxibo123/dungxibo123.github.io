export interface ContactInfo {
  icon: string
  text: string
  link?: string
}

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  details?: string[]
}

export interface SkillItem {
  name: string
  icon?: string
}

export interface SkillCategory {
  category: string
  items: (string | SkillItem)[]
}

export interface Reference {
  name: string
  title: string
  institution: string
  contact?: {
    email?: string
    phone?: string
  }
}

export type CVData = {
  name: string
  title: string
  cvFile: string
  contactInfo: ContactInfo[]
  experience: Experience[]
  education: Education[]
  skills: SkillCategory[]
  references: Reference[]
}