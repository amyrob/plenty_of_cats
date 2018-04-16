document.addEventListener('DOMContentLoaded', () => {
  // const image = document.createElement('img');
  // image.src = 'images/jokercat.jpg'
  // cats.appendChild(image);

  const container = document.querySelector('#cats');
  container.innerHTML = '';


  boba = new Cat('Boba', 'Sock Fluff', 'images/boba.jpg');
  barnaby = new Cat('Barnaby', 'Tuna', 'images/barnaby.jpg');
  max = new Cat('Max', 'Whiskas Temptations', 'images/max.jpg');
  hector = new Cat('Hector', 'Whisky and A Cigar', 'images/hector.jpg');

  const arrayOfCats = [boba, barnaby, max, hector];

  const addNewCat = function (cat, catInfoContainer) {
    const container = document.createElement('ul');

    const catName = document.createElement('li');
    catName.textContent = `Name: ${cat.name}`;
    container.appendChild(catName);

    const favFood = document.createElement('li');
    favFood.textContent = `Favourite Food: ${cat.favourite_food}`;
    container.appendChild(favFood);

    const image = document.createElement('img');
    image.src = cat.image;
    container.appendChild(image);

    catInfoContainer.appendChild(container);
  };

  arrayOfCats.forEach(cat => addNewCat(cat, container));

});
