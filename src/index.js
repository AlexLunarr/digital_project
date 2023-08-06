
import './index.html';
import './index.scss';
import './modules/modules';


import headerContent from './partials/header.html';
document.getElementById('header-content').innerHTML = headerContent;

import mainContent from './partials/main.html';
document.getElementById('main-content').innerHTML = mainContent;

import footerContent from './partials/footer.html';
document.getElementById('footer-content').innerHTML = footerContent;

import heroContent from './partials/components/hero.html';
document.getElementById('hero').innerHTML = heroContent;

import aboutContent from './partials/components/about.html';
document.getElementById('about').innerHTML = aboutContent;

import tasksContent from './partials/components/tasks.html';
document.getElementById('tasks').innerHTML = tasksContent;

import projectsContent from './partials/components/projects.html';
document.getElementById('projects').innerHTML = projectsContent;


import feedbackContent from './partials/components/feedback.html';
document.getElementById('feedback').innerHTML = feedbackContent;

import mobileMenu from './partials/components/mobile_menu.html';
document.getElementById('mobile_menu').innerHTML = mobileMenu;