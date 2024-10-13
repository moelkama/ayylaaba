import Recipe from "../Recipe/Recipe"

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