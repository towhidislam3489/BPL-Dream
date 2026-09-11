import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "./type/PlayerType";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface IselectedType {
    selectedPlayers: Iplayer[],
    setselectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
}

const SelectedPlayer = ({ selectedPlayers, setselectedPlayers, coin, setCoin }: IselectedType) => {
    console.log(selectedPlayers)
    function heandleremoveselectedplayer(removedplayer: Iplayer) {
        const newSelectedPlayers = selectedPlayers.filter(pl => pl != removedplayer)
        setselectedPlayers(newSelectedPlayers)
        setCoin(coin + removedplayer.price)
    }
    return (
        selectedPlayers.length === 0 ? <div className="text-6xl text-red-600 items-center text-center mt-11 mb-12">No Player Selected Yet</div> : <div className="grid gap-6 mb-40">
            {selectedPlayers.map((eachSelectPlayer, ind) => <SelectedPlayerCard eachSelectPlayer={eachSelectPlayer} heandleremoveselectedplayer={heandleremoveselectedplayer} key={ind}></SelectedPlayerCard>)}
        </div>
    );
};

export default SelectedPlayer;