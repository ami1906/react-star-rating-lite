var React = require('react');
var createReactClass = require('create-react-class');
import Star from './star';
var ratingStartIndex = 1;
var ratingEndIndex = 5;
var Stars = createReactClass({
  render:function(){
    var stars = [];
  	for(var i=ratingStartIndex;i<=ratingEndIndex;i++)
  		stars.push(<Star key={i} index={i} hoverIndex={this.props.hoverIndex} weight={this.props.weight} color={this.props.color}/>)
    return (
      <div>
        {stars}
      </div>
    )
  }
});

export default Stars;
