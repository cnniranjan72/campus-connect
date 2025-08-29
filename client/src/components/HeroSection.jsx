function HeroSection() {
  try {
    return (
      <section className="bg-gradient-to-r from-[var(--primary-color)] to-blue-600 text-white py-20" data-name="hero" data-file="components/HeroSection.js">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Your Gateway to Campus Information
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Stay connected with your college community. Access notices, timetables, and events all in one convenient portal.
          </p>
        
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="student.html" className="btn-primary bg-white text-[var(--primary-color)] hover:bg-gray-100">
              <div className="icon-user text-lg"></div>
              Student Portal
            </a>
            <a href="admin.html" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--primary-color)]">
              <div className="icon-shield text-lg"></div>
              Admin Login
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection component error:', error);
    return null;
  }
}