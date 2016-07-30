import axios from 'axios';

function getRepos(username){
  // 这里使用了 ES6 的字符串模板
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=5`);
}


function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
}

export default function getGithubInfo(username){
  // 将请求回来的数据做了一个 merge 操作
  return axios.all([
    getRepos(username),
    getUserInfo(username)
  ])
  .then((arr) => ({
      repos: arr[0].data,
      bio: arr[1].data}
  ));
}
