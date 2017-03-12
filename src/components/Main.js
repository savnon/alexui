require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';



var imageDatas = require('../data/imageDatas.json');

imageDatas = (function genImageURL(imageDataArr) {
  for (var i = 0, j = imageDataArr.length; i< j ; i ++) {
    var singleImageData = imageDataArr[i];

    singleImageData.imageURL = require('../images/' +
        singleImageData.fileName);

    imageDataArr[i] = singleImageData;
  }

  return imageDataArr;
})(imageDatas);


var ImgFigure  = React.createClass({

    getInitialState: function() {
        return {liked: false};
    },

    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },

    render: function () {
        var text = this.state.liked ? 'like' :'do not like';
        return(

            <div class="follow-detail">
                <button onClick={this.handleClick}>
                    Click this {text}
                </button>
            </div>


            // <div>
            //     <figure>
            //         {/*<img src={this.props.data.imageURL}/>*/}
            //         <figcaption>
            //             <h2>{this.props.data.title}</h2>
            //         </figcaption>
            //     </figure>
            //     <button>Add</button>
            // </div>
        )
    }

});

class AppComponent extends React.Component {
  render() {

      var controllerUnits = [],
          imgFigures = [];

      imageDatas.forEach(function(value){
          imgFigures.push(<ImgFigure data={value}/>)
      });




    return (
        <section className="stage">
            <section className="img-sec">
                {imgFigures}

            </section>
            <nav className="controller-nav">
                {controllerUnits}
            </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
