import { Briefcase, Code, Wrench, Cog, Hammer, Cpu, Bot, Lightbulb } from "lucide-react";

export const AboutSection = () => {

  
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Versatile Full-Stack Developer & Passionate Hardware Engr-Tech savy</h3>

            <p className="text-muted-foreground">
            With over 4 years of experience in full-stack development, I build responsive, real-world applications using Python, Django, React, and Node.js.
            I’m passionate about merging software with hardware, creating smart solutions from web platforms to robotics and microcontrollers.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/resume_cv_akinwole_joshua_simidele .pdf"
                download="resume_cv_akinwole_joshua_simidele .pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cog  className="h-6 w-6 text-primary" />
                  <Wrench  className="h-6 w-6 text-primary" />
                  <Hammer className="h-6 w-6 text-primary" />

                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Fixing & Debugging</h4>
                  <p className="text-muted-foreground">
                  Engineering Diagnosing and resolving complex issues to ensure smooth, bug-free functionality and optimal performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                  <Cpu className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Hardwares (Robotics/Embedded Systems) Engineering</h4>
                  <p className="text-muted-foreground">
                  Designing and developing innovative hardware solutions for robotics and embedded systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack web tutorial guides and consulting</h4>
                  <p className="text-muted-foreground">
                  Providing expert full-stack web development tutorials, guides, and consulting 
                  to empower others in building robust web applications.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
