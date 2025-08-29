import React from "react";

function NoticeCard({ notice, onEdit, onDelete }) {
  try {
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    };

    return (
      <div
        className="card hover:shadow-md transition-shadow"
        data-name="notice-card"
        data-file="components/NoticeCard.js"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)] bg-opacity-10 flex items-center justify-center flex-shrink-0">
            <div className="icon-bell text-lg text-[var(--primary-color)]"></div>
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-[var(--text-dark)]">{notice.title}</h3>
              <span className="text-xs text-[var(--text-light)] bg-[var(--secondary-color)] px-2 py-1 rounded">
                {formatDate(notice.createdAt)}
              </span>
            </div>

            <p className="text-[var(--text-light)] mb-3">{notice.content}</p>

            {notice.priority && (
              <span
                className={`text-xs px-2 py-1 rounded ${
                  notice.priority === "high"
                    ? "bg-red-100 text-red-600"
                    : notice.priority === "medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {notice.priority} priority
              </span>
            )}

            <div className="flex gap-2 mt-3">
              {onEdit && (
                <button
                  onClick={() => onEdit(notice)}
                  className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
                >
                  Edit
                </button>
              )}
              {onDelete && (
                <button
                  onClick={() => onDelete(notice._id)}
                  className="bg-red-500 text-white text-sm px-2 py-1 rounded"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("NoticeCard component error:", error);
    return null;
  }
}

export default NoticeCard;
