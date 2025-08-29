function FeatureCard({ title, description, icon, link, buttonText, features }) {
  try {
    return (
      <div className="card text-center" data-name="feature-card" data-file="components/FeatureCard.js">
        <div className={`feature-icon bg-[var(--accent-color)] bg-opacity-10 text-[var(--accent-color)] mx-auto mb-6`}>
          <div className={`icon-${icon} text-xl`}></div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-[var(--text-light)] mb-6">{description}</p>
        
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center gap-2 text-sm text-[var(--text-light)]">
              <div className="icon-check text-[var(--accent-color)] text-sm"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <a href={link} className="btn-primary w-full justify-center">
          {buttonText}
          <div className="icon-arrow-right text-lg"></div>
        </a>
      </div>
    );
  } catch (error) {
    console.error('FeatureCard component error:', error);
    return null;
  }
}