import React from 'react'
import {Columns, Column} from 'bloomer'

class AlbumItem extends React.Component{
    render(){
        return(
            <Columns isCentered>
                 <Column>
                    <div>{this.props.artist}</div>
                 </Column>
                 <Column>
                    <div>{this.props.title}</div>
                 </Column>
                 <Column>
                
                    <div>{this.props.year}</div>
                 </Column>
                 <Column>
                    <div>{this.props.format}</div>
                 </Column>

            </Columns>
        )
    }
}

export default AlbumItem