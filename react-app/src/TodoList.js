import React from 'react';

// function App() {
//   return (
//     <div >
//       hello world!
//     </div>
//   );
// }


class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:''
    }
  }

  changeInput(e) {
    console.log(e.target.value)
    this.setState({inputValue:e.target.value})
  }

  addClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue], 
      inputValue:''
    });
  }

  deleteClick(index) {
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({list:list});
  }
  render(){
    return (
      <div >
        <div>
          <input value={this.state.inputValue} onChange={this.changeInput.bind(this)}/>
          <button onClick={this.addClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item,i)=>{
            return <li key={i} onClick={this.deleteClick.bind(this,i)}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;
