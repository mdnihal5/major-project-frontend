import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EnhancedCard } from "@/components/ui/enhanced-card";
import { Briefcase, GraduationCap } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Career Opportunities</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <EnhancedCard
          title="Software Engineer"
          description="Full-time position"
          icon={<Briefcase className="w-6 h-6" />}
        >
          <p>
            We're looking for a talented software engineer to join our team.
            Experience with React and Node.js required.
          </p>
        </EnhancedCard>
        <EnhancedCard
          title="Data Scientist"
          description="Full-time position"
          icon={<GraduationCap className="w-6 h-6" />}
        >
          <p>
            Join our data science team to work on cutting-edge machine learning
            projects. PhD in related field preferred.
          </p>
        </EnhancedCard>
      </div>
    </div>
  );
}
