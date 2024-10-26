
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faStopwatch, faUtensils } from '@fortawesome/free-solid-svg-icons';

function    Add({add})
{
    // const   circular_text = ['a', 'c', 'e', 'h', 'e', 'r', 'e'];
    return (
        <div className="rounded-xl grid grid-cols-2">
            <div className="rounded-l-3xl bg-[#E7FAFE] px-8 py-4 flex flex-col h-[450px] justify-between">
                <div className="flex flex-col gap-3">
                    <div className="bg-white flex justify-evenly items-center rounded-full px-3 py-1 w-[150px] h-[40px]">
                        <img className="w-[18px] h-[18px]" alt="" src="/recipes/IEFJ1SD32LLIS5KF32FWE1.png"></img>
                        <span className="font-semibold">Hot Recipes</span>
                    </div>
                    <div className="w-[300px]">
                        <span className="text-black text-4xl font-bold">{add.title}</span>
                    </div>
                    <div>
                        <h1 className="text-slate-700">{add.description}</h1>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-[120px] flex justify-evenly items-center h-[35px] bg-slate-300 rounded-full">
                            <FontAwesomeIcon className="text-2xl text-black" icon={faStopwatch} />
                            <span>{add.cooking_dury} Minutes</span>
                        </div>
                        <div className="w-[120px] flex justify-evenly items-center h-[35px] bg-slate-300 rounded-full">
                            <FontAwesomeIcon className="text-2xl text-black" icon={faUtensils} />
                            <span>{add.prep_dury} Minutes</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img alt="" className="h-[40px] w-[40px] rounded-full object-cover" src={add.author.src}></img>
                        <div className="">
                            <h1 className="font-bold">{add.author.name}</h1>
                            <span className="text-slate-600">{add.author.date}</span>
                        </div>
                    </div>
                    <a href="/" className="bg-black w-[150px] h-[45px] rounded-xl flex justify-evenly items-center">
                        <span className="text-slate-200 text-sm font-bold">View Recipes</span>
                        <FontAwesomeIcon className="text-slate-200" icon={faCirclePlay} />
                    </a>
                </div>
            </div>



            <div className="h-[450px] relative">
                {/* <div className="w-40 h-40 left-[-25px] top-7 bg-black absolute flex justify-center items-center">
                    {
                        circular_text.map((letter, index) => {
                            return <span key={index} className={`text-white rotate-${25 * index}`}>{letter}</span>
                        })
                    }
                    <img alt="" className="bg-white w-16 h-16 -rotate-45 rounded-full" src="https://s3-alpha-sig.figma.com/img/05b4/764d/7410b2b85fbc35b68e97884a21b2dcdf?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=moIF0Y6lGKHWL6WRU6gECVuJB4kWup7VHBkzjOrhYX66oAD70IGmMBCRs~mK94UPN3PLbnEcgGxODFdt8Hnl4rHKpfme2knKZs4v2F89Mqv-iCQ8rxdOYhuoGaUjfaBLVLg~CPgEEcLZv0N3g-CyWFvNI2v6okUAymzSp0ruXo-76~hMUqcQFIOG2rrauLmG3a49yHoJ0uyy-EOPQE5XXLkIIPFG0xALN0kL9GkgLeFBLuC7-MAgKPRzO31K69vEKut0V-7zX5T~TGvEDqlvKiOK7Uah-98PXxragw5LMivbIevYijswTC-8yDeIl851VnWLUYQetLaLrZHLaiLIeg__"></img>
                </div> */}
                <img alt="" className="h-full w-full rounded-r-3xl object-cover" src={add.src}></img>
            </div>
        </div>
    );
}

export default Add;