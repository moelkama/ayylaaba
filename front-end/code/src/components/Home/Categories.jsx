import Categorie from './Categorie';

const List = [
    {
        bg_color: "bg-gradient-to-b from-Breakfast_color_from to-Breakfast_color_to",
        name: "Breakfast",
        src: "/categories/breakfast.png",
        alt: "Breakfast",
    },
    {
        bg_color: "bg-gradient-to-b from-Vegan_color_from to-Vegan_color_to",
        name: "Vegan",
        src: "/categories/vegan.png",
        alt: "Vegan",
    },
    {
        bg_color: "bg-gradient-to-b from-Meat_color_from to-Meat_color_to",
        name: "Meat",
        src: "/categories/meat.png",
        alt: "Meat",
    },
    {
        bg_color: "bg-gradient-to-b from-Dessert_color_from to-Dessert_color_to",
        name: "Dessert",
        src: "/categories/dessert.png",
        alt: "Dessert",
    },
    {
        bg_color: "bg-gradient-to-b from-Lunch_color_from to-Lunch_color_to",
        name: "Lunch",
        src: "/categories/lunch.png",
        alt: "Lunch",
    },
    {
        bg_color: "bg-gradient-to-b from-Chocolate_color_from to-Chocolate_color_to",
        name: "Chocolate",
        src: "/categories/chocolate.png",
        alt: "Chocolate",
    }
]

export default function    Categories() {
    return (
        <div className="w-full">
            <div className="flex w-full justify-between items-center">
                <h1 className="font-bold text-2xl">Categories</h1>
                <button className="bg-slate-100 font-medium rounded-lg p-2">View All Categories</button>
            </div>
            <ul className="flex justify-evenly mt-10">
                {List.map((item, index) => {
                    return <Categorie key={index} bg_color={item.bg_color} name={item.name} src={item.src} alt={item.alt} />
                })}
            </ul>
        </div>
    );
}