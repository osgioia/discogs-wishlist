import React from 'react'
import {Columns, Column} from 'bloomer'

class AlbumItem extends React.Component{
    render(){
        return(
            <Columns isCentered>
                 <Column>
                    <div>{this.props.basic_information.artists.name} - {this.props.basic_information.title}</div>
                 </Column>
            </Columns>
        )
    }
}

export default AlbumItem