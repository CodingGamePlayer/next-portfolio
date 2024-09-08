"use client";

import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import ReactMarkdown from "react-markdown";

const Study: React.FC = () => {
  const [studyDates, setStudyDates] = useState<string[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDateContent, setSelectedDateContent] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStudyDates(currentDate.getFullYear(), currentDate.getMonth() + 1);
  }, [currentDate]);

  const fetchStudyDates = async (year: number, month: number) => {
    try {
      const response = await fetch(
        `/api/study-dates?year=${year}&month=${month}`
      );
      const data = await response.json();
      setStudyDates(data.dates);
    } catch (error) {
      console.error("Error fetching study dates:", error);
      setError("학습 날짜를 가져오는 데 실패했습니다.");
    }
  };

  const handleDateClick = async (date: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/study-content?date=${date}`);
      if (!response.ok) {
        throw new Error("콘텐츠를 가져오는 데 실패했습니다.");
      }
      const content = await response.text();
      setSelectedDateContent(content);
    } catch (error) {
      console.error("Error fetching study content:", error);
      setError("학습 내용을 가져오는 데 실패했습니다.");
      setSelectedDateContent(null);
    } finally {
      setIsLoading(false);
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
              onDateClick={handleDateClick}
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div
              id="study-content"
              className="h-[500px] overflow-y-auto bg-gray-100 p-4 rounded-lg"
            >
              {isLoading ? (
                <p>로딩 중...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : selectedDateContent ? (
                <ReactMarkdown className="prose max-w-none">
                  {selectedDateContent}
                </ReactMarkdown>
              ) : (
                <p>날짜를 선택하면 학습 내용이 여기에 표시됩니다.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
