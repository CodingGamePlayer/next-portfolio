class StudyCalendar {
  constructor() {
    this.currentDate = new Date();
    this.calendarElement = document.getElementById("study-calendar");
    this.contentElement = document.getElementById("study-content");
  }

  async init() {
    await this.renderCalendar();
    this.addEventListeners();
    this.setInitialContent();
  }

  setInitialContent() {
    this.contentElement.innerHTML = "<p>캘린더에서 날짜를 선택해주세요</p>";
  }

  async renderCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let html = `
      <div class="calendar-header">
        <button class="prev-month">&lt;</button>
        <h3>${year}년 ${month + 1}월</h3>
        <button class="next-month">&gt;</button>
      </div>
    `;
    html += `<table class="calendar">
      <thead>
        <tr>
          <th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>
        </tr>
      </thead>
      <tbody>`;

    let day = 1;
    for (let i = 0; i < 6; i++) {
      html += "<tr>";
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay.getDay()) {
          html += '<td class="empty"></td>';
        } else if (day > lastDay.getDate()) {
          html += '<td class="empty"></td>';
        } else {
          const date = `${year}/${String(month + 1).padStart(2, "0")}/${String(
            day
          ).padStart(2, "0")}`;
          const hasStudy = await this.checkStudyFile(date);
          const isToday = this.isToday(year, month, day);
          html += `<td class="calendar-day ${hasStudy ? "has-study" : ""} ${
            isToday ? "today" : ""
          }" data-date="${date}">
            <span class="day-number">${day}</span>
          </td>`;
          day++;
        }
      }
      html += "</tr>";
      if (day > lastDay.getDate()) break;
    }

    html += "</tbody></table>";
    this.calendarElement.innerHTML = html;
  }

  async checkStudyFile(date) {
    const [year, month, day] = date.split("/");
    const filePath = `study/${year}/${month}/${day}.md`;

    try {
      const response = await fetch(filePath);
      return response.ok;
    } catch (error) {
      console.error("Error checking study file:", error);
      return false;
    }
  }

  isToday(year, month, day) {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  }

  addEventListeners() {
    this.calendarElement.addEventListener("click", async (event) => {
      if (event.target.classList.contains("prev-month")) {
        this.changeMonth(-1);
      } else if (event.target.classList.contains("next-month")) {
        this.changeMonth(1);
      } else {
        const targetCell = event.target.closest(".calendar-day");
        if (targetCell && targetCell.dataset.date) {
          const date = targetCell.dataset.date;
          const previousSelected =
            this.calendarElement.querySelector(".selected");
          if (previousSelected) {
            previousSelected.classList.remove("selected");
          }
          targetCell.classList.add("selected");
          await this.showStudyContent(date);
        }
      }
    });
  }

  async changeMonth(delta) {
    this.currentDate.setMonth(this.currentDate.getMonth() + delta);
    await this.renderCalendar();
  }

  async showStudyContent(date) {
    const [year, month, day] = date.split("/");
    const filePath = `study/${year}/${month}/${day}.md`;

    this.contentElement.innerHTML = `<h6>${date} 개발 및 공부 내용</h6><pre class="markdown-content"></pre>`;
    try {
      const response = await fetch(filePath);
      if (response.ok) {
        const content = await response.text();
        this.contentElement.querySelector(".markdown-content").textContent =
          content;
      } else {
        this.contentElement.querySelector(".markdown-content").textContent =
          "해당 날짜에 학습 내용이 없습니다.";
      }
    } catch (error) {
      console.error("Error fetching study content:", error);
      this.contentElement.innerHTML =
        "<p>학습 내용을 불러오는 데 실패했습니다.</p>";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const calendar = new StudyCalendar();
  calendar.init();
  document.getElementById("study-calendar").style.display = "block";
  document.getElementById("study-content").style.display = "block";
});
