import { Helmet } from "react-helmet-async";
import Achievments from "./Achievments";
import Banner from "./Banner";
import BarChartComponent from "./BarChart";
import CategoryTabs from "./CategoryTabs";

import Reviews from "./Reviews";
import Progress from "./Progress";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CareerNest || Home</title>
            </Helmet>
           <Banner></Banner>
           <CategoryTabs></CategoryTabs>
           <BarChartComponent></BarChartComponent>
           <Achievments></Achievments>
        <Progress></Progress>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;