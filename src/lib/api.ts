import { Schedule } from "@/utils/Interfaces";

const BASE_URL = "http://localhost:5277/Schedule"; 

export const setSchedule = async (schedule: Schedule): Promise<any> => {
  const res = await fetch(`${BASE_URL}/SetSchedule`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(schedule),
  });
  return res.json();
};

export const getScheduleByUsername = async (username: string): Promise<Schedule[]> => {
  const res = await fetch(`${BASE_URL}/GetSheduleByUsername/${username}`);
  return res.json();
};

export const checkAvailability = async (
  username: string,
  day: string,
  time: string
): Promise<{ available: boolean; message: string }> => {
  const res = await fetch(
    `${BASE_URL}/CheckAvailability?username=${username}&day=${day}&time=${time}`
  );
  return res.json();
};

export const deleteSchedule = async (id: number): Promise<any> => {
  const res = await fetch(`${BASE_URL}/Delete/${id}`, { method: "DELETE" });
  return res.json();
};
