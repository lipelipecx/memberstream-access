import { HomeIcon, BookOpenIcon, GraduationCapIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Modules from "./pages/Modules.jsx";
import Lesson from "./pages/Lesson.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Módulos",
    to: "/modules",
    icon: <GraduationCapIcon className="h-4 w-4" />,
    page: <Modules />,
  },
  {
    title: "Aula",
    to: "/lesson/:id",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <Lesson />,
  },
];
