import { CustomCard } from "@/components/ui/custom-card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

export default function TNPPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Training and Placement</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <CustomCard
          title="Placement Statistics"
          icon={<Briefcase className="w-6 h-6" />}
        >
          <ul className="space-y-2">
            <li>Average Package: ₹8.5 LPA</li>
            <li>Highest Package: ₹45 LPA</li>
            <li>Placement Rate: 95%</li>
          </ul>
        </CustomCard>

        <CustomCard title="Top Recruiters" icon={<Award className="w-6 h-6" />}>
          <div className="flex flex-wrap gap-2">
            <Badge>Google</Badge>
            <Badge>Microsoft</Badge>
            <Badge>Amazon</Badge>
            <Badge>Adobe</Badge>
            <Badge>IBM</Badge>
            <Badge>Infosys</Badge>
          </div>
        </CustomCard>

        <CustomCard
          title="Training Programs"
          icon={<GraduationCap className="w-6 h-6" />}
        >
          <ul className="space-y-2">
            <li>Soft Skills Development</li>
            <li>Technical Interview Preparation</li>
            <li>Mock Interviews</li>
            <li>Resume Building Workshops</li>
          </ul>
        </CustomCard>

        <CustomCard
          title="Upcoming Events"
          icon={<Calendar className="w-6 h-6" />}
        >
          <ul className="space-y-2">
            <li>Campus Recruitment Drive - July 15, 2023</li>
            <li>Industry Expert Talk - August 5, 2023</li>
            <li>Mock Placement Test - August 20, 2023</li>
          </ul>
        </CustomCard>
      </div>
    </div>
  );
}
