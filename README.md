# React Star Rating Lite

React Star Rating Lite is a Star Rating component for react code which is completly based on Scalable Vector Graphics(SVG).

## Demo

View react-star-rating-lite in action

## Installation

You can install react-star-rating-lite component using the npm package manager:
```
npm install --save react-star-rating-lite
```

### Dependencies

The react-star-rating-lite component peer depends on the React and createReactClass library.

You can install React and related dependencies using npm too:
```
npm install --save react
npm install --save create-react-class
```

## How to Use

1.) Require the `react-star-rating-lite` Component
```
var Rating = require('react-star-rating-lite');
```

2.) Start using it
```
<Rating/>
```

## Features

* Set a default value to it using the `value` property
```
<Rating value='3'/>
```

* Can use it as read-only feature using the `readonly` property
```
<Rating value='3' readonly/>
```

* Can increse/decrease the size of the stars using `weight` property. weight is measured in px.
```
<Rating weight="24"/>
```
If weight it not specified, the value will be defaulted to 30px

* Can use `onClick` property to trigger an action when the user choose the rating.

This property function will be invoked with the selected rating as the argument `function(ratedVal){}`.
```
function onClickHandler(ratedVal)
{
  cosole.log("Selected Rating",ratedVal)
}

<Rating onClick={onClickHandler}/>
```
