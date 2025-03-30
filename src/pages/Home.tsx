import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { CourseCard } from "../components/CourseCard";

const trendingCourses = [
  {
    id: "1",
    title: "Advanced Web Development",
    description: "Master modern web technologies and frameworks",
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    level: "Advanced",
    topic: "Web Development",
    image: "assets/course_images/1.jpg",
    progress: 75,
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    description: "Introduction to data analysis and visualization",
    instructor: "Michael Chen",
    duration: "10 weeks",
    level: "Beginner",
    topic: "Data Science",
    image: "assets/course_images/2.jpg",
    progress: 30,
  },
];

const successStories = [
  {
    id: "1",
    name: "Emily Rodriguez",
    role: "Software Engineer",
    company: "Tech Corp",
    image: "assets/people/1.jpg",
    quote: "The courses helped me transition into tech and land my dream job.",
  },
  {
    id: "2",
    name: "James Wilson",
    role: "Data Analyst",
    company: "Analytics Pro",
    image: "assets/people/2.jpg",
    quote:
      "Thanks to the Data Science course, I was able to switch careers and increase my salary by 50%.",
  },
  {
    id: "3",
    name: "Sarah Chen",
    role: "UX Designer",
    company: "Design Studio",
    image: "assets/people/3.jpg",
    quote:
      "The UI/UX courses provided practical knowledge that I use every day in my design work.",
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advance Your Career with Expert-Led Online Courses
          </h1>
          <p className="text-xl mb-8">
            Learn from industry experts and gain practical skills for the modern
            workplace
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50"
          >
            Browse Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Trending Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Trending Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{story.name}</h3>
                    <p className="text-sm text-gray-600">
                      {story.role} at {story.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">{story.quote}</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
