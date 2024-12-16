import { EnhancedCard } from "@/components/ui/enhanced-card";
import { GraduationCap, Users } from "lucide-react";
export default function EarlyCareersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Early Careers</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <EnhancedCard
          title="Internship Program"
          description="3-month program for students"
          icon={<GraduationCap className="w-6 h-6" />}
        >
          <p>
            Gain hands-on experience in your field of study with our
            comprehensive internship program.
          </p>
        </EnhancedCard>
        <EnhancedCard
          title="Graduate Trainee"
          description="1-year program for recent graduates"
          icon={<Users className="w-6 h-6" />}
        >
          <p>
            Start your career with our graduate trainee program, designed to
            transition you from academia to industry.
          </p>
        </EnhancedCard>
      </div>
    </div>
  );
}
