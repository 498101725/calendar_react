import React from 'react';
import '../styles/Month.css';

// @TODO: rename month to be MonthPicker;
class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: props.month
    };
  }
  getMonth = number => {
    var nums = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return nums[number - 1];
  };
  onMonthChanged = () => {
    this.props.onMonthHandle(this.state.month);
  };
  yearMonthAddingTogether = () => {
    this.monthChangeToJanuary();
    this.addYear();
    this.onMonthChanged();
  };
  yearMonthDeletingTogether = () => {
    this.deleteYear();
    this.monthChangeToDecember();
    this.onMonthChanged();
  };
  // child to component communication;
  deleteYear = () => {
    this.props.yearDelete();
  };
  addYear = () => {
    this.props.yearAdding();
  };
  deleteAndChangeMonth = () => {
    this.deleteMonth();
    this.onMonthChanged();
  };
  addAndChangeMonth = () => {
    this.addMonth();
    this.onMonthChanged();
  };
  // month adding and month deleteing;
  deleteMonth = () => {
    this.state.month--;
  };

  addMonth = () => {
    this.state.month++;
  };

  monthChangeToDecember = () => {
    this.setState({ month: this.state.month + 11 });
  };
  monthChangeToJanuary = () => {
    this.setState({ month: this.state.month - 11 });
  };
  // showMonths = () => {
  //   document.getElementById('months').classList.toggle('active');
  // };

  // changeMonth = e => {
  //   this.setState({ month: e.target.innerHTML });
  // };

  render() {
    const months = this.state.month;
    // const twelveMonths = this.state.twelveMonths.map(theMonth => {
    //   return (
    //     <button onClick={this.changeMonth} id='thisMonth' key={theMonth}>
    //       {theMonth}
    //     </button>
    //   );
    // });
    return (
      <div>
        {months === 1 ? (
          <button className='monthA' onClick={this.yearMonthDeletingTogether}>
            &lt;
          </button>
        ) : (
          <button className='monthB' onClick={this.deleteAndChangeMonth}>
            &lt;
          </button>
        )}

        <button className='button'>{this.getMonth(this.state.month)}</button>

        {months === 12 ? (
          <button className='monthC' onClick={this.yearMonthAddingTogether}>
            &gt;
          </button>
        ) : (
          <button className='monthD' onClick={this.addAndChangeMonth}>
            &gt;
          </button>
        )}

        {/* <p className='months' id='months'>
          {twelveMonths}
        </p> */}
      </div>
    );
  }
}

export default Month;

// 用到的方法：
// button 标签同时绑定两个onClick事件；
// 子向父传递，改变父级状态；
// 父向子传递，改变子集状态；
// 条件渲染；
// map 渲染；
// event事件的innerHTML绑定；
// 月份算法；
