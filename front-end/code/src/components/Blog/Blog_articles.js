import Blog_article from "./Blog_article";
import Tasty_recipe from "./Tasty_recipe";

const articles = [
    {
        title: "ifwej wefjiwejf weiwejf",
        description: "fwiej fjewio foiwejfiew jfiwjeifjwe fjiwejfoiewjofje wfoeiwjf weewfijoijw eojefiowj ew",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/d47b/2cc5/f550dd4d6f62ddb2d08c6a9ed5691c3a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MzQ9UJHNTCRFE9ZYki5LlfKltn7HHWqa8uOK7JEfrsIxknlLJ0SsDQBqubcpBOPBgMikkopfwVgUgqxlCZQ6l8DEeKbl2EdLd~0zJ4~7J38a1sMEO0BBNDYcLL49TPOAeM6rez78xcgijJxhKduoTicnrDhQ7zQtMqVC0L2Cdz8SbTnNhdVX~C8rSRwLmWNYw2-ppdZq4K9Ve5S8og-rvqQ2tmZyp~up0xcHBg6SMy1tKAiJjjmDRBfR3bm3Ye-BYdEyhTfimjTZj2CWXBPkejvyyeZ4ATgAqty38EqhcXxsasRlB7DY4js20X-ib4ueKoDAsVxMRSOmSr0f9hlNJw__",
        article_src: "https://s3-alpha-sig.figma.com/img/ce11/6e29/44c629a3e4edbea08c307dbfbb67d899?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7VCMc-c-yE~uYMFYUeHoz8e4LNDIzY6L5kGfrjw7J7bpn9LzoN-H8oJMHwM9tA2j68akMticAtsONJkxE05rEpVnolcbjv-fpgDE5b5OWlSEPwLUUG9aloW0afsG38Kos5wPWfbwAHj9P~waqHckCq2py0MDrVjlq4H~Hd60PNWNeuTXM0LVQav-VuXVbtkKmJEChAbxf51SnjQshe89Dby-3Zar0SNKensIMFg6VkfypCO7nFEDfEgArHQ6dYhMhv0ubJ709it991FODUxMZX0MHJnc5ln3C7BMDNHtQ3KStjjcoxoYQMxcVrIcb-u-IySK5tT0YOLPqK808niOw__",
    },
    {
        title: "ifwej wefjiwejf weiwejf",
        description: "fwiej fjewio foiwejfiew jfiwjeifjwe fjiwejfoiewjofje wfoeiwjf weewfijoijw eojefiowj ew",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "https://s3-alpha-sig.figma.com/img/d47b/2cc5/f550dd4d6f62ddb2d08c6a9ed5691c3a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MzQ9UJHNTCRFE9ZYki5LlfKltn7HHWqa8uOK7JEfrsIxknlLJ0SsDQBqubcpBOPBgMikkopfwVgUgqxlCZQ6l8DEeKbl2EdLd~0zJ4~7J38a1sMEO0BBNDYcLL49TPOAeM6rez78xcgijJxhKduoTicnrDhQ7zQtMqVC0L2Cdz8SbTnNhdVX~C8rSRwLmWNYw2-ppdZq4K9Ve5S8og-rvqQ2tmZyp~up0xcHBg6SMy1tKAiJjjmDRBfR3bm3Ye-BYdEyhTfimjTZj2CWXBPkejvyyeZ4ATgAqty38EqhcXxsasRlB7DY4js20X-ib4ueKoDAsVxMRSOmSr0f9hlNJw__",
        article_src: "https://s3-alpha-sig.figma.com/img/ce11/6e29/44c629a3e4edbea08c307dbfbb67d899?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7VCMc-c-yE~uYMFYUeHoz8e4LNDIzY6L5kGfrjw7J7bpn9LzoN-H8oJMHwM9tA2j68akMticAtsONJkxE05rEpVnolcbjv-fpgDE5b5OWlSEPwLUUG9aloW0afsG38Kos5wPWfbwAHj9P~waqHckCq2py0MDrVjlq4H~Hd60PNWNeuTXM0LVQav-VuXVbtkKmJEChAbxf51SnjQshe89Dby-3Zar0SNKensIMFg6VkfypCO7nFEDfEgArHQ6dYhMhv0ubJ709it991FODUxMZX0MHJnc5ln3C7BMDNHtQ3KStjjcoxoYQMxcVrIcb-u-IySK5tT0YOLPqK808niOw__",
    },
]

function    Blog_articles() {
    return (
        <div className="flex justify-evenly">
            <div className="flex flex-col gap-4">
                {articles.map((article, index) => {
                    return (
                        <Blog_article key={index} title={article.title} description={article.description} article_author_name={article.article_author_name} date={article.date} article_author_src={article.article_author_src} article_src={article.article_src} />
                    )
                })}
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold mb-10">Tasty Recipes</h1>
                {articles.map((article, index) => {
                    return (
                        <Tasty_recipe key={index} title={article.title} description={article.description} article_author_name={article.article_author_name} date={article.date} article_author_src={article.article_author_src} article_src={article.article_src}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog_articles;