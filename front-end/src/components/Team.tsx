import TEAM from "../configs/team.json"
import TeamItem from "./utils/TeamItem";
import TeamLight from "../assets/svg/teamlight.svg";

const Team = () => {
  return (
    <div className="justify-center mt-20" id="team">
      <div className="flex justify-center mt-[480px]"><img alt="Team Light" src={ TeamLight } /></div>
      <div className="flex justify-center mt-[-640px] font-['Trouble_Font'] text-[74px] lg:text-[100px] tracking-[1px] leading-[120px]">TEAM</div>
      <div className="flex justify-center space-x-[15px] gap-[80px] items-center">
      {
        TEAM && TEAM.length > 0 && TEAM.map((item) => 
          <TeamItem key={item.role} role={item.role} photo={item.photo} />
        )
      }
      </div>
    </div>
  )
}

export default Team;