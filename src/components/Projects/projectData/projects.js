import Ping from '../../../../public/Ping.png';
import alchimiaImage from '../../../../public/alchimiaImage.png';
import secretMenu from '../../../../public/secretMenu.png';

export const projects = [
  {
    projectTitle: 'Secret Menu',
    projectImage: secretMenu,
    projectUrl: 'https://secretmenu.netlify.app/',
    projectGit: 'https://github.com/Secret-Menu',
    projectStack: ['React | ', 'Redux |  ', 'Node.js | ', 'Express | ', 'MongoDB | ', 'Stripe'],
    projectSummary: 'Due to COVID-19, many restaurant\'s in Portland have shifted their business models towards a meal-kit approach. Secret Menu is a complete restaurant ordering and dish voting site, using both Google Maps and Stripe to enhance user experience. I primarily worked on the back end developing models and routes. I also developed the front end functionality for the business-owner side of the site.'
  },
  {    
    projectTitle: 'Social Distance-Ping',
    projectImage: Ping,
    projectGit: 'https://github.com/Alchemy-Covid-19/covid-19-statbot',
    projectStack: ['Node.js | ', 'MongoDB | ', 'Express | ', 'Heroku | ', 'Twilio'],
    projectSummary: 'Users receive location-specific COVID-19 stats sent to their phones on demand or automatically each evening. Personal contributions include developing back-end models, routes, and testing using MongoDB and Express, and implementing Twilio technology.'
  },
  {
    projectTitle: 'Alchimia',
    projectImage: alchimiaImage,
    projectUrl: 'https://hannahriley33.github.io/alchimia/',
    projectGit: 'https://github.com/hannahriley33/alchimia',
    projectStack: ['Javascript | ', 'HTML | ', 'CSS'],
    projectSummary: 'A game based off of the existing tile-board game, Carcasonne. Users can build their mighty kingdom and strive for high scores. I enjoyed developing the initial board tile placement, and implementing scoring.'
  }
];
