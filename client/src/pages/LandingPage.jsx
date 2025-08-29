import React from "react";
import HeroSection from "../components/HeroSection.jsx"; // import your hero

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Optional: Additional content below hero */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to CampusConnect</h2>
        <p className="text-lg mb-6">
          Your campus management system – view notices, timetables, and events.
        </p>
        <div className="space-x-4">
          <a
            href="/notices"
            className="btn-primary px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Go to Notices
          </a>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
