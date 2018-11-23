import React from 'react';

export default class Lifecycle extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count: 0,
    }
    console.log('constructor')
  }
  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps')
    return null
  }
  /*componentWillMount(){
    console.log('componentWillMount')
  }*/
  componentDidMount(){
    console.log('componentDidMount')
  }
  /*componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }*/
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate')
    return true
  }
  /*componentWillUpdate(){
    console.log('componentWillUpdate')
  }*/
  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  render(){
    console.log('render')
    return (
      <div>
        <div onClick={()=>{this.setState({count: this.state.count + 1})}}>+</div>
        <div>{this.state.count}</div>
        <div onClick={()=>{this.setState({count: this.state.count - 1})}}>-</div>
      </div>
    )
  }
}
