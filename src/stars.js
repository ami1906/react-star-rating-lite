var React = require('react');
var createReactClass = require('create-react-class');
var Star = require('./star');
var ratingStartIndex = 1;
var ratingEndIndex = 5;
var Stars = createReactClass({
  render:function(){
    var stars = [];
  	for(var i=ratingStartIndex;i<=ratingEndIndex;i++)
  		stars.push(<Star key={i} index={i} hoverIndex={this.props.hoverIndex} weight={this.props.weight}/>)
    return (
      <div>
        {stars}
      </div>
    )
  }
});

module.exports = Stars;
