import React from 'react'
import {Columns, Column, Button} from 'bloomer'


class AlbumItem extends React.Component{
   constructor(props) {
            super(props)
            this.state = {
               albumlink: '',
               albumimg: ''
             }
   }


   componentDidMount()
   {
      
      const url = 'https://api.spotify.com/v1/search?q='+ this.props.artist + " " + this.props.title +'&type=album&limit=1&offset=1';
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.props.token
            })
        })
        .then(res => res.json())
        .then((res) => {
            const { error } = res;
            if (error && error.message === 'The access token expired') {
                console.log('The access token expired');
            } else {
               
                  

                 this.setState({albumlink : res.albums.items[0].external_urls.spotify,
                                 albumimg :  res.albums.items[0].images[2].url}, console.log(this.state.albumlink + " " + this.state.albumimg))
                 }
               
            })
        .catch(err => console.log('err', err));
      
      

    }
  
   

           

    MeliLink = (artist, title) => {
        return "https://listado.mercadolibre.com.ar/" + artist + "-" + title 
    }

    DiscoGSLink = (urllink) => {
         urllink = urllink.replace("releases","release")
         return  urllink.replace("api","www")
    }

     render(){
        
        return(
            <Columns isCentered>
                  <Column>
                     <img src={this.state.albumimg} alt={this.state.albumimg}/>
                 </Column>
                 <Column>
                    <div>{this.props.artist}</div>
                 </Column>
                 <Column>
                    <div>{this.props.title}</div>
                 </Column>
                 <Column>
                        {this.props.year}
                 </Column>
                 <Column>
                    {this.props.format}
                 </Column> 
                 <Column >
                    <Button isColor='black' href={this.DiscoGSLink(this.props.link)}>DiscoGS</Button>
                 </Column>
                 <Column >
                    <Button isColor='warning' href={this.MeliLink(this.props.artist,this.props.title)}>Mercado Libre</Button>
                 </Column>
                 <Column >
                    <Button isColor='success' href={this.state.albumlink}>Spotify</Button>
                 </Column>

            </Columns>
        )
    }
}

export default AlbumItem