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
    const img = document.createElement('img');
    const p = document.createElement('p');
    const button = document.createElement('button');

    slide.classList.add('our-friends__slide');
    slide.id = this.id;

    img.classList.add('our-friends__slide-img');
    img.src = this.src;
    img.alt = this.title;

    p.classList.add('our-friends__slide-text');
    p.textContent = this.title;

    button.classList.add('our-friends__slide-button');
    button.textContent = 'Learn more';


    slide.append(img, p, button);

    return slide;
  }

  createModalPetCards() {
    const modal = document.createElement('div');
    const img = document.createElement('img');
    const content = document.createElement('div');
    const titleWrapper = document.createElement('div');
    const header = document.createElement('h3');
    const subheader = document.createElement('h4');
    const descr = document.createElement('p');
    const ul = document.createElement('ul');
    const closeButton = document.createElement('span');

    modal.classList.add('our-friends__card');
    modal.style.zIndex = '5';
    modal.classList.add('fade-in-animation');

    img.classList.add('our-friends__slide-img');
    img.src = this.src;
    img.alt = this.title;

    content.classList.add('our-friends__card-content');

    titleWrapper.classList.add('our-friends__card-title');

    header.classList.add('our-friends__card-header');
    header.textContent = this.title;

    subheader.classList.add('our-friends__card-subheader');
    subheader.textContent = this.type;

    descr.classList.add('our-friends__card-text');
    descr.textContent = this.description;

    ul.classList.add('our-friends__card-list');

    closeButton.classList.add('our-friends__card-button');

    Object.entries(this.attributes).forEach(([ attribute, value ]) => {
      const li = document.createElement('li');
      const span = document.createElement('span');

      li.classList.add('our-friends__card-item');

      span.textContent = `${attribute}: `;

      li.append(span, value);
      ul.append(li);
    });

    titleWrapper.append(header, subheader);
    content.append(titleWrapper, descr, ul);
    modal.append(img, content, closeButton);
    this.parent.append(modal);
  }

}

export { PetCards };