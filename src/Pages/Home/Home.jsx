import Achievments from "./Achievments";
import Banner from "./Banner";
import BarChartComponent from "./BarChart";
import CategoryTabs from "./CategoryTabs";

import Reviews from "./Reviews";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <CategoryTabs></CategoryTabs>
           <BarChartComponent></BarChartComponent>
           <Achievments></Achievments>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;