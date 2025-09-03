import React from "react";

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Course</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6">{student.name}</td>
              <td className="py-3 px-6">{student.email}</td>
              <td className="py-3 px-6">{student.course}</td>
              <td className="py-3 px-6 text-center space-x-2">
                <button
                  onClick={() => onEdit(student.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(student.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
