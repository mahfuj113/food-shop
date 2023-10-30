import {FaFacebookF, FaGithub, FaTwitter, FaLocationDot,FaPhone} from 'react-icons/fa6'
import {BiLogoGmail} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        // This is footer section
        <footer className="footer p-10 mt-14 bg-base-200">
            <div>
                <header className="footer-title">Contact Info</header>
                <p className="flex items-center gap-2"><FaLocationDot></FaLocationDot>Parbatipur, Dinajpur</p>
                <p className="flex items-center gap-2"><FaPhone></FaPhone>+88 01797-581507</p>
                <p className="flex items-center gap-2"><BiLogoGmail></BiLogoGmail>md.mahfujhasan894@gmail.com</p>
            </div>
            <div>
                <header className="footer-title">Company</header>
                <Link className='hover:underline' to='/about'>About us</Link>
                <Link className='hover:underline' to='/contact'>Contact</Link>
            </div>
            <div>
                <header className="footer-title">Social Links</header>
                <a href='https://www.facebook.com/profile.php?id=100009437794344' className="link link-hover text-2xl"><FaFacebookF></FaFacebookF></a>
                <a href='https://www.github.com/mahfuj113' className="link link-hover text-2xl"><FaGithub></FaGithub></a>
                <a href='https://twitter.com/MdMahfujhasan7' className="link link-hover text-2xl"><FaTwitter></FaTwitter></a>
            </div>
            <div>
                <header className="footer-title">Newsletter</header>
                <div className="lg:w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;