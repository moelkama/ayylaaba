import Add from "./Add";
import React, { Fragment, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const adds = [
    {
        author:{
            name: "John Smith",
            date: "15 Mars 2022",
            src: "https://s3-alpha-sig.figma.com/img/2649/d4c7/dab521f6cd5545aa07040c074c97ef51?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U25fKgthtnNUE5lPCaSho7afzcOpYt~5uirwHJZ5El-hOWdQP6Zp6RFJfgVzu7wElGKhN9qt66s84Cb7aPaiC9POSXTevzuL82ZObuzwchq~07Oa1NGdkpctNwuXjRpKci6v6lTUJjmRYGAieup0Oy4lKogzUmSR2DYQLkiQvoD5Wx14bjTOzpG-VOZAi7268rxxorKiy-8EnaczUs0lEpI~z9Nwr3UWnp~4mwbteJbktS07OWOfe6G4qA6t5L~UhGxzkLfUKToejAg-yEqGRjuXP5~pfecmuybdqcQCofIBxJeolacPzBUfqk2hJ1x0H6~~cAfiL8sKFkCBpvL7TQ__",
        },
        title: "Spicy delicious chicken wings",
        prep_dury: 15,
        cooking_dury: 30,
        description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
        src:"https://s3-alpha-sig.figma.com/img/a685/0364/6edfd21071175cb80c78475e2182df7b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DS1K1mCxNkCikVdJV9KSfBR04bTG4kF16tcydRAg6BUJanRFZnOka0R4BOV-S4vzn0tSL4fN2T1ROLTLlUEOZUCksdoYsmj-GDAYEzOOXU4nLs0oLnjQ1zOfyErTyz6dCoYPmJEB3iTb86yG~dWMw4n2CXGQd2o6vQNNk10sFXjvBN9tW9lbGgMrhxeoQWVCJ-K3cEDQvfYWrZH34VHquVxFOcXtmvlgB5XPX3oq59A2m33PgeKjb3ZZdEY8D545DlXjgx4pw~q2N8sVjDXQAPq-jFMHs2bcEN7TC7s9DnPIFtqkK8QXoF-Jdou0KL5DAdEho0mAZv7Z31RQjyKpEQ__",
    },
    {
        author:{
            name: "Elon musk",
            date: "30 April 2019",
            src: "https://s3-alpha-sig.figma.com/img/0430/4e97/1f429cc0f3282d0310257ed61402bc86?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEGBUDf-lXFVdPw9bsiiE90j76pR4Pvh8Q9~KwCKrGr-ghDGjKUm1-WYhXEXvCrMsyWBVbbMa3xCgK-Vsz9Vt6ba5a0C0HA99ayy795J4k79QRciLXTOk0dReujeDfxbjwd0dKtdFKxDt6DEsyOp4FoncNwlhhwB9-uZNr5sHzQ4xf3DhcqzeN3t6kN5e4ilY2-7nZ7Sw3b5vHn9rFV6hRJILHHXYTJcwBJTo7WDm70tEFW~qeD648oZQq8PxoA~hn4lQjX0hqGm73Bk5cNevbiPZlalmoraq1fAtwh2Wgj8HUjUAbW0mVUo091~OEtq4KiUW4jeCX8LNas9oTuiew__",
        },
        title: "spaghetti with tomato sauce",
        prep_dury: 15,
        cooking_dury: 25,
        description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
        src:"https://s3-alpha-sig.figma.com/img/94d1/9365/107208024a316bdda445c55742452207?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iuF~4-mM144tt3uiVZpoAYaWKcRpXGbwHI5QnvR9CigFx4S4C38kKEsjTd6E8CVuER5M~8dG7EgYxKR8sFgu95h2RLMLmNXVy~G-Wci32qRlzeDH~gMOl7Rh1bz7oDU55IKJFlIoqT97JQDHzWhz97ND6WRKOLdkCaz-e-NO~yYgeFHgc~obxhbRx3hm-nNmW-JtITrrN0o-KBDi4lqBrD7K2pv07gOnL9nnjojGwLqwaIRmEKUcdau1kfee9V3g2yg97-SPWBAeIaxcZMBYwTu-Er25ybmZGQu23f4tJKzx4tVNBlx8PXuF~TBtXnSuAJeeMj~4tSiWaGHzvBB9Tg__",
    },
    {
        author:{
            name: "John Smith",
            date: "15 Mars 2022",
            src: "https://s3-alpha-sig.figma.com/img/f29f/c8ac/60f88d829be2b6014e31d49c3a39865b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U4FWKChtbmS4b7jwqp2Zcxrb95ZopGqnOlAjplw3EqeapTt9N~a1IUsX4G13X2ebYJR0esMz4Q4hgfgMPCtvjwcBMx~HMJAdPfAHPugaK7iyY5a0FL4ZdwTptK6yMSeo-fPnjJDoWhUZai14CUMIhit~lQbSl7hY~6gY0p9TGmHsx05d93HF6LutXfedih8ScaggH9ENj16YI~em2wP5sPhdDcc95J985jP8YX2PEd1atXZL7mh1zik2SVNsYVumH5Fq3pjLSh-xK5YdeUAzoHgLI-1SZQdAjKWR3-AXdNWG-6aNuLvIW5YPbBkf5ZhjXkMRQvyu3gN3v1zEmXk7pw__",
        },
        title: "salted caramel chocolate cake",
        prep_dury: 5,
        cooking_dury: 15,
        description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
        src:"https://s3-alpha-sig.figma.com/img/91b8/8940/14c8464b47399978beaef54c6ab1a1ce?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bl8JVxDHPhL2jKxFzMoj7hmTguiiVnXzqTK8VtbESTFzBcOGH8DYa8557IsySLZpml7TNf3snqWBDfF4t6~bdTaKiMP8Nps16Am~Y3ua8lxX5Sd8UKdQfYGxEgCnGBMgGNdKFUkzLOlPNFzfdQBsowdTzUujYOxdqXSC6HbEBJhAilDaA2Qp34-eQHZljB4vY3BDRNk5Jgw-nP~HKllYJTqqSCK0KkghD-ecsxqab5M3g0~HTO9KoF1a~HmWwK-s1pidfOOoIEnLcyScstCLCNLEG9KAExEojc4O54bGAboAUnJd0MmyA0nvP6i3UWJOu0kMFZwx~PTs1~aGJd5z2Q__",
    },
]

function    Adds() {
    return (
        <div>
            <Swiper
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="blue-500"
            >
            {adds.map((add) => {
                return (
                    <SwiperSlide><Add add={add} /></SwiperSlide>
                )
                })}
            </Swiper>
        </div>
    )
}

export default Adds;