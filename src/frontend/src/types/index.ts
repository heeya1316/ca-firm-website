export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
}

export interface TeamMember {
  name: string;
  title: string;
  qualification: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}
