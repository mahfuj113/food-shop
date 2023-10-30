import { useEffect } from "react";
import Footer from "../../Shared/Footer";
import FoodChallenge from "./FoodChallenge";
import FoodItems from "./FoodItems/FoodItems";
import RelatedShop from "./RelatedShop";
import Review from "./Review";
import Slider from "./Slider";
import Supplier from "./Supplier";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <div>
            {/* This is slider components also have 4 slider */}
            <Slider></Slider>
            <div className="max-w-7xl mx-auto">
                {/* This is Food items components also have 6 food items */}
                <FoodItems></FoodItems>
                {/* This is food challenge components */}
                <FoodChallenge></FoodChallenge>
                {/* This is customer review components */}
                <Review></Review>
                {/* This is company supplier components */}
                <Supplier></Supplier>
                {/* This is related brand components */}
                <RelatedShop></RelatedShop>
            </div>
            {/* This is footer */}
            <Footer></Footer>
        </div>
    );
};

export default Home;