import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import "./Dashboard.css";

function Dashboard() {
  const { language } = useLanguage();

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
      subtitle:
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
      resume: "Resume",
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
      subtitle:
        "உங்கள் பாடநெறிகள், சான்றிதழ்கள் மற்றும் AI கற்றல் முன்னேற்றத்தைப் பார்க்கவும்.",
      coursesEnrolled: "சேர்ந்த பாடநெறிகள்",
      overallProgress: "மொத்த முன்னேற்றம்",
      certificatesEarned: "பெற்ற சான்றிதழ்கள்",
      averageQuiz: "சராசரி வினாடி வினா மதிப்பெண்",
      recentActivity: "சமீபத்திய செயல்பாடு",
      enrolledModules: "சேர்ந்த பாடங்கள் மற்றும் செயல்திறன்",
      course: "பாடநெறி",
      progress: "முன்னேற்றம்",
      status: "நிலை",
      action: "செயல்",
      completed: "முடிந்தது",
      inProgress: "முன்னேற்றத்தில்",
      view: "பார்க்க",
      resume: "தொடரவும்",
    },

    Malayalam: {
      overview: "അവലോകനം",
      courses: "കോഴ്സുകൾ",
      aiTutor: "AI ട്യൂട്ടർ",
      quizzes: "ക്വിസുകൾ",
      certificates: "സർട്ടിഫിക്കറ്റുകൾ",
      settings: "ക്രമീകരണങ്ങൾ",
      logout: "പുറത്തുകടക്കുക",
      dashboard: "വിദ്യാർത്ഥി ഡാഷ്ബോർഡ്",
      subtitle:
        "നിങ്ങളുടെ കോഴ്സുകൾ, സർട്ടിഫിക്കറ്റുകൾ, AI പഠന പുരോഗതി എന്നിവ കാണുക.",
      coursesEnrolled: "എൻറോൾ ചെയ്ത കോഴ്സുകൾ",
      overallProgress: "മൊത്തത്തിലുള്ള പുരോഗതി",
      certificatesEarned: "ലഭിച്ച സർട്ടിഫിക്കറ്റുകൾ",
      averageQuiz: "ശരാശരി ക്വിസ് സ്കോർ",
      recentActivity: "സമീപകാല പ്രവർത്തനം",
      enrolledModules: "എൻറോൾ ചെയ്ത മോഡ്യൂളുകളും പ്രകടനവും",
      course: "കോഴ്സ്",
      progress: "പുരോഗതി",
      status: "നില",
      action: "പ്രവർത്തനം",
      completed: "പൂർത്തിയായി",
      inProgress: "പുരോഗതിയിൽ",
      view: "കാണുക",
      resume: "തുടരുക",
    },

    Telugu: {
      overview: "అవలోకనం",
      courses: "కోర్సులు",
      aiTutor: "AI ట్యూటర్",
      quizzes: "క్విజ్‌లు",
      certificates: "సర్టిఫికెట్లు",
      settings: "సెట్టింగ్‌లు",
      logout: "లాగ్ అవుట్",
      dashboard: "విద్యార్థి డ్యాష్‌బోర్డ్",
      subtitle:
        "మీ కోర్సులు, సర్టిఫికెట్లు మరియు AI అభ్యాస పురోగతిని చూడండి.",
      coursesEnrolled: "చేరిన కోర్సులు",
      overallProgress: "మొత్తం పురోగతి",
      certificatesEarned: "పొందిన సర్టిఫికెట్లు",
      averageQuiz: "సగటు క్విజ్ స్కోర్",
      recentActivity: "ఇటీవలి కార్యకలాపం",
      enrolledModules: "చేరిన మాడ్యూల్స్ & పనితీరు",
      course: "కోర్సు",
      progress: "పురోగతి",
      status: "స్థితి",
      action: "చర్య",
      completed: "పూర్తయింది",
      inProgress: "కొనసాగుతోంది",
      view: "చూడండి",
      resume: "కొనసాగించండి",
    },

    Kannada: {
      overview: "ಅವಲೋಕನ",
      courses: "ಕೋರ್ಸ್‌ಗಳು",
      aiTutor: "AI ಟ್ಯೂಟರ್",
      quizzes: "ಕ್ವಿಜ್‌ಗಳು",
      certificates: "ಪ್ರಮಾಣಪತ್ರಗಳು",
      settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
      logout: "ಲಾಗ್ ಔಟ್",
      dashboard: "ವಿದ್ಯಾರ್ಥಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      subtitle:
        "ನಿಮ್ಮ ಕೋರ್ಸ್‌ಗಳು, ಪ್ರಮಾಣಪತ್ರಗಳು ಮತ್ತು AI ಕಲಿಕೆಯ ಪ್ರಗತಿಯನ್ನು ವೀಕ್ಷಿಸಿ.",
      coursesEnrolled: "ನೋಂದಾಯಿಸಿದ ಕೋರ್ಸ್‌ಗಳು",
      overallProgress: "ಒಟ್ಟು ಪ್ರಗತಿ",
      certificatesEarned: "ಗಳಿಸಿದ ಪ್ರಮಾಣಪತ್ರಗಳು",
      averageQuiz: "ಸರಾಸರಿ ಕ್ವಿಜ್ ಸ್ಕೋರ್",
      recentActivity: "ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ",
      enrolledModules: "ನೋಂದಾಯಿಸಿದ ಮಾಡ್ಯೂಲ್‌ಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆ",
      course: "ಕೋರ್ಸ್",
      progress: "ಪ್ರಗತಿ",
      status: "ಸ್ಥಿತಿ",
      action: "ಕ್ರಿಯೆ",
      completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
      inProgress: "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
      view: "ವೀಕ್ಷಿಸಿ",
      resume: "ಮುಂದುವರಿಸಿ",
    },

    Hindi: {
      overview: "अवलोकन",
      courses: "पाठ्यक्रम",
      aiTutor: "AI ट्यूटर",
      quizzes: "क्विज़",
      certificates: "प्रमाणपत्र",
      settings: "सेटिंग्स",
      logout: "लॉग आउट",
      dashboard: "छात्र डैशबोर्ड",
      subtitle:
        "अपने पाठ्यक्रम, प्रमाणपत्र और AI सीखने की प्रगति को देखें।",
      coursesEnrolled: "नामांकित पाठ्यक्रम",
      overallProgress: "कुल प्रगति",
      certificatesEarned: "प्राप्त प्रमाणपत्र",
      averageQuiz: "औसत क्विज़ स्कोर",
      recentActivity: "हाल की गतिविधि",
      enrolledModules: "नामांकित मॉड्यूल और प्रदर्शन",
      course: "पाठ्यक्रम",
      progress: "प्रगति",
      status: "स्थिति",
      action: "कार्य",
      completed: "पूरा हुआ",
      inProgress: "प्रगति में",
      view: "देखें",
      resume: "जारी रखें",
    },

    Korean: {
      overview: "개요",
      courses: "강좌",
      aiTutor: "AI 튜터",
      quizzes: "퀴즈",
      certificates: "수료증",
      settings: "설정",
      logout: "로그아웃",
      dashboard: "학생 대시보드",
      subtitle:
        "수강 중인 강좌, 수료증 및 AI 학습 진행 상황을 확인하세요.",
      coursesEnrolled: "수강 강좌",
      overallProgress: "전체 진행률",
      certificatesEarned: "취득한 수료증",
      averageQuiz: "평균 퀴즈 점수",
      recentActivity: "최근 활동",
      enrolledModules: "수강 모듈 및 성과",
      course: "강좌",
      progress: "진행률",
      status: "상태",
      action: "작업",
      completed: "완료",
      inProgress: "진행 중",
      view: "보기",
      resume: "계속하기",
    },
  };

  const t = translations[language] || translations.English;

  return (
    <div className="dashboard-layout">

      {/* Left Sidebar */}
      <aside className="sidebar">

        <div className="sidebar-brand">
          <span className="brand-logo-icon">✦</span>
          <h2>Smart E-Learning</h2>
        </div>

        <nav className="sidebar-menu">

          <Link to="/dashboard" className="sidebar-item active">
            <span className="menu-icon">⊞</span>
            <span>{t.overview}</span>
          </Link>

          <Link to="/courses" className="sidebar-item">
            <span className="menu-icon">📖</span>
            <span>{t.courses}</span>
          </Link>

          <Link to="/aitutor" className="sidebar-item">
            <span className="menu-icon">🤖</span>
            <span>{t.aiTutor}</span>
          </Link>

          <Link to="/quiz" className="sidebar-item">
            <span className="menu-icon">✍</span>
            <span>{t.quizzes}</span>
          </Link>

          <Link to="/certificate" className="sidebar-item">
            <span className="menu-icon">🎓</span>
            <span>{t.certificates}</span>
          </Link>

          <Link to="/settings" className="sidebar-item">
            <span className="menu-icon">⚙</span>
            <span>{t.settings}</span>
          </Link>

        </nav>

        <div className="sidebar-footer">
          <Link to="/login" className="sidebar-item logout-item">
            <span className="menu-icon">↪</span>
            <span>{t.logout}</span>
          </Link>
        </div>

      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Top Header */}
        <header className="content-top-header">

          <div>
            <h1>{t.dashboard}</h1>

            <p className="sub-title">
              {t.subtitle}
            </p>
          </div>

          <div className="user-profile-badge">
            <div className="avatar-circle">ST</div>
            <span className="user-name">Swetha</span>
          </div>

        </header>

        {/* Stat Cards */}
        <section className="stat-cards-grid">

          <div className="stat-card">
            <div className="stat-icon-wrapper">📚</div>
            <div className="stat-details">
              <h2>12</h2>
              <p>{t.coursesEnrolled}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">📈</div>
            <div className="stat-details">
              <h2>89%</h2>
              <p>{t.overallProgress}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">🏆</div>
            <div className="stat-details">
              <h2>5</h2>
              <p>{t.certificatesEarned}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">🎯</div>
            <div className="stat-details">
              <h2>96%</h2>
              <p>{t.averageQuiz}</p>
            </div>
          </div>

        </section>

        {/* Recent Activity */}
        <section className="table-container-card">

          <div className="table-header-block">
            <h2>{t.recentActivity}</h2>

            <span className="table-sub-label">
              {t.enrolledModules}
            </span>
          </div>

          <table className="courses-table">

            <thead>
              <tr>
                <th>{t.course}</th>
                <th>{t.progress}</th>
                <th>{t.status}</th>
                <th>{t.action}</th>
              </tr>
            </thead>

            <tbody>

              {/* MERN */}
              <tr>
                <td className="course-name-cell">
                  <strong>MERN Stack Web Development</strong>
                </td>

                <td className="progress-cell">
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>

                  <span className="progress-value">100%</span>
                </td>

                <td>
                  <span className="status-pill completed">
                    {t.completed}
                  </span>
                </td>

                <td>
                  <Link
                    to="/certificate"
                    className="table-action-link"
                  >
                    {t.view}
                  </Link>
                </td>
              </tr>

              {/* AWS */}
              <tr>
                <td className="course-name-cell">
                  <strong>AWS Cloud Practitioner</strong>
                </td>

                <td className="progress-cell">
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill amber-fill"
                      style={{ width: "65%" }}
                    ></div>
                  </div>

                  <span className="progress-value">65%</span>
                </td>

                <td>
                  <span className="status-pill in-progress">
                    {t.inProgress}
                  </span>
                </td>

                <td>
                  <Link
                    to="/courses"
                    className="table-action-link"
                  >
                    {t.resume}
                  </Link>
                </td>
              </tr>

              {/* MongoDB */}
              <tr>
                <td className="course-name-cell">
                  <strong>MongoDB Database Mastery</strong>
                </td>

                <td className="progress-cell">
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>

                  <span className="progress-value">100%</span>
                </td>

                <td>
                  <span className="status-pill completed">
                    {t.completed}
                  </span>
                </td>

                <td>
                  <Link
                    to="/certificate"
                    className="table-action-link"
                  >
                    {t.view}
                  </Link>
                </td>
              </tr>

            </tbody>

          </table>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;