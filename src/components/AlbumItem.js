import React from 'react'
import {Columns, Column, Button} from 'bloomer'

class AlbumItem extends React.Component{

    MeliLink = (artist, title) => {
        return "https://listado.mercadolibre.com.ar/" + artist + "-" + title 
    }

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
                        {this.props.year}
                 </Column>
                 <Column>
                    {this.props.format}
                 </Column> 
                 <Column isSize="1/2">
                    <Button isColor='warning' href={this.MeliLink(this.props.artist,this.props.title)}>Mercado Libre</Button>
                 </Column>
                
            </Columns>
        )
    }
}

export default AlbumItem