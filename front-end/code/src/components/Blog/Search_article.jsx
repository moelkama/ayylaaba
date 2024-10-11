

export default function    Search_article(props) {
    return (
        <form className="px-2 mx-auto w-[580px] h-16 rounded-2xl flex justify-between items-center border border-slate-300">
            <input className=" w-96 h-3/4 focus:outline-none" type="text" placeholder={props.placeholder} />
            <button className="bg-black rounded-xl hover:text-black hover:bg-slate-200 w-40 h-3/4 text-white font-bold">Search</button>
        </form>
    )
}