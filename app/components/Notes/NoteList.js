import React, { Component } from 'react';

export default class NoteList extends Component {
  render(){
    let notes = this.props.notes.map((note, index) => {
      return <li className="list-group-item" key={index}>{note}</li>
    })
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
}

NoteList.defaultProps = {
  notes: ['请输入评论']
};
NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
};
