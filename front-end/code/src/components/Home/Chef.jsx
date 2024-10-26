function    Chef(params) {
    return(
        <div className="flex">
            <div className="w-1/2">
                <h1 className="mt-32 mb-4 text-3xl font-bold">Everyone can be a chef in <br></br> their own kitchen</h1>
                <h1 className="text-slate-600">Lorem ipsum dolor sit amet, consectetuipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </h1>
                <button className="mt-10 rounded-xl bg-black text-white w-[150px] h-[45px]" >Learn More</button>
            </div>
            <div className="w-1/2 relative bg-gradient-to-b from-Chef_color_from to-Chef_color_to rounded-3xl">
                <img alt="" className="absolute h-10 w-10 object-cover top-56 -left-5" src="/vegetables/tomato.png"></img>
                <img alt="" className="absolute h-16 w-16 object-cover bottom-56 right-10" src="/categories/vegan.png"></img>
                <img alt="" className="absolute h-10 w-10 object-cover bottom-72 right-32" src="/vegetables/onion.png"></img>
                <img alt="" className="absolute h-16 w-16 rotate-x-15 object-cover bottom-72 left-32" src="/categories/meat.png"></img>
                <img alt="" className="object-cover" atl="" src="/chef/chef_recip.png"></img>
            </div>
        </div>
    )
}

export default Chef;