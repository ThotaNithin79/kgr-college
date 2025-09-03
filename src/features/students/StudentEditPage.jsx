import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStudent, useCreateStudent, useUpdateStudent } from "./studentQueries";
import StudentForm from "./StudentForm";

const StudentEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === "new";

  const { data: student, isLoading } = useStudent(id);
  const createMutation = useCreateStudent();
  const updateMutation = useUpdateStudent();

  const handleSubmit = (data) => {
    const action = isNew ? createMutation.mutate : updateMutation.mutate;
    action(isNew ? data : { id, data }, {
      onSuccess: () => navigate("/admin/students"),
    });
  };

  if (!isNew && isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{isNew ? "Add Student" : "Edit Student"}</h1>
      <StudentForm initialData={student} onSubmit={handleSubmit} />
    </div>
  );
};

export default StudentEditPage;
