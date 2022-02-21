import ROADMAP from "../configs/roadmap.json";
import PhaseItem from "./utils/PhaseItem";
import { PhaseBranch12, PhaseBranch23, PhaseBranch34, PhaseBranch41 } from "../assets/svg/phasebranch";

const Roadmap = () => {
  var phaseItems = [];
  for (let i = 0; i < ROADMAP.length; i ++) {
    var tI = i;
    if (i % 4 === 2 && i + 1 < ROADMAP.length)  tI = i + 1;
    if (i % 4 === 3) tI = i - 1;
    var mt = "0px";
    if (tI >= 2) mt = "-270px";
    if (tI === 0 && tI === ROADMAP.length - 1) {
      phaseItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
    }
    if (tI % 4 === 2 && tI === ROADMAP.length - 1) {
      phaseItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
      phaseItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
      phaseItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
    }
    if (tI % 4 === 3 && tI === ROADMAP.length - 1) {
      phaseItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
    }
    if (tI % 4 >= 2) {
      if (tI < ROADMAP.length - 1) {
        let t = tI % 4;
        phaseItems.push(t === 0 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch12 /></div> : (t === 1 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch23 /></div> : ( t === 2 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch34 /></div> : <div key={tI} style={{ marginTop: mt }}><PhaseBranch41 /></div>)))
      }
      let item = ROADMAP[tI];
      phaseItems.push(<div key={ item.name } style={{ marginTop: mt }}><PhaseItem key={ item.name } name={ item.name } image={ item.image } description={ item.description } loaded={ item.loaded } progress={item.progress} /></div>);
      if (tI % 2 === 0) phaseItems.push(<div key={`${tI}blank`} style={{ marginTop: mt }}></div>);
    } else {
      let item = ROADMAP[tI];
      if (tI % 2 === 0) phaseItems.push(<div key={`${tI}blank1`} style={{ marginTop: mt }}></div>);
      phaseItems.push(<div key={ item.name } style={{ marginTop: mt }}><PhaseItem key={ item.name } name={ item.name } image={ item.image } description={ item.description } loaded={ item.loaded } progress={item.progress} /></div>);
      if (tI < ROADMAP.length - 1) {
        let t = tI % 4;
        phaseItems.push(t === 0 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch12 /></div> : (t === 1 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch23 /></div> : ( t === 2 ? <div key={tI} style={{ marginTop: mt }}><PhaseBranch34 /></div> : <div key={tI} style={{ marginTop: mt }}><PhaseBranch41 /></div>)))
      }
    }
    if (tI % 4 === 1 && tI === ROADMAP.length - 1) {
      phaseItems.push(<div key={`${tI}blank2`} style={{ marginTop: mt }}></div>);
    }
  }
  return (
    <div className="justify-center mt-9" id="roadmap">
      <div className="w-[calc(100vw-6px)] h-[1900px] bg-cover bg-[url('./assets/svg/roadmapback.svg')]"></div>
      <div className="flex justify-center mt-[-1760px] font-['Trouble_Font'] text-[100px] lg:text-[100px] tracking-[5px] leading-[120px]">Roadmap</div>
      <div className="flex justify-center"><div className="gap-x-[0] mt-[64px] w-[1680px] grid grid-cols-5">{ phaseItems }</div></div>
    </div>
  )
}

export default Roadmap;