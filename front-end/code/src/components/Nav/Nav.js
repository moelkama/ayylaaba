
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function    Nav() {
    return (
        <nav className="boreder-slate-400 border-b h-16 flex items-center justify-between">
            <h1 className="">Foodieland</h1>
            <ul className="flex gap-10">
                <li><Link className="font-semibold" to="/">Home</Link></li>
                <li><Link className="font-semibold" to="/menu">Recipes</Link></li>
                <li><Link className="font-semibold" to="/Blog">Blog</Link></li>
                <li><Link className="font-semibold" to="/contact">Contact</Link></li>
                <li><Link className="font-semibold" to="/about">About us</Link></li>
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