

import type { Iplayer } from './type/PlayerType';
import { CgProfile } from 'react-icons/cg';
import { FaFlag } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';

const SelectedPlayerCard = ({ eachSelectPlayer, heandleremoveselectedplayer }: {
    eachSelectPlayer: Iplayer, heandleremoveselectedplayer: (removedplayer: Iplayer) => void
}) => {
    return (
        <div>
            <div className='border-2 relative'>
                <div className=" flex  items-center pb-4 rounded-[10px] gap-96  ">

                    <div className="mt-10 ml-40">
                        <div className=" w-[400px]">
                            <div className='flex items-center font-bold text-2xl gap-4 mb-2'>
                                <CgProfile />
                                {eachSelectPlayer.name}
                            </div>
                        </div>
                        <img src={eachSelectPlayer.image} alt="" className="rounded-2xl h-44  border-2 w-56" />

                    </div>
                    <div className="space-y-5">

                        <div className="flex gap-10 items-center mt-2 justify-between">
                            <p className="flex items-center font-semibold text-[20px] gap-4 ">
                                <FaFlag />
                                {eachSelectPlayer.country}</p>
                            <div className="bg-[#F3F3F3] p-2 rounded-[5px]">
                                <p className="text-[20px]">{eachSelectPlayer.playerType}</p>
                            </div>
                        </div>

                        <div className="flex gap-10 items-center mt-2 justify-between ">
                            <p className="font-semibold text-[20px]">{eachSelectPlayer.battingStyle}</p>
                            <p>{eachSelectPlayer.blowingStyle}</p>
                        </div>


                    </div>

                    <button
                        className=" absolute top-3 right-3 text-2xl cursor-pointer text-red-500"
                        onClick={() => heandleremoveselectedplayer(eachSelectPlayer)}
                    >
                        <MdDeleteForever className="size-12" />
                    </button>


                </div>




            </div>
        </div>
    );
};

export default SelectedPlayerCard;