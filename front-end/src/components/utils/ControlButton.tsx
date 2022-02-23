import { ControlButtonLGBack, ControlButtonMDBack } from "../../assets/svg/controlbuttonback"

type Props = {
  clickHandler: any,
  buttonCaption: any,
};

const ControlButton = ({ clickHandler, buttonCaption }: Props) => {
  return (
    <button onClick={ clickHandler } className="grid z-[1] justify-items-center">
      <ControlButtonLGBack />
      <ControlButtonMDBack />
      <div className="font-['Trouble_Font'] text-[40px] tracking-[2px] mt-[-82.5px] md:mt-[-87.5px] pointer-events-none">{ buttonCaption }</div>
    </button>
  )
}

export default ControlButton;