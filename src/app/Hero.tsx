import { heroContent } from "@/data/hero-content";

export default function Hero(): React.JSX.Element {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 py-12 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-5xl text-center">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          {heroContent.headline.main}{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {heroContent.headline.accent}
          </span>
        </h1>
        
        <p className="mx-auto mb-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300 md:text-xl">
          {heroContent.subheading}
        </p>
        
        <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 dark:text-gray-400 md:text-lg">
          {heroContent.description}
        </p>
        
        <a
          href={heroContent.cta.href}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {heroContent.cta.text}
        </a>
      </div>
    </section>
  );
}
