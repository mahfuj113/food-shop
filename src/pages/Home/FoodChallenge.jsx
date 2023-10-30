const FoodChallenge = () => {
    return (
        <div>
            <div className="text-center mt-10 space-y-5">
                <h1 className="text-4xl ">Food challenge</h1>
                <h1>Lets take the challenge</h1>
                <p>Welcome to our Food Challenge Extravaganza, where the brave and the hungry come to test their limits! Are you ready to take on some of the most epic culinary challenges? From spicy wings to monstrous burgers, we have got a lineup of gastronomic battles that will push your taste buds and appetite to the max. Join us and become a food champion</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6 mt-6">
                {/* challenge 1 */}
                <div data-aos="fade-down-right" className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/7zRNFMH/rsz-220928160118-20-spicy-dishes-birds-eye-chilis.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Spicy Wings Challenge</h2>
                        <p>Eat as many spicy wings as you can in 10 minutes.</p>
                        <p>No drinks allowed during the challenge.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-orange-500 text-white border-0 btn-primary">Take Challenge</button>
                        </div>
                    </div>
                </div>
                {/* challenge 2 */}
                <div data-aos="zoom-in-down" className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/L6RQWyd/rsz-r49a-monster-burger-and-bbq-burger.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Burger Monster Challenge</h2>
                        <p>Finish our giant burger with all the toppings in under 30 minutes</p>
                        <p>Must eat the entire burger, including the side of fries.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-orange-500 text-white border-0 btn-primary">Take Challenge</button>
                        </div>
                    </div>
                </div>
                {/* challenge 3 */}
                <div data-aos="fade-down-left" className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/SJF3Kw5/rsz-805c43-5542f048f9c04c508280d19fae91e797-mv2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Spicy Wings Challenge</h2>
                        <p>Eat as many pizza slices as you can in 20 minutes.</p>
                        <p>Must finish each slice completely, including the crust.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-orange-500 text-white border-0 btn-primary">Take Challenge</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodChallenge;