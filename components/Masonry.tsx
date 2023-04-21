'use client'
import {ReactNode} from "react";
import Script from "next/script";
import { useEffect } from 'react';

const MasonryGrid = ({children, gutter}: {children: ReactNode, gutter: number}) => {
    let settings = { "itemSelector": ".grid-item", "gutter": gutter, "columnWidth": 10,  "percentPosition": true }
    //console.log(children)

    function resize() {
        // @ts-ignore
        let msnry = new Masonry( '.grid', settings);
        if (msnry) {
            msnry.layout();
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize);
        };
    })


    return <>
        <div id="masonry-grid"
             className="mx-auto grid masonry-grid content-center mt-4 ml-2 sm:ml-10"
             data-masonry={JSON.stringify(settings)}>

            {children}

        </div>
        <Script strategy="lazyOnload" src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" ></Script>
    </>
}

const MasonryItem = ({children}: {children: ReactNode}) => {
    return <section className="animation-container-fit-content w-fit h-fit grid-item">{children}</section>
}

export {MasonryGrid, MasonryItem};
