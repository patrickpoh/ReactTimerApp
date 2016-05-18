var React = require('react');
var ErrorModal = require('ErrorModal');
var CountdownForm = React.createClass({
  getInitialState: function(){
    return{
      showErrorMessage: false
    }
  },
  onSubmit: function(e) {
    var that = this;
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      that.refs.seconds.value = '';
      that.props.onSetCountdown(parseInt(strSeconds, 10));
    }
    else{
      that.setState({
        showErrorMessage: true
      });
      that.refs.seconds.value = '';
    }
  },
  render: function() {

      var {showErrorMessage} = this.state;
      var renderError = () => {
        if(showErrorMessage){
          this.setState({
            showErrorMessage: false
          });
          return (
            <ErrorModal/>
          )
        }
      }
      return (
        <div>
          <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
            <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
            <button className="button expanded">Start</button>
          </form>
          {renderError()}
        </div>
      );
  }
});

module.exports = CountdownForm;
