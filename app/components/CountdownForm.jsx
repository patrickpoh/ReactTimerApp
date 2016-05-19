var React = require('react');
// var ErrorModal = require('ErrorModal');
// var $ = require('jQuery');
var CountdownForm = React.createClass({
  // getInitialState: function(){
  //   return{
  //     showErrorMessage: false
  //   }
  // },
  onSubmit: function(e) {
    var that = this;
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      // that.setState({
      //   showErrorMessage: false
      // });
      that.refs.seconds.value = '';
      that.props.onSetCountdown(parseInt(strSeconds, 10));
    }
    else{
      // that.setState({
      //   showErrorMessage: new Date().getTime()
      // });
      that.refs.seconds.value = '';
    }
  },
  render: function() {
      // var {showErrorMessage} = this.state;

      return (
        <div>
          <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
            <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
            <button className="button expanded">Start</button>
          </form>
         {/*<ErrorModal showErrorMessage={showErrorMessage}/>*/}
        </div>
      );
  }
});

module.exports = CountdownForm;
