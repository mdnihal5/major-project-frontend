"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  GraduationCap,
  BookOpen,
  ChevronDown,
  Menu,
  Award,
  X,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Career Guidance", href: "/career-guidance", icon: Briefcase },
  { name: "Early Careers", href: "/early-careers", icon: GraduationCap },
  { name: "Blogs", href: "/blogs", icon: BookOpen },
  { name: "TNP", href: "/tnp", icon: Award },
  { name: "Alumni", href: "/alumni", icon: Users },
];

const baseItems = ["E1", "E2", "E3", "E4"];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        variant="outline"
        className="fixed top-4 left-4 z-30 md:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="h-4 w-4" />
      </Button>
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16  px-4 m-2">
          <div className="flex items-center rounded-full border p-2">
            <Logo size="sm" />
            <span className="ml-2 text-2xl font-bold ">RGUKT-B</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={toggleSidebar}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="h-full flex flex-col p-4">
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Batch wise guidance
                  <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {baseItems.map((base) => (
                  <DropdownMenuItem key={base} asChild>
                    <Link
                      href={`/guidance/${base.toLowerCase()}`}
                      className="w-full"
                    >
                      {base}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </>
  );
}
