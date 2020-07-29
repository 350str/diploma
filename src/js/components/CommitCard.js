export class CommitCard {

    createCardBullet = () => {
        const commitCards = document.querySelectorAll('.glide__slide');
        const bullet = document.createElement('button');

        bullet.classList.add('glide__bullet');
        if (commitCards.length === 1) {
            bullet.classList.add('glide__bullet--active')
        };
        bullet.setAttribute('data-glide-dir', `=${commitCards.length - 1}`)

        return bullet
    }

    createCard = (
        { 
            commit: { committer: { name, email, date }, message }, 
            author: { avatar_url } 
        }) => {

        const commitCard = document.createElement('li');
        commitCard.classList.add('glide__slide');
        commitCard.insertAdjacentHTML('beforeEnd', `
            <p class="glide__date"></p>
                <div class="glide__user-info">
                    <img src="" alt="github commit user" class="glide__photo">
                    <div class="glide__text-info">
                        <p class="glide__user-name"></p>
                        <p class="glide__email"></p>
                    </div>
                </div>
            <p class="glide__commit-text"></p>
        `);
        commitCard.querySelector('.glide__date').textContent = date;
        commitCard.querySelector('.glide__photo').setAttribute('src', avatar_url);
        commitCard.querySelector('.glide__user-name').textContent = name;
        commitCard.querySelector('.glide__email').textContent = email;
        commitCard.querySelector('.glide__commit-text').textContent = 
            message.length > 100 ? message.slice(0, 100) + '...' : message;

        return commitCard
    }
}