import React from 'react';
import { SearchBar, ListView, Carousel, SwipeAction, Button } from 'antd-mobile';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';


export default class Register extends React.Component {
  componentDidMount() {
    this.props.changeTitle('Register');
  }
  render() {
    console.log(this.props.route, this.props.params, this.props.routeParams);
    console.log(this.props.route.path);

    const divStyle = { marginBottom: 30 };
    return (<div style={divStyle}>

      <SearchBar placeholder="Register" />
      <Button>Register</Button>


      <Link to="/person">person</Link>

      <div className="detail">
          {this.props && this.props.children && React.cloneElement(this.props.children, {
              changeTitle: title => this.setState({ title })
          }) || 'no content'}
      </div>
    </div>);
  }
}


