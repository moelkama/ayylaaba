import Categorie from './Categorie';

const List = [
    {
        bg_color: "bg-gradient-to-b from-Breakfast_color_from to-Breakfast_color_to",
        name: "Breakfast",
        src: "https://s3-alpha-sig.figma.com/img/59ba/0d40/ae079fb4994abba251d7610744b0f8db?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HLqfZ3-dwNLehUfDecIutnNsDm7CO2Q2oHHj8q0HTNw9pR6xR9Z9Dc37V0R078xwiU0LLVXplXUYnPXePA6yrT8817wPxusqEhM~fJwhOqZjurDby~KbRhoFmsy47OwiSPbDXSzHuNuDf0b2y-EK9-XUsL19KGUVsz4WJIGetHakJUbh30Hm-6Ee1~2S7gqQLhMPk6CANOpUGqY~RoeDAWNZmgY9JNj5SjGYs7Lk0Ol8Y6W3DZNLLImlFZomgmvs4FzKLE3uyNvP1sQqiET4tKj5dzv8A0OHP8k9QhJcRSdQ-JLaiV~sbVdQfXJ~jbZHG3rii1LVzOuTKYnx8gZF0A__",
        alt: "Breakfast",
    },
    {
        bg_color: "bg-gradient-to-b from-Vegan_color_from to-Vegan_color_to",
        name: "Vegan",
        src: "https://s3-alpha-sig.figma.com/img/3c3e/ac8a/34ec2f46023c1f2f2c59bd5daafb19fc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7g-W0UJJtUBTRhetKmKWb1j1r-7-pztgXbk1kgB7ZnbdO7t-Kkxhxbv3OxTdVmYLpfvAQW95rQEzbf-V5zO0JssqTAz6B0TEZ8sYoKAkheYZYvOAk2O6FtN9uM9A7MGKOXe9-YXR~A0jA80dSD~l-O3mmDqmLR5ShE5wiTGmGWzTxMX7k9cdzVG~RB5Qg0xn94wxBuunkZfr1Y4HF~I-xwcLR28RHGVU0wtALAZ~~QDS0ADILv5UcAjhD9ST0qK9tjJE1cqWVzFIb25kHnY92A2oaEJcLTTsAm0OZ-wYwykbxinF~zZiCtWIsElxoLRpfnwIlt0I~X2lh6tQWxjUA__",
        alt: "Vegan",
    },
    {
        bg_color: "bg-gradient-to-b from-Meat_color_from to-Meat_color_to",
        name: "Meat",
        src: "https://s3-alpha-sig.figma.com/img/fe1b/d4dd/6dd35a1bebf0dd288cb7c6b7c0f87e22?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GeUXdjTjtkFYepoUOUao6BVe0I7EBRSpf~Vt6jvB94nepUlYnwT8FeKNIDG1WyrZ2e--Ts5MIj3FVR4aXUwsxXSou3Npdd9xgXVUwPLi7q6cyTrZGfIwBZQ8OPJsd98eQNyPsQebLV4wFwjiEV8Ll3HhxoJ2QRTFP-woJrZwl0r5wfbnf0aiikwd9UMFKMTA~TGza2KEPfle53oGimZc2iYp3YU0aar4nVPEGWMW2HWtiPOmRksFlfHasoTdZJSBh4fwMOWanGlF~XrX3sRFZXOmtrFreRMPipNQz4kREP-cBBRkTH17~lHQ8PAC8V0FpZuVVDRzDr9zOaoROIN~PQ__",
        alt: "Meat",
    },
    {
        bg_color: "bg-gradient-to-b from-Dessert_color_from to-Dessert_color_to",
        name: "Dessert",
        src: "https://s3-alpha-sig.figma.com/img/06f6/4454/2b82304f25a0909e8cd668c0fb074356?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D4M4g5h2twM3qZK9~hT9wIvL5~tLSnVM6ZpSsron1xuULSpw-v0AyjLkiKkk8zrlvGZ7dibfHen7VHnJrQxANovjbPz-M5JWZoCJAMvkk38cFZoNwyJHThyMq17OuMpn1-juQK3lt5vcneECS7zaEZG9Uii29czS~rvi2i3YHh3Fw1MmL0YO7ectMZ1IMbE~NpYy-kPSVUKxlqiSl~QHdwltp9nGQtO9x3N2m9I6r3ZCQBZDe5JvGBHm1iSMJmbGnddsSkjBfExySnvdtDLe~-GiTrDaFYpXPiNYWUutjcEyxD9jTO9LU9OoqE~Y9iTijJ4wTLwUuLnY2yPAoLhILQ__",
        alt: "Dessert",
    },
    {
        bg_color: "bg-gradient-to-b from-Lunch_color_from to-Lunch_color_to",
        name: "Lunch",
        src: "https://s3-alpha-sig.figma.com/img/fe1b/d4dd/6dd35a1bebf0dd288cb7c6b7c0f87e22?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GeUXdjTjtkFYepoUOUao6BVe0I7EBRSpf~Vt6jvB94nepUlYnwT8FeKNIDG1WyrZ2e--Ts5MIj3FVR4aXUwsxXSou3Npdd9xgXVUwPLi7q6cyTrZGfIwBZQ8OPJsd98eQNyPsQebLV4wFwjiEV8Ll3HhxoJ2QRTFP-woJrZwl0r5wfbnf0aiikwd9UMFKMTA~TGza2KEPfle53oGimZc2iYp3YU0aar4nVPEGWMW2HWtiPOmRksFlfHasoTdZJSBh4fwMOWanGlF~XrX3sRFZXOmtrFreRMPipNQz4kREP-cBBRkTH17~lHQ8PAC8V0FpZuVVDRzDr9zOaoROIN~PQ__",
        alt: "Lunch",
    },
    {
        bg_color: "bg-gradient-to-b from-Chocolate_color_from to-Chocolate_color_to",
        name: "Chocolate",
        src: "https://s3-alpha-sig.figma.com/img/4bcf/2f69/90afd1fe52d379e76c9c1d9f59ddd6f4?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DkW2tGqBXyzJqUUplpZ5iFe8K~9VbI9gL2Vt9GBpzLq~P01RRIRDk3hfn9P13dedPorC7P11M0optqHo45VeOIaf8lgTxBahje3lYiovAd-Ugjmz8URZLPf3j7O7-JmwDD6tnefYmoBJaRZwkqhhA40Po2jAVHEV~LuKi6m6BM2Cr9-Ct2-9KkpGrb0ICpfIUA2rN0HhR64rBAlmirTN-rKoPXgMn8NhcB2KO4A5DFT1nSSTGAYf52X8ksGIfG3olymidH3yrsjttDk0oQyuiSd9wAo1sfFmszYbkl6VWQc46biecDg7GSGPL7utb53j5B~ply4KYFCe4K21yTt~cQ__",
        alt: "Chocolate",
    }
]

function    Categories() {
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

export default Categories;