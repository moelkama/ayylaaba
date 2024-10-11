

export default function Subscribe() {
    return (
        <form className="mt-14 px-2 mx-auto w-[580px] bg-white h-16 rounded-2xl flex justify-between items-center">
            <input className="bg-transparent w-96 h-3/4 focus:outline-none" type="email" placeholder="your email address..." />
            <button className="bg-black rounded-xl hover:text-black hover:bg-slate-200 w-40 h-3/4 text-white font-bold">Subscribe</button>
        </form>
    )
}