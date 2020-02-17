import React from 'react'
import AlbumItem from './AlbumItem'

class Album extends React.Component{
    render()
    {
        return(
            <div>
                {
                    this.props.discos.map(item =>
                       /*
                        <AlbumItem name = {item.name}
                                   title = {item.title} />
                        */
                       console.log(item)
                        )
                }
            </div>
        )
    }
}

export default Album