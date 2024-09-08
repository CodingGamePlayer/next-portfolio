"use client";

import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";

const Study: React.FC = () => {
  const [studyDates, setStudyDates] = useState<string[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    fetchStudyDates(currentDate.getFullYear(), currentDate.getMonth() + 1);
  }, [currentDate]);

  const fetchStudyDates = async (year: number, month: number) => {
    try {
      const response = await fetch(
        `/api/study-dates?year=${year}&month=${month}`
      );
      const data = await response.json();
      console.log(data);
      setStudyDates(data.dates);
    } catch (error) {
      console.error("Error fetching study dates:", error);
    }
  };

  return (
    <section id="study" className="py-16 bg-white">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Studied</h2>
          <p className="text-gray-600">
            제가 어떠한 것을 공부하고, 어떠한 것을 배웠는지를 공유해보고자
            합니다.
            <br />각 타이틀을 클릭하면 해당 카테고리의 블로그로 이동합니다.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <Calendar
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              studyDates={studyDates}
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div id="study-content" className="h-[500px] overflow-y-auto"></div>
          </div>
        </div>
        {/* 기존의 스킬 카드 부분은 그대로 유지 */}
      </div>
    </section>
  );
};

export default Study;
