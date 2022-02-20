import dog1 from "../assets/img/hero/1 dog 1.png";
import dog2 from "../assets/img/hero/2 dog 1.png";
import dog3 from "../assets/img/hero/3 dog 1.png";
import dog4 from "../assets/img/hero/4 dog 1.png";

const Hero = () => {
  return (
    <div className="justify-center">
      <div className="flex justify-center font-['Trouble_Font'] text-[200px] flex tracking-[1px] leading-[240px]">Working Dogs</div>
      <div className="flex items-end justify-center">
        <img src={ dog4 } alt="dog4" />
        <img src={ dog1 } alt="dog1" />
        <img src={ dog2 } alt="dog2" />
        <img src={ dog3 } alt="dog3" />
      </div>
    </div>
  )
}

export default Hero;