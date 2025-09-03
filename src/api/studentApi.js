// src/api/studentApi.js
// For now, using dummy data. Later you can replace with real API calls.

const dummyStudents = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Computer Science" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Mathematics" },
  { id: 3, name: "Carol Lee", email: "carol@example.com", course: "Physics" },
];

export const fetchStudents = async (params) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return dummyStudents;
};

export const fetchStudentById = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return dummyStudents.find((s) => s.id === parseInt(id));
};

export const createStudent = async (data) => {
  const newStudent = { id: Date.now(), ...data };
  dummyStudents.push(newStudent);
  return newStudent;
};

export const updateStudent = async (id, data) => {
  const index = dummyStudents.findIndex((s) => s.id === parseInt(id));
  if (index !== -1) dummyStudents[index] = { ...dummyStudents[index], ...data };
  return dummyStudents[index];
};

export const deleteStudent = async (id) => {
  const index = dummyStudents.findIndex((s) => s.id === parseInt(id));
  if (index !== -1) dummyStudents.splice(index, 1);
  return { success: true };
};
