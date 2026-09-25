const bootScreen = document.getElementById('boot-screen');
const bootEnter = document.getElementById('boot-enter');
const skipBoot = document.getElementById('skip-boot');
const progress = document.getElementById('load-progress');
const percent = document.getElementById('load-percent');
const bootMessage = document.getElementById('boot-message');

let loadValue = 0;
const loader = setInterval(() => {
  loadValue = Math.min(100, loadValue + Math.ceil(Math.random() * 12));
  progress.style.width = `${loadValue}%`;
  percent.textContent = `${loadValue}%`;
  if (loadValue === 100) {
    clearInterval(loader);
    bootMessage.textContent = 'WELCOME TO MY WORLD.';
    bootEnter.disabled = false;
    bootEnter.focus();
  }
}, 110);

function enterWorld() {
  bootScreen.classList.add('is-hidden');
  bootScreen.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.body.style.overflow = 'hidden';
bootEnter.addEventListener('click', enterWorld);
skipBoot.addEventListener('click', enterWorld);
document.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && !bootScreen.classList.contains('is-hidden') && !bootEnter.disabled) enterWorld();
});

const pal = document.querySelector('.pixel-pal');
window.addEventListener('mousemove', (event) => {
  document.querySelectorAll('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax);
    const x = (event.clientX / window.innerWidth - .5) * amount;
    const y = (event.clientY / window.innerHeight - .5) * amount;
    el.style.translate = `${x}px ${y}px`;
  });
});
window.addEventListener('mousemove', () => { pal.classList.remove('boop'); }, { once: true });

const header = document.querySelector('.site-header');
const navLinks = [...document.querySelectorAll('#site-nav a')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
  const current = sections.findLast((section) => window.scrollY >= section.offsetTop - 140);
  navLinks.forEach((link) => link.classList.toggle('active', current && link.getAttribute('href') === `#${current.id}`));
}, { passive: true });

const menu = document.getElementById('mobile-menu');
const nav = document.getElementById('site-nav');
menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', isOpen);
  menu.innerHTML = isOpen ? 'CLOSE <span>−</span>' : 'MENU <span>+</span>';
});
navLinks.forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.innerHTML = 'MENU <span>+</span>'; }));

const projects = {
  locly: {
  kicker: 'MISSION 01 / SOCIAL PRODUCT',
  title: 'LOCly',
  lead: 'Your neighborhood, but actually social.',
  type: 'TYPE: SOCIAL / PRODUCT / AI',
  status: 'STATUS: BUILDING',

  image: 'assets/locly.png',
  website: 'https://your-locly-website.com',
github: 'https://github.com/katyanireddy/locly',

  description:
    'A hyperlocal social platform designed to help people discover nearby activities, communities, hidden gems, and like-minded people.',

  tagline: 'small places, big connections ♡',

  stories: [
    [
      'THE PROBLEM',
      'People want to go out and explore, but planning becomes exhausting. Most of us end up repeating the same plans because discovering local activities is difficult.'
    ],

    [
      'THE IDEA',
      'Locly brings nearby activities, communities, events, and hidden gems into one social discovery experience.'
    ],

    [
      'THE BUILD',
      'I worked on the product flow, discovery experience, activity cards, community exploration, and user-focused interface.'
    ],

    [
      'THE EXPERIENCE',
      'Users can explore what is happening nearby, discover shared interests, and connect with people who enjoy similar activities.'
    ],

    [
      'THE CHALLENGE',
      'Creating an experience that feels social without becoming overwhelming, while keeping discovery simple and engaging.'
    ],

    [
      'WHAT I LEARNED',
      'Building a social product is not only about adding features. It is about creating reasons for people to connect and return.'
    ]
  ]
},

signbridge: {
  kicker: 'MISSION 02 / AI PROJECT',
  title: 'SignBridge',
  lead: 'Breaking communication barriers with AI.',
  type: 'TYPE: AI / COMPUTER VISION / ML',
  status: 'STATUS: PROTOTYPE',

  image: 'assets/signbridge.png',

  website: 'YOUR_SIGNBRIDGE_WEBSITE_URL',
  github: 'YOUR_SIGNBRIDGE_GITHUB_URL',

  description:
    'An AI-powered sign language translation project that uses computer vision to recognize hand gestures and convert them into understandable communication.',

  tagline: 'hands speak. technology listens. ♡',

  stories: [
    [
      'THE PROBLEM',
      'Sign language communication can become difficult when the people involved do not understand the same language.'
    ],
    [
      'THE IDEA',
      'SignBridge explores how computer vision and machine learning can recognize hand signs and translate them into accessible communication.'
    ],
    [
      'THE BUILD',
      'I worked with MediaPipe, hand landmark detection, JavaScript, and machine learning to build the gesture recognition experience.'
    ],
    [
      'THE EXPERIENCE',
      'The system captures hand movements, identifies relevant gestures, and translates recognized signs into understandable output.'
    ],
    [
      'THE CHALLENGE',
      'Making gesture recognition reliable across different hand positions, movements, lighting conditions, and backgrounds.'
    ],
    [
      'WHAT I LEARNED',
      'Computer vision becomes much more meaningful when it is connected to a real communication problem instead of being treated as just a technical experiment.'
    ]
  ]
},

  schemify: {
  kicker: 'MISSION 03 / AI PRODUCT',
  title: 'Schemify',
  lead: 'Making scholarships easier to find, understand, and apply for.',
  type: 'TYPE: AI / PRODUCT / EDUCATION',
  status: 'STATUS: SHIPPED',

  image: 'assets/schemify.png',

  website: 'YOUR_SCHEMIFY_WEBSITE_URL',
  github: 'YOUR_SCHEMIFY_GITHUB_URL',

  description:
    'An AI-powered scholarship and scheme matcher designed to help students discover opportunities they are eligible for and understand what they need to apply.',

  tagline: 'less searching, more opportunities ♡',

  stories: [
    [
      'THE PROBLEM',
      'Students often struggle to find relevant scholarships and understand complicated eligibility requirements, deadlines, and documentation.'
    ],
    [
      'THE IDEA',
      'Schemify matches students with scholarships and government schemes based on their profile and eligibility.'
    ],
    [
      'THE BUILD',
      'I worked on the product flow, eligibility matching experience, scheme discovery, explanations, and user-focused interface.'
    ],
    [
      'THE EXPERIENCE',
      'Students can discover relevant schemes, understand why they qualify, and identify what they may need to improve or provide.'
    ],
    [
      'THE CHALLENGE',
      'Turning complex eligibility rules and scheme information into an experience that feels simple and understandable.'
    ],
    [
      'WHAT I LEARNED',
      'Good product design can make complicated information feel approachable, especially when the user is already overwhelmed.'
    ]
  ]
},
monthmate: {
  kicker: 'MISSION 04 / PRODUCTIVITY APP',
  title: 'MonthMate',
  lead: 'Plan it. Do it. Slay it.',
  type: 'TYPE: REACT / PRODUCTIVITY / UX',
  status: 'STATUS: SHIPPED',

  image: 'assets/monthmate.png',

  website: 'YOUR_MONTHMATE_WEBSITE_URL',
  github: 'https://github.com/katyanireddy/monthMate',

  description:
    'A pastel, feminine productivity dashboard built as a fully functional monthly calendar task manager with task tracking, search, filtering, progress tracking, and persistent data.',

  tagline: 'plan it. do it. slay it. ♥',

  stories: [
    [
      'THE PROBLEM',
      'Managing tasks across a month can become messy when planning, daily tasks, upcoming work, and progress are spread across different places.'
    ],
    [
      'THE IDEA',
      'MonthMate brings monthly planning, daily tasks, upcoming tasks, important items, completed work, and quick task creation into one productivity dashboard.'
    ],
    [
      'THE BUILD',
      'Built with React, Vite, Tailwind CSS, and Framer Motion, with a reducer-based TaskContext and LocalStorage persistence for task data.'
    ],
    [
      'THE EXPERIENCE',
      'Users can navigate months, add and edit tasks, change dates, mark tasks complete, search tasks, filter task views, and track monthly progress.'
    ],
    [
      'THE CHALLENGE',
      'Creating a productivity interface that feels polished and feminine while keeping the underlying task management functional, responsive, and easy to navigate.'
    ],
    [
      'WHAT I LEARNED',
      'Building a functional product means thinking beyond the interface — state management, persistence, responsive behavior, reusable components, and user flows all matter.'
    ]
  ]
},
queryhive: {
  kicker: 'MISSION 05 / AI PRODUCT',
  title: 'QueryHive',
  lead: 'Answers from your own knowledge base.',
  type: 'TYPE: AI / RAG / CUSTOMER SUPPORT',
  status: 'STATUS: PROTOTYPE',

  image: 'assets/queryhive.png',

  website: 'YOUR_QUERYHIVE_WEBSITE_URL',
  github: 'YOUR_QUERYHIVE_GITHUB_URL',

  description:
    'An AI-powered customer support platform that uses Retrieval-Augmented Generation to provide answers grounded in a company’s own knowledge base.',

  tagline: 'ask less. find more. ♡',

  stories: [
    [
      'THE PROBLEM',
      'Customer support teams repeatedly answer questions that are already documented, making it difficult to provide fast and consistent responses.'
    ],
    [
      'THE IDEA',
      'QueryHive connects an AI assistant to a knowledge base so users can ask questions and receive context-aware answers.'
    ],
    [
      'THE BUILD',
      'Built with Next.js and Tailwind CSS on the frontend, FastAPI on the backend, Claude for AI responses, and Supabase pgvector for semantic retrieval.'
    ],
    [
      'THE EXPERIENCE',
      'Users can interact with an AI support assistant that retrieves relevant information from the knowledge base before generating a response.'
    ],
    [
      'THE CHALLENGE',
      'Making AI responses useful and grounded in the available information instead of allowing the model to simply guess an answer.'
    ],
    [
      'WHAT I LEARNED',
      'RAG systems are not just about generating good answers — retrieval quality and the underlying knowledge base are equally important.'
    ]
  ]
},
heardthat: {
  kicker: 'MISSION 06 / COMMUNITY PLATFORM',
  title: 'Heard That?',
  lead: 'A place for events, memories, vibes & shared experiences.',
  type: 'TYPE: COMMUNITY / WEB / EVENTS',
  status: 'STATUS: SHIPPED',

  image: 'assets/heard-that.png',

  website: 'https://heard-that-sand.vercel.app/',
  github: 'https://github.com/katyanireddy/heard-that',

  description:
    'A playful retro-maximalist community platform for discovering events, joining communities, sharing memories, and experiencing Bangalore together.',

  tagline: 'go out. meet people. make memories. ♡',

  stories: [
    [
      'THE PROBLEM',
      'Finding interesting events and communities can feel scattered, while the experience of discovering and joining them often lacks personality.'
    ],
    [
      'THE IDEA',
      'Heard That? brings events, communities, memories, vibes, and collaborations into one playful community platform built around real-world experiences.'
    ],
    [
      'THE BUILD',
      'Built with Next.js, Tailwind CSS, Framer Motion, GSAP, and Nodemailer, with authentication, member features, event management, and an organizer dashboard.'
    ],
    [
      'THE EXPERIENCE',
      'Users can browse events, build a vibe profile, join events, collect memory cards, post on the community wall, and explore an interactive Bangalore map.'
    ],
    [
      'THE CHALLENGE',
      'Building a feature-rich platform while keeping the experience playful, expressive, and animation-heavy instead of making it feel like a conventional event website.'
    ],
    [
      'WHAT I LEARNED',
      'A community product is about more than features — the visual language and interactions can shape how people feel about participating and connecting.'
    ]
  ]
},
quantumxdelta: {
  kicker: 'MISSION 07 / EDUCATION PLATFORM',
  title: 'QuantumXDelta',
  lead: 'A modern school + coaching experience, built for students.',
  type: 'TYPE: WEB / AI / EDUCATION',
  status: 'STATUS: SHIPPED',

  image: 'assets/quantumxdelta.png',

  website: 'https://quantumxdelta.vercel.app/',
  github: 'YOUR_QUANTUMXDELTA_GITHUB_URL',

  description:
    'A modern school and coaching website featuring an admission system, live admin dashboard, and an AI chatbot designed to assist students in real time.',

  tagline: 'education, but a little smarter. ♡',

  stories: [
    [
      'THE PROBLEM',
      'Students and parents need a clear way to explore an educational institution, understand admissions, and get answers without navigating a complicated website.'
    ],
    [
      'THE IDEA',
      'QuantumXDelta brings the school experience, admissions flow, administration tools, and AI-powered assistance into one digital platform.'
    ],
    [
      'THE BUILD',
      'I worked on the website experience, admission system, live admin dashboard, and AI chatbot experience for real-time student assistance.'
    ],
    [
      'THE EXPERIENCE',
      'Visitors can explore the institution and admission information while students can interact with an AI assistant for real-time support.'
    ],
    [
      'THE CHALLENGE',
      'Combining public-facing information, admission workflows, administrative functionality, and AI assistance into one cohesive experience.'
    ],
    [
      'WHAT I LEARNED',
      'A good education platform has to work for multiple users at once — students, parents, and administrators — without making the experience feel complicated.'
    ]
  ]
},
heartlift: {
  kicker: 'MISSION 08 / WELLNESS PRODUCT',
  title: 'HeartLift',
  lead: 'Your 3 AM bestie, savage sister & hype coach in one.',
  type: 'TYPE: AI / WELLNESS / COMMUNITY',
  status: 'STATUS: BUILDING',

  image: 'assets/heartlift.png',

  website: 'YOUR_HEARTLIFT_WEBSITE_URL',
  github: 'https://github.com/katyanireddy/HeartLift',

  description:
    'A youth-focused breakup recovery app designed to help people heal, rebuild confidence, and move forward through bite-sized healing plans, mood tracking, AI emotional coaching, playlists, crisis support, and anonymous community.',

  tagline: 'heal. glow up. move forward. ♡',

  stories: [
    [
      'THE PROBLEM',
      'Breakups can make everyday life feel overwhelming, especially when young people are left trying to process emotions on their own.'
    ],
    [
      'THE IDEA',
      'HeartLift brings emotional support, healing activities, mood tracking, AI coaching, playlists, and anonymous community into one experience.'
    ],
    [
      'THE BUILD',
      'The product combines guided healing plans, mood tracking, an AI emotional coach, crisis support resources, curated playlists, and anonymous community features.'
    ],
    [
      'THE EXPERIENCE',
      'Users can follow small daily healing steps, track how they feel, access emotional support, discover playlists, and connect anonymously with others.'
    ],
    [
      'THE CHALLENGE',
      'Creating something that feels supportive and personal without making the healing experience feel clinical, overwhelming, or overly serious.'
    ],
    [
      'WHAT I LEARNED',
      'Products built around emotions need to balance usefulness with empathy — every interaction should feel intentional and human.'
    ]
  ]
},
};

let playerXP = 0;
localStorage.removeItem('katyaniXP');
localStorage.removeItem('katyaniMaxXP');

const rewardedProjects = [];
localStorage.removeItem('katyaniRewardedProjects');


function addXP(amount) {
  playerXP = Math.min(100, playerXP + amount);
  localStorage.setItem('katyaniXP', playerXP);

  const xpBar = document.querySelector('.xp-fill');
  const xpText = document.querySelector('.xp-text');

  if (xpBar) {
    xpBar.style.width = `${Math.min(playerXP, 100)}%`;
  }

  if (xpText) {
    xpText.textContent = `XP ${playerXP} / 100`;
  }

  showToast(`+${amount} XP ✦`);
  if (playerXP === 100 && !localStorage.getItem('katyaniMaxXP')) {
  localStorage.setItem('katyaniMaxXP', 'true');

  showToast('WORLD FULLY EXPLORED ✦ You actually did it.');

  if (typeof mascotSay === 'function') {
    mascotSay('100 XP?! okay... you actually explored everything. respect. 🫡', 3500);
  }
}
}


const modal = document.getElementById('case-modal');
const caseTitle = document.getElementById('case-title');
const caseKicker = document.getElementById('case-kicker');
const caseLead = document.getElementById('case-lead');
const caseDescription = document.getElementById('case-description');
const caseVisual = document.getElementById('case-visual');
const projectWebsite = document.getElementById('project-website');
const projectGithub = document.getElementById('project-github');
const caseType = document.getElementById('case-type');
const caseStatus = document.getElementById('case-status');
const caseStory = document.getElementById('case-story');
function showProject(id) {
  const project = projects[id];

  if (!project) return;

  if (!rewardedProjects.includes(id)) {
    addXP(25);

    rewardedProjects.push(id);

    localStorage.setItem(
      'katyaniRewardedProjects',
      JSON.stringify(rewardedProjects)
    );
  }

  caseTitle.textContent = project.title;
  caseKicker.textContent = project.kicker;
  caseLead.textContent = project.lead;
  caseDescription.textContent = project.description || '';
  if (projectWebsite) {
  projectWebsite.href = project.website || '#';
  projectWebsite.style.display = project.website ? 'inline-flex' : 'none';
}

if (projectGithub) {
  projectGithub.href = project.github || '#';
  projectGithub.style.display = project.github ? 'inline-flex' : 'none';
}
  caseVisual.innerHTML = project.image
  ? `<img src="${project.image}" alt="${project.title} preview">`
  : '';
  caseType.textContent = project.type;
  caseStatus.textContent = project.status;
  caseVisual.innerHTML = project.image
  ? `<img src="${project.image}" alt="${project.title} preview" class="project-preview-image">`
  : '';

  caseStory.innerHTML = `
  <div class="project-left-column">
    <p class="project-description">
      ${project.description || ''}
    </p>

    <p class="project-tagline">
      ${project.tagline || ''}
    </p>
  </div>

  <div class="project-stories">
    ${project.stories.map(([title, body], index) => `
      <article class="project-story">
        <span class="story-number">
          ${String(index + 1).padStart(2, '0')}.
        </span>

        <h3>${title}</h3>
        <p>${body}</p>
      </article>
    `).join('')}
  </div>
`;

  modal.showModal();
}
document.querySelectorAll('[data-project]').forEach((card) => {

  card.addEventListener('click', () => {
    const projectId = card.dataset.project;
    showProject(projectId);
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showProject(card.dataset.project);
    }
  });

});
function closeModal() { modal.close(); }
document.getElementById('modal-close').addEventListener('click', closeModal);
document.querySelector('.close-modal-button').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });

const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 3400); }
document.querySelector('[data-more]').addEventListener('click', (event) => { event.stopPropagation(); showToast('New missions are spawning. Check back soon :)'); });
document.getElementById('ideas-folder').addEventListener('click', () => showToast('404 IDEAS: a tiny library café app, outfit colour-picker, a dramatic plant-watering reminder, and 37 tabs with potential.'));
document.getElementById('tool-surprise').addEventListener('click', () => showToast('Inventory expanded: curiosity, coffee, good playlists, and an unreasonable number of sticky notes.'));
/* ===== HEART XP POPUP ===== */

const heartButton = document.getElementById('heart-button');
const xpPopup = document.getElementById('xp-popup');
const xpPopupClose = document.getElementById('xp-popup-close');

const visitedSections = new Set();

const trackedSections = [
  'profile',
  'missions',
  'toolkit',
  'resume',
  'side-quests',
  'contact'
];

/* Track explored sections */
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      visitedSections.add(entry.target.id);
    }
  });
}, {
  threshold: 0.25
});

trackedSections.forEach((id) => {
  const section = document.getElementById(id);

  if (section) {
    sectionObserver.observe(section);
  }
});

/* Close XP popup */
function closeXPPopup() {
  if (!xpPopup) return;

  xpPopup.classList.remove('open');
  xpPopup.setAttribute('aria-hidden', 'true');
}

/* Close button */
if (xpPopupClose) {
  xpPopupClose.addEventListener('click', closeXPPopup);
}

/* Close by clicking outside */
if (xpPopup) {
  xpPopup.addEventListener('click', (event) => {
    if (event.target === xpPopup) {
      closeXPPopup();
    }
  });
}

/* Close with Escape */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeXPPopup();
  }
});

/* Heart button */
if (heartButton) {
  heartButton.addEventListener('click', () => {
    if (pal) {
      pal.classList.add('boop');
    }

    if (xpPopup) {
      xpPopup.classList.add('open');
      xpPopup.setAttribute('aria-hidden', 'false');
    }

    updateXPPopup();
    updateExplorationReport();
    updatePopupMessage();

    setTimeout(() => {
      if (pal) {
        pal.classList.remove('boop');
      }
    }, 500);
  });
}

function updatePopupMessage() {
  const message = document.getElementById('popup-message');
  if (!message) return;

  if (playerXP === 0) {
    message.textContent = "you literally just got here. 😭";
  } else if (playerXP <= 25) {
    message.textContent = "okayyy, you looked at one thing. impressive.";
  } else if (playerXP <= 50) {
    message.textContent = "you're actually exploring. suspicious.";
  } else if (playerXP <= 75) {
    message.textContent = "okay, you have commitment issues but at least you have curiosity.";
  } else {
    message.textContent = "you actually explored the whole thing. respect. ✦";
  }
}

const popupFound = document.getElementById('popup-found');

function updateExplorationReport() {
  if (!popupFound) return;

  const labels = {
    profile: 'PLAYER PROFILE',
    missions: 'MISSIONS',
    toolkit: 'TOOLKIT',
    resume: 'RESUME',
    'side-quests': 'SIDE QUESTS',
    contact: 'FINAL LEVEL'
  };

  const found = [...visitedSections]
    .map(id => `✓ ${labels[id]}`)
    .filter(Boolean);

  if (savedIdeas.length > 0) {
    found.push('✓ 404 IDEAS');
  }
  const totalAreas = 6;
const exploredAreas = Math.min(visitedSections.size, totalAreas);

popupFound.innerHTML =
  `<strong>${exploredAreas} / ${totalAreas} AREAS EXPLORED</strong><br><br>` +
  (found.length
    ? found.join('<br>')
    : 'nothing yet... you just spawned here 😭');
  }

const popupXP = document.getElementById('popup-xp');
const popupXPBar = document.getElementById('popup-xp-bar');

function updateXPPopup() {
  if (!popupXP) return;

  const targetXP = playerXP;
  const startXP = 0;
  const duration = 500;
  const startTime = performance.now();

  function animateXP(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentXP = Math.round(startXP + (targetXP - startXP) * eased);

    popupXP.textContent = currentXP;

    if (popupXPBar) {
      popupXPBar.style.width = `${Math.min(currentXP, 100)}%`;
    }

    if (progress < 1) {
      requestAnimationFrame(animateXP);
    }
  }

  requestAnimationFrame(animateXP);
}
document.getElementById('yes-button').addEventListener('click', () => showToast('Nice choice. A conversation is loading...')); 
document.querySelector('.maybe-button').addEventListener('click', () => showToast('Correct answer unlocked. Definitely it is.'));

const pickupButton = document.getElementById('pickup-button');
const acquiredPanel = document.getElementById('acquired-panel');
const soundToggle = document.getElementById('sound-toggle');
let resumeSoundOn = false;

function playPickupTone() {
  if (!resumeSoundOn || !window.AudioContext) return;
  const audio = new AudioContext();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(610, audio.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(880, audio.currentTime + .09);
  gain.gain.setValueAtTime(.03, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + .14);
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start();
  oscillator.stop(audio.currentTime + .14);
}

pickupButton.addEventListener('click', () => {
  acquiredPanel.classList.add('is-visible');
  acquiredPanel.setAttribute('aria-hidden', 'false');
  pickupButton.textContent = 'IN INVENTORY ✓';
  pickupButton.disabled = true;
  playPickupTone();
});
soundToggle.addEventListener('click', () => {
  resumeSoundOn = !resumeSoundOn;
  soundToggle.textContent = `UI SOUND: ${resumeSoundOn ? 'ON' : 'OFF'}`;
  soundToggle.setAttribute('aria-pressed', String(resumeSoundOn));
  if (resumeSoundOn) playPickupTone();
});

let konami = [];
const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
document.addEventListener('keydown', (event) => {
  konami.push(event.key); konami = konami.slice(-sequence.length);
  if (sequence.every((key, i) => key === konami[i])) {
    document.body.classList.add('party-mode');
    showToast('CHEAT CODE ACCEPTED: +999 curiosity. The universe sparkles a little more now. ✦');
    setTimeout(() => document.body.classList.remove('party-mode'), 4500);
  }
});
/* =========================================
   KATYANI.EXE — PIXEL MASCOT PERSONALITY
   ========================================= */

const mascotMessages = {
  default: [
    "hi 👀",
    "exploring?",
    "welcome to my world.",
    "don't break anything pls.",
  ],
  project: [
    "you found a project 👀",
    "ooh, this one is interesting.",
    "built, not just imagined.",
  ],
  resume: [
    "ah yes... the serious stuff.",
    "resume acquired 📄",
    "look who's being professional.",
  ],
  contact: [
    "talk to her. she likes interesting people.",
    "new conversation unlocked 💬",
    "don't be shy.",
  ],
  idle: [
    "still here?",
    "respect.",
    "she definitely didn't sleep after 2AM.",
  ]
};

let mascotBubble;
let mascotTimeout;
let idleTimeout;

/* Create mascot speech bubble automatically */
function createMascotBubble() {
  if (!pal || mascotBubble) return;

  mascotBubble = document.createElement('div');
  mascotBubble.className = 'mascot-bubble';
  mascotBubble.setAttribute('aria-live', 'polite');

  document.body.appendChild(mascotBubble);

  const style = document.createElement('style');

  style.textContent = `
    .mascot-bubble {
      position: fixed;
      z-index: 9998;
      max-width: 220px;
      padding: 10px 14px;
      border: 1.5px solid currentColor;
      border-radius: 12px;
      background: #fffdf7;
      color: #111;
      font-family: monospace;
      font-size: 12px;
      line-height: 1.35;
      pointer-events: none;
      opacity: 0;
      transform: translateY(8px) scale(.96);
      transition:
        opacity .2s ease,
        transform .2s ease;
      box-shadow: 4px 4px 0 rgba(0,0,0,.12);
    }

    .mascot-bubble.show {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    .pixel-pal {
      cursor: pointer;
      transition:
        transform .2s ease,
        filter .2s ease;
    }

    .pixel-pal:hover {
      filter: brightness(1.08);
    }

    @media (prefers-reduced-motion: reduce) {
      .mascot-bubble {
        transition: none;
      }
    }
  `;

  document.head.appendChild(style);
}

/* Show a message */
function mascotSay(message, duration = 2600) {
  if (!pal) return;

  createMascotBubble();

  mascotBubble.textContent = message;
  mascotBubble.classList.add('show');

  clearTimeout(mascotTimeout);

  mascotTimeout = setTimeout(() => {
    mascotBubble.classList.remove('show');
  }, duration);
}

/* Pick random message */
function randomMascotMessage(type = 'default') {
  const messages = mascotMessages[type] || mascotMessages.default;
  return messages[Math.floor(Math.random() * messages.length)];
}

/* Position bubble near mascot */
function positionMascotBubble() {
  if (!pal || !mascotBubble) return;

  const rect = pal.getBoundingClientRect();

  mascotBubble.style.left = `${Math.min(
    window.innerWidth - 240,
    Math.max(12, rect.left - 80)
  )}px`;

  mascotBubble.style.top = `${Math.max(
    12,
    rect.top - 55
  )}px`;
}

/* Make mascot subtly follow cursor */
let mascotX = 0;
let mascotY = 0;
let targetX = 0;
let targetY = 0;

window.addEventListener('mousemove', (event) => {
  if (!pal) return;

  targetX = (event.clientX / window.innerWidth - 0.5) * 18;
  targetY = (event.clientY / window.innerHeight - 0.5) * 10;
});

function animateMascot() {
  if (!pal) return;

  mascotX += (targetX - mascotX) * 0.06;
  mascotY += (targetY - mascotY) * 0.06;

  pal.style.translate = `${mascotX}px ${mascotY}px`;

  positionMascotBubble();

  requestAnimationFrame(animateMascot);
}

animateMascot();

/* First interaction */
setTimeout(() => {
  mascotSay(randomMascotMessage('default'));
}, 1800);

/* Hover mascot */
if (pal) {
  pal.addEventListener('mouseenter', () => {
    mascotSay(randomMascotMessage('default'));
  });

  pal.addEventListener('click', () => {
    pal.classList.add('boop');

    mascotSay(
      "♡ You found me. +10 curiosity.",
      3000
    );

    setTimeout(() => {
      pal.classList.remove('boop');
    }, 500);
  });
}

/* Project interaction */
document.querySelectorAll('[data-project]').forEach((project) => {
  project.addEventListener('mouseenter', () => {
    mascotSay(randomMascotMessage('project'));
  });
});

/* Resume interaction */
const resumeSection = document.getElementById('resume');

if (resumeSection) {
  resumeSection.addEventListener('mouseenter', () => {
    mascotSay(randomMascotMessage('resume'));
  });
}

/* Contact interaction */
const contactSection = document.getElementById('contact');

if (contactSection) {
  contactSection.addEventListener('mouseenter', () => {
    mascotSay(randomMascotMessage('contact'));
  });
}

/* Idle detection */
function resetMascotIdle() {
  clearTimeout(idleTimeout);

  idleTimeout = setTimeout(() => {
    mascotSay(
      randomMascotMessage('idle'),
      3500
    );
  }, 18000);
}

['mousemove', 'scroll', 'keydown', 'click', 'touchstart'].forEach((eventName) => {
  window.addEventListener(eventName, resetMascotIdle, {
    passive: true
  });
});

resetMascotIdle();

/* =========================================
   KATYANI.EXE — WORLD MAP NAVIGATION
   ========================================= */

const mapLocations = document.querySelectorAll('.world-location');
const mapPlayer = document.getElementById('map-player');
const mapProgress = document.getElementById('map-progress');
const mapStatus = document.getElementById('map-status');

let discoveredLocations = new Set();
let currentMapLocation = null;

function moveMapPlayer(location) {
  if (!mapPlayer || !location) return;
  currentMapLocation = location;

  const map = document.querySelector('.world-map');

  const locationRect = location.getBoundingClientRect();
  const mapRect = map.getBoundingClientRect();

  const x =
    locationRect.left -
    mapRect.left +
    locationRect.width / 2 -
    25;

  const y =
    locationRect.top -
    mapRect.top +
    locationRect.height / 2 -
    25;

  mapPlayer.classList.add('moving');

  mapPlayer.style.left = `${x}px`;
mapPlayer.style.top = `${y}px`;
mapPlayer.style.transform = 'none';

  setTimeout(() => {
    mapPlayer.classList.remove('moving');
  }, 700);
}

function discoverLocation(location) {
  const target = location.dataset.mapTarget;

  if (!target) return;

  discoveredLocations.add(target);

  if (mapProgress) {
    mapProgress.textContent =
      `${discoveredLocations.size} / 6 DISCOVERED`;
  }

  location.classList.add('discovered');

  if (mapStatus) {
    mapStatus.textContent = `${location.querySelector('.location-name').textContent} UNLOCKED`;
  }
}

mapLocations.forEach((location) => {

  location.addEventListener('click', () => {

    const targetId = location.dataset.mapTarget;
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    discoverLocation(location);
    moveMapPlayer(location);
    location.classList.add('just-unlocked');

setTimeout(() => {
  location.classList.remove('just-unlocked');
}, 700);

    setTimeout(() => {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 650);

    if (typeof mascotSay === 'function') mascotSay(
      `${location.querySelector('.location-name').textContent} unlocked ✦`,
      2200
    );
  });

});

/* Secret location */

const secretLocation = document.getElementById('secret-location');

secretLocation?.addEventListener('click', () => {

  showToast(
    'YOU FOUND THE HIDDEN AREA. +50 curiosity. 🕵️'
  );

  secretLocation.textContent = '✦';
  secretLocation.style.background = 'var(--lime)';
  secretLocation.style.opacity = '1';

});

/* Update map based on current scroll position */

const mapSectionTargets = [
  'profile',
  'missions',
  'toolkit',
  'resume',
  'side-quests',
  'contact'
];

function updateMapFromScroll() {

  

  const worldMapSection = document.getElementById('world-map');

  if (worldMapSection) {
    const rect = worldMapSection.getBoundingClientRect();

    // When World Map is visible, keep Katyani in the center
    if (rect.top <= 180 && rect.bottom >= 180) {

      if (mapPlayer) {
        mapPlayer.style.left = '50%';
        mapPlayer.style.top = '50%';
        mapPlayer.style.transform = 'translate(-50%, -50%)';
      }

      if (mapStatus) {
        mapStatus.textContent = 'YOU ARE HERE / WORLD';
      }

      return;
    }
  }

  // बाकी existing code नीचे रहेगा...

  let closest = null;
  let closestDistance = Infinity;

  mapSectionTargets.forEach((id) => {

    const section = document.getElementById(id);

    if (!section) return;

    const rect = section.getBoundingClientRect();

    // Find the section closest to the top of the screen
    const distance = Math.abs(rect.top - 160);

    if (distance < closestDistance) {
      closestDistance = distance;
      closest = section;
    }

  });

  if (!closest) return;

  const location = document.querySelector(
    `[data-map-target="${closest.id}"]`
  );

  if (!location) return;

  // Update text
  if (mapStatus) {
    mapStatus.textContent =
      `YOU ARE HERE / ${location.querySelector('.location-name').textContent}`;
  }

  // Move Katyani only when destination actually changes
  if (currentMapLocation !== location) {

    currentMapLocation = location;

    moveMapPlayer(location);

    location.classList.add('discovered');
  }
}

window.addEventListener(
  'scroll',
  updateMapFromScroll,
  { passive: true }
);

window.addEventListener(
  'resize',
  () => {
    const worldMapSection = document.getElementById('world-map');

    if (
      worldMapSection &&
      worldMapSection.getBoundingClientRect().top <= 180 &&
      worldMapSection.getBoundingClientRect().bottom >= 180
    ) {
      if (mapPlayer) {
        mapPlayer.style.left = '50%';
        mapPlayer.style.top = '50%';
        mapPlayer.style.transform = 'translate(-50%, -50%)';
      }
      return;
    }

    if (currentMapLocation) {
      moveMapPlayer(currentMapLocation);
    }
  },
  { passive: true }
);

 /* ===== RECRUITER MODE ===== */

const recruiterToggle = document.getElementById('recruiter-toggle');

if (recruiterToggle) {

  recruiterToggle.addEventListener('click', () => {

    const recruiterMode =
      document.body.classList.toggle('recruiter-mode');

    recruiterToggle.classList.toggle(
      'active',
      recruiterMode
    );

    recruiterToggle.innerHTML = recruiterMode
      ? `RECRUITER MODE <span class="toggle-dot"></span>`
      : `RECRUITER MODE <span class="toggle-dot"></span>`;

    showToast(
      recruiterMode
        ? 'RECRUITER MODE: gameplay skipped. Straight to the good stuff.'
        : 'GAME MODE restored. Back to exploring ✦'
    );

  });

}

/* ===== 404 IDEAS WINDOW ===== */

const ideasFolder = document.getElementById('ideas-folder');
const ideasWindow = document.getElementById('ideas-window');
const ideasClose = document.getElementById('ideas-close');

if (ideasFolder && ideasWindow) {

  ideasFolder.addEventListener('click', () => {
    ideasWindow.classList.add('open');
    ideasWindow.setAttribute('aria-hidden', 'false');
  });

}

if (ideasClose && ideasWindow) {

  ideasClose.addEventListener('click', () => {
    ideasWindow.classList.remove('open');
    ideasWindow.setAttribute('aria-hidden', 'true');
  });

}
// Close ideas window with Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && ideasWindow) {
    ideasWindow.classList.remove('open');
    ideasWindow.setAttribute('aria-hidden', 'true');
  }
});

// Close when clicking outside the window
document.addEventListener('click', (e) => {
  if (
    ideasWindow &&
    ideasWindow.classList.contains('open') &&
    !ideasWindow.contains(e.target) &&
    !ideasFolder.contains(e.target)
  ) {
    ideasWindow.classList.remove('open');
    ideasWindow.setAttribute('aria-hidden', 'true');
  }
});
/* ===== IDEA DROP GAME ===== */

const ideaInput = document.getElementById("idea-input");
const dropIdeaButton = document.getElementById("drop-idea-button");
const ideaDrops = document.getElementById("idea-drops");
const ideaCount = document.getElementById("idea-count");
const ideaLimit = document.getElementById("idea-limit");
const ideaMessage = document.getElementById("idea-message");

let savedIdeas = JSON.parse(
  localStorage.getItem("katyaniIdeas") || "[]"
);

savedIdeas.forEach(item => {
  addIdeaNote(item.text);
});

let droppedIdeas = 3 + savedIdeas.length;

if (ideaCount) {
  ideaCount.textContent = String(droppedIdeas).padStart(3, "0");
}

/* character counter */
if (ideaInput) {
  ideaInput.addEventListener("input", () => {
    const length = ideaInput.value.length;
    if (length > 180) {
  ideaInput.value = ideaInput.value.slice(0, 180);
}

    if (ideaLimit) {
      ideaLimit.textContent = `${length} / 180`;
    }
  });
}

function addIdeaNote(idea) {
  if (!ideaDrops) return;

  const note = document.createElement("div");

  note.className = "idea-note";

  const rotations = [
    "rotate(-2deg)",
    "rotate(1.5deg)",
    "rotate(-.5deg)",
    "rotate(2deg)"
  ];

  note.style.transform =
    rotations[Math.floor(Math.random() * rotations.length)];

  note.innerHTML = `
    <span>“${escapeIdea(idea)}”</span>
  `;

  ideaDrops.prepend(note);
}

/* drop idea */
if (dropIdeaButton && ideaInput) {

  dropIdeaButton.addEventListener("click", () => {

    const idea = ideaInput.value.trim();

    if (!idea) {
      if (ideaMessage) {
        ideaMessage.textContent = "⚠ you forgot to leave an idea...";
      }
      if (ideaSpeech) {
  ideaSpeech.innerHTML = "hey... give me something 👀";
  ideaSpeech.style.transform = "rotate(-2deg) translateY(-5px)";

  setTimeout(() => {
    ideaSpeech.style.transform = "rotate(2deg)";
  }, 1000);
}
      ideaInput.focus();
      return;
    }

    /* save idea locally */
savedIdeas.unshift({
  text: idea,
  date: new Date().toISOString()
});

localStorage.setItem(
  "katyaniIdeas",
  JSON.stringify(savedIdeas.slice(0, 20))
);

    addIdeaNote(idea);
    addXP(10);

    /* update count */
    droppedIdeas++;

    if (ideaCount) {
      ideaCount.textContent = String(droppedIdeas).padStart(3, "0");
    }

    /* clear input */
    ideaInput.value = "";

    if (ideaLimit) {
      ideaLimit.textContent = "0 / 180";
    }

    if (ideaMessage) {
      ideaMessage.textContent =
        "✓ idea dropped. someone might build it.";
    }
    if (ideaSpeech) {
  ideaSpeech.innerHTML = "oooh... new idea ♡";
  ideaSpeech.style.transform = "rotate(-2deg) translateY(-5px)";

  setTimeout(() => {
    ideaSpeech.style.transform = "rotate(2deg)";
  }, 1000);
}

    /* little button feedback */
    dropIdeaButton.innerHTML = `
      DROPPED ✓
    `;

    setTimeout(() => {
      dropIdeaButton.innerHTML = `
        DROP IT <span>→</span>
      `;
    }, 1400);

  });

}

/* safely display visitor text */
function escapeIdea(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/* ===== KITTEN REACTION ===== */

const kitten = document.querySelector(".kitten");
const ideaSpeech = document.querySelector(".idea-speech");

if (kitten && ideaSpeech) {

  kitten.addEventListener("click", () => {

    const messages = [
      "hmm... interesting 👀",
      "i would build that.",
      "okay, that's actually good.",
      "put it in the idea pile ♡",
      "the kitten approves.",
      "wait... keep cooking.",
      "that's a side quest.",
      "someone needs to build this."
    ];

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    ideaSpeech.innerHTML = randomMessage;

    ideaSpeech.style.transform =
      "rotate(-2deg) translateY(-5px)";

    setTimeout(() => {
      ideaSpeech.style.transform = "rotate(2deg)";
    }, 1000);
  });
}
/* =================================
   HERO CHARACTER — 3D MOUSE DEPTH
================================= */

const heroPortrait = document.querySelector('.interactive-portrait');
const heroCharacter = document.querySelector('.hero-character-image');

if (heroPortrait && heroCharacter) {

  heroPortrait.addEventListener('mousemove', (event) => {

    const rect = heroPortrait.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
      rect.height -
      0.5;

    heroCharacter.style.setProperty(
      '--character-x',
      `${x * 22}px`
    );

    heroCharacter.style.setProperty(
      '--character-y',
      `${y * 14}px`
    );

    heroCharacter.style.setProperty(
      '--character-rotate-y',
      `${x * 7}deg`
    );

    heroCharacter.style.setProperty(
      '--character-rotate-x',
      `${y * -5}deg`
    );

  });


  heroPortrait.addEventListener('mouseleave', () => {

    heroCharacter.style.setProperty(
      '--character-x',
      '0px'
    );

    heroCharacter.style.setProperty(
      '--character-y',
      '0px'
    );

    heroCharacter.style.setProperty(
      '--character-rotate-y',
      '0deg'
    );

    heroCharacter.style.setProperty(
      '--character-rotate-x',
      '0deg'
    );

  });

}