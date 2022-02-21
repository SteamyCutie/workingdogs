import FOOTER from "../config/menu.json"
import DiscordIcon from "../assets/svg/discord";
import OpenSeaIcon from "../assets/svg/opensea";
import InstagramIcon from "../assets/svg/instagram";
import TwitterIcon from "../assets/svg/twitter";
import TiktokIcon from "../assets/svg/tiktok";

const Footer = () => {
  const MENU_ITEMS = FOOTER["menu-item"];

  return (
    <div className="flex justify-between px-16 py-1 mt-[250px] bg-[#0B0B0B]/30 backdrop-blur-[4px] h-[92px] border-t-[1px] border-t-[#353535]">
      <div className="flex gap-[120px]">
      <div className="menu-logo ml-[80px] text-[20px] flex items-center align-middle font-['Trouble_Font'] font-[400] tracking-[2px] leading-[24px]">WorkingDogs</div>
      <div className="menu-items hidden lg:flex justify-items-center space-x-[30px] items-center">
        {
          MENU_ITEMS && MENU_ITEMS.length > 0 && MENU_ITEMS.map((item) => 
            <a key={ item } href={ "#" + item } className="hover:text-[#0094FF]"><div key={item} className="text-[16px] font-['Chakra Petch'] leading-[22px]">{item}</div></a>
          )
        }
      </div>
      </div>
      <div className="flex justify-items-center space-x-[15px] mr-[80px] items-center">
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="discord" href={ FOOTER["discord-link"] }><DiscordIcon/></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="opensea" href={ FOOTER["opensea-link"] }><OpenSeaIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="instagram" href={ FOOTER["instagram-link"] }><InstagramIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="twitter" href={ FOOTER["twitter-link"] }><TwitterIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" key="tiktok" href={ FOOTER["tiktok-link"] }><TiktokIcon /></a>
      </div>
    </div>
  )
}

export default Footer;