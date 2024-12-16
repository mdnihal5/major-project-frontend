import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CustomCard({ title, icon, gradient, children }) {
  return (
    <Card
      className={`${gradient} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
    >
      <CardHeader>
        <CardTitle className="flex items-center text-gray-800 dark:text-gray-200">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 dark:text-gray-300">
        {children}
      </CardContent>
    </Card>
  );
}
