import React from 'react'
import AlbumItem from './AlbumItem'
import request from 'request'

var token

class Album extends React.Component{
    
    constructor(props){
        super(props)
    



    token = this.SpotifyToken()

    }

    SpotifyToken = () => {
      var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
      }
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
          token = body.access_token
        // this.setState({authtoken: body.access_token})
      }
  })
  }


    render()
    {
      
        return(
            <div>
                {
                    this.props.discos.map(item =>
                      
                       
                  <AlbumItem 
                            token  = {token}
                            artist = {item.basic_information.artists.map(artist => artist.name)}
                            title = {item.basic_information.title}
                            year = {item.basic_information.year}
                            format = {item.basic_information.formats.map(format => format.name)}
                            link = {item.basic_information.resource_url}
                            
                       />
                       
                    )
                }
            </div>
        )
    }
}

export default Album