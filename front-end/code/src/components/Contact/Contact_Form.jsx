
export default function Contact_Form() {
    return  (
        <div className="flex flex-col gap-10">
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold">Contact Us</h1>
            </div>
            <div className="grid grid-cols-12 justify-betwee gap-14">
                <div className="bg-gradient-to-b rounded-3xl col-start-1 col-end-4 flex justify-center from-Chef_color_from to-Chef_color_to">
                    <img alt="" className="w-4/5" src="/chef/chef_like.png"></img>
                </div>
                <form className="flex justify-between flex-wrap gap-4 col-start-4 col-end-13">
                    <label className="text-lg font-bold w-[45%]">
                        <span className="block mb text-Form_text_color ">Name</span>
                        <input className="border rounded-xl p-2 w-full h-[60px] placeholder:text-sm" type="text" placeholder="your name" ></input>
                    </label>
                    <label className="text-lg font-bold w-[45%]">
                        <span className="block mb text-Form_text_color">EMAIL ADDRESS</span>
                        <input className="border rounded-xl p-2 w-full h-[60px] placeholder:text-sm" type="text" placeholder="your Email Address" ></input>
                    </label>
                    <label className="text-lg font-bold w-[45%]">
                        <span className="block mb text-Form_text_color">SUBJECT</span>
                        <input className="border rounded-xl p-2 w-full h-[60px] placeholder:text-sm" type="text" placeholder="Enter Subject" ></input>
                    </label>
                    <label className="text-lg font-bold w-[45%]">
                        <span className="block mb text-Form_text_color">ENQUIRY TYPE</span>
                        <input className="border rounded-xl p-2 w-full h-[60px] placeholder:text-sm" type="text" placeholder="Enname" ></input>
                    </label>
                    <label className="text-lg font-bold w-full flex flex-col">
                        <span className="block text- mb-2 text-Form_text_color">MESSAGE</span>
                        <textarea  className="border rounded-xl p-2 w-full flex-1 p-2 placeholder:absolute placeholder:text-sm placeholder:top-0" type="text" placeholder="your Message ..." ></textarea>
                    </label>
                </form>
                <button className="bg-black text-white font-bold px-8 py-2 rounded-lg col-start-4 w-40 hover:text-black hover:bg-white border border-black">Submit</button>
            </div>
        </div>
    )
}