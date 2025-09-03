// src/features/students/studentQueries.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchStudents, fetchStudentById, createStudent, updateStudent, deleteStudent } from "../../api/studentApi";

// Fetch all students
export const useStudents = (filters) =>
  useQuery({ queryKey: ["students", filters], queryFn: () => fetchStudents(filters) });

// Fetch single student
export const useStudent = (id) =>
  useQuery({ queryKey: ["student", id], queryFn: () => fetchStudentById(id), enabled: !!id });

// Create student
export const useCreateStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: createStudent, onSuccess: () => queryClient.invalidateQueries(["students"]) });
};

// Update student
export const useUpdateStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => updateStudent(id, data),
    onSuccess: () => queryClient.invalidateQueries(["students"]),
  });
};

// Delete student
export const useDeleteStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: deleteStudent, onSuccess: () => queryClient.invalidateQueries(["students"]) });
};
