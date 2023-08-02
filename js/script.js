// Utils

const getDataFromJson = async (src) => {
  const res = await fetch(src);
  const data = await res.json();
  return data;
};

// Help

const createHelpContent = (helpItems, parentSelector) => {
  const parentElement = document.querySelector(parentSelector);

  helpItems.forEach((item) => {
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

getDataFromJson('./assets/json/help.json')
  .then((data) => createHelpContent(data, '.help__items'))
  .catch((error) => console.error(error));