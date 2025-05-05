
import { ISchedule } from "@/utils/Interfaces";

const BASE_URL = "https://sheargenius-awakhjcph2deb6b9.westus-01.azurewebsites.net/"; 

export const setSchedule = async (schedule: ISchedule)  => {
    console.log(schedule);
  const res = await fetch(`${BASE_URL}Schedule/SetSchedule`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(schedule),
  });
  if (!res.ok) {
    const data = await res.json();
    const message = data.message;
    console.log(message);
    return data.success;
  }

  const data = await res.text();
  return data;
};


export const getScheduleByUsername = async (username: string): Promise<ISchedule[]> => {
  const res = await fetch(`${BASE_URL}/GetSheduleByUsername/${username}`);
  return res.json();
};

// export const checkAvailability = async (
//   username: string,
//   day: string,
//   time: string
// ): Promise<{ available: boolean; message: string }> => {
//   const res = await fetch(
//     `${BASE_URL}/CheckAvailability?username=${username}&day=${day}&time=${time}`
//   );
//   return res.json();
// };

// export const deleteSchedule = async (id: number): Promise<any> => {
//   const res = await fetch(`${BASE_URL}/Delete/${id}`, { method: "DELETE" });
//   return res.json();
// };
