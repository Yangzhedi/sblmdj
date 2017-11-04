import React from 'react';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { NavBar, Drawer, Icon, List, Carousel } from 'antd-mobile';

// not use `babel-plugin-import`
// import 'antd-mobile/dist/antd-mobile.css';
// import NavBar from 'antd-mobile/lib/nav-bar';
// import 'antd-mobile/lib/nav-bar/style/css';
// import Drawer from 'antd-mobile/lib/drawer';
// import 'antd-mobile/lib/drawer/style/css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'app',
      open: false,
    };
  }
 
  componentWillReciveProps(){
    this.setState({
      title: 'app',
    })
  }
  onOpenChange = (...args) => {
    console.log(args);
    console.log('1231231232');
    this.setState({ open: !this.state.open });
  }
  render() {
    console.log(this.props.route, this.props.params, this.props.routeParams);
    const path = hashHistory.getCurrentLocation().pathname;
    console.log(path);
    const sidebar = (<List>
      {[...Array(3).keys()].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index} 
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          ><Link to="/s1">ListView + </Link></List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        ><Link to={"/s"+(index+1)}>Tabs + ...</Link></List.Item>);
      })}
    </List>);

    const buttonStyle = { marginRight: '16px' };
    const homeButton = path =='/' ? null :<Icon key="0" type="search" style={buttonStyle} onClick={() => hashHistory.push('/')}/>;
    const drawerDiv = { position: 'relative', height: '100%' };
    const sidebarStyle = { backgroundColor: '#fff' };
    return (
      <div className="container">
        <NavBar mode="light"
          icon={path =='/' ? null : <Icon type="left" /> }
          onLeftClick={() => hashHistory.goBack()}
          rightContent={[
            homeButton,
            <b onClick={() => this.setState({ open: true })}>...</b>
          ]}
        >
          {path =='/' ? 'CS:GO系列赛' : this.state.title}
        </NavBar>
      

        <div style={drawerDiv}>
          <Drawer
            className="my-drawer"
            position="right"
            sidebar={sidebar}
            sidebarStyle={sidebarStyle}
            open={this.state.open}
            onOpenChange={this.onOpenChange}
          >
            {this.props && this.props.children && React.cloneElement(this.props.children, {
              changeTitle: title => this.setState({ title })
            }) || 'no content'}

          </Drawer>
        </div>

        {/*<div className="fixed-bottom">底部固定条</div>*/}
      </div>
    );
  }
}
