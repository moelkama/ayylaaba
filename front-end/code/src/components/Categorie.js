function    Categorie(props) {
    return (
        <div className={`${props.bg_color} rounded-2xl flex flex-col justify-between items-center px-6`}>
            <img className="h-[100px] w-[100px]" alt="" src={props.src}></img>
            <h1 className="text-bold my-4">{props.name}</h1>
        </div>
    );
}

export default Categorie;