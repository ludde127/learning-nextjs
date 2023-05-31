import React from "react";
import "./global.css";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Ludvig Lindholm',
    description: 'Developer, have experience with webdev, application programming, scripting, and much more.',
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
        icon: '/icon.svg',
    },
};

export interface Props {
    children: React.ReactNode | String
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
        <body>

        <section>{children}</section>
        </body>
        </html>
    );
}