import { addressData, aboutMeText, projects } from './home-page-data.js';
import { environment } from './environment.js';

const addressElm = document.getElementById('address');
const aboutMeElm = document.getElementById('about-me');
const techEdLinksElm = document.getElementById('tech-ed-links');
const otherEdLinksElm = document.getElementById('other-ed-links');
const projectLinksElm = document.getElementById('project-links');
const subscriptionFormElm = document.getElementById('subscription-form');
const successModal = document.getElementById('success');
const alreadySubscribedModal = document.getElementById('already-subscribed');

function addAddress() {
  try {
    addressElm.innerHTML = `
    <a class="address__line email-text" href="mailto:${addressData.email}" rel="noopener noreferrer">
      <i class="fas fa-at"></i>
    </a>
    <a
      class="address__line bg-linkedin"
      href="https://linkedin.com/in/${addressData.linkedin}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-linkedin"></i>
    </a>
    <a
      class="address__line bg-github"
      href="https://github.com/${addressData.github}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-github-square"></i>
    </a>
    <a
      class="address__line bg-resume"
      href="${addressData.resume}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fas fa-file"></i> Resume
    </a>
  `;
  } catch (error) {
    // Fail silently
    console.error(error);
  }
}

function addAboutMe() {
  try {
    aboutMeElm.innerHTML = aboutMeText;
  } catch (error) {
    // Fail silently
    console.error(error);
  }
}

async function fetchLinks(url) {
  try {
    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.error(error);
    // Fail silently
  }
}

function addEdLinks(linkList, elm) {
  elm.innerHTML = `
    ${linkList.reduce((acc, item) => {
      acc += `
        <li>
          <a href="${item.link}" target="_blank">${item.text}</a>
        </li>
      `;

      return acc;
    }, '')}      
  `;
}

async function addTechEdLinks() {
  const techEdUrl = environment.techEdLinkUrl;
  const techEdLinks = await fetchLinks(techEdUrl);
  addEdLinks(techEdLinks, techEdLinksElm);
}

async function addOtherEdLinks() {
  const otherEdUrl = environment.otherEdLinkUrl;
  const otherEdLinks = await fetchLinks(otherEdUrl);
  addEdLinks(otherEdLinks, otherEdLinksElm);
}

async function main() {
  addAddress();
  addAboutMe();
  await addTechEdLinks();
  await addOtherEdLinks();
  addEdLinks(projects, projectLinksElm);
}

(async () => {
  await main();
})();
