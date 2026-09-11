import { Suspense, useState } from "react";
import Banner from "./Component/Banner"
import NavBar from "./Component/NavBar"
import type { Iplayer } from "./Component/type/PlayerType";
import Player from "./Component/Player";
import { ToastContainer } from "react-toastify";
import Footer from "./Component/Footer";
import Newsletter from "./Component/Newsletter";

async function PromisePlayerData():Promise<Iplayer[]>{
  const res=await fetch("/data.json")
  const data =await res.json()
  return data;
}

function App() {
  // const data:Promise<Iplayer[]>=PromisePlayerData();
  const [data]=useState(()=>PromisePlayerData())
  const [coin,setCoin]=useState(50000);
  return (
    <>
      <NavBar coin={coin} ></NavBar>
      <Banner></Banner>
      <ToastContainer />
      <Suspense fallback="Loading....">
        <Player PlayerPromise={data} coin={coin} setCoin={setCoin} ></Player>
      </Suspense>
     
      <Footer></Footer>
       <Newsletter></Newsletter>
    </>
  )
}

export default App
