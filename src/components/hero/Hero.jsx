import Header from "./Header";
const Hero = () => {
  return (
    <div className="flex textFont flex-col items-center justify-start min-h-screen ">
      <Header />
      <div className="flex flex-col items-center justify-center w-full flex-1">
        <span>(*)</span>
        <div className="textFont" style={{
          fonfaamily: "Kalice",
        }}>
          {firstLine.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div> 
        <div>
          {secondLine.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </div>  
    </div>
  );
};

export default Hero;

const firstLine = "Hi, I'm Mohamed Elhaissan";
const secondLine = `A full-Stack web developer 
who help brands connect with people
with
a fresh and distinctive approach.`;
