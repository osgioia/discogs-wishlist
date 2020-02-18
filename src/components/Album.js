import React from 'react'
import AlbumItem from './AlbumItem'

class Album extends React.Component{
    render()
    {
        return(
            <div>
                {
                    this.props.discos.map(item =>
                      
                       // console.log(item.basic_information)
                       <AlbumItem 
                            artist = {item.basic_information.artists.map(artist => artist.name)}
                            title = {item.basic_information.title}
                            year = {item.basic_information.year}
                            format = {item.basic_information.formats.map(format => format.name)}
                            
                       />
                    )
                }
            </div>
        )
    }
}

export default Album