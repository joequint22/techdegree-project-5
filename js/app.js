baguetteBox.run('.gallery');

    const search = document.getElementById('searchbar');

    search.addEventListener('keyup', e => {

        let currentValue = e.target.value.toLowerCase();
        let imageName = document.querySelectorAll('[data-caption]');


        imageName.forEach(image => {
            const caption = image.getAttribute('data-caption').toLowerCase();
            if(caption.includes(currentValue)){
                image.style.display = 'block';
            }else {
                image.style.display = 'none';
            }
        });
    });