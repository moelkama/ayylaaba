// import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpFromBracket, faPrint,  faStopwatch, faUtensils } from '@fortawesome/free-solid-svg-icons';
import {Tasties} from "../Blog/Blog_articles";
import Tasty_recipe from "../Blog/Tasty_recipe";
import Healty_food from "../Adds/Healty_food";
import { Checkbox, ListItemText, MenuItem } from '@mui/material';
import React, { useState } from 'react';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';

// import { pink } from '@mui/material/colors';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
// import CheckCircleIcon from '@mui/icons-material/CheckCircleIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// const recipes = [
//     {
//         id: 1,
//         description:"Big and Juicy Wagyu Beef Cheeseburger",
//         src: "https://s3-alpha-sig.figma.com/img/5d7d/b88e/5ef423a8f20961cea9360410d3cf9b06?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FxQrRNiUnScAt-nC7PUMTdi1n5Re5Q9CUnLebI-s32QQHeoI4E5QwjdyFkKTGLUjepC75lkA7mDNpuki-cOTFkydeHOfuhjPK3~beJzdDmShFP0~v0g-HOGnw0qr-wdaqKvGgH0r~fqxa9JZSOZcxnSF3npMthmnZqOdK1N3GmD07kkDaNbcwVpn4OeCP-KxiKojAVdMkltDSIFFuNiY-UPNU-kKpSNI8qhY7Rt~c-12e-TNEGyxIpImezcICnpguSd~EhTpqi3y7SeR8WPaMA9d9oOe4HS0YO2x9tNtnvZETE9-FDrz--Oh7fboUmjVqYQQSRfy3dqj9xM7aFbhBw__",
//         dury:"30 min",
//         type:"Snack",
//     },
//     {
//         id: 2,
//         description:"Fresh Lime Roasted Salmon with Ginger Sauce",
//         src: "https://s3-alpha-sig.figma.com/img/d86c/1749/6ee5d71fd0448e26a89ff68c5a944d8b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fYhBne90wHN5KwmtXcr4dZmPXgzRT9pW2AMjo-rB2PF925Fm1pSf8NCkquj6Y45dl06uYFGr9XBygL6o7fiDGUeT3hR9p8Ir6J~zFp6sLBuDO5E-OQa5WFds8ZJccJ7Tu9y4cAOxP1yTyF~c9g1R5x~n1ru497N3XKavGO7KkmHhoJTw19QQscBUeS7sw69-A1xtUBo6pa6OwiBUuNQnpLORmgdrFTCpK2jFDp3ZxkZ~1sMXAjCox1FeUJgU6bDdoSMiFZb5eyJKqqNj-su~LRmRB~hzBefnFFecUQZ6pZNYD3tUJKStyywMgfArquEmpuRbK8Q3cvmJxHErRHN9IA__",
//         dury:"30 min",
//         type:"Fish",
//     },
//     {
//         id: 3,
//         description:"Strawberry Oatmeal Pancake with Honey Syrup",
//         src: "https://s3-alpha-sig.figma.com/img/7fe0/9451/d0ff70cd5cb9ed533406b0c0767483eb?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZqrbcXSTrggq5XjIJosxxh--hVgMfkYP3zeTdKvEPf7r9Lcq5hwHHKGONq0EzeH2Lmi8uXFswl0-OfCqapEF9IdJccRR2oqraPAHW~CrNMuTzKwLkbAIXl3NcmWp4ti38TwI5RXerk9AKiq6rAo2SqN03PRmoC4smAD~tSltqSpkoHIWKOqh~Uwo9XPfxpC6hr7qtkep0HB82zWVpcYcsLoBNh9orbVktH3noMp6JoB8diV4SV05nnLhLY1ZTNQ5Ao3zzTAcAfgEvTb4VU7gP3JLJkKiGzKpc~JyyApYmTZLKhgPypjkgv1oaaDncQOKO50wYShg-Oy2KObCqlkvPQ__",
//         dury:"30 min",
//         type:"Breakfast",
//     },
//     {
//         id: 4,
//         description:"Fresh and Healthy Mixed Mayonnaise Salad",
//         src: "https://s3-alpha-sig.figma.com/img/d1f6/530d/2e13ca360d563e2dd86ae9d7363cf835?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Do9RJz11V-S3Cd9lxcHMYiOKWrySFTMAnjYQyAWSw3K9Iu3A1TFb~JISnCaU4bIkIGlx3J5RaaN~B2vRAwqTyU2pXwMFyyIvdjaorwAI7X0h9TUP9lf2hrnQ4R6DPJ-q8Q6nwkv-n1Kv7Vdi9XIXqnyeV8~of0FRZrkbdj6a-1vMgMr~yP1ko6TWRkOYNLuGt7RdCtZP59uFI3s-VdHYNpQnfKLPlBS~nTGOkYzWdeVQYarpw-VjxLnAL8MT64hV5oSJXJ--d2fYSd0NRIigyvX2SlNfBQwad6yPy56l47f5YPMfUCqtomKNOErD4VvNMIZHsP6LH-ST~GlMrj8n-g__",
//         dury:"30 min",
//         type:"Healthy",
//     },
//     {
//         id: 5,
//         description:"The Best Easy One Pot Chicken and Rice",
//         src: "https://s3-alpha-sig.figma.com/img/eeb4/75f7/e48878fc5d01496e4a42246aaa891c80?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iL9Kl0cIQ3LjLNw-M4G9lxPxXtgeTKW3jEku8LYZCmUPJVpe33i9OzEURx5YJhkRo~3qKrSmqGbhXn~BN0BO8uiDLZpiFxWj6mArrCdnEswwkNDtL9VY0O2P70keQyVfrYeW231L13rB-vkev9b46Bv7Rxz2vprFpbdzh4rTcZC~8S6sG6Sz7tx~DAbX5xGa1uJLyTinkqirOLlxVn40Hss7pT1-2OyCrD9e2JdhDlYpUPSx~EyFcWa-hPSEhoQv4mUErc7gUk1wLyMTfbgZVKG8rLEqSXN9bnRah9qQ7485TKEwIGiBrnRKkn2XcV4ilaxzVh5GQMobGlC9zsVDUA__",
//         dury:"30 min",
//         type:"Snack",
//     },
//     {
//         id: 6,
//         description:"Fruity Pancake with Orange & Blueberry",
//         src: "https://s3-alpha-sig.figma.com/img/d810/1a05/c7142857391eb1daf4856ed4d1f2b407?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BHYpYXnM5qC9U-zqobuSkQw6k1S~VF4zem4loTgyIFKg0tGLpkBP5oNwMBvDzuM~Wz66HJc5kw8zHosuEVBRa7cLflHo~GxWZ-HuC1K06ODiUXX2fZU863BMTjgIUT8q8jDHjeAV4DCyHNcgJ07LccrwDdQ-XeGjtnI6xrImXUYUEzepxrxbW8p-YfVqJYJswlNnHsUJKi12M2V0Fmu5wEbJjaVWufrjpH2qCjSYWjw3-ZS9H6nhHhlTyyKpMgEXGc3u8-OxVPckB7xm~8ofsQ3FmyIdyjOkn0qro9FM0R62TRY31FknUMpb98PfrDG4QlDZ6TaM2LLK0PSIcBZcOQ__",
//         dury:"30 min",
//         type:"Sweet",
//     },
//     {
//         id: 7,
//         description:"The Creamiest Creamy Chicken and Bacon Pasta",
//         src: "https://s3-alpha-sig.figma.com/img/94d1/9365/107208024a316bdda445c55742452207?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=amo3jVHZejjPltm5Y9OtlSQRhmPmIHktRL8Qfll9olBpbWNvmIFsIEJlAWcc1TkYYFd6PQHu6MQRYvcLPxFSg06OqMPeM~grCMUyvEDHD0JBQ9PneyfcZHiztrwYKAzCinP3NNgDlFi3BNhw~W1u7zSWbGEw~gdlmA2BkwUsiPwyGnb-OiKU4vKB67apQRHWb0jzEFGBxjxc3JPS-zQgNMiyvfU6cfrrf3rT47rZhKe7EWnA3fwYCqdPBQB~MnHVZb1tQWkGwBTFzvbaKkVjX9MxSaFmdmZ71Tk1I3sj8jUuMDbb5P-zzzZw2RPR4WZUGLtLjHpv3AV9iWaK~3TGPQ__",
//         dury:"30 min",
//         type:"Noodles",
//     },
//     {
//         id: 8,
//         description:"Chicken Meatballs with Cream Cheese",
//         src: "https://s3-alpha-sig.figma.com/img/e6f0/82c6/8c251dd7a6228b84e9d68e27ddf2d47d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SFps1CZrL~5ok-WCLx1V01Wcnxb4GYiGWLqlAIsRJ1a7f-8OD8UgX7uvN648K12P7dcJ1gHKeZt6h2sAz1v5FFr4Q5UA6CC-WzjacZT~dxyb8ambB5IprN536l17TmgKYiRm~AGWUip2l~4WQWKzcu2rHmJB2t3BA8ylAs5cEy4Tquw--KopObztzg9c1ka--6k2U~XOc-LK0GlOkuDc6qAPI844JH~YQla~aVdSjR6v2FeiT6SrJq~i-xSS~S21y7UkxCfswRwrcUGSSvagq00HXDoyUv9w6~lBZFopKoWW7gy8rVO6xCPgAtzTFaVNdjkFMnW-axpboNxeE~~xGg__",
//         dury:"30 min",
//         type:"Meat",
//     },
//     {
//         id: 9,
//         description:"Fresh and Healthy Mixed Mayonnaise Salad",
//         src: "https://s3-alpha-sig.figma.com/img/d1f6/530d/2e13ca360d563e2dd86ae9d7363cf835?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Do9RJz11V-S3Cd9lxcHMYiOKWrySFTMAnjYQyAWSw3K9Iu3A1TFb~JISnCaU4bIkIGlx3J5RaaN~B2vRAwqTyU2pXwMFyyIvdjaorwAI7X0h9TUP9lf2hrnQ4R6DPJ-q8Q6nwkv-n1Kv7Vdi9XIXqnyeV8~of0FRZrkbdj6a-1vMgMr~yP1ko6TWRkOYNLuGt7RdCtZP59uFI3s-VdHYNpQnfKLPlBS~nTGOkYzWdeVQYarpw-VjxLnAL8MT64hV5oSJXJ--d2fYSd0NRIigyvX2SlNfBQwad6yPy56l47f5YPMfUCqtomKNOErD4VvNMIZHsP6LH-ST~GlMrj8n-g__",
//         dury:"30 min",
//         type:"Healthy",
//     },
// ]

// const c = [
//     {
        
//     }
// ]

const list = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
  ];

function    Options(props){
    return(
        <>
            <h1 className="text-xl">{props.title}</h1>
            {props.options.map((option) => (
                <MenuItem style={{ borderBottom: 2 }} key={option} onClick={() => props.toggleItem(option)}>
                    <Checkbox style={{ color: 'black' }} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />}/>
                    <ListItemText id={`${option}-Checkbox`} primary={option} />
                </MenuItem>
            ))}
        </>
    )
}

function Recipe_Information(Information) {
    return (
        <div className="flex justify-between border-b">
            <h1>{Information.k}</h1>
            <h1>{Information.value}</h1>
        </div>
    )
}

export  default function Recipe_details() {
    // const { id } = useParams();
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleItem = (item) => {
        document.getElementById(`${item}-Checkbox`).className = "text-slate-300 line-through";
      setSelectedItems((prevSelected) =>
      {
        if (prevSelected.includes(item))
        {
            prevSelected.filter((i) => i !== item)
        }
        else
        {
            prevSelected.push(item);
        }
        });
    };

    return (
        <div className="flex flex-col gap-16">
            <div className="bg-blue-700l grid grid-cols-12 gap-x-10 gap-y-20">
                <div className="col-start-1 col-end-9 flex flex-col gap-14">
                    <h1 className="text-5xl font-bold">Health Japanese Fried Rice</h1>
                    <div className="flex">
                        <div className="flex items-center gap-2 pr-10 border-slate-300 border-r">
                            <img alt="" className="w-12 h-12 rounded-full" src="https://s3-alpha-sig.figma.com/img/2649/d4c7/dab521f6cd5545aa07040c074c97ef51?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U25fKgthtnNUE5lPCaSho7afzcOpYt~5uirwHJZ5El-hOWdQP6Zp6RFJfgVzu7wElGKhN9qt66s84Cb7aPaiC9POSXTevzuL82ZObuzwchq~07Oa1NGdkpctNwuXjRpKci6v6lTUJjmRYGAieup0Oy4lKogzUmSR2DYQLkiQvoD5Wx14bjTOzpG-VOZAi7268rxxorKiy-8EnaczUs0lEpI~z9Nwr3UWnp~4mwbteJbktS07OWOfe6G4qA6t5L~UhGxzkLfUKToejAg-yEqGRjuXP5~pfecmuybdqcQCofIBxJeolacPzBUfqk2hJ1x0H6~~cAfiL8sKFkCBpvL7TQ__"></img>
                            <div>
                                <h1 className="font-bold">John Smith</h1>
                                <span className="">15 March 2022</span>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-center items-center px-10 border-slate-300 border-r">
                            <FontAwesomeIcon className="text-2xl text-black" icon={faStopwatch} />
                            <div >
                                <h1 className="text-lg">PREP TIME</h1>
                                <h1 className="text-sm text-slate-400">15 Minutes</h1>
                            </div>
                        </div>
                        <button className="flex gap-3 justify-center items-center px-10 border-slate-300 border-r">
                            <FontAwesomeIcon className="text-2xl text-black" icon={faStopwatch} />
                            <div >
                                <h1 className="text-lg">PREP TIME</h1>
                                <h1 className="text-sm text-slate-400">15 Minutes</h1>
                            </div>
                        </button>
                        <button className="flex gap-3 justify-center items-center px-10">
                            <FontAwesomeIcon className="text-2xl text-black" icon={faUtensils} />
                            <span>Ckicken</span>
                        </button>
                    </div>
                </div>
                <div className="col-start-9 col-end-13 flex gap-4 justify-end items-center">
                    <div className="hover:bg-black hover:text-white hover:text-2xl text-black h-20 w-20 rounded-full bg-Share_color flex justify-center items-center">
                        <FontAwesomeIcon icon={faPrint} />
                    </div>
                    <div className="hover:bg-black hover:text-white hover:text-2xl text-black h-20 w-20 rounded-full bg-Share_color flex justify-center items-center">
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </div>
                </div>
                <div className="col-start-1 col-end-9">
                    <video className="h-full w-full rounded-3xl" controls type="video/mp4" src="https://rr1---sn-h5q7knez.googlevideo.com/videoplayback?expire=1728714814&ei=3sMJZ8DJDqHGjuMPt93C4QU&ip=118.99.68.4&id=o-ABMIG6j8o9o8mo8aHYv8MJ95m-J6ZfgDArLaNHmGVLwl&itag=137&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AXLXGFTB1g_nqFwMVpN4E0nNaF9ZxKNK8XEK9j7Tj5WGIWLsepdXvGxkfdYFiPbC_OYBGzTcuEtlgd6G&vprv=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=28304680&dur=88.708&lmt=1696295815407686&keepalive=yes&fexp=24350655,24350673,51300760&c=MEDIA_CONNECT_FRONTEND&txp=5318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhALpBoId8EJg5nf5r9ID9XJN50AHgNP7IxL9jC8kmo8MeAiEA49ptozVrzB8YKMKY19O3gbBrExuh8QqJpIKVzVcAXe8%3D&rm=sn-cp1oxu-n0cl7e,sn-a5mye7e&rrc=79,104&req_id=8fc242569ef7a3ee&met=1728693263,&rms=rdu,au&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=rw&mip=197.147.159.225&mm=29&mn=sn-h5q7knez&ms=rdu&mt=1728692938&mv=m&mvi=1&pl=22&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIgY2GK2YoeQV1MOrZNAkDEGbIkolmg0i66SA2qjQI61rECIQC5IrlG1uOWHbdkH1B9ifmLxJptZBiXtKCC_e3Ja-7xIg%3D%3D"></video>
                </div>
                <div className="p-8 flex flex-col gap-4 col-start-9 col-end-13 rounded-3xl bg-Share_color">
                    <h1 className="text-xl mb-2">Nutrition Information</h1>
                    <Recipe_Information k="Calories" value="219.9kcal" />
                    <Recipe_Information k="Calories" value="219.9kcal" />
                    <Recipe_Information k="Calories" value="219.9kcal" />
                    <Recipe_Information k="Calories" value="219.9kcal" />
                    
                    <span className="text-center mt-auto">Lorem ipsum dolor sit amet Veritatis voluptate, adipisci rerum dignissimos explicabo cupiditate laudantium quasi</span>
                </div>
            </div>
            <span className="text-lg text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            <div className="bg-blue-700l grid grid-cols-12 gap-x-10 gap-y-20">
                <div className="col-start-1 col-end-9 flex flex-col gap-6">
                    <h1 className="text-2xl font-bold">Ingredients</h1>
                    <div className="flex flex-col gap-4">
                        {/**************************/}
                        <Options title="For man dish" options={list} toggleItem={toggleItem} />
                        {/**************************/}
                    </div>
                </div>
                <div className="col-start-9 col-end-13 flex flex-col gap-6">
                    <h1 className="text-2xl font-bold">Other recipe</h1>
                    <div className="flex flex-col gap-4">
                        {Tasties.map((article, index) => {
                            return (
                                <Tasty_recipe key={index} title={article.title} description={article.description} article_author_name={article.article_author_name} date={article.date} article_author_src={article.article_author_src} article_src={article.article_src}/>
                            )
                        })}
                        <div className="mt-10">
                            <Healty_food />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}