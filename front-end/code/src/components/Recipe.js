

function    Recipe(props) {
    return (
        <div className="bg-gradient-to-b from-Recipe_color_from to-Recipe_color_to rounded-3xl flex flex-col items-center gap-2 pb-4">
            <img className="rounded-3xl w-[368px] object-cover h-[364px]" src={props.src}></img>
            <div className="flex flex-1 flex-col justify-between gap-1 px-4">
                <span className="text-lg font-bold">{props.description}</span>
                <div className="flex gap-3">
                    <div>
                        <span className="text-slate-600">{props.dury}</span>
                    </div>
                    <div>
                        <span className="text-slate-600">{props.type}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;