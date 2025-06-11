import Header from "./Header";
const Hero = () => {
  return (
    <div className="flex textFont flex-col text-white items-center justify-start min-h-screen ">
      <Header />
      <div className="flex flex-col items-center justify-center w-full flex-1">
        <span>(*)</span>
        <div className="textFont text-8xl" style={{
          fonfaamily: "Kalice",
        }}>
          <span className="st text-9xl">F</span>
          {firstLine.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div> 
        
      </div>  
    </div>
  );
};

export default Hero;

const firstLine = `  ull-Stack web developer `;
