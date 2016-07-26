import React, { Component } from 'react';

import getGithubInfo from '../../util/helper';
import { UserProfile, UserRepos, Notes } from '../../components';

class Profile extends Component {
  // 这么写总感觉会报错啊。。。额，并不会
  state = {
    repos: ['A'],
    bio: {
      name: 'please wait'
    }
  }
  componentDidMount(){
    getGithubInfo( this.props.params.username )
    .then( ( data ) => {
      // 测试一下传入用户名后返回的数据
      // console.log( data );
      // 更新state数据
      this.setState({
        bio: data.bio,
        repos: data.repos
      })
    });
  }
  componentWillUnMount(){
    // this.unbind('notes');
  }
  render(){
    // 下面的 params 可以通过 console.log 输出查看
    // console.log(this.props);
    return (
      <div className="row">
        <div className="col-sm-4">
          <UserProfile
            username={this.props.params.username}
            bio={this.state.bio} />
        </div>
        <div className="col-sm-4">
          <UserRepos
            username={this.props.params.username}
            repos={this.state.repos} />
        </div>
        <div className="col-sm-4">
          <Notes username={this.props.params.username} />
        </div>
      </div>
    )
  }
}

export default Profile;
