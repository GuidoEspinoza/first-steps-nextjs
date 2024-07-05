import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'Página de información',
    keywords: ['About Page', 'Acerca de']
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
}