import HEADER from "../config/header.json"
import DiscordIcon from "../assets/svg/discord";
import OpenSeaIcon from "../assets/svg/opensea";
import InstagramIcon from "../assets/svg/instagram";
import TwitterIcon from "../assets/svg/twitter";
import TiktokIcon from "../assets/svg/tiktok";

const Header = () => {
  const MENU_ITEMS = HEADER["menu-item"];

  return (
    <div className="flex justify-between px-16 py-1">
      <div className="menu-logo text-[20px] font-['Trouble_Font'] font-[400] tracking-[2px] leading-[24px]">WorkingDogs</div>
      <div className="menu-items hidden lg:flex justify-items-center space-x-[30px] items-center">
        {
          MENU_ITEMS && MENU_ITEMS.length > 0 && MENU_ITEMS.map((item) => 
            <a href={ "#" + item } className="hover:text-[#0094FF]"><div key={item} className="text-[16px] font-['Chakra Petch'] leading-[22px]">{item}</div></a>
          )
        }
      </div>
      <div className="flex justify-items-center space-x-[15px] items-center">
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" href={ HEADER["discord-link"] }><DiscordIcon/></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" href={ HEADER["opensea-link"] }><OpenSeaIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" href={ HEADER["instagram-link"] }><InstagramIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" href={ HEADER["twitter-link"] }><TwitterIcon /></a>
        <a className="fill-[#FAFAFA] hover:fill-[#0094FF]" href={ HEADER["tiktok-link"] }><TiktokIcon /></a>
      </div>
    </div>
  )
}

export default Header;