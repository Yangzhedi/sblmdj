import React from 'react';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { NavBar, Drawer, Icon, List, Carousel } from 'antd-mobile';

// not use `babel-plugin-import`
// import 'antd-mobile/dist/antd-mobile.css';
// import NavBar from 'antd-mobile/lib/nav-bar';
// import 'antd-mobile/lib/nav-bar/style/css';
// import Drawer from 'antd-mobile/lib/drawer';
// import 'antd-mobile/lib/drawer/style/css';

const sidebarArr = [{
  content:"111",
  image:  "https://cdn1.bisaibang.com/StationAvatar1.1502691383861.png"
},{
  content:"222",
  image:  "https://cdn1.bisaibang.com/StationAvatar1.1502691383861.png"
},{
  content:"333",
  image:  "https://cdn1.bisaibang.com/StationAvatar1.1502691383861.png"
},{
  content:"444",
  image:  "https://cdn1.bisaibang.com/StationAvatar1.1502691383861.png"
},{
  content:"555",
  image:  "https://cdn1.bisaibang.com/StationAvatar1.1502691383861.png"
}];
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
  };
  render() {
    console.log(this.props.route, this.props.params, this.props.routeParams);
    const path = hashHistory.getCurrentLocation().pathname;
    console.log(path);
    const sidebar = (<List>
      {sidebarArr.map((i, index) => {
        if (index === 0) {
          return (
            <List.Item key={index} multipleLine>
              <Link to="/s1" onClick={() => { this.setState({ open: false }) }}>
                <div style={{textAlign: 'center'}}>
                  <img src={i.image} style={{width:'8rem', height: '8rem'}}/>
                  <div style={{backgroundColor:'red'}}>{i.content}</div>
                </div>
                {/*登录注册，登录后头像*/}
              </Link>
          </List.Item>
          );
        }
        return (
          <List.Item key={index} thumb={i.image}>
            <Link to={"/s"+(index+1)} onClick={() => { this.setState({ open: false })}}>
              {i.content}
            </Link>
          </List.Item>);
      })}
    </List>);

    const buttonStyle = { marginRight: '16px' };
    const homeButton = path === '/' ? null :<Icon key="0" type="search" style={buttonStyle} onClick={() => hashHistory.push('/')}/>;
    const drawerDiv = { position: 'relative', height: 'calc(100% - 45px)' };
    const sidebarStyle = { backgroundColor: '#fff' };
    return (
      <div className="container">
        <NavBar mode="light"
          icon={path === '/' ? null : <Icon type="left" /> }
          onLeftClick={() => hashHistory.goBack()}
          rightContent={[homeButton, <b onClick={() => this.setState({ open: !this.state.open })}>...</b>]}
        >
          {path === '/' ? 'CS:GO系列赛' : this.state.title}
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
