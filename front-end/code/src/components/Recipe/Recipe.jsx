

import { Link } from 'react-router-dom';

function    Recipe({recipe}) {
    return (
        <Link to={`/Recipe/${recipe.id}`} className="bg-gradient-to-b from-Recipe_color_from to-Recipe_color_to rounded-3xl flex flex-col items-center gap-2 pb-4">
            <img alt="" className="rounded-3xl w-[368px] object-cover h-[364px]" src={recipe.src}></img>
            <div className="flex flex-1 flex-col justify-between gap-1 px-4">
                <span className="text-lg font-bold">{recipe.description}</span>
                <div className="flex gap-3">
                    <div className="flex gap-1 justify-center items-center">
                        <FontAwesomeIcon className="text-slate-600" icon={faStopwatch} />
                        <span className="text-slate-600">{recipe.dury}</span>
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <FontAwesomeIcon className="text-slate-600" icon={faUtensils} />
                        <span className="text-slate-600">{recipe.type}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Recipe;