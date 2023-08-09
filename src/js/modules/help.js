const createHelpContent = (helpData) => {
  const parentElement = document.querySelector('.help__items');

  helpData.forEach((item) => {
    const { title, src } = item;

    const element = document.createElement('div');
    element.setAttribute('class', 'help__item');

    const span = document.createElement('span');
    span.setAttribute('class', 'help__icon');
    span.style.backgroundImage = `url(${src})`;

    const p = document.createElement('p');
    p.setAttribute('class', 'help__text');
    p.textContent = title;

    element.append(span, p);
    parentElement.append(element);
  });

};

export { createHelpContent };