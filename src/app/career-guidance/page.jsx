import Link from "next/link";

const domains = [
  "ai",
  "backend",
  "blockchain",
  "dl",
  "datascience",
  "devops",
  "frontend",
  "java-dev",
  "ml",
  "mean",
  "mern",
  "mobile-dev",
  "nlp",
  "python-dev",
];

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {domains.map((domain, index) => (
        <Link href={`/career-guidance/${domain}`} key={index} className="p-3 h-12 bg-card dark:bg-slate-700 rounded-lg shadow-md">
            {domain}
        </Link>
      ))}
    </div>
  );
};

export default Page;
