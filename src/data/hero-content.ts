export interface HeroContent {
  headline: {
    main: string;
    accent: string;
  };
  subheading: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

export const heroContent: HeroContent = {
  headline: {
    main: "Building Better Software Through",
    accent: "Continuous Learning"
  },
  subheading: "Full-stack developer creating scalable Next.js applications with a focus on user experience and team collaboration.",
  description: "London-based engineer specializing in TypeScript, performance optimization, and turning complex problems into elegant solutions.",
  cta: {
    text: "View My Work",
    href: "#about"
  }
};
