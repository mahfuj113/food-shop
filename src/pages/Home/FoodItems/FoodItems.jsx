import { useLoaderData } from "react-router-dom";
import FoodItem from "./FoodItem";
import Fader from "../../../Shared/Fader";

const FoodItems = () => {
    const foodItems = useLoaderData()
    return (
        <div className="max-w-7xl mx-auto mt-20">
            {/* use Fader components for fade in and fade out animation */}
            <Fader text='Our Foods'></Fader>
            {/* This is our foods components and display 6 food item */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
            {
                foodItems.map(foodItem => <FoodItem key={foodItem._id} foodItem={foodItem}></FoodItem>)
            }
            </div>
        </div>
    );
};

export default FoodItems;