import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './Calendar.css';

const Calendar = ({ handleOrderClick }) => {
  // 각 날짜의 주문 수를 저장하는 상태. 초기값은 31개의 0으로 초기화된 배열
  const [orders, setOrders] = useState(new Array(31).fill(0));

  // 현재 월 상태를 저장 (1-12). 초기값은 현재 월
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  // 현재 연도 상태를 저장. 초기값은 현재 연도
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // 클릭한 날짜의 주문 상세 페이지로 이동하는 함수
  const handleDateClick = (date) => {
    const orderCount = orders[date - 1]; // 클릭한 날짜의 주문 수
    console.log(`${date}일의 주문 건수: ${orderCount}`);
    if (orderCount === 1) {
      // 만약 해당 날짜에 주문이 한 건이라면, 주문 상세 페이지로 이동
      handleOrderClick(date);
    }
  };

  // 이전 달로 이동하는 함수
  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      // 현재 월이 1월이면, 이전 달은 작년 12월
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      // 현재 월이 1월이 아니면, 그냥 이전 달로 설정
      setCurrentMonth(currentMonth - 1);
    }
  };

  // 다음 달로 이동하는 함수
  const handleNextMonth = () => {
    if (currentMonth === 12) {
      // 현재 월이 12월이면, 다음 달은 내년 1월
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      // 현재 월이 12월이 아니면, 그냥 다음 달로 설정
      setCurrentMonth(currentMonth + 1);
    }
  };

  // 달력을 렌더링하는 함수
  const renderCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // 현재 월의 총 일 수 계산
    const startingDay = new Date(currentYear, currentMonth - 1, 1).getDay(); // 현재 월의 시작 요일 계산
    const weeks = []; // 주 단위로 나눈 달력을 저장할 배열

    let currentDay = 1; // 현재 날짜를 1일로 초기화

    // 빈 날을 채우는 함수
    const fillEmptyDays = (count) => {
      const emptyDays = [];
      for (let i = 0; i < count; i++) {
        emptyDays.push(<td key={`empty-${i}`} className="empty-day"></td>); // 빈 <td> 요소를 생성
      }
      return emptyDays;
    };

    // 달력을 주 단위로 생성
    while (currentDay <= daysInMonth) {
      const week = [];
      if (weeks.length === 0) {
        week.push(...fillEmptyDays(startingDay)); // 첫 번째 주에 시작 요일까지 빈 칸을 채움
      }
      for (let i = week.length; i < 7; i++) {
        if (currentDay <= daysInMonth) {
          const orderCount = orders[currentDay - 1]; // 현재 날짜의 주문 수
          week.push(
            <td key={currentDay} className="calendar-day" onClick={() => handleDateClick(currentDay)}>
              <p id="t_day" className={`t${i}`}>
                {currentDay}
                {orderCount > 0 && <span className="order-count">{orderCount}건</span>} {/* 주문 수 표시 */}
              </p>
            </td>
          );
          currentDay++;
        } else {
          week.push(<td key={`empty-${i}`} className="empty-day"></td>); // 남은 칸을 빈 칸으로 채움
        }
      }
      weeks.push(<tr key={`week-${currentDay}`} className="calendar-week">{week}</tr>); // 주 단위로 <tr> 요소에 추가
    }

    return weeks; // 전체 달력 반환
  };

  return (
    <div className="calendar-container">
      {/* 달력 헤더: 이전달, 현재 연도/월, 다음달 */}
      <ul className="calendar-header">
        <li className="prev">
          <button className="bt_prev" onClick={handlePrevMonth}>
            <FaAngleLeft /><span>이전달</span> {/* 이전달 버튼 */}
          </button>
        </li>
        <li className="date">
          <span className="year">{currentYear}년</span> {/* 현재 연도 */}
          <span className="month">{currentMonth.toString().padStart(2, '0')}월</span> {/* 현재 월 */}
        </li>
        <li className="next">
          <button className="bt_next" onClick={handleNextMonth}>
            <span>다음달</span><FaAngleRight /> {/* 다음달 버튼 */}
          </button>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>월</th> <th>화</th> <th>수</th> <th>목</th> <th>금</th> <th>토</th> <th>일</th> {/* 요일 헤더 */}
          </tr>
        </thead>
        <tbody>
          {renderCalendar()} {/* 달력 본문 */}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
