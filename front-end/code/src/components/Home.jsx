import Categories from './Home/Categories';
import Recipes from './Home/Recipes';
import Instagram from './Home/Instagram';
import { Fragment } from 'react';
import Delicious from './Home/Delicious';
import Adds from './Home/Adds';
import Chef from './Home/Chef';
import Deliciousness from './Home/Deliciousness';
import PaginatedComponent from './Home/tst';

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
            <PaginatedComponent />
        </Fragment>
    )
}
   
export default Home;