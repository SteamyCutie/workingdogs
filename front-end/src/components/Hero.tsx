import dog1 from "../assets/img/hero/1 dog 1.png";
import dog2 from "../assets/img/hero/2 dog 1.png";
import dog3 from "../assets/img/hero/3 dog 1.png";
import dog4 from "../assets/img/hero/4 dog 1.png";
import ControlButton from "./utils/ControlButton";

const Hero = () => {
  const onMint = () => {
    console.log("Mint Clicked!");
  };
  const onJoinDiscord = () => {
    console.log("Join Discord Clicked!");
  };

  return (
    <div className="justify-center bg-cover bg-[url('./assets/img/hero/md-bg.png')] lg:bg-none pb-[50px] lg:pb-[0px]" id="about">
      <div className="flex justify-center font-['Trouble_Font'] text-[74px] lg:text-[200px] mt-[-60px] pt-[20px] lg:mt-[-30px] tracking-[3px] leading-[240px]">Working Dogs</div>
      <div className="flex items-end justify-center mt-[-145px] lg:mt-[0px] space-x-[-100px] lg:space-x-[-60px]">
        <img src={ dog4 } alt="dog4" className="flex invisible lg:visible" />
        <img src={ dog1 } alt="dog1" className="hidden lg:flex w-[260px] h-[298px] lg:w-[419px] lg:h-[482px]" />
        <img src={ dog1 } alt="dog1" className="flex lg:hidden w-[260px] h-[298px] lg:w-[419px] lg:h-[482px]" style={{ transform: "rotateY(180deg)" }} />
        <img src={ dog2 } alt="dog2" className="flex w-[260px] h-[298px] lg:w-[419px] lg:h-[482px]" />
        <img src={ dog3 } alt="dog3" className="flex invisible lg:visible" />
      </div>
      <div className="grid lg:flex lg:justify-center mt-[-60px] lg:mt-[-15px] gap-y-[20px] space-x-[0px] lg:space-x-[30px]">
        <ControlButton key="Mint Control" clickHandler={ onMint } buttonName="Mint"/>
        <ControlButton key="Discord Control" clickHandler={ onJoinDiscord } buttonName="Join Discord"/>
      </div>
    </div>
  )
}

export default Hero;