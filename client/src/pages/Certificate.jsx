// Certificate.jsx
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Certificate.css";

function Certificate() {
  const certificateRef = useRef(null);

  // Print Certificate
  const handlePrint = () => {
    window.print();
  };

  // Download Certificate as PDF
  const handleDownload = async () => {
    const certificate = certificateRef.current;

    if (!certificate) return;

    try {
      const canvas = await html2canvas(certificate, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imageData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(
        imageData,
        "PNG",
        0,
        0,
        canvas.width,
        canvas.height
      );

      pdf.save("Smart-E-Learning-Certificate.pdf");
    } catch (error) {
      console.error("Certificate download failed:", error);
      alert("Unable to download certificate. Please try again.");
    }
  };

  return (
    <div className="cert-page">
      <div className="cert-card" ref={certificateRef}>
        
        {/* Top Decorative Border */}
        <div className="cert-top-bar"></div>

        <div className="cert-inner-content">

          {/* Circular CSS Seal */}
          <div className="css-seal-badge">
            <div className="seal-star">★</div>
            <span className="seal-text">VERIFIED</span>
          </div>

          <p className="cert-issuer-label">
            SMART E-LEARNING PLATFORM
          </p>

          <h1 className="cert-main-title">
            Certificate of Achievement
          </h1>

          <p className="sub-header">
            This is proudly presented to
          </p>

          <h2 className="student-name">
            Swetha
          </h2>

          <p className="cert-description">
            For successfully demonstrating proficiency and completing
            all modules, assignments, and AI-evaluated assessments
            for the course:
          </p>

          <h3 className="course-title-highlight">
            MERN Stack Web Development
          </h3>

          {/* Details Row */}
          <div className="details-grid">

            <div className="detail-item">
              <span className="detail-label">
                Issue Date
              </span>

              <span className="detail-val">
                July 14, 2026
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">
                Instructor
              </span>

              <span className="detail-val">
                AI Mentor Team
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">
                Status
              </span>

              <span className="detail-val status-green">
                Completed with Distinction
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">
                Certificate ID
              </span>

              <span className="detail-val">
                SEP-2026-MERN-8902
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Action Buttons */}
      <div className="certificate-actions">

        <button
          className="print-btn"
          onClick={handlePrint}
        >
          🖨️ Print Certificate
        </button>

        <button
          className="download-btn"
          onClick={handleDownload}
        >
          ⬇️ Download Certificate
        </button>

      </div>
    </div>
  );
}

export default Certificate;