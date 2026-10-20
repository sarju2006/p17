
import { useEffect, useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }

        const data = await response.json();

        setStudents(
          data.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email
          }))
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>

      {loading && <p>Loading students...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        students.map((student) => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
