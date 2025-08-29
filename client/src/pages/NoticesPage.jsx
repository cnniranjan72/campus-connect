import React, { useEffect, useState } from "react";
import NoticeCard from "../components/NoticeCard.jsx";
import NoticeForm from "../components/NoticeForm.jsx";
import { getNotices, createNotice } from "../api.js";

function NoticesPage() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await getNotices();
        setNotices(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  const handleCreateNotice = async (data) => {
    try {
      const res = await createNotice(data);
      setNotices([res.data, ...notices]);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <NoticeForm onSubmit={handleCreateNotice} />
      <div className="mt-6 space-y-4">
        {notices.map((notice) => (
          <NoticeCard key={notice._id} notice={notice} />
        ))}
      </div>
    </div>
  );
}

export default NoticesPage;
