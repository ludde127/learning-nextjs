import React from "react";
import "@/styles/global.css";

export const metadata = {
    title: "Index"
}

export default function RootLayout({ children }: {children: React.ReactNode;}) {
    return (
        <html lang="en">
        <body>

        <section>{children}</section>
        </body>
        </html>
    );
}