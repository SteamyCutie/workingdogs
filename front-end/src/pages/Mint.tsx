import { useState } from "react";
import Header from "../components/Header";
import ControlButton from "../components/utils/ControlButton";
import CounterButton from "../components/utils/CounterButton";
import dog1 from "../assets/img/mint/1 dog 1.png";
import dog3 from "../assets/img/mint/3 dog 1.png";



const Mint = () => {
  const [ account, setAccount ] = useState("0x97946b6D638ad...");
  const [ balance, setBalance ] = useState(0.05);
  const [ count, setCount ] = useState(1);

  const [connected, setConnected] = useState(false);

  const onMinus = () => {
    if ( count > 1 ) setCount(count - 1);
  }
  
  const onPlus = () => {
    if ( count > 0 ) setCount(count + 1);
  }

  const onConnect = () => {
    setConnected(true);
  }

  const onMint = () => {

  }

  return (
    <div>
      <Header mT="mt-[10px] lg:mt-[30px]" />
      <div>
        <div className="mt-[30px] md:mt-[60px]">
          <div className="flex justify-center font-[900] text-center text-[80px] leading-[96px] lg:text-[100px] md:leading-[130px] pt-[20px] tracking-[3px]">0/<br className="flex md:hidden" />10000</div>
          <div className="flex justify-center font-[400] text-center text-[16px] leading-[20.8px] text-[#0094FF] mt-[10px]">
            { account }
          </div>
          <div className="flex justify-center font-[400] text-center text-[40px] leading-[52px] lg:text-[50px] md:leading-[65px] pt-[20px] tracking-[3px]">{ balance.toString() + " ETH" }</div>
          <div className="flex justify-center font-[400] text-center text-[16px] leading-[21px] lg:text-[14px] md:leading-[18.2px] pt-[20px] tracking-[1px]">(Excluding gas fees)</div>
        </div>
        <div className="flex justify-center items-center font-[900] text-[40px] mt-[52px] space-x-[20px] md:space-x-[50px]">
          <CounterButton clickHandler={onMinus} buttonCaption="-" />
          <div className="text-center w-[100px]">{count}</div>
          <CounterButton clickHandler={onPlus} buttonCaption="+" />
        </div>
        <div className={ (connected ? "hidden" : "flex") + " justify-center mt-[50px]" }>
          <ControlButton key="Connect Wallet" clickHandler={ onConnect } buttonCaption="Connect"/>
        </div>
        <div className={ (connected ? "flex" : "hidden") + " justify-center mt-[50px]" }>
          <ControlButton key="Mint token" clickHandler={ onMint } buttonCaption="Mint"/>
        </div>
        <div className="mt-[20px] mb-[40px] md:mt-[30px] grid justify-center">
          <div className="flex font-[200] max-w-[360px] md:max-w-[450px] text-center text-[#FAFAFA] md:[#6D6D6D] lg:text-[#6D6D6D] text-[10px] leading-[13px] md:text-[12px] md:leading-[16px] pt-[20px] tracking-[0px]">
            Please make sure you connected to the right network (Ethereum Mainnet) and the correct address. Please note: Once you make the ourchase, you cannot undo this action.
          </div>
          <div className="flex font-[200] max-w-[360px] md:max-w-[450px] text-center text-[#FAFAFA] md:[#6D6D6D] lg:text-[#6D6D6D] text-[10px] leading-[13px] md:text-[12px] md:leading-[16px] pt-[20px] tracking-[0px]">
            We have set the gas limit to 285000 for the contract to successfully mint your NFT. We recommend that you don’t lower the gas limit.
          </div>
        </div>
      </div>
      <div className="flex place-content-between items-end w-[calc(100vw)] h-[calc(100vh)] fixed z-[-100] top-0 bg-[url('./assets/svg/mintback.svg')] no-repeat bg-right bg-cover md:bg-cover lg:bg-cover">
        <div className="fixed left-[-160px] md:left-[250px] lg:left-[250px] min-w-[358px] min-h-[435px]"><img src={ dog3 } alt="" /></div>
        <div className="fixed right-[-160px] md:right-[250px] lg:right-[250px] min-w-[358px] min-h-[435px]"><img src={ dog1 } alt="" /></div>
      </div>
    </div>
  )
};

export default Mint;