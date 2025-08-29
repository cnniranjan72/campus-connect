function EventForm({ onSubmit, onCancel }) {
  try {
    const [formData, setFormData] = React.useState({
      title: '',
      description: '',
      eventDate: '',
      location: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.title && formData.description && formData.eventDate) {
        onSubmit(formData);
        setFormData({ title: '', description: '', eventDate: '', location: '' });
      }
    };

    return (
      <div className="card" data-name="event-form" data-file="components/EventForm.js">
        <h3 className="text-lg font-semibold mb-4">Create New Event</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Event Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="form-input"
              placeholder="Enter event title"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="form-input h-24 resize-none"
              placeholder="Enter event description"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Date & Time</label>
            <input
              type="datetime-local"
              value={formData.eventDate}
              onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
              className="form-input"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="form-input"
              placeholder="Enter event location"
            />
          </div>
          
          <div className="flex gap-2">
            <button type="submit" className="btn-success">
              <div className="icon-plus text-sm"></div>
              Create Event
            </button>
            {onCancel && (
              <button type="button" onClick={onCancel} className="btn-secondary">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    );
  } catch (error) {
    console.error('EventForm component error:', error);
    return null;
  }
}