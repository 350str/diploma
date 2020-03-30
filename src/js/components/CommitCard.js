export class CommitCard {

    createCardBullet() {
        const commitCards = document.querySelectorAll('.glide__slide');
        const bullet = document.createElement('button');
        const bulletsContainer = document.querySelector('.glide__bullets');

        bullet.classList.add('glide__bullet');
        if (commitCards.length === 1) bullet.classList.add('glide__bullet--active');

        bullet.setAttribute('data-glide-dir', `=${commitCards.length - 1}`)
        bulletsContainer.append(bullet);
    }

    createCard = (
        { 
            commit: { committer: { name, email, date }, message }, 
            author: { avatar_url } 
        }) => {

        const commitCard = document.createElement('li');
        commitCard.classList.add('glide__slide');
        commitCard.insertAdjacentHTML('beforeEnd', `
            <p class="glide__date">${date}</p>
                <div class="glide__user-info">
                    <img src="${avatar_url}" alt="github commit user" class="glide__photo">
                    <div class="glide__text-info">
                        <p class="glide__user-name">${name}</p>
                        <p class="glide__email">${email}</p>
                    </div>
                </div>
            <p class="glide__commit-text">${message}</p>
        `);   
        const cardContainer = document.querySelector('.glide__slides');
        cardContainer.append(commitCard);
        this.createCardBullet();
    }
}