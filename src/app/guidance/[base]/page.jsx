import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GuidancePage({ params }) {
  const base = params.base.toUpperCase();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Guidance for {base}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Academic Roadmap</CardTitle>
            <CardDescription>Plan your academic journey</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Key subjects and skills to focus on during your {base} year.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Career Opportunities</CardTitle>
            <CardDescription>Explore potential career paths</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Discover the various career opportunities available after
              completing {base}.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>
              Helpful materials for your studies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Access study materials, online courses, and other resources
              specific to {base}.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mentorship Program</CardTitle>
            <CardDescription>
              Get guidance from experienced mentors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Connect with mentors who can guide you through your {base} journey
              and beyond.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
