import React from 'react';
import '../styles/Main.css';
import Month from './Month';
import Holiday from './Holiday';
import CalendarTable from './CalendarTable';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: new Date().getFullYear(),
      monthChange: new Date().getMonth() + 1
    };
  }

  handleMonth = month => {
    this.setState({ monthChange: month });
  };

  changeToPassedYear = () => {
    this.setState({ input: this.state.input - 1 });
  };
  changeToFutureYear = () => {
    this.setState({ input: this.state.input + 1 });
  };

  render() {
    return (
      <div>
        <div>
          <p>
            <button className='time'>
              Canada Time:{' '}
              {new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
              })}{' '}
              at {new Date().toLocaleTimeString()}
            </button>
          </p>
          <nav className='yearArea'>
            <button
              className='leftButtonYear'
              onClick={this.changeToPassedYear}
            >
              &lt;&lt;
            </button>
            <Month
              month={this.state.monthChange}
              onMonthHandle={this.handleMonth}
              yearAdding={this.changeToFutureYear}
              yearDelete={this.changeToPassedYear}
            />
            <button className='year'>{this.state.input}</button>

            <button
              className='rightButtonYear'
              onClick={this.changeToFutureYear}
            >
              &gt;&gt;
            </button>

            <Holiday />
          </nav>

          <CalendarTable
            year={this.state.input}
            month={this.state.monthChange}
          />
        </div>
      </div>
    );
  }
}

export default Main;

// 用到的方法：
// 年份和日期算法；
// 向子集传递props的用法；
// button绑定事件；
// setState用法；
// greater than:" &gt;" || less than:"&lt;"
