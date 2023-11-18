import { toggleBackground } from './background';

const burgerIcon = document.querySelector('.burger-menu');

const toggleBurgerNavigation = () => {
  const navigation = document.querySelector('.navigation');
  const background = document.querySelector('.background');
  const navigationItems = document.querySelectorAll('.navigation__item');

  if (burgerIcon.classList.contains('_active')) {
    burgerIcon.classList.remove('_active');
    navigation.classList.remove('_active');
    toggleBackground();
  } else {
    burgerIcon.classList.add('_active');
    navigation.classList.add('_active');
    toggleBackground();
  }

  // const closeFunction = () => {
  //   if (background.classList.contains('_active')) {
  //     toggleBackground();
  //   }
  // };

  navigationItems.forEach(item => {
    item.addEventListener('click', toggleBurgerNavigation);
  });

  background.addEventListener('click', toggleBurgerNavigation);

};

burgerIcon.addEventListener('click', toggleBurgerNavigation);


export { toggleBurgerNavigation };