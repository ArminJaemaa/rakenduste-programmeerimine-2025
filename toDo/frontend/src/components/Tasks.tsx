import { useEffect, useState } from "react";

type Task = {
  id: string;
  title: string;
  created: number;
  completed: boolean;
  deleted: boolean;
  updatedAt: number | null;
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();

    setTasks(data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return <div>Tasks</div>;
};

export default Tasks;
