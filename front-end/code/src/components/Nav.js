

function    Nav() {
    return (
        <nav className="boreder-slate-400 border-b h-16 flex items-center justify-between">
            <h1 className="">Foodieland</h1>
            <ul className="flex gap-10">
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Recipes</a></li>
                <li><a href="/menu">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About us</a></li>
            </ul>
            <ul className="flex gap-4">
                <li><a href="/login">FAC</a></li>
                <li><a href="/signup">TWIT</a></li>
                <li><a href="/signup">INST</a></li>
            </ul>
        </nav>
    );
}

export default Nav;