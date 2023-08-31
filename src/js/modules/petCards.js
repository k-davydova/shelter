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

  static injectCards() {
    // console.log(this);
  }

  createSliderPetCards() {
    const slide = document.createElement('div');
    slide.classList.add('our-friends__slide');
    slide.setAttribute('id', `${this.id}`);

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
    modal.setAttribute('class', 'our-friends__card');
    modal.style.zIndex = '5';

    const img = document.createElement('img');
    img.setAttribute('class', 'our-friends__slide-img');
    img.setAttribute('src', this.src);
    img.setAttribute('alt', this.title);

    const content = document.createElement('div');
    content.setAttribute('class', 'our-friends__card-content');

    const titleWrapper = document.createElement('div');
    titleWrapper.setAttribute('class', 'our-friends__card-title');

    const header = document.createElement('h3');
    header.setAttribute('class', 'our-friends__card-header');
    header.textContent = this.title;

    const subheader = document.createElement('h4');
    subheader.setAttribute('class', 'our-friends__card-subheader');
    subheader.textContent = this.type;

    const descr = document.createElement('p');
    descr.setAttribute('class', 'our-friends__card-text');
    descr.textContent = this.description;

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'our-friends__card-list');

    for (const [ attribute, value ] of Object.entries(this.attributes)) {
      const li = document.createElement('li');
      li.setAttribute('class', 'our-friends__card-item');

      const span = document.createElement('span');
      span.textContent = `${attribute}: `;

      li.append(span, value);
      ul.append(li);
    }

    const closeButton = document.createElement('span');
    closeButton.setAttribute('class', 'our-friends__card-button');

    titleWrapper.append(header, subheader);
    content.append(titleWrapper, descr, ul);
    modal.append(img, content, closeButton);
    this.parent.append(modal);
  }

}

export { PetCards };