"use client";
import { CustomCard } from "@/components/ui/custom-card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogTitle } from "@radix-ui/react-dialog";
export default function TNPPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const batch = e.target.batch.value;
    const company = e.target.company.value;
    const jd = e.target.jd.value;
    const questions = e.target.questions.value;
    const data = {
      batch,
      company,
      jd,
      questions,
    };
    console.log(data);
  };
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
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Data</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle className="flex items-center justify-center">
            Add TNP data
          </DialogTitle>
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2   md:space-y-0 md:space-x-2 mb-4 gap-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="batch">Batch</Label>
                <Input id="batch" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="••••••••" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="jd">Job Description</Label>
                <Input id="jd" placeholder="••••••••" type="file" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="questions">Questions</Label>
                <textarea
                  id="questions"
                  rows="5"
                  cols="30"
                  className="p-2 border border-black"
                ></textarea>
              </div>
              <Button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                submit &rarr;
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
