import React from 'react';
import '../styles/Holiday.css';

// @TODO: rename to be HolidayPicker;
class Holiday extends React.Component {
  state = {
    nameOfHoliday: [
      'New Year',
      'Spring Festival',
      'Middle Autumn Festival',
      'Helloween',
      'Dragon Boat Festival',
      'Laba Festival',
      "Valentine's Day",
      "Lunar New Year's Eve",
      'the Lantern Festival',
      'Tomb Sweeping Day',
      'May Day',
      "Children's Day",
      "Chinese Valentine's Day",
      '中元节',
      "Teacher's Day",
      'National Day',
      'the Double-Ninth Festival',
      'Little New Year',
      'online shopping spree',
      'Equinox',
      '青年节',
      '母亲节',
      '父亲节',
      '夏至',
      '建党节',
      '建军节',
      '植树节',
      '冬至',
      'Epiphany',
      'Day After New Year’s Day',
      'Orthodox Christmas Day',
      'Orthodox New Year',
      "Tu B'Shevat (Arbor Day)",
      'Groundhog Day',
      'National Flag of Canada Day',
      'Islander Day',
      'Family Day',
      'Nova Scotia Heritage Day',
      'Louis Riel Day',
      'Yukon Heritage Day',
      "St David's Day",
      'Carnival / Shrove Tuesday',
      'Ash Wednesday',
      'Daylight Saving Time starts',
      'Commonwealth Day',
      "St. Patrick's Day",
      'March Equinox',
      'Purim',
      "Isra and Mi'raj",
      'National Tartan Day',
      'Vimy Ridge Day',
      'Palm Sunday',
      'Maundy Thursday',
      'Good Friday',
      'Holy Saturday',
      'First day of Passover',
      'Easter Sunday',
      'Easter Monday',
      "St. George's Day",
      'Orthodox Good Friday',
      'Last day of Passover',
      'Orthodox Holy Saturday',
      'Orthodox Easter',
      'Orthodox Easter Monday',
      'Yom HaShoah',
      'Ramadan Start',
      'Yom HaAtzmaut',
      "Mother's Day",
      'Victoria Day',
      "National Patriots' Day",
      "Lag B'Omer",
      'Ascension Day',
      'Laylatul Qadr (Night of Power)',
      'Eid ul Fitr',
      'Pentecost',
      'Shavuot',
      'Whit Monday',
      'Trinity Sunday',
      "Father's Day",
      'Corpus Christi',
      'June Solstice',
      'National Indigenous Peoples Day',
      'St. Jean Baptiste Day',
      'Canada Day',
      'Memorial Day',
      'Nunavut Day',
      "Orangemen's Day",
      'Heritage Day',
      'Civic/Provincial Day',
      'Saskatchewan Day',
      'Terry Fox Day',
      'New Brunswick Day',
      'British Columbia Day',
      'Natal Day',
      "The Royal St John's Regatta (Regatta Day)",
      "Tisha B'Av",
      'Eid ul Adha',
      'Assumption of Mary',
      'Gold Cup Parade',
      'Discovery Day',
      'Muharram/Islamic New Year',
      'Labour Day',
      'September Equinox',
      'Rosh Hashana',
      'Feast of St Francis of Assisi',
      'Yom Kippur',
      'First day of Sukkot',
      'Thanksgiving Day',
      'Healthcare Aide Day',
      'Hoshana Rabbah',
      'Shemini Atzeret',
      'Simchat Torah',
      'Diwali/Deepavali',
      "All Saints' Day",
      'Daylight Saving Time ends',
      'Milad un Nabi (Mawlid)',
      'Remembrance Day',
      'First Sunday of Advent',
      'Feast of the Immaculate Conception',
      'Anniversary of the Statute of Westminster',
      'December Solstice',
      'First Day of Hanukkah',
      'Christmas Eve',
      'Christmas Day',
      'Boxing Day',
      'Last day of Hanukkah',
      "New Year's Eve"
    ]
  };

  showHolidays = () => {
    document.getElementById('lists').classList.toggle('active');
  };

  changeButtonName = e => {
    //用e接收事件对象
    //事件对象有很多属性和方法，此处的target属性是获取事件目标
    //e.target是找到了鼠标点击事件的DOM元素
    //innerHTML就是里面的text内容
    const holidayName = e.target.innerHTML;
    document.getElementById('button').innerHTML = holidayName;
  };

  render() {
    const holidaysName = this.state.nameOfHoliday.map(oneHoliday => {
      return (
        <li onClick={this.changeButtonName} key={oneHoliday}>
          {oneHoliday}
        </li>
      );
    });
    return (
      <nav>
        <ul className='holidays'>
          <li id='menu'>
            <button id='button' onClick={this.showHolidays} className='btn'>
              Holidays
            </button>
            <ul className='festivals' id='lists'>
              {holidaysName}
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Holiday;
