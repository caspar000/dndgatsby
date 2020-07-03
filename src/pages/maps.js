import React from 'react'
import Konva from 'konva'
import {Stage} from 'react-konva'

import MapJpg from '../images/maps/04.jpg'

import SEO from '../components/seo'
import Layout from "../components/layout"


class Maps extends React.Component {
  state = {
    sidebar: 'none',
  }
  componentDidMount() {
    var stage = this.stageRef;
    var layer = new Konva.Layer();
    stage.add(layer)

    var imageObj = new Image();
    imageObj.onload = function () {
      var yoda = new Konva.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 1920,
        height: 1480,
      });

      // add the shape to the layer
      layer.add(yoda);
      layer.batchDraw();
    };
    imageObj.src = MapJpg

    var scaleBy = 1.2;
    stage.on('wheel', (e) => {
      e.evt.preventDefault();
      var oldScale = stage.scaleX();

      var pointer = stage.getPointerPosition();

      var mousePointTo = {
        x: (pointer.x - stage.x()) / oldScale,
        y: (pointer.y - stage.y()) / oldScale,
      };

      var newScale =
        e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

      stage.scale({ x: newScale, y: newScale });

      var newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      };
      stage.position(newPos);
      stage.batchDraw();
    });

    layer.draw();
  }

  sidetabOpen = () => {
    if (this.state.sidebar === 'none') {
      this.setState({sidebar: 'active'})
    } else {
      this.setState({sidebar: 'none'})
    }
  }

  render() {
    const windowGlobal =  typeof window !== 'undefined' && window;
    const width = windowGlobal.innerWidth;
    const height = windowGlobal.innerHeight - 100;
    return (
      <Layout>
        <SEO title="Maps" />
          <div className={`sidetab ${this.state.sidebar}`}>
            <button onClick={this.sidetabOpen}>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="2.6em" 
              height="2em" 
              shapeRendering="geometricPrecision" 
              textRendering="geometricPrecision" 
              imageRendering="optimizeQuality" 
              fillRule="evenodd" 
              clipRule="evenodd" 
              viewBox="0 0 640 640"
              fill="#fff"
              >
                <path d="M640 67.643v104.423H172.892V67.643H640zM110.068 467.947V572.37H0V467.947h110.068zm0-200.14v104.41H0v-104.41h110.068zm0-200.164v104.423H0V67.643h110.068zM640 467.947V572.37H172.892V467.947H640zm0-200.14v104.41H172.892v-104.41H640z"/>
              </svg>
            </button>
            <div className="inside">
              <h1>Bergbrux Region Map</h1>
              <p>This is a region map of the most northern border of the States of Germandia, surrounding Port Lua and Bergbrux. This is the region that the Players will start their adventure in.</p>
            </div>
          </div>
        <Stage width={width} height={height} ref={node=>{this.stageRef = node}} draggable>

        </Stage>
        {/* <div className="grid maps">
          {data.images.nodes.map((image) => (
            <div className="m-1" key={image.id}>
              <Img  fluid={image.childImageSharp.fluid} alt={image.id}/>
            </div>
          ))}
          <div className="m-1">
            <iframe src="https://miro.com/app/embed/o9J_krXd0CI=/?" frameBorder="0" scrolling="no" allowFullScreen title="mapFrame"></iframe>
          </div>
        </div> */}
      </Layout>
    )
  }
}

// const data = useStaticQuery(graphql`
//   query Images {
//     images: allFile(
//       filter: {relativeDirectory: {eq: "maps"}},
//       sort: {fields: name}
//       ) {
//       nodes {
//         id
//         childImageSharp {
//           fluid (maxWidth: 800, quality: 100){
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `)

export default Maps