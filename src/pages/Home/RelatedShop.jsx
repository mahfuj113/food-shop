import Marquee from "react-fast-marquee";
const RelatedShop = () => {
    return (
        // related shop and use marquee package
        <div className="mt-48 lg:mt-0 p-4">
            <h1 className="text-3xl font-bold text-center space-y-10 mb-6">Related Brands</h1>
            <Marquee pauseOnHover>
                <img className="mr-10" src="https://i.ibb.co/bNhZtQm/rsz-63f0729263ea2212dc19bb79-logo-4-removebg-1.png" alt="" />
                <img className="mr-10" src="https://i.ibb.co/74Nzn27/rsz-package-50.png" alt="" />
                <img className="mr-10" src="https://i.ibb.co/VH7bnzf/rsz-1package-49.png" alt="" />
                <img className="mr-10" src="https://i.ibb.co/1ZQsPZz/images.jpg" alt="" />
                <img src="https://i.ibb.co/64sDYvt/rsz-download.jpg" alt="" />
            </Marquee>
        </div>
    );
};

export default RelatedShop;