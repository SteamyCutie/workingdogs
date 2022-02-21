import RarityFrame from "../assets/svg/rarityframe";
import MightyDog from "../assets/img/rarity/mighty_dog.png";
import FrameBack from "../assets/img/rarity/frameback.png";
import RARITY from "../config/rarity.json";

const Rarity = () => {
  return (
    <div className="justify-center mt-[130px]">
      <div className="flex justify-center font-['Trouble_Font'] text-[74px] lg:text-[100px] tracking-[5px] leading-[120px]">Rarity</div>
      <div className="flex justify-center mt-[30px]">
        <RarityFrame rarityData={ RARITY } mightyDog={ MightyDog } frameBack={ FrameBack } />
      </div>
    </div>
  )
}

export default Rarity;