import React from 'react'
import {Columns, Column, Button} from 'bloomer'
import request from 'request'


class AlbumItem extends React.Component{
    
    SpotifyInfo = (artist, title) => {
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
              'Authorization': 'Basic ' + (new Buffer(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64'))
            },
            form: {
              grant_type: 'client_credentials'
            },
            json: true
          };
          
          request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {
          
              // use the access token to access the Spotify Web API
              var token = body.access_token;
              var options = {
                url: 'https://api.spotify.com/v1/search?q='+ artist + " " + title +'&type=album&market=US&limit=1&offset=1',
                headers: {
                  'Authorization': 'Bearer ' + token
                },
                json: true
              };
              request.get(options, function(error, response, body) {
                console.log(body);
              });
              
            }
          });
        }

    MeliLink = (artist, title) => {
        return "https://listado.mercadolibre.com.ar/" + artist + "-" + title 
    }

    DiscoGSLink = (urllink) => {
        return urllink.replace("api","www")
    }

     render(){
        this.SpotifyInfo(this.props.artist,this.props.title)
        return(
            <Columns isCentered>
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
                    <Button isColor='success' href="">Spotify</Button>
                 </Column>

            </Columns>
        )
    }
}

export default AlbumItem