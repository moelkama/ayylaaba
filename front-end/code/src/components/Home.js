import Categories from './Categories';
import Recipes from './Recipes';
import Instagram from './Instagram';
import { Fragment } from 'react';
import Nav from './Nav';

const Home = () => {
    return (
        <Fragment>
            <Categories/>
            <Recipes />
            <Instagram />
        </Fragment>
    )
}

export default Home;