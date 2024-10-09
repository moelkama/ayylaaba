
function    Blog_article(props) {
    return (
        <div className="flex gap-8">
            <img alt="" className="rounded-2xl w-80 object-cover" src={props.article_src}></img>
            <div className="flex flex-col justify-evenly">
                <h1 className="text-2xl font-bold">{props.title}</h1>
                <p className="text-slate-600">{props.description}</p>
                <div className="flex items-center gap-4">
                    <img alt="" className="w-10 rounded-full" src={props.article_author_src}></img>
                    <span className="text-black  font-bold">{props.article_author_name}</span>
                    <span className="pl-4 border-l border-slate-300 text-slate-600">{props.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Blog_article;