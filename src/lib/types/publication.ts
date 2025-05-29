import type { FFFAuthor } from 'fff-flavored-frontmatter'

// This is the format expected by the publication.svelte component
export type AuthorDisplay = {
    name: string;
    url?: string;
    co?: boolean;
    me?: boolean;
}

// This is for internal use when referencing people from the people config
export type PublicationAuthor = {
    person: string; // Reference to person id in people config
    co?: boolean;   // Co-first author
    me?: boolean;   // Highlight as the main author (you)
}

export type Publication = {
    id: string;
    title: string;
    img?: string;
    authors: AuthorDisplay[];
    pubUrl?: string;
    conference?: string;
    tags?: string[];
    description?: string;
    cate?: string;
    conf?: string | null;
}


