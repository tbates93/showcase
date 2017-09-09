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

    search(userInput){
        var arr = this.state.UnfilteredArray;
        var FilteredArray = [];

        for (var i = 0; i < arr.length; i++){
            if (arr[i].includes(this.state.userInput)) {
                FilteredArray.push(arr[i])
            }
        }

        this.setState({FilteredArray: FilteredArray})
    }

    
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">UnfilteredArray: { JSON.stringify(this.state.UnfilteredArray, null, String) }</span>
                <input className="inputLine" onChange={(e) => this.searchEntry(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.search(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterStringPB">FilteredArray: { JSON.stringify(this.state.FilteredArray, null, 10) }</span>
            </div>
        )
    }
}