import Header from "./Header";
const Hero = () => {
  return (
  <div className="flex textFont flex-col border    text-white items-center justify-start min-h-screen ">
      <Header />
      <div className="flex flex-col text-black st  items-center justify-center w-full flex-1">
        <span>(*)</span>
        <div
          className="text-9x flex flex-wrap gap-2 bg-red-700 w-full h-full"
          style={{
            fonfaamily: "Kalice",
          }}
        >
          {firstLine.split(" ").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

const firstLine = `I am Mohamed elhaissan — A passionate full-stack developer who builds fast, functional, and beautiful web experiences.`;
