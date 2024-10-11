
export default function Contact_Form() {
    return  (
        <div className="flex flex-col gap-10">
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold">Contact Us</h1>
            </div>
            <div className="grid grid-cols-12 justify-betwee gap-14">
                <div className="bg-gradient-to-b rounded-3xl col-start-1 col-end-4 flex justify-center from-Chef_color_from to-Chef_color_to">
                    <img alt="" className="w-4/5" src="https://s3-alpha-sig.figma.com/img/414f/c18f/afbaa5fcefacf7171da5ef1ce68cf748?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KwIFB5skQR9yH1pUVwtGX~UMCV0fpy~Oj8QWsGnlOk1bpaiD-u6whS7XE52t9P~~t-o3jltfrfb1kpWUw4lgVld-oggaXRu9e396ZQiKN6pzZksIRCtZwPTOXMHp5BEk~qkQ3PpMlUASYk81mR0EAXAit5W8hSS4hEDztpCyaUpVSVoKZqwKvvkEuH5dNl7Q6-3gy-nEs8oujlGVUqDll-tK1f58mvQIeGy0K5le8pO9az0EUCeaTzv3C-8XABMz57z6MRb4Kele24cqSFMFWzwGkYLFwQLx3LXycUPbrosyfhEtg5D-JuzwaFKD1Pr-8Sj9QRoh5idfD9OIumg5ag__"></img>
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