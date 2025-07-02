const About = () => {
 
const abouMe = `I'm Mohamed. Full-stack developer in Casablanca.

**Here's what I actually do:** I build web applications that convert. Not just "look good" - actually drive results while your competitors are still loading.

Most designers can't code. Most developers can't design. I do both. 

React, Node.js, pixel-perfect interfaces that perform at 60fps. Performance isn't optional, it's standard.

**The result?** Applications that don't just impress - they convert.

Mint tea over coffee, always.

**I don't just build websites. I build revenue generators`.split("**");
  // This component is for the About section of the portfolio
  return (
    <div className="w-full p-20">
      <h2 className="sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] text-[var(--text-color-secondary)] text-left mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 2xl:mt-40">
        About
      </h2>
      <div className="flex flex-wrap gap-2 mt-10 cursor-pointer ">
      
          {
            abouMe.split(" ").map((text,index) => (
            <div
            key={index}
            style={{
              fontWeight: index % 2 === 0 ? "normal" : "bold",
            }}
            className="text-lg sm:text-xl md:text-2xl opacity-70 hover:opacity-100 lg:text-3xl xl:text-4xl text-[var(--text-color-secondary)]"
          >
            {text}
          </div>
            ))
          }
        
      </div>
    </div>
  );
};

export default About;
