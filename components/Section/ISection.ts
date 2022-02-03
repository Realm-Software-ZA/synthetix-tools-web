export const sections = ["All", "Tools", "Bridges", "Guides", "News"] as const;
export type SectionType = typeof sections[number];
