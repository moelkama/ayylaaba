
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function    Instagram() {
  return (
    <div className="bg-gradient-to-b from-Breakfast_color_from to-Breakfast_color_to mb-20 flex flex-col gap-20 pb-20">
        <div className="mx-auto flex flex-col gap-4">
            <h1 className="text-center text-4xl font-bold">Check out @foodieland on Instagram</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetuipisicing elit, aliqut enim ad minim </p>
        </div>
        <div className="bg-red-7003 flex justify-evenly">
            <div>
                <img className="object-cover w-[350px] h-[480px]" src="/Instagram1.jpg" alt="Instagram1"/>
            </div>
            <div>
                <img className="object-cover w-[350px] h-[455px]" src="/Instagram1.jpg" alt="Instagram1"/>
            </div>
            <div>
                <img className="object-cover w-[350px] h-[455px]" src="/Instagram1.jpg" alt="Instagram1"/>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <a href="" className="h-[60px] w-[229px] bg-black font-bold  hover:text-black hover:bg-slate-300 text-slate-300 flex justify-evenly items-center rounded-lg">
                <span className="text-lg">Visit our Instagram </span>
                <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
            </a>
        </div>
    </div>
  );
}

export default Instagram;