import Recipe from '../Recipe/Recipe';

const recipes = [
    {
        id: 1,
        description:"Big and Juicy Wagyu Beef Cheeseburger",
        src: "https://s3-alpha-sig.figma.com/img/5d7d/b88e/5ef423a8f20961cea9360410d3cf9b06?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FxQrRNiUnScAt-nC7PUMTdi1n5Re5Q9CUnLebI-s32QQHeoI4E5QwjdyFkKTGLUjepC75lkA7mDNpuki-cOTFkydeHOfuhjPK3~beJzdDmShFP0~v0g-HOGnw0qr-wdaqKvGgH0r~fqxa9JZSOZcxnSF3npMthmnZqOdK1N3GmD07kkDaNbcwVpn4OeCP-KxiKojAVdMkltDSIFFuNiY-UPNU-kKpSNI8qhY7Rt~c-12e-TNEGyxIpImezcICnpguSd~EhTpqi3y7SeR8WPaMA9d9oOe4HS0YO2x9tNtnvZETE9-FDrz--Oh7fboUmjVqYQQSRfy3dqj9xM7aFbhBw__",
        dury:"30 min",
        type:"Snack",
    },
    {
        id: 2,
        description:"Fresh Lime Roasted Salmon with Ginger Sauce",
        src: "https://s3-alpha-sig.figma.com/img/d86c/1749/6ee5d71fd0448e26a89ff68c5a944d8b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fYhBne90wHN5KwmtXcr4dZmPXgzRT9pW2AMjo-rB2PF925Fm1pSf8NCkquj6Y45dl06uYFGr9XBygL6o7fiDGUeT3hR9p8Ir6J~zFp6sLBuDO5E-OQa5WFds8ZJccJ7Tu9y4cAOxP1yTyF~c9g1R5x~n1ru497N3XKavGO7KkmHhoJTw19QQscBUeS7sw69-A1xtUBo6pa6OwiBUuNQnpLORmgdrFTCpK2jFDp3ZxkZ~1sMXAjCox1FeUJgU6bDdoSMiFZb5eyJKqqNj-su~LRmRB~hzBefnFFecUQZ6pZNYD3tUJKStyywMgfArquEmpuRbK8Q3cvmJxHErRHN9IA__",
        dury:"30 min",
        type:"Fish",
    },
    {
        id: 3,
        description:"Strawberry Oatmeal Pancake with Honey Syrup",
        src: "https://s3-alpha-sig.figma.com/img/7fe0/9451/d0ff70cd5cb9ed533406b0c0767483eb?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZqrbcXSTrggq5XjIJosxxh--hVgMfkYP3zeTdKvEPf7r9Lcq5hwHHKGONq0EzeH2Lmi8uXFswl0-OfCqapEF9IdJccRR2oqraPAHW~CrNMuTzKwLkbAIXl3NcmWp4ti38TwI5RXerk9AKiq6rAo2SqN03PRmoC4smAD~tSltqSpkoHIWKOqh~Uwo9XPfxpC6hr7qtkep0HB82zWVpcYcsLoBNh9orbVktH3noMp6JoB8diV4SV05nnLhLY1ZTNQ5Ao3zzTAcAfgEvTb4VU7gP3JLJkKiGzKpc~JyyApYmTZLKhgPypjkgv1oaaDncQOKO50wYShg-Oy2KObCqlkvPQ__",
        dury:"30 min",
        type:"Breakfast",
    },
    {
        id: 4,
        description:"Fresh and Healthy Mixed Mayonnaise Salad",
        src: "https://s3-alpha-sig.figma.com/img/d1f6/530d/2e13ca360d563e2dd86ae9d7363cf835?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Do9RJz11V-S3Cd9lxcHMYiOKWrySFTMAnjYQyAWSw3K9Iu3A1TFb~JISnCaU4bIkIGlx3J5RaaN~B2vRAwqTyU2pXwMFyyIvdjaorwAI7X0h9TUP9lf2hrnQ4R6DPJ-q8Q6nwkv-n1Kv7Vdi9XIXqnyeV8~of0FRZrkbdj6a-1vMgMr~yP1ko6TWRkOYNLuGt7RdCtZP59uFI3s-VdHYNpQnfKLPlBS~nTGOkYzWdeVQYarpw-VjxLnAL8MT64hV5oSJXJ--d2fYSd0NRIigyvX2SlNfBQwad6yPy56l47f5YPMfUCqtomKNOErD4VvNMIZHsP6LH-ST~GlMrj8n-g__",
        dury:"30 min",
        type:"Healthy",
    },
    {
        id: 5,
        description:"The Best Easy One Pot Chicken and Rice",
        src: "https://s3-alpha-sig.figma.com/img/eeb4/75f7/e48878fc5d01496e4a42246aaa891c80?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iL9Kl0cIQ3LjLNw-M4G9lxPxXtgeTKW3jEku8LYZCmUPJVpe33i9OzEURx5YJhkRo~3qKrSmqGbhXn~BN0BO8uiDLZpiFxWj6mArrCdnEswwkNDtL9VY0O2P70keQyVfrYeW231L13rB-vkev9b46Bv7Rxz2vprFpbdzh4rTcZC~8S6sG6Sz7tx~DAbX5xGa1uJLyTinkqirOLlxVn40Hss7pT1-2OyCrD9e2JdhDlYpUPSx~EyFcWa-hPSEhoQv4mUErc7gUk1wLyMTfbgZVKG8rLEqSXN9bnRah9qQ7485TKEwIGiBrnRKkn2XcV4ilaxzVh5GQMobGlC9zsVDUA__",
        dury:"30 min",
        type:"Snack",
    },
    {
        id: 6,
        description:"Fruity Pancake with Orange & Blueberry",
        src: "https://s3-alpha-sig.figma.com/img/d810/1a05/c7142857391eb1daf4856ed4d1f2b407?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BHYpYXnM5qC9U-zqobuSkQw6k1S~VF4zem4loTgyIFKg0tGLpkBP5oNwMBvDzuM~Wz66HJc5kw8zHosuEVBRa7cLflHo~GxWZ-HuC1K06ODiUXX2fZU863BMTjgIUT8q8jDHjeAV4DCyHNcgJ07LccrwDdQ-XeGjtnI6xrImXUYUEzepxrxbW8p-YfVqJYJswlNnHsUJKi12M2V0Fmu5wEbJjaVWufrjpH2qCjSYWjw3-ZS9H6nhHhlTyyKpMgEXGc3u8-OxVPckB7xm~8ofsQ3FmyIdyjOkn0qro9FM0R62TRY31FknUMpb98PfrDG4QlDZ6TaM2LLK0PSIcBZcOQ__",
        dury:"30 min",
        type:"Sweet",
    },
    {
        id: 7,
        description:"The Creamiest Creamy Chicken and Bacon Pasta",
        src: "https://s3-alpha-sig.figma.com/img/94d1/9365/107208024a316bdda445c55742452207?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=amo3jVHZejjPltm5Y9OtlSQRhmPmIHktRL8Qfll9olBpbWNvmIFsIEJlAWcc1TkYYFd6PQHu6MQRYvcLPxFSg06OqMPeM~grCMUyvEDHD0JBQ9PneyfcZHiztrwYKAzCinP3NNgDlFi3BNhw~W1u7zSWbGEw~gdlmA2BkwUsiPwyGnb-OiKU4vKB67apQRHWb0jzEFGBxjxc3JPS-zQgNMiyvfU6cfrrf3rT47rZhKe7EWnA3fwYCqdPBQB~MnHVZb1tQWkGwBTFzvbaKkVjX9MxSaFmdmZ71Tk1I3sj8jUuMDbb5P-zzzZw2RPR4WZUGLtLjHpv3AV9iWaK~3TGPQ__",
        dury:"30 min",
        type:"Noodles",
    },
    {
        id: 8,
        description:"Chicken Meatballs with Cream Cheese",
        src: "https://s3-alpha-sig.figma.com/img/e6f0/82c6/8c251dd7a6228b84e9d68e27ddf2d47d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SFps1CZrL~5ok-WCLx1V01Wcnxb4GYiGWLqlAIsRJ1a7f-8OD8UgX7uvN648K12P7dcJ1gHKeZt6h2sAz1v5FFr4Q5UA6CC-WzjacZT~dxyb8ambB5IprN536l17TmgKYiRm~AGWUip2l~4WQWKzcu2rHmJB2t3BA8ylAs5cEy4Tquw--KopObztzg9c1ka--6k2U~XOc-LK0GlOkuDc6qAPI844JH~YQla~aVdSjR6v2FeiT6SrJq~i-xSS~S21y7UkxCfswRwrcUGSSvagq00HXDoyUv9w6~lBZFopKoWW7gy8rVO6xCPgAtzTFaVNdjkFMnW-axpboNxeE~~xGg__",
        dury:"30 min",
        type:"Meat",
    },
    {
        id: 9,
        description:"Fresh and Healthy Mixed Mayonnaise Salad",
        src: "https://s3-alpha-sig.figma.com/img/d1f6/530d/2e13ca360d563e2dd86ae9d7363cf835?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Do9RJz11V-S3Cd9lxcHMYiOKWrySFTMAnjYQyAWSw3K9Iu3A1TFb~JISnCaU4bIkIGlx3J5RaaN~B2vRAwqTyU2pXwMFyyIvdjaorwAI7X0h9TUP9lf2hrnQ4R6DPJ-q8Q6nwkv-n1Kv7Vdi9XIXqnyeV8~of0FRZrkbdj6a-1vMgMr~yP1ko6TWRkOYNLuGt7RdCtZP59uFI3s-VdHYNpQnfKLPlBS~nTGOkYzWdeVQYarpw-VjxLnAL8MT64hV5oSJXJ--d2fYSd0NRIigyvX2SlNfBQwad6yPy56l47f5YPMfUCqtomKNOErD4VvNMIZHsP6LH-ST~GlMrj8n-g__",
        dury:"30 min",
        type:"Healthy",
    },
]

function    Recipes() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-xl text-center">Simple and tasty recipes</h1>
                <p className="text-center text-slate-600">Lorem ipsum dolor sit amet, consectetuipisicing elit<br></br>tempor aliqut enim ad minim</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {recipes.map((recipe, index) => {
                    // src={recipe.src} description={recipe.description} dury={recipe.dury} type={recipe.type}
                    return <Recipe key={index} recipe={recipe}/>
                })}
            </div>
        </div>
    );
}

export default Recipes;