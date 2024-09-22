// Заменя стандартной незагруженной картинки
let imgList = document.querySelectorAll('img');
imgList.forEach((el) => el.addEventListener('error', (e) => (e.target.src = 'fallback.jpg')));
