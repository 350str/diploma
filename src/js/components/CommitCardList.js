import { slider } from '../utils/slider';

export class CommitCardList {

    constructor(cardsContainer, bulletsContainer, githubApi, commitCard) {
        this.cardsContainer = cardsContainer;
        this.bulletsContainer = bulletsContainer;
        this.githubApi = githubApi;
        this.commitCard = commitCard;
    }


    render = () => {
        this.githubApi.getCommits()
            .then(commits => commits.filter((commit, commitIndex) => commitIndex < 20)
                                    .forEach(commit => {
                                        this.cardsContainer.append(this.commitCard.createCard(commit))
                                        this.bulletsContainer.append(this.commitCard.createCardBullet())
                                    } ))
            .then(() => slider())
            .catch((error) => console.error(error))
    }
}