export interface AboutContent {
  heading: string;
  intro: string;
  story: {
    title: string;
    content: string;
  }[];
}

export const aboutContent: AboutContent = {
  heading: "Always Learning, Always Building",
  intro: "I'm a full-stack developer who believes great software comes from understanding both the technical challenge and the people who will use it.",
  story: [
    {
      title: "Getting Started",
      content: "My development journey is built on curiosity and systematic learning. I approach each project by first understanding the problem, then building solutions that actually work for real people."
    },
    {
      title: "Technical Growth",
      content: "Working with Next.js, TypeScript, and MongoDB, I've learned to balance performance with usability. My experience in large development teams taught me that clean code and clear communication are just as important as technical skills."
    },
    {
      title: "Current Focus",
      content: "Today I build applications that solve meaningful problems. Whether optimizing database queries or designing user interfaces, I combine technical precision with genuine interest in how people interact with technology."
    },
    {
      title: "What Drives Me",
      content: "I'm drawn to projects where I can learn something new while creating something useful. My goal is to write code that makes both users and fellow developers happy."
    }
  ]
};
