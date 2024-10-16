import Deliciousness from "./Home/Deliciousness"
import Check_out from "./Contact/Check_out"
import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <>
            <div class="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
                <div class="w-full lg:w-1/2">
                    <img class="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" />
                    <img class="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" />
                    <img class="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" />
                </div>
                <div class="w-full lg:w-1/2">
                    <h1 class="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white">Looks like you've found the doorway to the great nothing</h1>
                    <p class="py-4 text-base text-gray-800 dark:text-white">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                    <p class="py-2 text-base text-gray-800 dark:text-white mb-10">Sorry about that! Please visit our hompage to get where you need to go.</p>
                    {/* <button class="w-full lg:w-auto my-4 rounded-xl px-1 sm:px-16 py-5 bg-black text-xl border border-black text-slate-100 font-bold hover:bg-white hover:text-black">Go back to Homepage</button> */}
                    <Link to="/" class="w-full lg:w-auto my-4 rounded-xl px-1 sm:px-16 py-5 bg-black text-xl border border-black text-slate-100 font-bold hover:bg-white hover:text-black">Go back to Homepage</Link>
                </div>
            </div>
            <Check_out title="You may like these recipes" />
            <Deliciousness />
        </>
    )
}