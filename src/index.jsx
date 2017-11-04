import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { Drawer, List, NavBar, Icon, Carousel } from 'antd-mobile';


import App from './components/App';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';

import './index.less';

class Index extends React.Component {
  state = {
    open: true,
    data: ['', '', ''],
    initialHeight: 176,
  }
  onOpenChange = (...args) => {
    console.log(args);
    console.log('1231231232');
    this.setState({ open: !this.state.open });
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  // render() {
  //   const contentStyle = { color: '#A6A6A6', textAlign: 'center', paddingTop: 42 };
  //   const drawerStyle = { minHeight: document.documentElement.clientHeight };
  //   const sidebar = (<List>
  //     {[...Array(3).keys()].map((i, index) => {
  //       if (index === 0) {
  //         return (<List.Item key={index}
  //           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
  //           multipleLine
  //         ><Link to="/s1">ListView + Carousel</Link></List.Item>);
  //       }
  //       return (<List.Item key={index}
  //         thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
  //       ><Link to={"/s"+(index+1)}>Tabs + ...</Link></List.Item>);
  //     })}
  //   </List>);

  //   return (<div  className="body">
  //     <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
  //     <Drawer
  //       className="my-drawer"
  //       style={drawerStyle}
  //       enableDragHandle
  //       contentStyle={contentStyle}
  //       sidebar={sidebar}
  //       open={this.state.open}
  //       onOpenChange={this.onOpenChange}
  //     >
  //       Click upper-left corner
  //     </Drawer>
  //   </div>);
  // }

  render() {

    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div className="body">
        <Carousel
          className="my-carousel"
          autoplay={true}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                alt=""
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
        <h1>Stages list</h1>
        <ul role="nav">
          <li><Link to="/s1">ListView + Carousel</Link></li>
          <li><Link to="/s2">Tabs + ...</Link></li>
          <li><Link to="/s3">Form + ...</Link></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="s1" component={Stage1} />
      <Route path="s2" component={Stage2} />
      <Route path="s3" component={Stage3} />
    </Route>
  </Router>
, document.getElementById('example'));

// ReactDOM.render(
//   <div className="body">
//     <h1>Stages list</h1>
//     <ul role="nav">
//       <li><h3>ListView + Carousel</h3></li>
//       <li><h3>Tabs + ...</h3></li>
//       <li><h3>Form + ...</h3></li>
//     </ul>
//     <App><Stage3 /></App>
//   </div>
// , document.getElementById('example'));