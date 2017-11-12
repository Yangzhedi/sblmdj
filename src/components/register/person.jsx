import React from 'react';
import { SearchBar, ListView, Carousel, SwipeAction, Button } from 'antd-mobile';

export default class PersonRegister extends React.Component {
  componentDidMount() {
    this.props.changeTitle('person');
  }
  render() {
    console.log(this.props.route, this.props.params, this.props.routeParams);
    console.log(this.props.route.path);

    const style = { display: 'flex', alignItems: 'center', justifyContent: 'center', height: 2000 };
    const divStyle = { marginBottom: 30 }
    return (<div style={divStyle}>

      <SearchBar placeholder="person" />
      person
    </div>);
  }
}


