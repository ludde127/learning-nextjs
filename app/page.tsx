import {redirect} from "next/navigation";
import Page from "@/app/[page]/page";


export const metadata = {
    title: "Ludvig Lindholm",
    description: "Ludvig Lindholm är en passionerad webbutvecklare som skapar" +
        " användarvänliga och funktionella webbplatser." +
        " Ta en titt på några av hans projekt, inklusive CLterapi - en häftig webbplats med integrerat" +
        " tidsbokningssystem och betalningssystem med stöd för Swish. På en annan sida Ludvig har skapat; LLindholm, hittar du en mängd olika" +
        " funktioner, inklusive anteckningar och flashcards för inlärning, samt en innovativ funktion som automatiskt" +
        " laddar Tesla-bilar när elpriset är som lägst. Upptäck hur Ludvig strävar efter att förbättra" +
        " användarupplevelsen på LLindholm och fortsätter utveckla plattformar in framtiden.",
}

// pm2 stop all && npm run dev && npm run build && pm2 start all



export default async function personalSite() {
    return Page({params: {page: "1"}, searchParams: {}})
}