import Categories from './Categories';
import Recipes from './Recipes';
import Instagram from './Instagram';
import { Fragment } from 'react';
import Nav from './Nav';
import Delicious from './Delicious';
import Adds from './Adds';
import Chef from './Chef';
import Deliciousness from './Deliciousness';

const Home = () => {
    return (
        <Fragment>
            <Adds />
            <Categories />
            <Recipes />
            <Chef />
            <Instagram />
            <Delicious />
            <Deliciousness />
        </Fragment>
    )
}

export default Home;