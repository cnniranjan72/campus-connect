function AdminStats({ stats }) {
  try {
    const defaultStats = {
      totalNotices: 0,
      totalEvents: 0,
      totalTimetables: 0,
      ...stats
    };

    const statItems = [
      {
        label: 'Total Notices',
        value: defaultStats.totalNotices,
        icon: 'bell',
        color: 'text-blue-600',
        bg: 'bg-blue-100'
      },
      {
        label: 'Total Events',
        value: defaultStats.totalEvents,
        icon: 'star',
        color: 'text-green-600',
        bg: 'bg-green-100'
      },
      {
        label: 'Timetables',
        value: defaultStats.totalTimetables,
        icon: 'calendar',
        color: 'text-purple-600',
        bg: 'bg-purple-100'
      }
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" data-name="admin-stats" data-file="components/AdminStats.js">
        {statItems.map((item, index) => (
          <div key={index} className="card">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center`}>
                <div className={`icon-${item.icon} text-xl ${item.color}`}></div>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-dark)]">{item.value}</p>
                <p className="text-sm text-[var(--text-light)]">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('AdminStats component error:', error);
    return null;
  }
}