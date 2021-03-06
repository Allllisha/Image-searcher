import React from 'react';

class SearchBar extends React.Component{
  
   state = { term: '' };

   onFormSubmits = (event) =>{
     event.preventDefault();
     this.props.onSubmit(this.state.term);
   };

  render(){
    return (
      <div className= "ui segment">
      <form onSubmit={this.onFormSubmits} className="ui form">
        <div className ="field">
          <label htmlFor="">Search</label>
        <input
        type="text"
        value={this.state.term}
        onChange={(e) => this.setState({term: e.target.value})} />
        </div>
      </form>
      </div>
    );
  }
}


export default SearchBar;