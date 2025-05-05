import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <div className="flex items-center gap-3">
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} ENGISOL.co. All rights reserved.
      </p>
      <img
    src="/projects/logo.jpeg"
    alt="Profile"
    className="w-12 h-12 rounded-full object-cover border border-primary"
  />
      
      </div>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
