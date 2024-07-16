type Social = {
  label: string;
  link: string;
};
type Stack = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  stacks: Stack[];
};

const presentation: Presentation = {
  mail: 'abassabdulwahab3@gmail.com',
  title: "Hi, I'm Abdul Wahab 👋",
  description:
    "Hi there, I'm Abdul Wahab, a *fullstack developer* and *Linux fanboy 🐧*. I'm currently a Computer Science student at Ashesi University. I love *building cool stuff* and exploring *low-level languages*. Outside coding, I like to play video games and football ⚽ .",
  socials: [
    {
      label: 'Twitter',
      link: 'https://twitter.com/NerdyProgramme2',
    },
    {
      label: 'Github',
      link: 'https://github.com/urdadx',
    },
    {
      label: 'Book Me',
      link: 'https://cal.com/urdadx',
    },
  ],
  stacks: [
    {
      label: 'NextJS',
      link: 'https://img.icons8.com/fluency/35/nextjs.png',
    },
    {
      label: 'React Native',
      link: 'https://img.icons8.com/color/35/expo.png',
    },
    {
      label: 'Python',
      link: 'https://img.icons8.com/fluency/35/python.png',
    },

    {
      label: 'Node',
      link: 'https://img.icons8.com/color/35/nodejs.png',
    },
    {
      label: 'Postgres',
      link: 'https://img.icons8.com/color/32/postgreesql.png',
    },
    {
      label: 'C++',
      link: 'https://img.icons8.com/color/35/c-plus-plus-logo.png',
    },

    {
      label: 'Blender',
      link: 'https://img.icons8.com/fluency/35/blender-3d.png',
    },
  ],
};

export default presentation;
