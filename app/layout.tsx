import React from "react";
import "./global.css";

export const metadata = {
    title: "Index"
}

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