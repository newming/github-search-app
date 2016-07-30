import React, { Component } from 'react';

export default class UserRepos extends Component {
  render(){
    // console.log('repos:', this.props.repos);
    let repos = this.props.repos.map( (repo, index ) => {
      return (
        <li className="list-group-item" key={index}>
          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
          {repo.description && <p>{repo.description}</p>}
        </li>
      )
    });

    return <div>
      <h3> 用户的 Git 仓库 </h3>
      <ul className="list-group">
        {repos}
      </ul>
    </div>
  }
}

UserRepos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired,
};
