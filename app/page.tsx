import Page from "@/app/[page]/page";
import type {metadata} from "./layout";
// pm2 stop all && npm run dev && npm run build && pm2 start all



export default async function personalSite() {
    return Page({params: {page: "1"}, searchParams: {}})
}