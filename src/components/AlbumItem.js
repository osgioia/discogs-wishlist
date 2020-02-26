import React from 'react'
import {Columns, Column, Button} from 'bloomer'
import request from 'request'

var albumimg, albumlink

class AlbumItem extends React.Component{


    SpotifyInfo = (token, artist, title) => {
        
              var options = {
                url: 'https://api.spotify.com/v1/search?q='+ artist + " " + title +'&type=album&market=US&limit=1&offset=1',
                headers: {
                  'Authorization': 'Bearer ' + token
                },
                json: true
              };
              request.get(options, function(error, response, body) {
                 if (body.albums.items.length > 0) {
               
                albumlink = body.albums.items[0].images[2].url
                albumimg = body.albums.items[0].external_urls.spotify
                

               }
              });
            }
         

    MeliLink = (artist, title) => {
        return "https://listado.mercadolibre.com.ar/" + artist + "-" + title 
    }

    DiscoGSLink = (urllink) => {
         urllink = urllink.replace("releases","release")
         return  urllink.replace("api","www")
    }

     render(){
        this.SpotifyInfo(this.props.token,this.props.artist,this.props.title)
        return(
            <Columns isCentered>
                  <Column>
                     <img src={this.albumimg}/>
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
                    <Button isColor='success' href={this.albumlink}>Spotify</Button>
                 </Column>

            </Columns>
        )
    }
}

export default AlbumItem