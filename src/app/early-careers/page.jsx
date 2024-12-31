import { EnhancedCard } from "@/components/ui/enhanced-card";
import { ArrowBigDown, ArrowBigRight, ArrowDownRight, ArrowRight, GraduationCap, Users } from "lucide-react";
import { data } from './data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function EarlyCareersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-black">Early Careers</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((program, index) => (
          <Card
                className={` shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:bg-gray-900`}
                key={index}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800 dark:text-white gap-3">
                    
                    <a className="flex" href={program.careerPage} target="blank"><span className=" text-2xl">{program.organization}</span><ArrowRight className="pt-2.5"/></a>
                  </CardTitle>
                  <CardDescription>
                    <div className="ml-2 flex flex-col text-lg">
                      <div className="flex items-center">
                        <h3 className="font-bold mr-4">Application : </h3>
                        <p>{program.opportunityTime.applications}</p>
                      </div>
                      <div className="flex items-center">
                        <h3 className="font-bold mr-4" >Internship : </h3>
                        <p>{program.opportunityTime.internships}</p>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 ml-2 dark:text-gray-400 text-lg">
                  Duration : {program.duration}
                </CardContent>
              </Card>
        ))}
      </div>
    </div>
  );
}
