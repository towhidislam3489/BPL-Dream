import BannerImg from "../assets/banner-main.png"
import BannerBg from "../assets/bg-shadow.png"
const Banner = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-black h-150 container mx-auto mt-10 rounded-2xl flex flex-col items-center justify-center space-y-8"
            style={{ backgroundImage: `url(${BannerBg})` }}>

            <div>
                <img src={BannerImg} alt="" />
            </div>
            <div className="space-y-5">
                <h1 className="text-white font-bold text-5xl text-center ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-white text-center text-2xl">Beyond Boundaries Beyond Limits</p>
            </div>
            <div className="border-4 border-[#D3E827] rounded-2xl p-2">
                <button className="bg-[#D3E827] w-70 text-[20px] font-semibold h-15 rounded-2xl    ">Claim Free Credit</button>
            </div>

        </div>
    );
};

export default Banner;