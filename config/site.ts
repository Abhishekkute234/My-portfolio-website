export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Abhishek's portfolio",
  description: "Welcome to my portfolio ",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Experience",
      href: "/Docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/Abhishekkute234",
    twitter: "https://twitter.com/kathanmehtaa",
    docs: "#",
    discord: "#",
    sponsor: "#",
  },
};
