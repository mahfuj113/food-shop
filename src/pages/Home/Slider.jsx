
const Slider = () => {
    return (
        <div className="carousel w-full">
            {/* slider 1 */}
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img src='https://i.ibb.co/FHpKFPR/6024960.jpg' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full pl-12">
                    <div className='text-white w-full md:w-1/2 space-y-7'>
                        <h1 className='text-xl md:text-6xl font-bold'>Affordable Price For Food</h1>
                        <p>Our mission is simple but significant: to bring you a delightful culinary experience that transcends the ordinary. We are passionate about food, and it shows in every dish we serve. </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline bg-white btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slider 2 */}
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src='https://i.ibb.co/xMd4H0n/food-facebook-cover-20.jpg' className="w-full h-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full pl-12">
                    <div className='text-white w-full md:w-1/2 space-y-7'>
                        <h1 className='text-xl md:text-6xl font-bold'>Where Every Bite Tells a Delicious Story</h1>
                        <p>Our mission is simple but significant: to bring you a delightful culinary experience that transcends the ordinary. We are passionate about food, and it shows in every dish we serve. </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline bg-white btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slider 3 */}
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src='https://i.ibb.co/3mC8tLG/5547788.jpg' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full pl-12">
                    <div className='text-white w-full md:w-1/2 space-y-7'>
                        <h1 className='text-xl md:text-6xl font-bold'>Where Food and Memories Are Made</h1>
                        <p>Our mission is simple but significant: to bring you a delightful culinary experience that transcends the ordinary. We are passionate about food, and it shows in every dish we serve. </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slider 4 */}
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src='https://i.ibb.co/5vQ3DFk/Food-Menu-Facebook-Banner-Graphics-25943211-1.jpg' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full pl-12">
                    <div className='text-white w-full md:w-1/2 space-y-7'>
                        <h1 className='text-xl md:text-6xl font-bold'>Experience Food Paradise with Food shop</h1>
                        <p>Our mission is simple but significant: to bring you a delightful culinary experience that transcends the ordinary. We are passionate about food, and it shows in every dish we serve. </p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;