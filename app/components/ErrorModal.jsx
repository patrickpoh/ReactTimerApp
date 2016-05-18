var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var $ = require('jQuery');
var ErrorModal = React.createClass({
  componentDidMount: function(){
    var {showErrorMessage} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Error</h4>
        <p>Please enter a valid time</p>
        <p>
          <button className="button hollow" data-close="">
          Okay
          </button>
        </p>
      </div>
    );
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    this.modal = new Foundation.Reveal($('#error-modal'));

    if (showErrorMessage) {
      this.modal.open();
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    var {showErrorMessage} = this.props;

    if (showErrorMessage && showErrorMessage !== prevProps.showErrorMessage) {
      this.modal.open();
    }
  },
  render: function () {

    return (
      <div></div>
    );

  }
});

module.exports = ErrorModal;
