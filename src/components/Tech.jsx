import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <img
            src={technology.icon}
            alt={technology.name}
            className="rounded-full w-full h-full object-contain p-3 border-[2px] border-white bg-white"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
