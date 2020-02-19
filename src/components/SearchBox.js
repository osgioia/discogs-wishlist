import React, { Component } from 'react'
import { Field, Control, Button, Input } from 'bloomer'

class SearchBox extends Component{
    constructor(props){
        super(props)
        this.state = {query : ''}
    }

    handleClick(){
        this.props.onSearchButtonClick()
    }

    handleChange(value)
    {
        this.setState({query: value})
        this.props.setInputValue(value)
    }

    render(){
        return(
            <Field isGrouped>
                <Control>
                    <Input type="text" placeholder="DiscoGS User" value={this.state.query} onChange={event=> this.handleChange(event.target.value)}/>
                </Control>
                <Control>
                    <Button isColor='success' isOutlined onClick={event=> this.handleClick(event.target.value)}>Buscar</Button>
                </Control>
            </Field>
        )
    }

}

export default SearchBox