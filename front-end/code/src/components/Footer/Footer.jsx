import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function    Footer() {
    return (
        <footer className="flex flex-col gap-10 pb-10">
            <div className="flex pb-10 justify-between items-center border-b border-slate-300">
                <div className="">
                    <span className="font-bold text-xl block text-black font-Lobster">Foodieland</span>
                    <span className="text-slate-600 block text-lg">Lorem ipsum dolor sit amet, consectetuipisicing elit</span>
                </div>
                <ul className="flex gap-8">
                    <li className="text-black font-semibold">Recipes</li>
                    <li className="text-black font-semibold">Blog</li>
                    <li className="text-black font-semibold">Contact</li>
                    <li className="text-black font-semibold">About us</li>
                </ul>
            </div>
            <div className="flex grid grid-cols-3">
                <p className="col-start-2 col-end-3 justify-self-center text-center text-slate-400">© 2021 All rights reserved. Designed by <span className="text-slate-700">Colorlib</span></p>
                <ul className="col-start-3 col-end-4 justify-self-end self-start flex gap-4">
                    <FontAwesomeIcon className="text-2xl" icon={faFacebookF} />
                    <FontAwesomeIcon className="text-2xl" icon={faXTwitter} />
                    <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
                </ul>
            </div>
        </footer>
    )
}

export default Footer;