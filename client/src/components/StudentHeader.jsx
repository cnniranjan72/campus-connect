function StudentHeader() {
  try {
    return (
      <header className="bg-white shadow-sm border-b border-[var(--border-color)]" data-name="student-header" data-file="components/StudentHeader.js">
        <div className="max-w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)] flex items-center justify-center">
                <div className="icon-graduation-cap text-xl text-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--text-dark)]">Student Portal</h1>
                <p className="text-sm text-[var(--text-light)]">Welcome back!</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="index.html" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-home text-lg"></div>
              </a>
              <div className="w-8 h-8 rounded-full bg-[var(--accent-color)] flex items-center justify-center">
                <div className="icon-user text-sm text-white"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('StudentHeader component error:', error);
    return null;
  }
}