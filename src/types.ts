export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topic: string;
  image: string;
  progress?: number;
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}