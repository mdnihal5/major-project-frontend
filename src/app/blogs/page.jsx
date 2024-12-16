import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>The Future of AI in Education</CardTitle>
            <CardDescription>By Dr. Jane Smith | 5 min read</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Exploring how artificial intelligence is shaping the future of
              education and learning.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sustainable Engineering Practices</CardTitle>
            <CardDescription>By Prof. John Doe | 7 min read</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Discussing the importance of sustainability in modern engineering
              and its global impact.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>The Rise of Quantum Computing</CardTitle>
            <CardDescription>By Dr. Alice Johnson | 6 min read</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              An overview of quantum computing and its potential to
              revolutionize various industries.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
