import { CustomCard } from "@/components/ui/custom-card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
  Newspaper,
  Calendar,
  Book,
} from "lucide-react";
import { EnhancedCard } from "@/components/ui/enhanced-card";
import { FAQ } from "@/components/faq";

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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <EnhancedCard
          title="Latest News"
          icon={<Newspaper className="w-6 h-6" />}
          gradient="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800"
        >
          <ul className="space-y-2">
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4 text-blue-500" />
              New research center opened
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4 text-blue-500" />
              Upcoming placement drive
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4 text-blue-500" />
              Annual tech fest dates announced
            </li>
          </ul>
        </EnhancedCard>

        <EnhancedCard
          title="Student Life"
          icon={<Users className="w-6 h-6" />}
          gradient="bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-800 dark:to-teal-800"
        >
          <p className="mb-4">
            Experience a vibrant campus life with numerous clubs and activities.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-green-200 text-green-700 dark:bg-green-700 dark:text-green-200"
            >
              Tech Club
            </Badge>
            <Badge
              variant="secondary"
              className="bg-green-200 text-green-700 dark:bg-green-700 dark:text-green-200"
            >
              Sports
            </Badge>
            <Badge
              variant="secondary"
              className="bg-green-200 text-green-700 dark:bg-green-700 dark:text-green-200"
            >
              Cultural Events
            </Badge>
            <Badge
              variant="secondary"
              className="bg-green-200 text-green-700 dark:bg-green-700 dark:text-green-200"
            >
              Hackathons
            </Badge>
          </div>
        </EnhancedCard>

        <EnhancedCard
          title="Academic Excellence"
          icon={<TrendingUp className="w-6 h-6" />}
          gradient="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800"
        >
          <p className="mb-4">
            Our programs are designed to nurture innovation and critical
            thinking.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4 text-purple-500" />
              Cutting-edge curriculum
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4 text-purple-500" />
              Industry partnerships
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 h-4 w-4 text-purple-500" />
              Research opportunities
            </li>
          </ul>
        </EnhancedCard>
      </div>

      <EnhancedCard
        title="Quick Links"
        icon={<Zap className="w-6 h-6" />}
        gradient="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-800 dark:to-orange-800"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <a
            href="#"
            className="flex items-center hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Academic Calendar
          </a>
          <a
            href="#"
            className="flex items-center hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            <Users className="mr-2 h-4 w-4" />
            Student Portal
          </a>
          <a
            href="#"
            className="flex items-center hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            <Book className="mr-2 h-4 w-4" />
            Faculty Directory
          </a>
          <a
            href="#"
            className="flex items-center hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            <Book className="mr-2 h-4 w-4" />
            Library Resources
          </a>
          <a
            href="#"
            className="flex items-center hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Campus Map
          </a>
          <a
            href="#"
            className="flex items-center hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
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

/* <EnhancedCard gradient="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800" /> */
