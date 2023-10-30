
const Review = () => {
    return (
        <div className="p-4">
            <h2 className="text-center text-[#594ef3] text-3xl font-bold my-10">Customers Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {/* review person 1 */}
                <div data-aos='flip-right' className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/p0Q1gdM/jane-smith.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Jane Smith</h2>
                        <p>I recently had the pleasure of exploring food shop website, and I must say, it was an exceptional experience. The website is a culinary delight in itself! Navigating through the pages, I was met with an array of tantalizing images and descriptions of the dishes on offer.</p>
                        <div className="rating py-6">
                            <input type="radio" name="" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="" className="mask mask-star-2 bg-orange-500" checked />
                            <input type="radio" name="" className="mask mask-star-2 bg-orange-500" />
                        </div>
                    </div>
                </div>
                {/* review person 2 */}
                <div data-aos='fade-down' className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full" src="https://i.ibb.co/KjqmfR8/john-doe.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Alex Rodriguez</h2>
                        <p>The website is visually appealing and also user-friendly, making it a breeze to find what I was looking for. The menu section is a treasure trove of diverse and delectable options. The vivid images of the dishes accompanied by detailed descriptions had my mouth watering.</p>
                        <div className="rating py-6">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                        </div>
                    </div>
                </div>
                {/* review person 3 */}
                <div data-aos='flip-left' className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full" src="https://i.ibb.co/Db7tMf5/watson.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Rachel Thompson</h2>
                        <p>What truly impressed me was the seamless ordering process. With just a few clicks, I was able to place my order and even customize it to my liking. The checkout process was quick and secure, providing multiple payment options for added convenience.</p>
                        <div className="rating py-6">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;