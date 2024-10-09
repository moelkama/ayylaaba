

function    Tasty_recipe(props) {
    return (
        <div className="flex gap-8">
            <img alt="" className="rounded-2xl w-60 object-cover" src={props.article_src}></img>
            <div className="flex flex-col justify-evenly">
                <h1 className="text-2xl font-bold">{props.title}</h1>
                <div className="flex items-center gap-4">
                    <span className="text-slate-600 text-xl">By {props.article_author_name}</span>
                </div>
            </div>
        </div>
    )
}

export default Tasty_recipe;