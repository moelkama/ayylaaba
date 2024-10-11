import { Fragment } from 'react';
import Blog_title from './Blog_title';
import Serach_article from './Search_article';
import Blog_articles from './Blog_articles';
import Deliciousness from '../Home/Deliciousness';
function    Blog() {
    return (
        <Fragment>
            <Blog_title />
            <Serach_article placeholder="Search article, news or recipe..."/>
            <Blog_articles />
            <Deliciousness />
        </Fragment>
    )
}

export default Blog;