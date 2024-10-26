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
            src: "/authors/john_smith.png",
        },
        title: "Spicy delicious chicken wings",
        prep_dury: 15,
        cooking_dury: 30,
        description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
        src:"/recipes/OJWEOIJ5FWE3215S.png",
    },
    {
        author:{
            name: "Elon musk",
            date: "30 April 2019",
            src: "/authors/Ellon_musk.png",
        },
        title: "spaghetti with tomato sauce",
        prep_dury: 15,
        cooking_dury: 25,
        description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
        src:"/recipes/OILFIJW546F4EWF53WE.png",
    },
    {
        author:{
            name: "John Smith",
            date: "15 Mars 2022",
            src: "/authors/john_smith.png",
        },
        title: "salted caramel chocolate cake",
        prep_dury: 5,
        cooking_dury: 15,
        description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
        src:"/recipes/WEOI231FWE52FWE21FE.png",
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