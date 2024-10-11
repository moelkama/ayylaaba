import Recipe from '../Recipe/Recipe';

const recipes = [
    {
        description:"Big and Juicy Wagyu Beef Cheeseburger",
        src: "https://s3-alpha-sig.figma.com/img/f699/5460/a4292927efc17ee09591649f7a1b7364?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkijQUsuBl7L-uD1qhEq9Qx~csTZSJOc2MLXEfCwCtOm4jT-WK9UOYjK0QkyoeKl-sPEQC354V9BjcJIEo8T4GQRMnoEzUscd5kGoAPlptgtw3YLo6Yv7Wj-afXF-gnmG~p71NWiwfRGPtTzZSCQZrBpAVOBqUc2eJkJ027~TtkVVA8yCWUUHzLVnw3jW6YrfIOSUd6UvJ4S3cUeFyvo7JfKVo0pl6OzHRlWG8nLIpeXot9T9DLLO6DScQQ2-BfZPQQ2fvywomFZcOJ-BE60IJa~MoxnF9kfVXKDFF-VsLZj9stvbOcZBf2kOCuC9vJFPvZZK80pc8R7i4o5Ppc1SA__",
        dury:"30 min",
        type:"Snack",
    },
    {
        description:"Fresh Lime Roasted Salmon with Ginger Sauce",
        src: "https://s3-alpha-sig.figma.com/img/8513/aab8/ce4a091fb4a7a972e7f0ba7d653cedf2?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wj1fuVd8Go~dIgCPzAOxkmCuN~rNf8D9PWd3qSlGv8s3RRrucmZ8rh2puoUa22hxXrjUcMMbzTCDD94HqMRQ7cgvdOynA21Ul1nh9~kjjQsy6gs0coN~fVxlqaaJNCg5pQWFwsp6NWvLNEp1Nu-OIKhFZxoGV0zlpMHnti3pDEowfXQ~mvhg3TJT5135oKzhKqPppma70NcdW47ECQ2zzuvL2YfvwrKKmbR0sW0iGibGlRwx7Hb92vTsPM7Koo9PkRyCbEGf2M4Z1EMem6eyQe3gPFPtniKwgXRhy87gysd5UpjVIrblmMJYGq4xULUtucckR66qwxBREti6tFMwrA__",
        dury:"30 min",
        type:"Fish",
    },
    {
        description:"Strawberry Oatmeal Pancake with Honey Syrup",
        src: "https://s3-alpha-sig.figma.com/img/91b8/8940/14c8464b47399978beaef54c6ab1a1ce?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bl8JVxDHPhL2jKxFzMoj7hmTguiiVnXzqTK8VtbESTFzBcOGH8DYa8557IsySLZpml7TNf3snqWBDfF4t6~bdTaKiMP8Nps16Am~Y3ua8lxX5Sd8UKdQfYGxEgCnGBMgGNdKFUkzLOlPNFzfdQBsowdTzUujYOxdqXSC6HbEBJhAilDaA2Qp34-eQHZljB4vY3BDRNk5Jgw-nP~HKllYJTqqSCK0KkghD-ecsxqab5M3g0~HTO9KoF1a~HmWwK-s1pidfOOoIEnLcyScstCLCNLEG9KAExEojc4O54bGAboAUnJd0MmyA0nvP6i3UWJOu0kMFZwx~PTs1~aGJd5z2Q__",
        dury:"30 min",
        type:"Breakfast",
    },
    {
        description:"Fresh and Healthy Mixed Mayonnaise Salad",
        src: "https://s3-alpha-sig.figma.com/img/9bf6/c3de/19b579cff4368a1bfcba9e2f306d4c99?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aog9bUsre1D-CJHPp8vQdvtRCNge2LLq-b-UM9Ys3wkdRb8hnEEC-rNTeBnKsifa4X05s6mHkT-DALof3D3gRZUxul~2RXEh4~QVldUhGjSXq0McUQEWm6GxieVyinG0aVumGlGpylQaXYGkj4nUlzB9T1cTbZejoYmVobGL7HLCdnJjZdmIlZ3IDg9zZ4s6t4DYyhnfxyMDdjUbb7VhcNOBswJ~gguO-OYDzj~b02bqwoGc~ksHRtsxnCAoiscpBTL1cJsuJeLiqBv~oYT6pIP6U-x5fBxg8jCyOh~aWIYPKljnsvHg41f~KmXrJZCpYDcIYemuE1yH~JPaoCSV2g__",
        dury:"30 min",
        type:"Healthy",
    },
    {
        description:"The Best Easy One Pot Chicken and Rice",
        src: "https://s3-alpha-sig.figma.com/img/7a76/4b9c/5407edb219c5e9f8e502f796fb457d5a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F28wbitwuPXYir2FzVr68c3~QS1XRTMlozwe8~84KCG9QmWXV8wnwUW0-sYr5OmrdWikzaY5l0ERnA71bIZslS0V0q78R9L-XeofSbxy6PksGmIWhSiA59C5TjJP8dpdmttiCxYN0-b16L5sJZpOFnFyBcddct5S1LTjW-DubJHuGFKv-AiX0KDG5yla1sjtitmwaPmzCQ6KX6-4Vc~kkmA8r1B1W0qwbR22yjFKis6Fg8m1qi2C9hMdMXnJ6SxVHawvwya~A-yjcvedxQkANBJBDmQaGsazDkGqRpnJ-TfZUL85L~kOeAndhp2wRnRXHa6rgSelN6G6Xs1UhBW81A__",
        dury:"30 min",
        type:"Snack",
    },
    {
        description:"Fruity Pancake with Orange & Blueberry",
        src: "https://s3-alpha-sig.figma.com/img/6673/d9e2/6c13c0ea71b38a25d4146a33bc1c2493?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TQDB~biW4vd6N5b0DQvE1i6HP3cRVjA95DNnHvfhC5Oo07avYFNLMva9iKOPELJC6e~f-xeCCzLgVssmO6OihVYvuN4FejjQhT4AQKM68k~7nhGWVf3qLBcBrzXpLiIIiOFnbu3cd022ZDqTZ3XG-30r-uWvG4BkFtDIACAc7iM7u8tomQpb2I3BcNHhil~tbcv1bjkqxsYhu4mFsj8kt5bND407cYVuxL29faNcePqtQlw939FEw2QYAb6VnEY3vTjAeZNiUw4JUNMDetcNz5QZskQc~HIjIDlevqkrYt9EzhVxQ3xxcDl7-mSe8UKYrKx8-Cp1Xk4l444~6nDGQw__",
        dury:"30 min",
        type:"Sweet",
    },
    {
        description:"The Creamiest Creamy Chicken and Bacon Pasta",
        src: "https://s3-alpha-sig.figma.com/img/d63b/ed8b/54a7062615139e095517d10e90afcb86?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kvp4b3R-E60DnUODvbbgkc65~FOWuJAat9a7iVMn3zhtUsxu3KG67T2zXk~5jyckNBc1uwm12V1kCsJE~ZgtBCAszN-RFhNup-8uWnILgfvEjXjB2WiEMZVIdPWVfL-0M2e3UZNUFBf4r90QWBLnde9e-ZEvp9l2GoOjJ~ubMPJRUx6Mn0eqaRE5X-tNkznm3P7dx9Eq1D3L3FMZZGQRjgMhMtiQH1lthgvwokMgLG--fjYqLptGhh11iy-Uc2mmeO2E9OGXoYvtTfe1yX9Kvz-sLKrrXgXvnAPn-zaJWyDEiZWewO-jNLZAR0Hr~SJ21KmzzR7cP-VKoSWP8ZbP~A__",
        dury:"30 min",
        type:"Noodles",
    },
    {
        description:"Chicken Meatballs with Cream Cheese",
        src: "https://s3-alpha-sig.figma.com/img/ce11/6e29/44c629a3e4edbea08c307dbfbb67d899?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7VCMc-c-yE~uYMFYUeHoz8e4LNDIzY6L5kGfrjw7J7bpn9LzoN-H8oJMHwM9tA2j68akMticAtsONJkxE05rEpVnolcbjv-fpgDE5b5OWlSEPwLUUG9aloW0afsG38Kos5wPWfbwAHj9P~waqHckCq2py0MDrVjlq4H~Hd60PNWNeuTXM0LVQav-VuXVbtkKmJEChAbxf51SnjQshe89Dby-3Zar0SNKensIMFg6VkfypCO7nFEDfEgArHQ6dYhMhv0ubJ709it991FODUxMZX0MHJnc5ln3C7BMDNHtQ3KStjjcoxoYQMxcVrIcb-u-IySK5tT0YOLPqK808niOw__",
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