"use client";

import { useState } from "react";
import { EnhancedCard } from "@/components/ui/enhanced-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Plus, Save, Trash2 } from "lucide-react";
import { BlogEditor } from "@/components/blog-editor";
import { Badge } from "@/components/ui/badge";

const initialAlumniData = {
  id: "ALU001",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  linkedin: "https://linkedin.com/in/johndoe",
  company: "Tech Giants Inc.",
  experience: "3 years",
  blogs: [
    {
      id: 1,
      title: "My Journey in Tech",
      content: "This is my journey in tech...",
      url: "#",
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      content: "React Hooks are...",
      url: "#",
    },
  ],
  internships: [
    { id: 1, company: "Startup XYZ", duration: "3 months" },
    { id: 2, company: "Big Corp", duration: "6 months" },
  ],
};

export default function AlumniDashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [alumniData, setAlumniData] = useState(initialAlumniData);
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });
  const [isAddingInternship, setIsAddingInternship] = useState(false);
  const [newInternship, setNewInternship] = useState({
    company: "",
    duration: "",
  });

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    console.log("Saving updated data:", alumniData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumniData({ ...alumniData, [name]: value });
  };

  const handlePasswordChange = () => {
    console.log("Changing password");
    setCurrentPassword("");
    setNewPassword("");
  };

  const handleAddBlog = () => {
    if (!newBlog.title || !newBlog.content) {
      alert("Title and content are required to add a blog!");
      return;
    }

    setAlumniData({
      ...alumniData,
      blogs: [...alumniData.blogs, { id: Date.now(), ...newBlog, url: "#" }],
    });
    setNewBlog({ title: "", content: "" });
    setIsAddingBlog(false);
  };

  const handleDeleteBlog = (id) => {
    setAlumniData({
      ...alumniData,
      blogs: alumniData.blogs.filter((blog) => blog.id !== id),
    });
  };

  const handleAddInternship = () => {
    if (!newInternship.company || !newInternship.duration) {
      alert("Company and duration are required to add an internship!");
      return;
    }

    setAlumniData({
      ...alumniData,
      internships: [
        ...alumniData.internships,
        { id: Date.now(), ...newInternship },
      ],
    });
    setNewInternship({ company: "", duration: "" });
    setIsAddingInternship(false);
  };

  const handleDeleteInternship = (id) => {
    setAlumniData({
      ...alumniData,
      internships: alumniData.internships.filter(
        (internship) => internship.id !== id,
      ),
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Alumni Dashboard</h1>
      <EnhancedCard
        title="Personal Information"
        icon={
          <Avatar className="w-20 h-20">
            <AvatarImage src={alumniData.avatar} alt={alumniData.name} />
            <AvatarFallback>
              {alumniData.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        }
        gradient="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800"
      >
        <div className="space-y-4">
          <div className="flex justify-end">
            {isEditing ? (
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            ) : (
              <Button onClick={handleEdit}>
                <Pencil className="w-4 h-4 mr-2" />
                Edit
              </Button>
            )}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={alumniData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={alumniData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                name="linkedin"
                value={alumniData.linkedin}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                value={alumniData.company}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="experience">Experience</Label>
              <Input
                id="experience"
                name="experience"
                value={alumniData.experience}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
      </EnhancedCard>

      <EnhancedCard
        title="Change Password"
        icon={<Pencil className="w-6 h-6" />}
        gradient="bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-800 dark:to-teal-800"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <Button onClick={handlePasswordChange}>Change Password</Button>
        </div>
      </EnhancedCard>

      <EnhancedCard
        title="Blogs"
        icon={<Plus className="w-6 h-6" />}
        gradient="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-800 dark:to-orange-800"
      >
        <div className="space-y-4">
          {alumniData.blogs.map((blog) => (
            <div key={blog.id} className="flex justify-between items-center">
              <a href={blog.url} className="text-blue-600 hover:underline">
                {blog.title}
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteBlog(blog.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
          {isAddingBlog ? (
            <div className="space-y-4">
              <Input
                placeholder="Blog Title"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
              />
              <BlogEditor
                content={newBlog.content}
                onChange={(content) => setNewBlog({ ...newBlog, content })}
              />
              <div className="flex justify-end space-x-2">
                <Button onClick={() => setIsAddingBlog(false)}>Cancel</Button>
                <Button onClick={handleAddBlog}>Add Blog</Button>
              </div>
            </div>
          ) : (
            <Button onClick={() => setIsAddingBlog(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Write New Blog
            </Button>
          )}
        </div>
      </EnhancedCard>

      <EnhancedCard
        title="Internships"
        icon={<Pencil className="w-6 h-6" />}
        gradient="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800"
      >
        <div className="space-y-4">
          {alumniData.internships.map((internship) => (
            <div
              key={internship.id}
              className="flex justify-between items-center"
            >
              <div>
                <Badge variant="secondary">{internship.company}</Badge>
                <span className="ml-2 text-sm text-gray-600">
                  {internship.duration}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteInternship(internship.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
          {isAddingInternship ? (
            <div className="space-y-4">
              <Input
                placeholder="Company"
                value={newInternship.company}
                onChange={(e) =>
                  setNewInternship({
                    ...newInternship,
                    company: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Duration"
                value={newInternship.duration}
                onChange={(e) =>
                  setNewInternship({
                    ...newInternship,
                    duration: e.target.value,
                  })
                }
              />
              <div className="flex justify-end space-x-2">
                <Button onClick={() => setIsAddingInternship(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddInternship}>Add Internship</Button>
              </div>
            </div>
          ) : (
            <Button onClick={() => setIsAddingInternship(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Internship
            </Button>
          )}
        </div>
      </EnhancedCard>
    </div>
  );
}
