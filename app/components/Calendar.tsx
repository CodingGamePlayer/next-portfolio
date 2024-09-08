import React from "react";

interface CalendarProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  studyDates: string[];
}

const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  setCurrentDate,
  studyDates,
}) => {
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const rows = [];
    let days = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay.getDay()) {
          days.push(<td key={`empty-${j}`} className="p-2 bg-gray-100"></td>);
        } else if (day > lastDay.getDate()) {
          days.push(
            <td key={`empty-end-${j}`} className="p-2 bg-gray-100"></td>
          );
        } else {
          const date = String(day).padStart(2, "0");
          const hasStudy = studyDates.includes(date);
          const isToday =
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear();
          days.push(
            <td
              key={day}
              className={`p-2 text-center cursor-pointer transition-colors duration-300 ease-in-out
                ${
                  hasStudy
                    ? "bg-blue-100 hover:bg-blue-200"
                    : "hover:bg-gray-100"
                }
                ${isToday ? "bg-yellow-100 font-bold" : ""}
              `}
            >
              <span className="inline-block w-8 h-8 leading-8 rounded-full">
                {day}
              </span>
              {hasStudy && (
                <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-1"></div>
              )}
            </td>
          );
          day++;
        }
      }
      rows.push(<tr key={i}>{days}</tr>);
      days = [];
      if (day > lastDay.getDate()) break;
    }

    return rows;
  };

  const changeMonth = (delta: number) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + delta);
      return newDate;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <button
          onClick={() => changeMonth(-1)}
          className="text-2xl hover:bg-blue-700 p-1 rounded"
        >
          &lt;
        </button>
        <h3 className="text-xl font-semibold">
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </h3>
        <button
          onClick={() => changeMonth(1)}
          className="text-2xl hover:bg-blue-700 p-1 rounded"
        >
          &gt;
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-2 text-blue-800">일</th>
            <th className="p-2 text-blue-800">월</th>
            <th className="p-2 text-blue-800">화</th>
            <th className="p-2 text-blue-800">수</th>
            <th className="p-2 text-blue-800">목</th>
            <th className="p-2 text-blue-800">금</th>
            <th className="p-2 text-blue-800">토</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
