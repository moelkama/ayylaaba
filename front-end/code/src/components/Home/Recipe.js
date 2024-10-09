import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faUtensils } from '@fortawesome/free-solid-svg-icons';

function    Recipe(props) {
    return (
        <div className="bg-gradient-to-b from-Recipe_color_from to-Recipe_color_to rounded-3xl flex flex-col items-center gap-2 pb-4">
            <img alt="" className="rounded-3xl w-[368px] object-cover h-[364px]" src={props.src}></img>
            <div className="flex flex-1 flex-col justify-between gap-1 px-4">
                <span className="text-lg font-bold">{props.description}</span>
                <div className="flex gap-3">
                    <div className="flex gap-1 justify-center items-center">
                        <FontAwesomeIcon className="text-slate-600" icon={faStopwatch} />
                        <span className="text-slate-600">{props.dury}</span>
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <FontAwesomeIcon className="text-slate-600" icon={faUtensils} />
                        <span className="text-slate-600">{props.type}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;