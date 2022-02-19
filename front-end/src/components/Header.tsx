import HEADER from "../config/header.json"
import discord from "../assets/svg/discord.svg";
import opensea from "../assets/svg/opensea.svg";
import instagram from "../assets/svg/instagram.svg";
import twitter from "../assets/svg/twitter.svg";
import tiktok from "../assets/svg/tiktok.svg";

const Header = () => {
  const MENU_ITEMS = HEADER["menu-item"];

  return (
    <div className="flex justify-between px-16 py-1">
      <div className="menu-logo text-[20px] font-['Trouble_Font'] font-[400] tracking-[2px] leading-[24px]">WorkingDogs</div>
      <div className="menu-items hidden lg:flex justify-items-center space-x-[30px] items-center">
        {
          MENU_ITEMS && MENU_ITEMS.length > 0 && MENU_ITEMS.map((item) => 
            <div key={item} className="text-[16px] font-['Chakra Petch'] leading-[22px]">{item}</div>
          )
        }
      </div>
      <div className="menu-socials flex justify-items-center space-x-[15px] items-center">
        <a href={ HEADER["discord-link"] }><img src={ discord } className="discord-icon" alt="Discord" /></a>
        <a href={ HEADER["opensea-link"] }><img src={ opensea } className="opensea-icon" alt="OpenSea" /></a>
        <a href={ HEADER["instagram-link"] }><img src={ instagram } className="instagram-icon" alt="Instagram" /></a>
        <a href={ HEADER["twitter-link"] }><img src={ twitter } className="twitter-icon" alt="Twitter" /></a>
        <a href={ HEADER["tiktok-link"] }><img src={ tiktok } className="tiktok-icon" alt="Tiktok" /></a>
      </div>
    </div>
  )
}

export default Header;