import React from 'react';
import { connect } from 'react-redux';
import { addCountAsync,subCount, addCount } from "../redux/index.redux";
import { Picker, Button, List, Checkbox } from 'antd-mobile';
import { Link } from 'react-router';

const mapStatetoProps = state => {
    return {num:state.counter}
};
const actionCreator = { addCountAsync,subCount, addCount };

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.changeTitle('Stage 3');
  }
  render() {
    const num = this.props.num;
    const addCount = this.props.addCount;
    const subCount = this.props.subCount;
    const addCountAsync = this.props.addCountAsync;
    return (
        <div className="form">
          <header className="App-header">
            <h1 className="App-title">现在有数字{num}</h1>
          </header>
          <Button type='primary' onClick={addCount}> 加 </Button>
          <Button type='primary' onClick={subCount}> - </Button>
          <Button type='primary' onClick={addCountAsync}> 拖两天 </Button>
          <Link to="/person">person</Link>
    </div>);
  }
}


export default Demo = connect(mapStatetoProps, actionCreator)(Demo);
