import Glide from '@glidejs/glide';

export function slider() {
    const glide = new Glide('#intro', {
        type: 'carousel',
        perView: 4,
        focusAt: 'center',
        breakpoints: {
          1200: {
            perView: 3
          },
          1100: {
            perView: 2
          },
          660: {
            perView: 1
          }
        }
      })
    glide.mount();
}