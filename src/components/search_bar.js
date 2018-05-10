import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: ''}

    }
    render() {
        // return <input onChange={this.onInputChange} />
        // return <input onChange={(event) => console.log(event.target.value)} />
        // return <input onChange={event => console.log(event.target.value)} />

        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} 
                />
                {/* Entrada do input: {this.state.term} */}
            </div>
        )
    }    

    onInputChange(event) {
        console.log('Quantidade Digitado: '+  event.target.value.length + ' Conteudo digitado: ' + event.target.value)
    }
}

export default SearchBar