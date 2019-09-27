import React from 'react';
import './App.css';
import Customer from './Customer'



class App extends React.Component{
  state={
    customers:''
  }
  callApi = async()=>{
    const response = await fetch('/api/customers')
    const body = await response.json()
    return body
  }

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err=>console.log(err))
  }

  render(){
    return(
      <div>
        {this.state.customers ? this.state.customers.map(c => {
          return <Customer image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
        }):''}
      </div>
    )
  }
}

export default App;
