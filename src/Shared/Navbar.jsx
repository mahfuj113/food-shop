import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/offer'>Offer</NavLink></li>
    <li><NavLink to='/foodItem'>Our Food</NavLink></li>
    <li><NavLink to='/challenge'>Challenge</NavLink></li>
    <li><NavLink to='/review'>Review</NavLink></li>
    <li><NavLink to='/supplier'>Supplier</NavLink></li>
    <li><NavLink to='/relatedShop'>Related Shop</NavLink></li>
    <li><NavLink to='/about'>About Us</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        // This is navbar section user see navbar in all pages
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Food Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;