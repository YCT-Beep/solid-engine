import { Users, BookOpen, Trophy } from "lucide-react";

const stats = [
  { label: "Active Students", value: "50,000+", icon: Users },
  { label: "Courses Available", value: "200+", icon: BookOpen },
  { label: "Success Rate", value: "95%", icon: Trophy },
];

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "CEO & Founder",
    image: "assets/people/1.jpg",
    bio: "Former professor with 15+ years of experience in education technology.",
  },
  {
    name: "Michael Chen",
    role: "Head of Education",
    image: "assets/people/2.jpg",
    bio: "Tech leader with a passion for creating innovative learning solutions.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Content",
    image: "assets/people/3.jpg",
    bio: "Curriculum expert specializing in interactive learning experiences.",
  },
  {
    name: "David Kim",
    role: "Head of Education",
    image: "assets/people/4.jpg",
    bio: "Dedicated to ensuring every student reaches their full potential.",
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mission Statement */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Mission</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            To empower professionals and students with the skills they need to
            succeed in today's rapidly evolving digital world through
            high-quality online education.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <stat.icon className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Methodology */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Teaching Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert-Led Content</h3>
              <p className="text-gray-600">
                Learn from industry professionals with real-world experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Interactive Learning
              </h3>
              <p className="text-gray-600">
                Engage with peers and instructors through collaborative projects
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Trophy className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Practical Application
              </h3>
              <p className="text-gray-600">
                Apply your knowledge through hands-on projects and real-world
                scenarios
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-indigo-600">{member.role}</p>
              <p className="text-sm text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
