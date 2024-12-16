import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  programmingFundamentals,
  coreSubjects,
  dsaSection,
} from "@/data/batchwise-data/e1";
const E1data = () => {
  const renderResourceLinks = (links) => {
    if (!links) return null;

    const linkArray = Array.isArray(links)
      ? links
      : typeof links === "object"
        ? [links]
        : [];

    return linkArray.map((link, index) => (
      <a
        key={index}
        href={link.link || link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline block"
      >
        {link.title}
      </a>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Programming Fundamentals Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Programming Fundamentals</CardTitle>
            <CardDescription>
              Languages and Mathematical Concepts
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div>
              <h3 className="font-semibold mb-2">Languages:</h3>
              {Object.entries(programmingFundamentals.Languages || {}).map(
                ([lang, details]) => (
                  <div key={lang} className="mb-2">
                    <h4 className="font-medium">{lang}</h4>
                    <p className="text-sm">{details.description}</p>
                  </div>
                ),
              )}

              <h3 className="font-semibold mt-4 mb-2">
                Mathematical Concepts:
              </h3>
              {Object.entries(programmingFundamentals.Maths || {}).map(
                ([math, details]) => (
                  <div key={math} className="mb-2">
                    <h4 className="font-medium">{math}</h4>
                    <p className="text-sm">{details.description}</p>
                  </div>
                ),
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <h4 className="font-semibold mb-2">Resources:</h4>
            {Object.values(programmingFundamentals.Languages || {})
              .flatMap((lang) => lang.link || [])
              .slice(0, 3)
              .map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {link.title}
                </a>
              ))}
          </CardFooter>
        </Card>

        {/* Core Subjects Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Core Subjects</CardTitle>
            <CardDescription>Essential Programming Subjects</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {Object.entries(coreSubjects || {}).map(([subject, details]) => (
              <div key={subject} className="mb-4">
                <h3 className="font-semibold">{subject}</h3>
                <p className="text-sm">{details.description}</p>
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <h4 className="font-semibold mb-2">Resources:</h4>
            {renderResourceLinks(
              Object.values(coreSubjects || {}).flatMap(
                (subject) => subject.link || [],
              ),
            )}
          </CardFooter>
        </Card>

        {/* DSA Section Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Data Structures & Algorithms</CardTitle>
            <CardDescription>DSA Resources and Practice</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">{dsaSection.description}</p>
            <div>
              <h3 className="font-semibold">Key Resources:</h3>
              <div className="space-y-2">
                {dsaSection.resources.videos && (
                  <div>
                    <span className="font-medium">Videos: </span>
                    <a
                      href={dsaSection.resources.videos.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {dsaSection.resources.videos.title}
                    </a>
                  </div>
                )}
                {dsaSection.resources.Sheets && (
                  <div>
                    <span className="font-medium">Sheets: </span>
                    <a
                      href={dsaSection.resources.Sheets.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {dsaSection.resources.Sheets.title}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <h4 className="font-semibold mb-2">Practice Platforms:</h4>
            {dsaSection.resources.practice?.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {platform.title}
              </a>
            ))}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default E1data;
