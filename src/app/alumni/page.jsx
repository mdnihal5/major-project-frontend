import { EnhancedCard } from "@/components/ui/enhanced-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe } from "lucide-react";

const alumniData = [
  {
    id: "ALU001",
    name: "John Doe",
    graduationYear: 2020,
    company: "Tech Giants Inc.",
    experience: "3 years",
    avatar: "/placeholder.svg?height=100&width=100",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    blogs: [
      { title: "My Journey in Tech", url: "#" },
      { title: "Mastering React Hooks", url: "#" },
    ],
    internships: [
      { company: "Startup XYZ", duration: "3 months" },
      { company: "Big Corp", duration: "6 months" },
    ],
  },
  // Add more alumni data here...
];

export default function AlumniPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Alumni Network</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {alumniData.map((alumni) => (
          <EnhancedCard
            key={alumni.id}
            title={alumni.name}
            icon={
              <Avatar>
                <AvatarImage src={alumni.avatar} alt={alumni.name} />
                <AvatarFallback>
                  {alumni.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            }
            gradient="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800"
          >
            <div className="space-y-2">
              <p>
                <strong>ID:</strong> {alumni.id}
              </p>
              <p>
                <strong>Graduation Year:</strong> {alumni.graduationYear}
              </p>
              <p>
                <strong>Company:</strong> {alumni.company}
              </p>
              <p>
                <strong>Experience:</strong> {alumni.experience}
              </p>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={alumni.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={alumni.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
              <div>
                <h4 className="font-semibold mt-4 mb-2">Blogs:</h4>
                <ul className="list-disc list-inside">
                  {alumni.blogs.map((blog, index) => (
                    <li key={index}>
                      <a
                        href={blog.url}
                        className="text-blue-600 hover:underline"
                      >
                        {blog.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mt-4 mb-2">Internships:</h4>
                <ul className="space-y-1">
                  {alumni.internships.map((internship, index) => (
                    <li key={index}>
                      <Badge variant="secondary">{internship.company}</Badge>
                      <span className="ml-2 text-sm text-gray-600">
                        {internship.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </EnhancedCard>
        ))}
      </div>
    </div>
  );
}
