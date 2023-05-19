/*
*
* [{"model": "personal_site_content.page", "pk": 1, "fields": {"page_title": "Index"}},
*  {"model": "personal_site_content.page", "pk": 2, "fields": {"page_title": "Andra sidan!"}}]
*
* */
import styles from  "../styles/textSection.module.css";

import {getPages} from "@/app/utils";

type Page = {
    model: string,
    pk: number,
    fields: {
        page_title: string,
        intro: string
    }

}

const NavBar  = async () => {
    let pages: Page[] = await getPages();
    return <>
        <div className={styles.text_section}>
            <div className="grid text-white w-fit rounded-xl mr-4">
                <ul>
                    <li className="block p-1 rounded-lg my-2">
                        <h2>Alla Sidor</h2>
                    </li>
                    {pages.sort((a, b) => a.pk-b.pk).map((page: Page) => {
                        return (<li key={page.pk.toString()}>
                            <a href={"/" + page.pk}
                               className="block p-2 rounded-lg bg-gray-700 hover:bg-gray-500 border-stone-700 border-2 no-underline">
                                <div className="font-semibold underline">{page.fields.page_title}</div>
                                <span className="text-sm text-white-500 dark:text-white-400">{page.fields.intro}</span>
                            </a>
                        </li>);
                    })}
                </ul>
            </div>
        </div>
    </>
}

export default NavBar;