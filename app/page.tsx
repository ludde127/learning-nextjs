import Page from "@/app/[page]/page";
import type {Metadata} from "next";
// pm2 stop all && npm run dev && npm run build && pm2 start all
export const metadata: Metadata = {

    description: 'Developer, writer, and creator.',
    openGraph: {
        title: 'Ludvig Lindholm',
        description: 'Developer.',
        url: 'https://me.llindholm.com',
        siteName: 'Ludvig Lindholm',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    icons: {
        shortcut: '/favicon.ico',
    }
};


export default async function personalSite() {
    return Page({params: {page: "1"}, searchParams: {}})
}