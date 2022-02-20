const YellowTape = () => {
  return (
    <div className="mt-[16px]">
      <div className="w-[100vw] h-[120px] z-10 bg-[url('./assets/svg/yellowneon.svg')]"></div>
      <div className="w-[calc(100vw + 50px)] h-[93px] mt-[-107.5px] ml-[-50px] z-50 bg-[url('./assets/svg/yellowoverlay.svg')]"></div>
      <div className="flex justify-center mt-[-73px] uppercase font-bold font-['Chakra_Petch'] text-[#0B0B0B] text-[36px] lg:text-[36px] tracking-[1px] leading-[47px]">$HANDLER tokens can be used in later phases of the roadmap</div>
    </div>
  )
}

export default YellowTape;