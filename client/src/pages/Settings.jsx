import { useEffect, useState } from "react";
import "./Settings.css";

function Settings() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [alarmTime, setAlarmTime] = useState(
    localStorage.getItem("alarmTime") || ""
  );

  const [alarmEnabled, setAlarmEnabled] = useState(
    localStorage.getItem("alarmEnabled") === "true"
  );

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  // Save language
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Dark mode
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // Alarm
  useEffect(() => {
    localStorage.setItem("alarmTime", alarmTime);
    localStorage.setItem("alarmEnabled", alarmEnabled);
  }, [alarmTime, alarmEnabled]);

  // Stopwatch
  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  // Check alarm
  useEffect(() => {
    const checkAlarm = setInterval(() => {
      if (!alarmEnabled || !alarmTime) return;

      const now = new Date();

      const currentTime =
        String(now.getHours()).padStart(2, "0") +
        ":" +
        String(now.getMinutes()).padStart(2, "0");

      if (currentTime === alarmTime) {
        alert("⏰ Smart E-Learning Alarm!");
        setAlarmEnabled(false);
      }
    }, 1000);

    return () => clearInterval(checkAlarm);
  }, [alarmEnabled, alarmTime]);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  const resetStopwatch = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className={`settings-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="settings-card">

        <h1>Settings</h1>

        <p className="settings-subtitle">
          Customize your Smart E-Learning experience.
        </p>

        {/* LANGUAGE */}
        <div className="settings-section">
          <h2>🌐 Language</h2>

          <div className="setting-row">
            <div>
              <h3>Choose Language</h3>
              <p>Select your preferred language.</p>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Malayalam</option>
              <option>Telugu</option>
              <option>Kannada</option>
              <option>Korean</option>
              <option>Tamil</option>
            </select>
          </div>

          <div className="selected-language">
            Current Language: <strong>{language}</strong>
          </div>
        </div>

        {/* THEME */}
        <div className="settings-section">
          <h2>🎨 Appearance</h2>

          <div className="setting-row">
            <div>
              <h3>Theme</h3>
              <p>Switch between light and dark mode.</p>
            </div>

            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>

        {/* ALARM */}
        <div className="settings-section">
          <h2>⏰ Study Alarm</h2>

          <div className="setting-row">
            <div>
              <h3>Set Study Alarm</h3>
              <p>Set a reminder for your study time.</p>
            </div>

            <input
              className="alarm-input"
              type="time"
              value={alarmTime}
              onChange={(e) => setAlarmTime(e.target.value)}
            />
          </div>

          <div className="alarm-controls">
            <button
              onClick={() => setAlarmEnabled(!alarmEnabled)}
            >
              {alarmEnabled ? "🔕 Disable Alarm" : "🔔 Enable Alarm"}
            </button>

            {alarmEnabled && alarmTime && (
              <span className="alarm-status">
                Alarm set for {alarmTime}
              </span>
            )}
          </div>
        </div>

        {/* STOPWATCH */}
        <div className="settings-section">
          <h2>⏱️ Study Stopwatch</h2>

          <div className="stopwatch-box">
            <div className="stopwatch-time">
              {formatTime()}
            </div>

            <div className="stopwatch-buttons">
              {!running ? (
                <button onClick={() => setRunning(true)}>
                  ▶ Start
                </button>
              ) : (
                <button onClick={() => setRunning(false)}>
                  ⏸ Pause
                </button>
              )}

              <button onClick={resetStopwatch}>
                🔄 Reset
              </button>
            </div>
          </div>
        </div>

        {/* EXTRA FEATURES */}
        <div className="settings-section">
          <h2>✨ Other Features</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <span>📚</span>
              <h3>Study Tracking</h3>
              <p>Track your learning progress.</p>
            </div>

            <div className="feature-card">
              <span>🤖</span>
              <h3>AI Tutor</h3>
              <p>Get help with technical questions.</p>
            </div>

            <div className="feature-card">
              <span>🏆</span>
              <h3>Certificates</h3>
              <p>View your completed certificates.</p>
            </div>

            <div className="feature-card">
              <span>📝</span>
              <h3>Quiz Practice</h3>
              <p>Test your knowledge anytime.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Settings;