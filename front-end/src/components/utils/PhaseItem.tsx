import PhaseFrame from "../../assets/svg/phaseframe";
import PhaseLoaded from "../../assets/svg/phaseloaded";
import PhaseProgress from "../../assets/svg/phaseprogress";

type Props = {
  name: any;
  image: any;
  description: any;
  loaded: any;
  progress: any;
};

const PhaseItem = ({ name, image, description, loaded, progress } : Props ) => {
  const newImg = require('../../assets/img/roadmap/' + image);
  return (
    <div>
      <PhaseFrame />
      <div className="text-[40px] leading-[48px] font-['Trouble_Font'] mt-[-440px] ml-[10px]">{ name }</div>
      <div className={`text-[18px] leading-[23px] font-['Chakra_Petch'] mt-[50px] ml-[24px] w-[290px] h-[80px] overflow-auto flex text-center ${description.length <= 100 ? 'items-center ' : 'items-start'}`}>{ description }</div>
      <PhaseLoaded loaded={ loaded } />
      <div className="text-[24px] leading-[31.2px] mt-[-41px] ml-[83px]">{ progress }</div>
      <PhaseProgress loaded={ loaded } />
      <img className="mt-[-500px] ml-[0px] mb-[200px]" src={ newImg } alt={`Phase ${image}`} />
    </div>
  )
}

export default PhaseItem;