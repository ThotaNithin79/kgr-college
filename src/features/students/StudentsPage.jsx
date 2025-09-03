// src/features/students/StudentsPage.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/tables/DataTable";

const dummyStudents = [
  {
    id: 1,
    rollNumber: "STU2023001",
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    course: "B.Tech",
    courseType: "Full-Time",
    admissionYear: 2023,
    status: "Active",
  },
  {
    id: 2,
    rollNumber: "STU2023002",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+91 9123456780",
    course: "MBA",
    courseType: "Part-Time",
    admissionYear: 2022,
    status: "Inactive",
  },
  {
    id: 3,
    rollNumber: "STU2023003",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+91 9988776655",
    course: "B.Sc",
    courseType: "Full-Time",
    admissionYear: 2023,
    status: "Active",
  },
];

const StudentsPage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [columnFilters, setColumnFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState([]); // array for multi-column
  const [selectedStudents, setSelectedStudents] = useState([]);

  const rowsPerPage = 3;

  // Multi-column sorting handler
  const handleSort = (key, shiftKey) => {
    setSortConfig((prev) => {
      let existing = prev.find((s) => s.key === key);
      let newSort;
      if (existing) {
        // toggle direction
        existing.direction = existing.direction === "asc" ? "desc" : "asc";
        newSort = shiftKey ? [...prev] : [existing];
      } else {
        newSort = shiftKey ? [...prev, { key, direction: "asc" }] : [{ key, direction: "asc" }];
      }
      return newSort;
    });
  };

  const handleColumnFilter = (key, value) => {
    setColumnFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    return dummyStudents
      .filter((student) =>
        [student.name, student.email, student.rollNumber, student.phone]
          .some((field) => field.toLowerCase().includes(search.toLowerCase()))
      )
      .filter((student) =>
        statusFilter === "All" ? true : student.status === statusFilter
      )
      .filter((student) =>
        Object.entries(columnFilters).every(([key, value]) =>
          value ? String(student[key]).toLowerCase().includes(value.toLowerCase()) : true
        )
      );
  }, [search, statusFilter, columnFilters]);

  const sortedData = useMemo(() => {
    if (!sortConfig.length) return filteredData;

    return [...filteredData].sort((a, b) => {
      for (let sort of sortConfig) {
        if (a[sort.key] < b[sort.key]) return sort.direction === "asc" ? -1 : 1;
        if (a[sort.key] > b[sort.key]) return sort.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const columns = [
    { key: "rollNumber", header: "Roll No." },
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "phone", header: "Phone" },
    { key: "course", header: "Course" },
    { key: "courseType", header: "Course Type" },
    { key: "admissionYear", header: "Admission Year" },
    { key: "status", header: "Status" },
  ];

  const toggleSelectStudent = (id) => {
    setSelectedStudents((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedStudents.length === filteredData.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(filteredData.map((s) => s.id));
    }
  };

  const handleEdit = (id) => navigate(`/admin/students/edit/${id}`);

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure to delete student(s)?`)) {
      alert(`Deleted student(s) with ID: ${id}`);
    }
  };

  const handleBulkDelete = () => {
    if (!selectedStudents.length) return;
    if (window.confirm(`Delete ${selectedStudents.length} student(s)?`)) {
      alert(`Deleted student(s) with IDs: ${selectedStudents.join(", ")}`);
      setSelectedStudents([]);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Students</h1>
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/admin/students/new")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Student
          </button>
          <button
            onClick={handleBulkDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
            disabled={selectedStudents.length === 0}
          >
            Delete Selected
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Global Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-72"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-40"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        {/* Column Filters */}
        {columns.map((col) => (
          <input
            key={col.key}
            type="text"
            placeholder={`Filter ${col.header}`}
            value={columnFilters[col.key] || ""}
            onChange={(e) => handleColumnFilter(col.key, e.target.value)}
            className="border px-3 py-2 rounded w-full sm:w-40"
          />
        ))}
      </div>

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={paginatedData}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSort={handleSort}
        sortConfig={sortConfig}
        selectable
        selectedRows={selectedStudents}
        toggleSelectRow={toggleSelectStudent}
        toggleSelectAll={toggleSelectAll}
      />

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentsPage;
