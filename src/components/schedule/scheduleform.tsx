'use client';

import React, { useState } from 'react';
import { Schedule } from "@/utils/Interfaces"; 
import { fetchInfo } from "@/utils/fetchInfo"; 
import { setSchedule } from "@/lib/api"; 


const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
];

const timeSlots = Array.from({ length: 17 }, (_, i) => {
  const hour = 6 + i;
  const suffix = hour >= 12 ? 'pm' : 'am';
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${displayHour}${suffix}`;
});

const ScheduleForm = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [editMode, setEditMode] = useState(false);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleTime = (time: string) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

//   const handleSubmit = () => {
//     const payload = {
//       days: selectedDays,
//       times: selectedTimes,
//     };

//     console.log('Submitting schedule:', payload);
    
//   };


const handleSubmit = async () => {
    const payload: Schedule = {
      id: 0, 
      username: fetchInfo().username, 
      days: selectedDays,
      times: selectedTimes,
    };
  
    console.log("Submitting schedule:", payload);
  
    try {
      const response = await setSchedule(payload);
      console.log("Schedule successfully submitted:", response);
    
    } catch (error) {
      console.error("Failed to submit schedule:", error);
     
    }
  };
  



  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Set Your Barber Schedule</h2>

      <div className="mb-4">
        <p className="font-semibold mb-2">Available Days:</p>
        <div className="flex flex-wrap gap-2">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`px-3 py-2 rounded border ${
                selectedDays.includes(day)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-black'
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="font-semibold mb-2">Available Time Slots:</p>
        <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => toggleTime(time)}
              className={`px-2 py-1 rounded border text-sm ${
                selectedTimes.includes(time)
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-black'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
        >
          {editMode ? 'Update Schedule' : 'Submit Schedule'}
        </button>

        <button
          onClick={() => setEditMode(!editMode)}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          {editMode ? 'Cancel Edit' : 'Edit Schedule'}
        </button>
      </div>
    </div>
  );
};

export default ScheduleForm;
