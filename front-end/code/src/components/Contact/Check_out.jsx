import Recipe from "../Recipe/Recipe"

const recipes = [
    {
        description:"Big and Juicy Wagyu Beef Cheeseburger",
        src: "recipes/54SDFWE5F4WE23DS1F.png",
        dury:"30 min",
        type:"Snack",
    },
    {
        description:"Fresh Lime Roasted Salmon with Ginger Sauce",
        src: "recipes/463ad3eadcaf16571ba4f3a0ff32b879.png",
        dury:"30 min",
        type:"Fish",
    },
    {
        description:"Strawberry Oatmeal Pancake with Honey Syrup",
        src: "recipes/ed632c57bc587dbdac7f55f2088fd4ff.png",
        dury:"30 min",
        type:"Breakfast",
    },
    {
        description:"Fresh and Healthy Mixed Mayonnaise Salad",
        src: "recipes/F3SD2A132SDF32FD.png",
        dury:"30 min",
        type:"Healthy",
    },
]

export default function Check_out(props) {
    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-center text-2xl font-bold">{props.title}</h1>
            <div className="grid grid-cols-4 gap-6">
                {recipes.map((recipe, index) => 
                {
                    return <Recipe key={index} recipe={recipe} />
                })}
            </div>
        </div>
    )
}