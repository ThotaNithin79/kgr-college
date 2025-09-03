import React, { useState, useEffect } from "react";

const StudentForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", course: "" });

  useEffect(() => {
    if (initialData) setForm({ ...form, ...initialData });
  }, [initialData]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); onSubmit(form); };

  return (
    <form className="bg-white p-6 rounded shadow space-y-4" onSubmit={handleSubmit}>
      <input
        name="name" value={form.name} onChange={handleChange}
        placeholder="Name" className="border p-2 rounded w-full"
      />
      <input
        name="email" value={form.email} onChange={handleChange}
        placeholder="Email" className="border p-2 rounded w-full"
      />
      <input
        name="course" value={form.course} onChange={handleChange}
        placeholder="Course" className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
};

export default StudentForm;
