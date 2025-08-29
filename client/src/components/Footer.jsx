function Footer() {
  try {
    return (
      <footer className="bg-white border-t border-[var(--border-color)] py-8" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="feature-icon bg-[var(--primary-color)] text-white">
                <div className="icon-graduation-cap text-xl"></div>
              </div>
              <span className="text-lg font-semibold">CampusConnect</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-[var(--text-light)] text-sm">
                © 2025 CampusConnect. All rights reserved.
              </p>
              <p className="text-[var(--text-light)] text-xs mt-1">
                Connecting students and faculty for better campus communication
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}