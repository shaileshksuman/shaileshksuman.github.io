export const addressData = {
  email: 'shaileshcse@gmail.com',
  github: 'shaileshksuman',
  linkedin: 'shailesh-kumar-suman',
  resume: './resume',
};

export const projects = [
];

export const aboutMeText = `
  <p> 
    I'm ...
  </p>

  <p>
    
  </p>

  <p>
    Feel free to reach out for any help or to discuss about building something cool <span class="emoji">&#128526;</span>
  </p>

  <p style="margin-top: 2rem;">
    <span class="emoji">&#128591;</span> Thank you for visiting.
  </p>

  <p>
    <span class="emoji">&#128336;</span> Stay tuned for awesome contents.
  </p>
`;

function getClockEmojis() {
  return [...Array(23).keys()].map((item) => 128335 + item);
}
