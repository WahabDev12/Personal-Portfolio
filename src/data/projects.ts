export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Libre-gradients / A tool for customizing gradients ✨",
        techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://libre-gradients.vercel.app",
},
{
    title: "Breeze / A screenshots editor for the web 🎨",
    techs: ["ReactJS (Vite)"],
    link: "https://breeze-app.vercel.app/",
},
{
    title: "Chillax / A meditation tool for studying 💆",
    link: "https://chillax1-wahabdev12.vercel.app/",
    techs: ["ReactJS"],
  },
{
    title: "Librelinks / An opensource link in bio tool 🚀",
    link: "/",
    techs: ["ReactJS (NextJS)"],
    isComingSoon: true,
  },
];

export default projects;