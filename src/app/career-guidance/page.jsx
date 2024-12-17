import { EnhancedCard } from "@/components/ui/enhanced-card";
import {
  Code,
  Globe,
  Database,
  Shield,
  Cloud,
  Brain,
  Server,
  Layers,
  Code2,
} from "lucide-react";

const domains = [
  {
    name: "Artificial Intelligence",
    icon: Brain,
    description: "Explore the cutting-edge field of AI and machine learning.",
  },
  {
    name: "Web Development",
    icon: Globe,
    description: "Learn to build modern, responsive web applications.",
    subdomains: [
      { name: "Frontend Development", icon: Code },
      { name: "Backend Development", icon: Server },
      {
        name: "Full Stack Development",
        icon: Layers,
        stacks: [
          "MERN (MongoDB, Express, React, Node.js)",
          "MEAN (MongoDB, Express, Angular, Node.js)",
          "LAMP (Linux, Apache, MySQL, PHP)",
        ],
      },
    ],
  },
  {
    name: "Blockchain",
    icon: Database,
    description: "Discover the potential of decentralized technologies.",
  },
  {
    name: "DevOps",
    icon: Cloud,
    description: "Bridge the gap between development and operations.",
  },
  {
    name: "Cyber Security",
    icon: Shield,
    description: "Protect digital assets and secure information systems.",
  },
  {
    name: "Software Engineering",
    icon: Code2,
    description: "Master the principles of building robust software systems.",
  },
];

export default function CareerGuidancePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Career Guidance</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Explore various tech domains and find your passion in the world of
        technology.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain) => (
          <EnhancedCard
            key={domain.name}
            title={domain.name}
            icon={<domain.icon className="w-6 h-6" />}
            gradient="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800"
          >
            <p className="mb-2">{domain.description}</p>
            {domain.subdomains && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Specializations:</h4>
                <ul className="space-y-2">
                  {domain.subdomains.map((subdomain) => (
                    <li key={subdomain.name} className="flex items-center">
                      <subdomain.icon className="w-4 h-4 mr-2" />
                      <span>{subdomain.name}</span>
                      {subdomain.stacks && (
                        <ul className="ml-6 mt-1 space-y-1">
                          {subdomain.stacks.map((stack) => (
                            <li
                              key={stack}
                              className="text-sm text-gray-600 dark:text-gray-400"
                            >
                              {stack}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </EnhancedCard>
        ))}
      </div>
    </div>
  );
}
