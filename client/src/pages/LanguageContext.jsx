import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  English: {
    overview: "Overview",
    courses: "Courses",
    aiTutor: "AI Tutor",
    quizzes: "Quizzes",
    certificates: "Certificates",
    settings: "Settings",
    logout: "Logout",

    dashboard: "Student Dashboard",
    dashboardSub:
      "Track your enrolled courses, certifications, and AI learning stats.",

    coursesEnrolled: "Courses Enrolled",
    overallProgress: "Overall Progress",
    certificatesEarned: "Certificates Earned",
    averageQuiz: "Average Quiz Score",

    recentActivity: "Recent Activity",
    enrolledModules: "Enrolled Modules & Performance",
    course: "Course",
    progress: "Progress",
    status: "Status",
    action: "Action",
    completed: "Completed",
    inProgress: "In Progress",
    view: "View",
    resume: "Resume"
  },

  Tamil: {
    overview: "மேலோட்டம்",
    courses: "பாடநெறிகள்",
    aiTutor: "AI ஆசிரியர்",
    quizzes: "வினாடி வினாக்கள்",
    certificates: "சான்றிதழ்கள்",
    settings: "அமைப்புகள்",
    logout: "வெளியேறு",

    dashboard: "மாணவர் டாஷ்போர்டு",
    dashboardSub:
      "உங்கள் பாடநெறிகள், சான்றிதழ்கள் மற்றும் AI கற்றல் முன்னேற்றத்தை கண்காணிக்கவும்.",

    coursesEnrolled: "பதிவு செய்த பாடநெறிகள்",
    overallProgress: "மொத்த முன்னேற்றம்",
    certificatesEarned: "பெற்ற சான்றிதழ்கள்",
    averageQuiz: "சராசரி வினாடி வினா மதிப்பெண்",

    recentActivity: "சமீபத்திய செயல்பாடு",
    enrolledModules: "பதிவு செய்த தொகுதிகள் மற்றும் செயல்திறன்",
    course: "பாடநெறி",
    progress: "முன்னேற்றம்",
    status: "நிலை",
    action: "செயல்",
    completed: "முடிந்தது",
    inProgress: "முன்னேற்றத்தில்",
    view: "பார்க்க",
    resume: "தொடரவும்"
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = translations[language] || translations.English;

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}