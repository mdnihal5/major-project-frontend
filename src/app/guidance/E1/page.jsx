import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  programmingFundamentals,
  coresubjects,
  dsaSection,
} from "@/data/batchwise-data/e1";

export default function GuidancePage({ params }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Guidance for {params}</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Programming Fundamentals</CardTitle>
            <CardDescription>
              Key programming languages and topics.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {Object.entries(programmingFundamentals.Languages).map(
              ([language, details]) => (
                <div key={language} className="mb-4">
                  <h3 className="font-bold">{language}</h3>
                  <p>{details.description}</p>
                  <ul className="list-disc pl-5">
                    {details.link.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.link}
                          target="_blank"
                          className="text-blue-600"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Core Subjects</CardTitle>
            <CardDescription>Important subjects to focus on.</CardDescription>
          </CardHeader>
          <CardContent>
            {Object.entries(coresubjects).map(([subject, details]) => (
              <div key={subject} className="mb-4">
                <h3 className="font-bold">{subject}</h3>
                <p>{details.description}</p>
                <ul className="list-disc pl-5">
                  {details.link.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.link}
                        target="_blank"
                        className="text-blue-600"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Structures and Algorithms</CardTitle>
            <CardDescription>
              Master the essential concepts of DSA.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{dsaSection.description}</p>
            <div className="mb-4">
              <h3 className="font-bold">Resources:</h3>
              <ul className="list-disc pl-5">
                <li>
                  <a
                    href={dsaSection.resources.videos.link}
                    target="_blank"
                    className="text-blue-600"
                  >
                    {dsaSection.resources.videos.title}
                  </a>
                </li>
                <li>
                  <a
                    href={dsaSection.resources.sheets?.link}
                    target="_blank"
                    className="text-blue-600"
                  >
                    {dsaSection.resources.sheets?.title}
                  </a>
                </li>
                {dsaSection.resources.practice.map((practice, index) => (
                  <li key={index}>
                    <a
                      href={practice.link}
                      target="_blank"
                      className="text-blue-600"
                    >
                      {practice.title}
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
