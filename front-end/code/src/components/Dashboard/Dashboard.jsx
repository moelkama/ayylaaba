import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

function heade(props) {
    return (
        <div className="rounded-xlv flex flex-col justify-evenly h-40 bg-white">
            <div className="flex">
                <span className="bg-black text-2xl text-slate-300">{props.title}</span>
                <FontAwesomeIcon className="text-slate-300" icon={faStopwatch} />
            </div>
            <h1 className="text-xl text-slate-300">{props.title}</h1>
        </div>
    )
}

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-10">
            <heade />
        </div>
    )
}