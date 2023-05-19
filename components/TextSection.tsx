import React from "react";

const TextSection = ({children, title, imageSrc, imageAlt, dangerouslySetInnerHTML}:
                             {children?: React.ReactNode, title: string, imageSrc?: string, imageAlt?: string, dangerouslySetInnerHTML?: string}) => {
    let image = <></>;
    if (imageSrc) {
        image = <img src={imageSrc} className="text_image" alt={imageAlt ? imageAlt : "No alt given."}/>
    }

    let texts: JSX.Element[] = [];


    if (dangerouslySetInnerHTML != null) {
        texts.push(<article className="show-white-space" dangerouslySetInnerHTML={{__html: dangerouslySetInnerHTML}}></article>)
    } else {
        texts.push(<article className="show-white-space">{children}</article>)
    }

    let textDiv = <div className="text-start show-white-space text ">
        <h2 className="text-start">{title}</h2>
        {texts}
    </div>

    if (imageSrc) {
        return <section className="animation-container lg:grid lg:grid-cols-2 lg:gap-6 p-3 sm:p-10 mx-auto"
                        id={title as string}>
            <div className="content-start">
                <div className="max-w-3xl">
                    {image}
                </div>
            </div>
            {textDiv}
        </section>
    } else {
        return <section className="animation-container p-3 sm:p-10 mx-auto md:w-10/12"
                        id={title as string}>
            {textDiv}
        </section>
    }
}


export {TextSection};