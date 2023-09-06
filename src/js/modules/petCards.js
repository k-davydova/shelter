class PetCards {
  constructor(id, title, type, description, src, parent, attributes) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.description = description;
    this.src = src;
    this.attributes = attributes;
    this.parent = parent;
  }

  createSliderPetCards() {
    const slide = document.createElement('div');

    slide.classList.add('our-friends__slide');
    slide.id = this.id;

    const img = document.createElement('img');

    img.classList.add('our-friends__slide-img');
    img.src = this.src;
    img.alt = this.title;

    const p = document.createElement('p');

    p.classList.add('our-friends__slide-text');
    p.textContent = this.title;

    const button = document.createElement('button');

    button.classList.add('our-friends__slide-button');
    button.textContent = 'Learn more';

    slide.append(img, p, button);

    return slide;
  }

  createModalPetCards() {
    const modal = document.createElement('div');
    modal.classList.add('our-friends__card');
    modal.style.zIndex = '5';

    const img = document.createElement('img');
    img.classList.add('our-friends__slide-img');
    img.src = this.src;
    img.alt = this.title;

    const content = document.createElement('div');
    content.classList.add('our-friends__card-content');

    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('our-friends__card-title');

    const header = document.createElement('h3');
    header.classList.add('our-friends__card-header');
    header.textContent = this.title;

    const subheader = document.createElement('h4');
    subheader.classList.add('our-friends__card-subheader');
    subheader.textContent = this.type;

    const descr = document.createElement('p');
    descr.classList.add('our-friends__card-text');
    descr.textContent = this.description;

    const ul = document.createElement('ul');
    ul.classList.add('our-friends__card-list');

    Object.entries(this.attributes).forEach(([attribute, value]) => {
      const li = document.createElement('li');
      li.classList.add('our-friends__card-item');

      const span = document.createElement('span');
      span.textContent = `${attribute}: `;

      li.append(span, value);
      ul.append(li);
    });

    const closeButton = document.createElement('span');
    closeButton.classList.add('our-friends__card-button');

    titleWrapper.append(header, subheader);
    content.append(titleWrapper, descr, ul);
    modal.append(img, content, closeButton);
    this.parent.append(modal);
  }

}

export { PetCards };