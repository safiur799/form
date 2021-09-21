import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("Age")} placeholder="Age" />
      <input {...register("Address")} placeholder="Address" />
      <select {...register("Department")}>
        <option value="">Select...</option>
        <option value="A">mern stack</option>
        <option value="B">flatter</option>
      </select>
      <input {...register("Salary")} placeholder="Salary" />

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
