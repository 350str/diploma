import { githubApiUrl } from '../constants/github-api-url';

export class GithubApi {

     getCommits() {
        return fetch(githubApiUrl)
          .then(res => {
            if (res.ok) return res.json()
                        return Promise.reject(`Could not fetch ${githubApiUrl}, received ${res.status}`)
          })
      }
}