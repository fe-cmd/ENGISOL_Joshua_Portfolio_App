import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce web app",
    description: "A Full-Stack E-commerce app using Python, Django, Html, Css and Javascript(Ajax).",
    image: "/projects/proj2.PNG",
    tags: ["Python", "CSS", "Django", "Html", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Combined E-commerce + Chat App",
    description:
      "Real time E-commerce shop platform for payment and shopping embedding in with it real time chat app among Buyers and sellers",
    image: "/projects/proj4.jpeg",
    tags: ["React", "NodeJs", "Css"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Business Web App",
    description:
      "Full-featured oil business platform with exclusive animations, user friendly & mobile responsive.",
    image: "/projects/proj3.PNG",
    tags: ["React", "Node.js", "Css"],
    demoUrl: "https://www.abyunbumaoil.com/",
    githubUrl: "https://github.com/fe-cmd/Abyum-Buma-React-Nodejs-Business-Website",
  },
  {
    id: 4,
    title: "Personal Website",
    description:
      "Full-featured personal web awareness platform with effective user authentication and account security verification.",
    image: "/projects/proj1.PNG",
    tags: ["Python", "CSS", "Django", "Html", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "HeyChat Social Media App",
    description:
      "Full-featured social media platform with user authentication, real time videocall & chat application, effective posts,friends connections and following.",
    image: "/projects/proj5.PNG",
    tags: ["Python", "TailwindCSS", "Django", "Html", "Javascript(Ajax)", "Agora", "WebSockets"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description:
      "Full-Stack e-commerce platform with user authentication and database server management,effective admin control.",
    image: "/projects/proj6.jpeg",
    tags: ["React", "Node.js", "MongoDb", "Css"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent & top projects, past&recent services to clients. Each project/Service was carefully
          crafted with attention to detail, performance,highly functional web app and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, key) => (
    <div
      key={key}
      className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover max-w-[450px] mx-auto"
    >
      <div className="h-[240px] w-full overflow-hidden flex justify-center items-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <a
              href={project.demoUrl}
              target="_blank"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/fe-cmd?tab=repositories"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
