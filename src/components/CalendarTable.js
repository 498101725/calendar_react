import React from 'react';
import '../styles/CalendarTable.css';

class CalendarTable extends React.Component {
  state = {
    days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  };

  daysInAll = (year, month) => {
    const datesOfThisMonth = (year, month) => {
      // 本月第一天；
      const targetDate = new Date(`${year}-${month}-1`);
      // 取得本月天数，月份；月份最后一天；
      // 求本月是几月；
      const targetMonth = targetDate.getMonth();
      // 设置月份
      targetDate.setMonth(targetMonth + 1);
      //console.log(targetDate.toString());
      //console.log(targetDate.getMonth());

      targetDate.setDate(0);
      //console.log(targetDate.toString());
      // 先是上面的setDate(),设置成某一天，然后用getDate()取得设置之后的结果；
      //console.log(targetDate.getDate());
      //本月天数变成数组；
      const daysOfThisMonth = [];
      const lastDayOfThisMonth = targetDate.getDate();
      for (let i = 0; i < lastDayOfThisMonth; i++) {
        daysOfThisMonth.push(i + 1);
      }
      return daysOfThisMonth;
    };

    const datesOfLastMonth = (year, month) => {
      // 本月第一天
      const targetDate = new Date(`${year}-${month}-1`);
      // 本月第一天周几；
      const firstDayOfThisMonth = targetDate.getDay();
      // 上月剩几天；
      const daysLeftFromLastMonth = firstDayOfThisMonth - 0;
      //console.log(daysLeftFromLastMonth);
      // 上月最后一天日期；
      targetDate.setDate(0);
      //console.log(targetDate.getDate(0));
      const daysOfLtMonth = [];
      const lastDateOfLastMonth = targetDate.getDate();
      for (let j = 0; j < daysLeftFromLastMonth; j++) {
        daysOfLtMonth.push(lastDateOfLastMonth - j);
      }
      return daysOfLtMonth.reverse();
    };

    const datesOfNextMonth = (year, month) => {
      const firstDayOfCalendar = 0;
      const targetDate = new Date(`${year}-${month}-1`);
      const targetMonth = targetDate.getMonth();
      targetDate.setMonth(targetMonth + 1);
      targetDate.setDate(0);
      console.log(targetDate.getDate(0));
      const lastDayOfThisMonth = targetDate.getDay();

      const daysLeftFromNextMonth = 6 + firstDayOfCalendar - lastDayOfThisMonth;

      const daysOfNextMonth = [];
      for (let k = 0; k < daysLeftFromNextMonth; k++) {
        daysOfNextMonth.push(k + 1);
      }
      return daysOfNextMonth;
    };
    const daysOfLstMonth = datesOfLastMonth(year, month);
    const daysOfThisMonth = datesOfThisMonth(year, month);
    const daysOfNextMonth = datesOfNextMonth(year, month);

    const allDays = daysOfLstMonth
      .concat(daysOfThisMonth)
      .concat(daysOfNextMonth);
    return allDays;
  };

  render() {
    const { year, month } = this.props;
    const allDays = this.daysInAll(year, month);

    const firstDayOfCalendar = 0;

    const weekDays = firstDayOfCalendar === 0 ? this.state.days : '';
    const table = [];

    while (allDays.length) {
      const sevenDaysInOneLine = allDays.splice(0, 7);
      table.push(sevenDaysInOneLine);
    }

    return (
      <div className='dayDates'>
        <table className={'date'}>
          <thead>
            <tr>
              {weekDays.map((day) => {
                return <th key={day}>{day}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {table.map((array, index) => {
              return (
                <tr key={index}>
                  {array.map((date) => {
                    return <td key={date}>{date}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default CalendarTable;

// 本月天数，本月1日星期几；
// 上月在本日历天数，星期数排列；
// 下月在本日历天数，星期数排列；
// 日历天数按7天一行划分；
// 把星期数和日期数用map引入；

//document.write()是在页面上显示，return是函数运行后返回的值
