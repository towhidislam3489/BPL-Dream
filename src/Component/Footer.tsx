
import footerlogo from '../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className=' bg-black grid items-center text-center  space-y-20 pt-50 mt-100  pb-20'>
            <img src={footerlogo} alt="" className='items-center pl-195 ' />
            <div className='flex container m-auto justify-evenly items-center text-center text-white'>
                
                <div className='space-y-10'>
                    <h1 className='text-2xl font-bold'>About Us</h1>
                    <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>

                </div>
                <div className='space-y-10'>
                    <h1 className='text-2xl font-bold'>Quick Link</h1>
                    <ul className="list-disc">
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className='space-y-10'>
                    <h1 className='text-2xl font-bold'>Subscribe</h1>
                    <p>Subscribe to our newsletter for <br /> the latest updates.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;