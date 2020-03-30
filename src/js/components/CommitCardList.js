import { GithubApi } from '../modules/GithubApi';
import { CommitCard } from '../components/CommitCard';
import { slider } from '../utils/slider';

export class CommitCardList {

    constructor() {
        this.githubApi = new GithubApi();
        this.commitCard = new CommitCard();
    }


    render = () => {
        this.githubApi.getCommits()
            .then(data => data.filter((item, index) => index < 20)
                              .forEach( commit => this.commitCard.createCard(commit) ))
            .then(() => slider())
    }
}