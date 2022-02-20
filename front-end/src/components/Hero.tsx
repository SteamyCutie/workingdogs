import dog1 from "../assets/img/hero/1 dog 1.png";
import dog2 from "../assets/img/hero/2 dog 1.png";
import dog3 from "../assets/img/hero/3 dog 1.png";
import dog4 from "../assets/img/hero/4 dog 1.png";
import ControlButton from "./ControlButton";

const Hero = () => {
  const onMint = () => {
    alert("Mint Clicked!");
  };
  const onJoinDiscord = () => {
    alert("Join Discord Clicked!");
  };

  return (
    <div className="justify-center">
      <div className="flex justify-center font-['Trouble_Font'] text-[74px] lg:text-[200px] tracking-[1px] leading-[240px]">Working Dogs</div>
      <div className="flex items-end justify-center">
        <img src={ dog4 } alt="dog4" />
        <img src={ dog1 } alt="dog1" />
        <img src={ dog2 } alt="dog2" />
        <img src={ dog3 } alt="dog3" />
      </div>
      <div className="flex justify-center space-x-[30px]">
        <ControlButton key="Mint Control" clickHandler={ onMint } buttonName="Mint"/>
        <ControlButton key="Discord Control" clickHandler={ onJoinDiscord } buttonName="Join Discord"/>
      </div>
    </div>
  )
}

export default Hero;