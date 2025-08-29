import React, { useState, useEffect } from "react";

function NoticeForm({ onSubmit, onCancel, noticeToEdit }) {
  try {
    const [formData, setFormData] = useState({
      title: "",
      content: "",
      priority: "medium",
    });

    useEffect(() => {
      if (noticeToEdit) {
        setFormData({
          title: noticeToEdit.title || "",
          content: noticeToEdit.content || "",
          priority: noticeToEdit.priority || "medium",
        });
      }
    }, [noticeToEdit]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.title && formData.content) {
        onSubmit(formData);
        if (!noticeToEdit) {
          setFormData({ title: "", content: "", priority: "medium" });
        }
      }
    };

    return (
      <div
        className="card"
        data-name="notice-form"
        data-file="components/NoticeForm.js"
      >
        <h3 className="text-lg font-semibold mb-4">
          {noticeToEdit ? "Edit Notice" : "Create New Notice"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="form-input"
              placeholder="Enter notice title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="form-input h-24 resize-none"
              placeholder="Enter notice content"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Priority</label>
            <select
              value={formData.priority}
              onChange={(e) =>
                setFormData({ ...formData, priority: e.target.value })
              }
              className="form-input"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button type="submit" className="btn-success">
              <div className="icon-plus text-sm"></div>
              {noticeToEdit ? "Update Notice" : "Post Notice"}
            </button>
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="btn-secondary"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    );
  } catch (error) {
    console.error("NoticeForm component error:", error);
    return null;
  }
}

export default NoticeForm;
