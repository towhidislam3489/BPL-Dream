
import NewsletterBg from "../assets/bg-shadow.png"
const Newsletter = () => {
    return (
        <div className="border-2 border-white -mt-230 container mx-auto p-5 rounded-2xl ">
            <div className=" bg-cover bg-center bg-no-repeat  bg-white h-100 items-center grid justify-center text-center  rounded-2xl "
                style={{ backgroundImage: `url(${NewsletterBg})` }}>
                {/* <div>
                <img src={NewsletterBg} alt="" />
            </div> */}
                <div className="space-y-7">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold">Subscribe to our Newsletter</h1>
                        <p className="text-1xl font-semibold">Get the latest updates and news right in your inbox!</p>
                    </div>
                    <div className="items-center text-center space-x-3" >
                        <input type="email" placeholder="Enter your emial " className="border-2 p-4 w-100 rounded-[5px]" />
                        <button className="btn btn-warning h-[70px] w-32 rounded-[5px] font-semibold ">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;