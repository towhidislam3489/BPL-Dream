import  { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from './type/PlayerType';
import AvailablePlayer from './AvailablePlayer';
import SelectedPlayer from './SelectedPlayer';
interface IPlayertype{
    PlayerPromise:Promise<Iplayer[]>,
    coin:number,
    setCoin:Dispatch<SetStateAction<number>>
}


const Player = ({PlayerPromise,coin,setCoin}:IPlayertype) => {
    const Allplayers=use(PlayerPromise);
    console.log(Allplayers);
    const [buttontype,setbuttontype]=useState("available");
    const [selectedPlayers,setselectedPlayers]=useState<Iplayer[]>([]);
    function handelerbutton(Type:string):void
    {
        setbuttontype(Type);
    }
    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-between mb-10">
                <h1 className="text-[20px] font-bold">{buttontype==='available'?"Available Players":"Selected Players"}</h1>
                <div>
                    <button className={`btn ${buttontype==="available"?"btn-warning":""}`}
                    onClick={
                        ()=>handelerbutton("available")
                    } 
                    >Available</button>
                    <button className={`btn ${buttontype==="selected"?"btn-warning":""}`}
                    onClick={
                        ()=>handelerbutton("selected")
                    }>Selected({selectedPlayers.length})</button>
                </div>
            </div>
            {/* {10>15?<AvailablePlayer Allplayers={Allplayers}></AvailablePlayer>:""} */}
            {buttontype==='available'?<AvailablePlayer Allplayers={Allplayers} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setselectedPlayers={setselectedPlayers}></AvailablePlayer>:<SelectedPlayer selectedPlayers={selectedPlayers} setselectedPlayers={setselectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayer>}
        </div>
    );
};

export default Player;