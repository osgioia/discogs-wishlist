import React from 'react';
import SearchBox from './components/SearchBox'
import Album from './components/Album'
import { Container } from 'bloomer'
import dotenv from 'dotenv'





class App extends React.Component{
  constructor(props){
    super(props)

    dotenv.config()


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
         this.setState({discos: data.wants}) 
        })
        
       
      })
    }

    setQuery(value){
      this.setState({query: value})
    }

    render(){
      return (
        <div className="App">
            <Container isFluid style={{marginTop: 10}}>
              <SearchBox setInputValue={(term) => this.setQuery(term)} onSearchButtonClick={()=> this.getList()} />
              <Album discos={this.state.discos}/>
            </Container>
        </div>
      );
    }
}

export default App
