import Timeline from '@/components/Timeline';
import InView from '@/components/ui/InView';
import SkillsCard from '@/components/ui/SkillsCard';
import { aboutContent } from '@/data/about-content';
import { skillsData } from '@/data/skills';
import { timelineData } from '@/data/timeline';
import React from 'react';

export default function About(): React.JSX.Element {
  return (
    <section 
      id="about" 
      className="bg-background px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <InView>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {aboutContent.heading}
          </h2>
        </InView>
        
        {/* Intro */}
        <InView className="animate-delay-100">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg font-medium text-foreground/80 md:mb-16 md:text-xl">
            {aboutContent.intro}
          </p>
        </InView>
        
        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Story Content - 2 columns on desktop */}
          <div className="space-y-8 lg:col-span-2">
            {aboutContent.story.map((paragraph, index) => (
              <InView key={index} className={`animate-delay-${(index + 2) * 100}`}>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {paragraph.title}
                  </h3>
                  <p className="leading-relaxed text-foreground/80">
                    {paragraph.content}
                  </p>
                </div>
              </InView>
            ))}
          </div>
          
          {/* Sidebar - Skills & Timeline - 1 column on desktop */}
          <div className="space-y-8">
            {/* Technical Stack */}
            <InView className="animate-delay-200">
              <SkillsCard 
                title="Technical Stack"
                items={skillsData.technicalStack}
              />
            </InView>
            
            {/* Working Style */}
            <InView className="animate-delay-300">
              <SkillsCard 
                title="Working Style"
                items={skillsData.workingStyle}
              />
            </InView>
          </div>
        </div>
        
        {/* Timeline Section */}
        <InView className="mt-16 md:mt-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Journey
          </h3>
          <div className="mx-auto max-w-3xl">
            <Timeline>
              {timelineData.map((item, index) => (
                <Timeline.Item key={index} item={item} />
              ))}
            </Timeline>
          </div>
        </InView>
      </div>
    </section>
  );
}
