import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import { interviewPreparation } from "@/data/batchwise-data/e4";
  
  export default function Page() {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-black">Guidance for Computer Science</h1>
  
        {/* Interview Preparation Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">Interview Preparation Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {interviewPreparation.map((topic, index) => (
              <Card key={index} className="dark:bg-slate-700">
                <CardHeader>
                  <CardTitle>{topic.subject}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul>
                    {topic.practiceLinks.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 dark:text-red-300 underline"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
  