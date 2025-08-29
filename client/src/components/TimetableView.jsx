import React, { useEffect, useState } from "react";
import API from "../api"; // make sure api.js is in src/

function TimetableView() {
  const [timetables, setTimetables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00'];

  const getTimetableForSlot = (day, time) => {
    return timetables.find(t => t.day === day && t.startTime === time);
  };

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const res = await API.get("/timetable"); // GET /api/timetable
        setTimetables(res.data);
      } catch (err) {
        console.error("Failed to fetch timetable:", err);
        setError("Failed to load timetable.");
      } finally {
        setLoading(false);
      }
    };

    fetchTimetable();
  }, []);

  if (loading) return <p>⏳ Loading timetable...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="card" data-name="timetable-view" data-file="components/TimetableView.js">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-[var(--border-color)] p-3 bg-[var(--secondary-color)] text-left font-semibold">
                Time
              </th>
              {daysOfWeek.map(day => (
                <th key={day} className="border border-[var(--border-color)] p-3 bg-[var(--secondary-color)] text-left font-semibold">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(time => (
              <tr key={time}>
                <td className="border border-[var(--border-color)] p-3 font-medium bg-gray-50">
                  {time}
                </td>
                {daysOfWeek.map(day => {
                  const slot = getTimetableForSlot(day, time);
                  return (
                    <td key={`${day}-${time}`} className="border border-[var(--border-color)] p-3">
                      {slot ? (
                        <div className="bg-[var(--primary-color)] bg-opacity-10 p-2 rounded text-sm">
                          <div className="font-medium text-[var(--primary-color)]">{slot.subject}</div>
                          {slot.room && <div className="text-xs text-[var(--text-light)]">Room: {slot.room}</div>}
                          {slot.teacher && <div className="text-xs text-[var(--text-light)]">Teacher: {slot.teacher}</div>}
                        </div>
                      ) : (
                        <div className="text-[var(--text-light)] text-sm">-</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TimetableView;
