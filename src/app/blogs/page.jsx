"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {useSelector} from "react-redux"

export default function BlogsPage() {
  const blogs=useSelector((state)=>state.blogs.data)
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              <CardDescription>{blog.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{blog.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
