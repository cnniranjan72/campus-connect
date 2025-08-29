function EventCard({ event }) {
  try {
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    return (
      <div className="card hover:shadow-md transition-shadow" data-name="event-card" data-file="components/EventCard.js">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent-color)] bg-opacity-10 flex items-center justify-center flex-shrink-0">
            <div className="icon-calendar text-lg text-[var(--accent-color)]"></div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-[var(--text-dark)]">{event.title}</h3>
              {event.eventDate && (
                <span className="text-xs text-[var(--text-light)] bg-[var(--secondary-color)] px-2 py-1 rounded">
                  {formatDate(event.eventDate)}
                </span>
              )}
            </div>
            
            <p className="text-[var(--text-light)] mb-2">{event.description}</p>
            
            {event.location && (
              <div className="flex items-center gap-1 text-sm text-[var(--text-light)]">
                <div className="icon-map-pin text-sm"></div>
                <span>{event.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('EventCard component error:', error);
    return null;
  }
}