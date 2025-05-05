import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4  mt-24"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Joshua
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Simidele Akinwole
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I craft full-stack web solutions using Python, Django, React, and Node.js.
With 4 years of experience as a Full-stack Engineer, I build responsive, real-world applications.
I’m passionate about both software and hardware, including robotics.
I lead ENGISOL, offering expert web development and design services.
From APIs to microcontrollers, I deliver versatile, high-quality tech
          </p>

          {/* New Our Flyer Section */}
          <div className="opacity-0 animate-fade-in-delay-3 space-y-4">
            <h2 className="text-primary text-3xl font-semibold tracking-tight">
              Our Flyer
            </h2>
            <div className="w-full max-w-3xl mx-auto">
            <img
  src="/projects/flyer.jpeg"
  alt="Flyer"
  className="w-full max-w-md h-auto max-h-[400px] rounded-[20px] object-contain mx-auto"
/>

            </div>
          </div>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
