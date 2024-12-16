import { BookOpen } from "lucide-react";

export function Logo({ size = "md" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold overflow-hidden`}
    >
      <BookOpen className="w-3/4 h-3/4" />
    </div>
  );
}
