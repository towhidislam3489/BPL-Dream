import { CgProfile } from "react-icons/cg";
import type { Iplayer } from "./type/PlayerType";
import { FaFlag } from "react-icons/fa";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";
interface IplayerCardtype {
    eachPlayer: Iplayer, coin: number, setCoin: Dispatch<SetStateAction<number>>,
     selectedPlayers:Iplayer[],
    setselectedPlayers:Dispatch<SetStateAction<Iplayer[]>>;
}

const Playerscard = ({ eachPlayer, coin, setCoin,  selectedPlayers,setselectedPlayers }: IplayerCardtype) => {
    const [ischoose, setischoose] = useState(false);
    function handelerchoose() {

        if (coin < eachPlayer.price) {
            toast.error("Not enough ammount", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
        else {
            const newCoin = (coin - eachPlayer.price);
            setCoin(newCoin);
            toast.success(`${eachPlayer.name} are selected`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
            setischoose(!ischoose);
            setselectedPlayers([...selectedPlayers,eachPlayer])
        }

    }
    return (
        <div className="border-2  grid justify-center items-center pb-4 rounded-[10px] ">
          <img src={eachPlayer.image} alt="" className="rounded-2xl h-44  border-2 w-56 mt-16" />
            <div className="space-y-5">
                <h2 className="flex items-center font-bold text-2xl gap-4 mt-2">
                    <CgProfile />
                    {eachPlayer.name}</h2>
                <div className="flex gap-10 items-center mt-2 justify-between">
                    <p className="flex items-center font-semibold text-[20px] gap-4 ">
                        <FaFlag />
                        {eachPlayer.country}</p>
                    <div className="bg-[#F3F3F3] p-2 rounded-[5px]">
                        <p className="text-[20px]">{eachPlayer.playerType}</p>
                    </div>
                </div>

                <div className="flex gap-10 items-center mt-2 justify-between ">
                    <p className="font-semibold text-[20px]">{eachPlayer.battingStyle}</p>
                    <p>{eachPlayer.blowingStyle}</p>
                </div>
                <div className="flex gap-10 items-center mt-2 justify-between ">
                    <p className="font-semibold text-[20px]">Price: ${eachPlayer.price}</p>
                    <button className="btn btn-neutral" disabled={ischoose || coin === 0 ? true : false} onClick={() => handelerchoose()}>{ischoose ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Playerscard;