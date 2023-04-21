import {Open_Sans} from "next/font/google";

export const cmsServer = "https://llindholm.com/";
//export const cmsServer = "http://127.0.0.1:8000/";
export const fetcher = (url: string, obj?: any) => fetch(url, obj).then((resp) => {
    //console.log(url);
    return resp.json()
});

export const redHatDisplay = Open_Sans({subsets: ["latin"]});

export async function getPage(page: string) {
    return await fetcher(cmsServer + "personal-site/api/page/" + page,
        { next: { revalidate: 60*10 } })
}

export async function getPages() {
    return await fetcher(cmsServer + "personal-site/api/pages", {next: {revalidate: 60 * 10}})
}