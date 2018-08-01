import React,{Component} from 'react';
import Star from './star';
class Stars extends Component {
  render(){
    let stars = [];
    let ratingStartIndex = 1;
    let ratingEndIndex = 5;
    for(var i=ratingStartIndex;i<=ratingEndIndex;i++)
      stars.push(<Star key={i} index={i} hoverIndex={this.props.hoverIndex} weight={this.props.weight} color={this.props.color}/>)
    return (
      <div className="react__star__rating__lite__stars">
        {stars}
      </div>
    )
  }
}

export default Stars;
