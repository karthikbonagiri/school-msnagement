import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

export default function Fees() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const snapshot = await getDocs(collection(db, "students"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Fee Module</h2>

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        students.map(student => (
          <div key={student.id} style={{ marginBottom: 10 }}>
            <strong>{student.name}</strong> — {student.admissionNo}
          </div>
        ))
      )}
    </div>
  );
}
