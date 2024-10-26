import React, { useState } from 'react';
// import ReactPaginate from 'react-paginate';
import Blog_article from './Blog_article';
import Tasty_recipe from "./Tasty_recipe";
import Healty_food from "../Adds/Healty_food";
import Pagination from 'react-js-pagination';

const articles = [
    {
        title: "Crochet Projects for Noodle Lovers",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/Wade_Warren.png",
        article_src: "/recipes/19b579cff4368a1bfcba9e2f306d4c99.png",
    },
    {
        title: "10 Vegetarian Recipes To Eat This Month",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/jame.png",
        article_src: "/recipes/ed632c57bc587dbdac7f55f2088fd4ff.png",
    },
    {
        title: "Full Guide to Becoming a Professional Chef",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/youns.png",
        article_src: "/recipes/a4292927efc17ee09591649f7a1b7364.png",
    },
    {
        title: "Simple & Delicious Vegetarian Lasagna",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/elkam.png",
        article_src: "/recipes/463ad3eadcaf16571ba4f3a0ff32b879.png",
    },
    {
        title: "Plantain and Pinto Stew with Aji Verde",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/Ellon_musk.png",
        article_src: "/recipes/72edf0c22c3c10c3199734e1fb943b72.png",
    },
    {
        title: "We’re Hiring a Communications Assistant!",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "authors/john_smith.png",
        article_src: "/recipes/5ca2b1499887b1352b453e3a44d63b01.png",
    },












    {
        title: "10 Vegetarian Recipes To Eat This Month",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/jame.png",
        article_src: "/recipes/ed632c57bc587dbdac7f55f2088fd4ff.png",
    },
    {
        title: "Plantain and Pinto Stew with Aji Verde",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/Ellon_musk.png",
        article_src: "/recipes/72edf0c22c3c10c3199734e1fb943b72.png",
    },
    {
        title: "We’re Hiring a Communications Assistant!",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "authors/john_smith.png",
        article_src: "/recipes/5ca2b1499887b1352b453e3a44d63b01.png",
    },
    {
        title: "Crochet Projects for Noodle Lovers",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/Wade_Warren.png",
        article_src: "/recipes/19b579cff4368a1bfcba9e2f306d4c99.png",
    },
    {
        title: "Full Guide to Becoming a Professional Chef",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/youns.png",
        article_src: "/recipes/a4292927efc17ee09591649f7a1b7364.png",
    },
    {
        title: "Simple & Delicious Vegetarian Lasagna",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/elkam.png",
        article_src: "/recipes/463ad3eadcaf16571ba4f3a0ff32b879.png",
    },
















    {
        title: "We’re Hiring a Communications Assistant!",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "authors/john_smith.png",
        article_src: "/recipes/5ca2b1499887b1352b453e3a44d63b01.png",
    },
    {
        title: "Plantain and Pinto Stew with Aji Verde",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/Ellon_musk.png",
        article_src: "/recipes/72edf0c22c3c10c3199734e1fb943b72.png",
    },
    {
        title: "Crochet Projects for Noodle Lovers",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/Wade_Warren.png",
        article_src: "/recipes/19b579cff4368a1bfcba9e2f306d4c99.png",
    },
    {
        title: "10 Vegetarian Recipes To Eat This Month",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/jame.png",
        article_src: "/recipes/ed632c57bc587dbdac7f55f2088fd4ff.png",
    },
    {
        title: "Simple & Delicious Vegetarian Lasagna",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/elkam.png",
        article_src: "/recipes/463ad3eadcaf16571ba4f3a0ff32b879.png",
    },
    {
        title: "Full Guide to Becoming a Professional Chef",
        description: "for Noodle Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers Lovers Crochet Projects for Noodle Lovers Crochet Projects for Noodle Lovers for Noodle Lovers",
        article_author_name: "Wade Warren",
        date: "12 November 2021",
        article_author_src: "/authors/youns.png",
        article_src: "/recipes/a4292927efc17ee09591649f7a1b7364.png",
    },
]

export const   Tasties = [
    {
        type: "recipe",
        title: "Chicken Meatballs with Cream Cheese ",
        article_author_name: "Wade Warren",
        article_src: "/recipes/FEOI788FEW54FWE.png",
    },
    {
        type: "recipe",
        title: "Traditional Bolognaise Ragu",
        article_author_name: "Andreas Paula",
        article_src: "/recipes/3A21SDF321WEF32FWE1.png",
    },
    {
        type: "recipe",
        title: "Pork and Chive Chinese Dumplings",
        article_author_name: "Wade Warren",
        article_src: "/recipes/FEWOIJFL231FEW564.png",
    },
]

function Blog_articles() {
        const [activePage, setActivePage] = useState(1);
        const itemsPerPage = 6;
      
        const handlePageChange = (pageNumber) => {
          setActivePage(pageNumber);
        };

    const startIndex = (activePage - 1) * itemsPerPage;
    const paginatedItems = articles.slice(startIndex, startIndex + itemsPerPage);
      

    return (
        <>
            <div className="grid grid-cols-12 gap-10">
                <ul className="col-start-1 col-end-9 flex flex-col gap-4">
                    {paginatedItems.map((article, index) => (
                        <Blog_article key={index} title={article.title} description={article.description} article_author_name={article.article_author_name} date={article.date} article_author_src={article.article_author_src} article_src={article.article_src} />
                    ))}
                </ul>
                <div className=" col-start-9 col-end-13 flex flex-col gap-4">
                    <h1 className="text-2xl font-bold mb-6">Tasty Recipes</h1>
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
            <Pagination
                itemClass=""
                linkClass="bg-black border-2 border-black hover:text-black hover:bg-slate-300 text-white font-bold border rounded-xl h-10 w-10 flex justify-center items-center"
                activeLinkClass="bg-white"
                activeClass="[&>*]:text-black"
                innerClass="flex gap-2 mx-auto"
                linkClassNext="hidden"
                hideFirstLastPages={true}
                hideDisabled={true}
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={articles.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
        </>
    );
}

export default Blog_articles;