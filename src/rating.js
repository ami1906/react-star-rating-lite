var React = require('react');
var createReactClass = require('create-react-class');
var Stars = require('./stars');
require('./rating.css');
var Rating = createReactClass({
  getInitialState: function() {
     return {
      selectIndex: this.props.value || 0,
      hoverIndex: this.props.value || 0,
      weight: this.props.weight || 26,
      lockHover: this.props.readonly ? true : false,
    };
  },
  // to find the span element by looking up
  getSpanElement(target){
    // bubble up untill you find the parent span element or the base node
  	while(target && target.tagName !== "SPAN")
    {
    	target = target.parentNode;
    }
    return target;
  },
  // to highlight rating on hover
	mouseOverHandler: function(e){
    // allow mouse hover when its allowed
  	if(!this.state.lockHover)
    {
      // get the rating value of the current mover over node
      var ratingValue = this.getDataIndexValue(e.target);
      if(ratingValue)
      {
        this.setState({
          hoverIndex : ratingValue
        });
      }
    }
  },
  // to get the index value of rating being clicked
  getDataIndexValue: function(target){
    var spanIndex;
    var spanElement = this.getSpanElement(target);
    if(spanElement)
    {
      spanIndex = spanElement.getAttribute('data-index');
      spanIndex =  spanIndex ? parseInt(spanIndex) : spanIndex;
    }
    return spanIndex;
  },
  // to capture user input and execute the user passed function
  onClickHandler: function(e){
  	if(!this.props.readonly)
    {
        var ratingValue = this.getDataIndexValue(e.target);
        if(ratingValue)
        {
          this.setState({
            hoverIndex: ratingValue,
            selectIndex: ratingValue
          });
          // execute the user onclick function if available
          if(typeof(this.props.onClick) === "function")
            this.props.onClick(ratingValue);
        }
     }
  },
  // when moving out of rating
  mouseLeaveHandler: function(){
  	if(!this.state.lockHover)
    {
      this.setState({
          hoverIndex: this.state.selectIndex
        })
     }
  },

  render: function() {
    return (
      <div className="react-star-rating-lite">
        <div
          onMouseOver={this.mouseOverHandler}
          onClick={this.onClickHandler}
          onMouseLeave={this.mouseLeaveHandler}
        >
          <Stars hoverIndex={this.state.hoverIndex} weight={this.state.weight}/>
        </div>
      </div>)
    }
  });

  module.exports = Rating;
