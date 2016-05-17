var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');


var ErrorModal = React.createClass({
  componentDidMount: function(){
    // var modalMarkup = (
    //
    // );
    // var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    // $(ReactDOM.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();

  },
  render: function () {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Error</h4>
        <p>Please enter a valid input</p>
        <p>
          <button className="button hollow" data-close="">
          Okay
          </button>
        </p>
      </div>
    );

  }
});

module.exports = ErrorModal;
