var React = require('react');
var Navigation = require('Navigation');
// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav />
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <p>Main.jsx rendered</p>
      {props.children}
    </div>
  );
};
//this.props.children is using react router
module.exports = Main;
