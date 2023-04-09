/*
*
* [{"model": "personal_site_content.page", "pk": 1, "fields": {"page_title": "Index"}},
*  {"model": "personal_site_content.page", "pk": 2, "fields": {"page_title": "Andra sidan!"}}]
*
* */

import {cmsServer, fetcher} from "@/app/utils";

type Page = {
    model: string,
    pk: bigint,
    fields: {
        page_title: string,
        intro: string
    }

}


const NavBar  = async () => {
    let pages: Page[] = await fetcher(cmsServer + "personal-site/api/pages", {next: {revalidate: 60 * 60}});
    return (
        <div className="grid text-white w-fit sm:rounded-xl sm:border-2">
            <ul>
                <li className="block p-1 rounded-lg my-2">
                    <h2>Andra Sidor</h2>
                </li>
                {pages.map((page: Page) => {
                    return (<li key={page.pk.toString()}>
                        <a href={"/" + page.pk} className="block p-2 rounded-lg hover:bg-gray-500 no-underline">
                            <div className="font-semibold">{page.fields.page_title}</div>
                            <span className="text-sm text-white-500 dark:text-white-400">{page.fields.intro}</span>
                        </a>
                    </li>);
                })}
            </ul>
        </div>
    );
}

export default NavBar;