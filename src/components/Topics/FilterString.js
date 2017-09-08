import React, { Component } from 'react'

export default class FilterStrings extends Component {
    constructor(){
        super();
        this.state = {
            UnfilteredArray: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
            userInput: '',
            FilteredArray: []
        }
    }

    searchEntry(str){
        this.setState({userInput: str})
    }

    search(){
        var returnArr = this.state.UnfilteredArray;

        for (var i = 0; i < returnArr.length; i++){
            if (returnArr[i].)
        }
    }

    
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">UnfilteredArray:</span>
                <input className="inputLine" onChange={(e) => this.searchEntry(e.target.value)}></input>
                <button className="confirmationButton">Filter</button>
                <span className="resultsBox filterStringPB">FilteredArray:</span>
            </div>
        )
    }
}