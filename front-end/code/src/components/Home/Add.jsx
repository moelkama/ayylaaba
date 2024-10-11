
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function    Add()
{
    const   circular_text = ['a', 'c', 'e', 'h', 'e', 'r', 'e'];
    return (
        <div className="rounded-xl grid grid-cols-2">
            <div className="rounded-l-3xl bg-[#E7FAFE]  px-8 py-4 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                    <div className="bg-white flex justify-evenly items-center rounded-full px-3 py-1 w-[150px] h-[40px]">
                        <img className="w-[18px] h-[18px]" alt="" src="https://s3-alpha-sig.figma.com/img/51c7/36f5/6cfbc8134f5a924b133a66f1dac4be2b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXSHxqEzkMxeqZcPHEgFXXLh5Ya5BlgMtXnrap4l862is1mog6FLCNiF6nolzmsH1CCs7nZ37OVCVEipSQ1sgjrdSs0RXX1mXLF-WNdrGceW0GauyVIWYElusCu91KbspIC5Vl8c2cxjKaZ~GEdtQvRdU5fQpVloW6ICUyx3NYQg3EZdRjdwNLIz4B~Lblm9gyR1esbRb9sKj5MxaA6AMWVC6f56RHtYlythaqoq8bP1fQ7POu30B4BazBPa~19rwKHJ8K~RMsydnRLwo78s84ITvx7U3vCCJLApYUKU4LT4j7cxEAbSU4dFmMBs6de3ddVxk5-FKdcbpJ9NpyjQbg__"></img>
                        <span className="font-semibold">Hot Recipes</span>
                    </div>
                    <div className="w-[300px]">
                        <span className="text-black text-4xl font-bold">Spicy delicious chicken wings</span>
                    </div>
                    <div>
                        <h1 className="text-slate-700">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </h1>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-[120px] flex justify-center items-center h-[35px] bg-slate-400 rounded-full">
                            <span>30 Minutes</span>
                        </div>
                        <div className="w-[120px] flex justify-center items-center h-[35px] bg-slate-400 rounded-full">
                            <span>30 Minutes</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img alt="" className="h-[40px] w-[40px] rounded-full object-cover" src="https://s3-alpha-sig.figma.com/img/2649/d4c7/dab521f6cd5545aa07040c074c97ef51?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U25fKgthtnNUE5lPCaSho7afzcOpYt~5uirwHJZ5El-hOWdQP6Zp6RFJfgVzu7wElGKhN9qt66s84Cb7aPaiC9POSXTevzuL82ZObuzwchq~07Oa1NGdkpctNwuXjRpKci6v6lTUJjmRYGAieup0Oy4lKogzUmSR2DYQLkiQvoD5Wx14bjTOzpG-VOZAi7268rxxorKiy-8EnaczUs0lEpI~z9Nwr3UWnp~4mwbteJbktS07OWOfe6G4qA6t5L~UhGxzkLfUKToejAg-yEqGRjuXP5~pfecmuybdqcQCofIBxJeolacPzBUfqk2hJ1x0H6~~cAfiL8sKFkCBpvL7TQ__"></img>
                        <div className="">
                            <h1 className="font-bold">John Smith</h1>
                            <span className="text-slate-600">15 Mars 2022</span>
                        </div>
                    </div>
                    <a href="/" className="bg-black w-[150px] h-[45px] rounded-xl flex justify-evenly items-center">
                        <span className="text-slate-200 text-sm font-bold">View Recipes</span>
                        <FontAwesomeIcon className="text-slate-200" icon={faCirclePlay} />
                    </a>
                </div>
            </div>



            <div className="bg-yello-700 relative">
                <div className="w-40 h-40 left-[-25px] top-7 bg-black absolute flex justify-center items-center">
                    {
                        circular_text.map((letter, index) => {
                            return <span key={index} className={`text-white rotate-${25 * index}`}>{letter}</span>
                        })
                    }
                    <img alt="" className="bg-white w-16 h-16 -rotate-45 rounded-full" src="https://s3-alpha-sig.figma.com/img/05b4/764d/7410b2b85fbc35b68e97884a21b2dcdf?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=moIF0Y6lGKHWL6WRU6gECVuJB4kWup7VHBkzjOrhYX66oAD70IGmMBCRs~mK94UPN3PLbnEcgGxODFdt8Hnl4rHKpfme2knKZs4v2F89Mqv-iCQ8rxdOYhuoGaUjfaBLVLg~CPgEEcLZv0N3g-CyWFvNI2v6okUAymzSp0ruXo-76~hMUqcQFIOG2rrauLmG3a49yHoJ0uyy-EOPQE5XXLkIIPFG0xALN0kL9GkgLeFBLuC7-MAgKPRzO31K69vEKut0V-7zX5T~TGvEDqlvKiOK7Uah-98PXxragw5LMivbIevYijswTC-8yDeIl851VnWLUYQetLaLrZHLaiLIeg__"></img>
                </div>
                <img alt="" className="rounded-r-3xl object-cover" src="https://s3-alpha-sig.figma.com/img/a685/0364/6edfd21071175cb80c78475e2182df7b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DS1K1mCxNkCikVdJV9KSfBR04bTG4kF16tcydRAg6BUJanRFZnOka0R4BOV-S4vzn0tSL4fN2T1ROLTLlUEOZUCksdoYsmj-GDAYEzOOXU4nLs0oLnjQ1zOfyErTyz6dCoYPmJEB3iTb86yG~dWMw4n2CXGQd2o6vQNNk10sFXjvBN9tW9lbGgMrhxeoQWVCJ-K3cEDQvfYWrZH34VHquVxFOcXtmvlgB5XPX3oq59A2m33PgeKjb3ZZdEY8D545DlXjgx4pw~q2N8sVjDXQAPq-jFMHs2bcEN7TC7s9DnPIFtqkK8QXoF-Jdou0KL5DAdEho0mAZv7Z31RQjyKpEQ__"></img>
            </div>
        </div>
    );
}

export default Add;