import PropTypes from 'prop-types'

const FoodItem = ({ foodItem }) => {
    const { img, strMeal, price } = foodItem
    return (
        <div data-aos='zoom-in' className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body bg-base-200">
                <h2 className="card-title text-orange-500">{strMeal}</h2>
                    <p className='text-lg'>Price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-orange-500 border-0 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};
FoodItem.propTypes = {
    foodItem: PropTypes.object,
}
export default FoodItem;