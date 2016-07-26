import React, { Component } from 'react';

import NoteList from './NoteList.js';

export default class Notes extends Component {
  constructor(){
    super();
    this.state={
      text:'',
      items:[]
    }
  }
  onChange(e){
    this.setState({text: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    // var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    this.state.items.push(this.state.text);
    var nextText = '';
    this.setState({text: nextText});
    // console.log(this.state.items,this.state.text)
  }
  render(){
    // console.log(this.props);
    return (
      <div>
        <h3>对{this.props.username}评论: </h3>
        <form onSubmit={this.handleSubmit.bind(this) }>
          <div className="row" style={{marginBottom:'10px'}}>
            <div className="col-md-8">
              <input type="text" className="form-control" onChange={this.onChange.bind(this)} value={this.state.text}/>
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn btn-block btn-primary">点评</button>
            </div>
          </div>
        </form>
        {this.state.items[0] ? <NoteList notes={this.state.items} /> : <NoteList />}
      </div>
    )
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
};
