import Subscribe from "./Subscribe";

function    Deliciousness() {
    return (
        <div className="overflow-hidden relative flex flex-col rounded-3xl py-20 px-16 justify-center bg-[#E7F9FD]">
            <h1 className="text-center text-4xl font-bold">Deliciousness to you inbox</h1>
            <span className="mt-6 text-center">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </span>
            <Subscribe />
            <img alt="" className="absolute w-60 h-60 -bottom-10 -left-10" src="/recipes/3A21SD321FYUF32FWE1.png"></img>
            <img alt="" className="absolute w-60 h-60 -bottom-10 -right-10" src="recipes/3A21SD32LIFKF32FWE1.png"></img>
            <img alt="" className="absolute w-20 h-20 rotate-x-15 bottom-16 right-60" src="/recipes/IEFJ1SD32LIFKF32FWE1.png"></img>
        </div>
    );
}

export default Deliciousness;