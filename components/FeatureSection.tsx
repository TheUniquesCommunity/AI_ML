import { cn } from "@/lib/utils";
import {
  
  IconCloud,
  IconUsers,
  IconNetwork,
  IconMicrophone,
  IconBook,
  IconCalendar,
  IconMapPin,
  IconStars,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Diverse Panelists",
      description: "Leaders from startups, industries, and academia come together to share insights.",
      icon: <IconUsers />,
    },
    {
      title: "Inspiring Discussions",
      description: "Engaging conversations that ignite ideas and foster innovation.",
      icon: <IconCloud />,
    },
    {
      title: "Networking Opportunities",
      description: "Connect with experts, mentors, and fellow attendees to expand your professional circle.",
      icon: <IconNetwork />,
    },
    {
      title: "Entertainment & Fun",
      description: "Enjoy stand-up comedy, band performances, and cultural events.",
      icon: <IconMicrophone />,
    },
    {
      title: "Learning & Growth",
      description: "Gain knowledge through workshops and hands-on sessions led by industry experts.",
      icon: <IconBook />,
    },
    {
      title: "Event Schedule",
      description: "A well-planned three-day fest filled with activities for everyone.",
      icon: <IconCalendar />,
    },
    {
      title: "Venue & Accessibility",
      description: "Easily accessible location with all necessary amenities.",
      icon: <IconMapPin />,
    },
    {
      title: "Celebrating Achievements",
      description: "Recognizing outstanding contributions and awarding talent.",
      icon: <IconStars />,
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center  my-10 md:mt-[2rem] p-4 md:p-[5rem]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-center max-w-[900px] tracking-tighter">
          <span className="text-3xl md:text-5xl lg:text-6xl font-normal">About AI/ML Convention</span>, <br/>
          <span className="text-white/60 text-xl md:text-2xl lg:text-3xl">An immersive experience designed to inspire, educate, and entertain.</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
    
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
