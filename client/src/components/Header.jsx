function Header() {
  try {
    return (
      <header className="bg-white shadow-sm border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="feature-icon bg-[var(--primary-color)] text-white">
                <div className="icon-graduation-cap text-xl"></div>
              </div>
              <h1 className="text-2xl font-bold text-[var(--text-dark)]">CampusConnect</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">
                Features
              </a>
              <a href="#about" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">
                About
              </a>
              <a href="#contact" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}