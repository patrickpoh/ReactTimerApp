var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState){  //this get called everytime the state or the props get updated
    if(this.state.timerStatus !== prevState.timerStatus){
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        default:

      }
    }
  },
  componentWillUnmount: function (){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleStart: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
      if(newCount === 5){
        this.setState({timerStatus: 'stopped'});
      }
    }, 1000);
  },
  handleStatusChange: function (newStatus){
    this.setState({timerStatus: newStatus});
  },
  render: function () {
    var {count, timerStatus} = this.state;

    return(
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  }
});

module.exports = Timer;
