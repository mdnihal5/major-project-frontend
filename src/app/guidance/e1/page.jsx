import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { programmingFundamentals, coresubjects, dsaSection } from "@/data/batchwise-data/e1";

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-black">Guidance for Computer Science</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-black">Programming Fundamentals</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(programmingFundamentals.Languages).map(
            ([language, data]) => (
              <Card key={language} className="dark:bg-slate-700">
                <CardHeader>
                  <CardTitle>{language}</CardTitle>
                  <CardDescription className="font-mono">{data.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul>
                    {data.link.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 dark:text-red-300 underline"
                        >
                          {resource.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-black">Core Subjects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(coresubjects).map(([subject, data]) => (
            <Card key={subject} className="dark:bg-slate-700" >
              <CardHeader>
                <CardTitle>{subject}</CardTitle>
                <CardDescription className="font-mono">{data.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  {data.link.map((resource, index) => (
                    <li key={index}>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-red-300 underline"
                      >
                        {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-black">Data Structures and Algorithms (DSA)</h2>
        <Card className="dark:bg-slate-700">
          <CardHeader >
            <CardTitle>DSA Resources</CardTitle>
            <CardDescription className="font-mono" >{dsaSection.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <strong>Video Resources:</strong>{" "}
                <a
                  href={dsaSection.resources.videos.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-red-300 underline "
                >
                  {dsaSection.resources.videos.title}
                </a>
              </p>
              <p>
                <strong>Practice Sheets:</strong>{" "}
                <a
                  href={dsaSection.resources.Sheets.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-red-300 underline"
                >
                  {dsaSection.resources.Sheets.title}
                </a>
              </p>
              <ul>
                <strong>Practice Platforms:</strong>
                {dsaSection.resources.practice.map((platform, index) => (
                  <li key={index}>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 dark:text-red-300 underline"
                    >
                      {platform.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
