import ControlButtonBack from "../assets/svg/controlbuttonback"

type Props = {
  clickHandler: any,
  buttonName: any,
};

const ControlButton = ({ clickHandler, buttonName }: Props) => {
  return (
    <div>
    <button onClick={ clickHandler }>
      <ControlButtonBack />
      <div className="font-['Trouble_Font'] text-[40px] tracking-[2px] mt-[-87.5px] pointer-events-none">{ buttonName }</div>
    </button>
    </div>
  )
}

export default ControlButton;