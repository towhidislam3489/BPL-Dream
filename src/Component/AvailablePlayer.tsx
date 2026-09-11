import type { Dispatch, SetStateAction } from "react";
import Playerscard from "./Playerscard";
import type { Iplayer } from "./type/PlayerType";
interface IavailableType {
    Allplayers: Iplayer[], 
    coin: number, 
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers:Iplayer[],
    setselectedPlayers:Dispatch<SetStateAction<Iplayer[]>>;
}

const AvailablePlayer = ({ Allplayers, coin, setCoin, selectedPlayers, setselectedPlayers }:IavailableType) => {
    return (
        <div className="grid grid-cols-3 container mx-auto gap-9">
            {
                Allplayers.map((eachPlayer, ind) => <Playerscard eachPlayer={eachPlayer} key={ind} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setselectedPlayers={setselectedPlayers}></Playerscard>)
            }
        </div>
    );
};

export default AvailablePlayer;