

function    Tasty_recipe(props) {
    return (
        <div className="flex gap-4">
            <img alt="" className="rounded-2xl w-40 h-40 object-cover" src={props.article_src}></img>
            <div className="flex-1 flex flex-col justify-evenly">
                <h1 className=" text-2xl font-bold text-wrap overflow-hidden">{props.title}</h1>
                <div className="flex items-center gap-4">
                    <span className="text-slate-600 text-xl">By {props.article_author_name}</span>
                </div>
            </div>
        </div>
    )
}

export default Tasty_recipe;