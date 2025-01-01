import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import { coresubjects,cp } from "@/data/batchwise-data/e3";
  
  export default function Page() {
    return (
      <div className="space-y-6 ">
        <h1 className="text-3xl font-bold text-black">Guidance for Computer Science</h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">Core Subjects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(coresubjects).map(([subject, data]) => (
              <Card key={subject} className="dark:bg-slate-700">
                <CardHeader>
                  <CardTitle>{subject}</CardTitle>
                  <CardDescription>{data.description}</CardDescription>
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
  
          <h2 className="text-2xl font-semibold text-black">Competitive Programming (CP)</h2>
        <div className="space-y-4 rounded-lg shadow-md bg-card p-3 dark:bg-slate-700">
  
          <div>
            <h3 className="text-xl font-semibold">Blogs</h3>
            <ul className="space-y-2">
              {cp.blogs.map((blog, index) => (
                <li key={index}>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-red-300 underline"
                  >
                    {blog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Video Resources</h3>
            <ul className="space-y-2">
              {cp.videos.map((video, index) => (
                <li key={index}>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-red-300 underline"
                  >
                    {video.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Practice Platforms</h3>
            <ul className="space-y-2">
              {cp.platforms.map((platform, index) => (
                <li key={index}>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-red-300 underline"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  