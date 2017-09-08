import React, {Component} from 'react'

export default class FilterObject extends Component {
    
    constructor(){
        super();
        this.state = {
            unFilteredArray: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" }],
            userInput: '',
            filteredArray: []
        }
    }

    textToSearch(str){
        this.setState({userInput: str});
    }

    displayFiltered(userInput){
        var unFilteredArray = this.state.unFilteredArray;
        var returnArr = [];

        for(var i = 0; i < unFilteredArray.length; i++){
            if (unFilteredArray[i].hasOwnProperty(userInput)){
                returnArr.push(unFilteredArray[i]);
            }
        }

        this.setState({filteredArray: returnArr})

    }
   
    render() {
        return (
            <div className="puzzleBox filterObjectPB"> 
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
            <input className="inputLine" onChange={(e) => this.textToSearch(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => {this.displayFiltered(this.state.userInput)}}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}