import { useEffect, useState } from 'react';
import ToggleItem from '../../assets/svg/toggleitem';

type Props = {
  data: any;
};

const Accordion = ({ data } : Props) => {
  const [ accordionItems, setAccordionItems ] = useState([{ title: "", content: "", open: false }]);

  useEffect(() => {
    setAccordionItems(data);
  }, [data]);

  const onItemClick = (i: { title: any; content: any; open: boolean; }) => {
    const newAccordion: { title: any; content: any; open: boolean; }[] = accordionItems.slice();
    const index = newAccordion.indexOf(i);
    
    newAccordion[index].open = !newAccordion[index].open;
    setAccordionItems(newAccordion);
  }

  const sections = accordionItems.map((i) => (
    <div key={accordionItems.indexOf(i)}>
      <div className="w-[1257px] z-40 h-[95px] font-[#FAFAFA] tracking-[2px] cursor-pointer bg-[url('./assets/svg/faqtitle.svg')] flex items-center justify-between" onClick={ onItemClick.bind(null, i) }>
       <span className="ml-[40px] text-[24px] leading-[31px] font-medium">{i.title}</span>
       <div className={"mr-[40px] transition " + (i.open ? "rotate-90" : "rotata-0")}>
          <ToggleItem />
       </div>
      </div>
      <div className={"w-[1240px] z-10 mt-[-7px] font-[#FAFAFA] text-[18px] font-medium leading-[27px] ml-[13px] transition-all duration-350 ease-[cubic-bezier(0.080,1.090,0.320,1.275)] " + (i.open ? "border-[1px] border-white border-t-0 mt-[0px] pt-[1px] h-[150px]" : " h-[0px] ")}>
        <div className={"w-[1220px] z-10 m-[10px] overflow-auto transition-all duration-350 ease-[cubic-bezier(0.080,1.090,0.320,1.275)] " + (i.open ? "border-white h-[130px]" : "h-[0px]")}>
          <div className={"indent-4 p-[4px] pl-[10px] pr-[10px] transition-all duration-200 easin-in " + (i.open ? "visible opacity-1 transition-all duration-800 ease-in" : "invisible opacity-0 ")}> {i.content} </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="w-[1257px] m-auto">{ sections }</div>
  )
}

export default Accordion;