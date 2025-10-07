import Button from "@/components/ui/Button";
import { heroContent } from "@/data/hero-content";

export default function Hero(): React.JSX.Element {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-surface-50 to-background px-4 py-12">
      <div className="w-full max-w-5xl text-center">
        <h1 className="animate-fade-in-up mb-6 text-3xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          {heroContent.headline.main}{" "}
          <span className="text-primary">
            {heroContent.headline.accent}
          </span>
        </h1>
        
        <p className="animate-fade-in-up animate-delay-200 mx-auto mb-4 max-w-3xl text-lg text-foreground/80 md:text-xl">
          {heroContent.subheading}
        </p>
        
        <p className="animate-fade-in-up animate-delay-300 mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg">
          {heroContent.description}
        </p>
        
        <div className="animate-fade-in-up animate-delay-400">
          <Button
            variant="primary"
            size="lg"
            href={heroContent.cta.href}
          >
            {heroContent.cta.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
