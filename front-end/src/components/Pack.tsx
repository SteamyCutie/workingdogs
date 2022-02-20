import PackItem from "./utils/PackItem";
import MilitaryPack from "../assets/img/pack/military_pack.png"
import CivilianPack from "../assets/img/pack/civilian_pack.png"
import PolicePack from "../assets/img/pack/police_pack.png"

const Pack = () => {
  return (
    <div className="justify-center mt-10">
      <div className="flex justify-center font-['Trouble_Font'] text-[74px] lg:text-[100px] tracking-[1px] leading-[120px]">Join the Pack!</div>
      <div className="flex justify-center mt-[16px] font-['Chakra_Petch'] text-[#7E7E7E] text-[16px] lg:text-[16px] tracking-[1px] leading-[22.4px]"><span className="text-center max-w-[36%]">Working dogs come in many shapes, sizes and colors. Get in early for a chance to claim your very own, and join a community of like-minded handlers, trainers, dog enthusiasts, traders and NFT Holders</span></div>
      <div className="flex justify-center mt-[10px]">
        <PackItem packName="Military" imageSrc={ MilitaryPack } />
        <PackItem packName="Civilian" imageSrc={ CivilianPack } />
        <PackItem packName="Police" imageSrc={ PolicePack } />
      </div>
      <div className="flex justify-center mt-[114px] font-['Chakra_Petch'] text-[#7E7E7E] text-[18px] lg:text-[18px] tracking-[1px] leading-[25.2px]"><span className="text-center max-w-[34%]">In real life finding a club for your working dog can be difficult. Working Dogs takes the limitations of geography, weather, mobility, and time out of the equation. Every day is training day!</span></div>
      <div className="flex justify-center mt-[16px] font-['Chakra_Petch'] text-[#7E7E7E] text-[18px] lg:text-[18px] tracking-[1px] leading-[25.2px]"><span className="text-center max-w-[36%]">If you acquire a Working Dog it grants you rights to the asset. Beyond that you can choose to have your Working Dog enter “The Field” and compete in virtual simulated trials against other Working Dogs. As your Working Dog competes virtually it generates unique tokens - $HANDLER tokens.</span></div>
    </div>
  )
}

export default Pack;