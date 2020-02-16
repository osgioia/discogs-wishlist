import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      discos: [],
      query: ''
    }

    }  


    //Fetch a DiscoGS
    getList(value=this.state.query){
      fetch('https://api.discogs.com/users/' + value + '/wants')
      .then((response)=>{
        if(response.status !== 200){
          console.error("Problemas con la API. Status Code:" + response.status )
          return false
        }

        response.json().then(data=>{
          this.setState({discos: data.results})
        })
      })
    }


    render(){
      return (
        <div className="App">
         
        </div>
      );
    }
}

export default App;
