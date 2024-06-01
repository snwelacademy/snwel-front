
import { NavItemWithOptionalChildren } from "@/types";

export const navItems: NavItemWithOptionalChildren[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Course",
    href: "/admin/courses",
    icon: "course",
    label: "Courses",
  },
  {
    title: "Course Category",
    href: "/admin/course-category",
    icon: "category",
    label: "Courses",
  },
  {
    title: "Course Queries",
    href: "/admin/course-queries",
    icon: "enrollments",
    label: "course queries",
  },
  {
    title: "Webinars",
    href: "/admin/webinars",
    icon: "webinar",
    label: "webinar",
  },
  {
    title: "Webinar Requests",
    href: "/admin/webinar-queries",
    icon: "webinarEnroll",
    label: "weibinar-queries",
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: "kanban",
    label: "kanban",
  },
];