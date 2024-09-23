export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Librelinks / An opensource link in bio tool 🚀",
    link: "https://librelinks.vercel.app",
    techs: ["NextJS", "MongoDB", "Prisma"],
  },
  {
    title: "Spacely / A meditation tool for studying ⚡️",
    link: "https://spacely.vercel.app/",
    techs: ["ReactJS (NextJS)"],
  },

  {
    title: "Breeze / A screenshots editor for the web 🔥",
    techs: ["ReactJS (Vite)"],
    link: "https://breeze-app.vercel.app/",
  },
  {
    title: "Libre-gradients / A tool for customizing gradients ✨",
    techs: ["NextJS", "TypeScript"],
    link: "https://libre-gradients.vercel.app",
  },
];

export default projects;
