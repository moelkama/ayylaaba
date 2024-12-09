import Recipe from '../Recipe/Recipe';

const recipes = [
    {
        description:"Big and Juicy Wagyu Beef Cheeseburger",
        src: "/recipes/3A5F4D3DSA4F35D4SF.png",
        dury:"30 min",
        type:"Snack",
    },
    {
        description:"Fresh Lime Roasted Salmon with Ginger Sauce",
        src: "recipes/3A21SD32LIFKF32FWE1.png",
        dury:"30 min",
        type:"Fish",
    },
    {
        description:"Strawberry Oatmeal Pancake with Honey Syrup",
        src: "recipes/3A21SD321FYUF32FWE1.png",
        dury:"30 min",
        type:"Breakfast",
    },
    {
        description:"Fresh and Healthy Mixed Mayonnaise Salad",
        src: "recipes/3A21SDF321WEF32FWE1.png",
        dury:"30 min",
        type:"Healthy",
    },
    {
        description:"The Best Easy One Pot Chicken and Rice",
        src: "recipes/FDS321F32SDF13F2SD1.png",
        dury:"30 min",
        type:"Snack",
    },
    {
        description:"Fruity Pancake with Orange & Blueberry",
        src: "recipes/19b579cff4368a1bfcba9e2f306d4c99.png",
        dury:"30 min",
        type:"Sweet",
    },
    {
        description:"The Creamiest Creamy Chicken and Bacon Pasta",
        src: "recipes/23FASD5DSF321DS53F1.png",
        dury:"30 min",
        type:"Noodles",
    },
    {
        description:"Chicken Meatballs with Cream Cheese",
        src: "recipes/54SDFWE5F4WE23DS1F.png",
        dury:"30 min",
        type:"Meat",
    },
]

function    Delicious() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between">
                <div className="ml-8 w-[400px]">
                    <h1 className="text-4xl font-bold">Try this delicious recipe to make your day</h1>
                </div>
                <div className="mr-80 w-[500px]">
                    <h1>ipsum dolor sit amet, consectetur adipisicing elit,  reprehenderit in voluptate velit esse nulla pariatur.</h1>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {recipes.map((recipe, index) => {
                    return <Recipe key={index} recipe={recipe} />
                    })
                }
            </div>
        </div>
    )
}

export default Delicious;