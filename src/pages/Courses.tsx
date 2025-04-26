import { useState } from "react";
import { Search } from "lucide-react";
import { CourseCard } from "../components/CourseCard";
import type { Course } from "../types";

const courses: Course[] = [
  {
    id: "1",
    title: "Advanced Web Development",
    description: "Master modern web technologies and frameworks",
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    level: "Advanced",
    topic: "Development",
    image: "course_images/1.jpg",
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    description: "Introduction to data analysis and visualization",
    instructor: "Michael Chen",
    duration: "10 weeks",
    level: "Beginner",
    topic: "Data Science",
    image: "course_images/2.jpg",
  },
  {
    id: "3",
    title: "UI/UX Design Principles",
    description: "Learn to create beautiful and user-friendly interfaces",
    instructor: "Emily Wong",
    duration: "6 weeks",
    level: "Intermediate",
    topic: "Design",
    image: "course_images/3.jpg",
  },
  {
    id: "4",
    title: "Digital Marketing Strategy",
    description: "Master modern marketing techniques and analytics",
    instructor: "James Miller",
    duration: "4 weeks",
    level: "Beginner",
    topic: "Business",
    image: "course_images/4.jpg",
  },
  {
    id: "5",
    title: "Machine Learning Essentials",
    description: "Dive into AI and machine learning algorithms",
    instructor: "Dr. Alex Chen",
    duration: "12 weeks",
    level: "Advanced",
    topic: "Data Science",
    image: "course_images/5.jpg",
  },
  {
    id: "6",
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications",
    instructor: "David Kim",
    duration: "8 weeks",
    level: "Intermediate",
    topic: "Development",
    image: "course_images/6.jpg",
  },
  {
    id: "7",
    title: "Cybersecurity Fundamentals",
    description: "Learn essential security practices and threat prevention",
    instructor: "Robert Smith",
    duration: "10 weeks",
    level: "Beginner",
    topic: "Development",
    image: "course_images/7.jpg",
  },
  {
    id: "8",
    title: "Business Analytics",
    description: "Master data-driven decision making for business growth",
    instructor: "Lisa Anderson",
    duration: "6 weeks",
    level: "Intermediate",
    topic: "Business",
    image: "course_images/8.jpg",
  },
  {
    id: "9",
    title: "Responsive Design Mastery",
    description: "Create modern, adaptive websites for all devices",
    instructor: "Mark Wilson",
    duration: "4 weeks",
    level: "Intermediate",
    topic: "Design",
    image: "course_images/9.jpg",
  },
  {
    id: "10",
    title: "Python for Data Analysis",
    description: "Harness Python's power for complex data analysis",
    instructor: "Jennifer Lee",
    duration: "8 weeks",
    level: "Intermediate",
    topic: "Data Science",
    image: "course_images/10.jpg",
  },
  {
    id: "11",
    title: "Cloud Computing Essentials",
    description: "Master cloud platforms and deployment strategies",
    instructor: "Thomas Brown",
    duration: "12 weeks",
    level: "Advanced",
    topic: "Development",
    image: "course_images/11.jpg",
  },
  {
    id: "12",
    title: "Digital Brand Strategy",
    description: "Build and maintain a powerful online brand presence",
    instructor: "Sarah Martinez",
    duration: "6 weeks",
    level: "Beginner",
    topic: "Business",
    image: "course_images/12.jpg",
  },
];

const topics = [
  "All Topics",
  "Development",
  "Data Science",
  "Design",
  "Business",
];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const durations = ["All Durations", "0-4 weeks", "5-8 weeks", "9+ weeks"];

export function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedDuration, setSelectedDuration] = useState("All Durations");

  const hasActiveFilters = () => {
    return (
      searchTerm !== "" ||
      selectedTopic !== "All Topics" ||
      selectedLevel !== "All Levels" ||
      selectedDuration !== "All Durations"
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTopic("All Topics");
    setSelectedLevel("All Levels");
    setSelectedDuration("All Durations");
  };

  const filteredCourses = courses.filter((course) => {
    const matchesDuration = () => {
      if (selectedDuration === "All Durations") return true;

      const courseDurationWeeks = parseInt(course.duration.split(" ")[0]);

      switch (selectedDuration) {
        case "0-4 weeks":
          return courseDurationWeeks <= 4;
        case "5-8 weeks":
          return courseDurationWeeks >= 5 && courseDurationWeeks <= 8;
        case "9+ weeks":
          return courseDurationWeeks >= 9;
        default:
          return true;
      }
    };

    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic =
      selectedTopic === "All Topics" || course.topic === selectedTopic;
    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;

    return matchesSearch && matchesTopic && matchesLevel && matchesDuration();
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Course Catalog
          </h1>

          {/* Search and Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                >
                  {durations.map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>

                {hasActiveFilters() && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
