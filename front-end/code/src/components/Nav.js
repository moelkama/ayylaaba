
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                <FontAwesomeIcon className="text-2xl" icon={faFacebookF} />
                <FontAwesomeIcon className="text-2xl" icon={faXTwitter} />
                <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
            </ul>
        </nav>
    );
}

export default Nav;