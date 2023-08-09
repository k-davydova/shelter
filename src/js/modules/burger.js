import { toggleBackground } from './background';

const burgerIcon = document.querySelector('.burger-menu');

const toggleBurgerNavigation = () => {
  const navigation = document.querySelector('.navigation');
  const background = document.querySelector('.background');
  const navigationItems = document.querySelectorAll('.navigation__item');

  burgerIcon.classList.toggle('_active');
  navigation.classList.toggle('_active');
  toggleBackground();

  navigationItems.forEach(item => {
    item.addEventListener('click', toggleBurgerNavigation);
  });

  background.addEventListener('click', toggleBurgerNavigation);

};

burgerIcon.addEventListener('click', toggleBurgerNavigation);


export { toggleBurgerNavigation };