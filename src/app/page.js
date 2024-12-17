import { EnhancedCard } from "@/components/ui/enhanced-card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
  Newspaper,
  Calendar,
  Book,
  Code,
  Target,
  Rocket,
  Brain,
  Shield,
} from "lucide-react";
import { FAQ } from "@/components/faq";

const clubs = [
  { name: "Coding Club", icon: Code },
  { name: "Robotics Club", icon: Rocket },
  { name: "AI/ML Club", icon: Brain },
  { name: "Cybersecurity Club", icon: Shield },
];

const events = [
  { name: "Annual Tech Fest", date: "October 15-17, 2023" },
  { name: "Hackathon", date: "November 5-6, 2023" },
  { name: "Industry Expert Talk Series", date: "Every Last Saturday" },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Welcome to RGUKT-B
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Empowering minds, shaping futures. Discover a world of opportunities
          and excellence at RGUKT-B.
        </p>
      </section>

      <EnhancedCard
        title="About Computer Science Engineering"
        icon={<Code className="w-6 h-6" />}
        gradient="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800"
      >
        <p className="mb-4">
          Our Computer Science Engineering program is designed to equip students
          with cutting-edge knowledge and skills in various aspects of
          computing, from software development to artificial intelligence and
          beyond.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-2">Vision</h3>
            <p className="text-sm">
              To be a center of excellence in computer science education and
              research, producing innovative leaders who drive technological
              advancements.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm">
              To provide a comprehensive learning environment that fosters
              critical thinking, problem-solving skills, and ethical practices
              in the field of computer science.
            </p>
          </div>
        </div>
      </EnhancedCard>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <EnhancedCard
          title="Latest News"
          icon={<Newspaper className="w-6 h-6" />}
          gradient="bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-800 dark:to-teal-800"
        >
          <ul className="space-y-2">
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4 text-green-500" />
              New AI research center opened
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4 text-green-500" />
              Upcoming placement drive
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4 text-green-500" />
              Annual tech fest dates announced
            </li>
          </ul>
        </EnhancedCard>

        <EnhancedCard
          title="Clubs"
          icon={<Users className="w-6 h-6" />}
          gradient="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800"
        >
          <div className="grid grid-cols-2 gap-2">
            {clubs.map((club) => (
              <div key={club.name} className="flex items-center space-x-2">
                <club.icon className="w-4 h-4 text-purple-500" />
                <span className="text-sm">{club.name}</span>
              </div>
            ))}
          </div>
        </EnhancedCard>

        <EnhancedCard
          title="Upcoming Events"
          icon={<Calendar className="w-6 h-6" />}
          gradient="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-800 dark:to-orange-800"
        >
          <ul className="space-y-2">
            {events.map((event) => (
              <li
                key={event.name}
                className="flex items-center justify-between"
              >
                <span className="text-sm font-medium">{event.name}</span>
                <span className="text-xs text-gray-500">{event.date}</span>
              </li>
            ))}
          </ul>
        </EnhancedCard>
      </div>

      <EnhancedCard
        title="Quick Links"
        icon={<Zap className="w-6 h-6" />}
        gradient="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <a
            href="#"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Academic Calendar
          </a>
          <a
            href="#"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Users className="mr-2 h-4 w-4" />
            Student Portal
          </a>
          <a
            href="#"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Book className="mr-2 h-4 w-4" />
            Faculty Directory
          </a>
          <a
            href="#"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Book className="mr-2 h-4 w-4" />
            Library Resources
          </a>
          <a
            href="#"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Campus Map
          </a>
          <a
            href="#"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Contact Us
          </a>
        </div>
      </EnhancedCard>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </section>
    </div>
  );
}
