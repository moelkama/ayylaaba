

function    Search_article(props) {
    return (
        <form className="px-2 mx-auto w-[580px] h-16 rounded-2xl flex items-center border border-slate-300">
            <input className=" w-8/12 h-3/4" type="text" placeholder={props.placeholder} />
            <button className="bg-black rounded-xl w-4/12 h-3/4 text-white font-bold">Search</button>
        </form>
    )
}

export default Search_article;