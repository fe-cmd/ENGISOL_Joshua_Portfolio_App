import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  faReact,
  faJs,
  faCss3,
  faHtml5,
  faNodeJs,
  faGitAlt,
  faFigma,
  faPython,
  
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, 
  faServer,
  faFileCode,
  faBug,
  faCode,
  faMicrochip,
  faRobot,
  faEthernet,
  faTruckMonster,
} from "@fortawesome/free-solid-svg-icons";

const getPathFromIcon = (icon) => icon.icon[4];

const GradientIcon = ({ svgPath, gradientId, gradientColors, className }) => (
  <div className="relative w-fit h-fit group">
    <svg
      className={cn(
        className,
        "transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg] group-hover:-translate-y-2 drop-shadow-[4px_4px_6px_rgba(0,0,0,0.4)]"
      )}
      viewBox="0 0 512 512"
      fill="none"
    >
      <defs>
        <linearGradient id={gradientId} {...gradientColors}>
          <stop offset="0%" stopColor="#8e2de2" />
          <stop offset="100%" stopColor="#4a00e0" />
        </linearGradient>
      </defs>

      {/* BACKFACE - Shadow Path for thickness with translation */}
      <path
        d={svgPath}
        transform="translate(8, 8)"  // Increased translation for depth
        fill="#1a1a1a"
        opacity="0.4"
      />

      {/* MAIN ICON - Gradient fill */}
      <path d={svgPath} fill={`url(#${gradientId})`} />

      {/* OUTLINE - Outer stroke for enhanced edge emphasis */}
      <path
        d={svgPath}
        fill="none"
        stroke="white"
        strokeWidth="12"  // Increased stroke width for more pronounced edges
        opacity="0.2"
      />
    </svg>
  </div>
);


const skills = [
  // Frontend
  { name: "HTML/CSS", level: 99, category: "frontend", icon: faHtml5 },
  { name: "JavaScript", level: 90, category: "frontend", icon: faJs },
  { name: "ReactJs", level: 90, category: "frontend", icon: faReact },
  { name: "TailwindCSS", level: 90, category: "frontend", icon: faCss3 }, // Closest style

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: faNodeJs },
  { name: "Express", level: 70, category: "backend", icon: faServer },
  { name: "MongoDB", level: 80, category: "backend", icon: faDatabase },
  { name: "PostgreSQL", level: 60, category: "backend", icon: faDatabase },
  { name: "Efficient Fixing&Debugging", level: 100, category: "backend", icon: faBug },
  { name: "Python", level: 95, category: "backend", icon: faPython },
  { name: "Django", level: 90, category: "backend", icon: faPython },

  //Hardware
  { name: "Robotics Hardware Engineering", level: 50, category: "hardware", icon: faRobot},
  { name: "Networking Hardware Engineering", level: 50, category: "hardware", icon: faEthernet},
  { name: "Embedded Systems Engineering", level: 70, category: "hardware", icon: faMicrochip},
  { name: "Autocad Engineering", level: 70, category: "hardware", icon: faTruckMonster},





  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: faGitAlt },
  { name: "Postman API", level: 70, category: "tools", icon: faFileCode },
  { name: "VS Code", level: 100, category: "tools", icon: faCode }, // Placeholder
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const commonGradientColors = {
    gradientUnits: "userSpaceOnUse",
    x1: "0",
    y1: "0",
    x2: "100%",
    y2: "100%",
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="rounded-xl p-[2px] bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"
            >
              <div className="bg-[#0f0f1c] rounded-xl p-6 h-full relative flex flex-col justify-between">
                <div className="flex items-center justify-center mb-4">
                  <GradientIcon
                    svgPath={getPathFromIcon(skill.icon)}
                    gradientId={`iconGradient-${key}`}
                    gradientColors={commonGradientColors}
                    className="w-12 h-12"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground text-white/70">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
