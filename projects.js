// ── Project Data ──────────────────────────────────────────────────────────────
// Each project maps to a PDF in assets/All Projects/.
// Add photos by creating assets/<slug>/ and listing filenames in the photos array.
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = {
  'swept-wing-cfd': {
    title: 'CFD Flow Visualization: Swept Wing',
    tag: 'Aerospace',
    tools: 'SimScale · CFD · OnShape',
    pdf: 'assets/All Projects/Tiamson - MEEG432 Project 1_ CFD - flow viz (1).pdf',
    photos: [],
    summary: `
      <p>Analyzed the aerodynamics of a swept wing using 3D computational fluid dynamics in SimScale. The wing transitions from a NACA 63515 root foil to a NACA 0016 tip foil, with a 20° sweep angle and variable chord length (1.5 m root, 0.5 m tip).</p>
      <p>The project assessed flow state via Reynolds and Mach numbers, ran turbulent flow simulations, and extracted pressure distributions, velocity fields, and lift/drag force data across the wing surface.</p>
    `,
  },

  'xfoil-airfoil': {
    title: 'XFoil 2D Airfoil Performance Analysis',
    tag: 'Aerospace',
    tools: 'XFoil · MATLAB',
    pdf: 'assets/All Projects/Aerodynamics Project 2 (1).pdf',
    photos: [],
    summary: `
      <p>Used XFoil to perform 2D aerodynamic analysis on NACA airfoil profiles at varying angles of attack. Evaluated pressure coefficient distributions and computed coefficients of lift (C<sub>l</sub>), drag (C<sub>d</sub>), and pitching moment (C<sub>m</sub>) for multiple airfoil geometries.</p>
      <p>The study revealed how angle of attack affects boundary layer behavior, leading-edge pressure peaks, and the approach to flow separation, with tabulated results comparing symmetric and cambered profiles.</p>
    `,
  },

  'glider-design': {
    title: 'Glider Design & Performance',
    tag: 'Aerospace',
    tools: 'OpenVSP · XFoil · MATLAB',
    pdf: 'assets/All Projects/Aerodynamics Project 3 Report (1).pdf',
    photos: [],
    summary: `
      <p>Designed and analyzed a high-efficiency glider in OpenVSP, optimizing for maximum range and endurance. Design choices included maximizing aspect ratio (7 m span) to reduce induced drag, tapered wing sections with varying camber and twist, and careful aerodynamic center balancing.</p>
      <p>Airfoil selection used XFoil performance curves (NACA 6210 root, NACA 0010 tip) across 0–15° angle of attack, comparing lift, drag, moment, and L/D characteristics to validate the full 3D design.</p>
    `,
  },

  'pinewood-drag': {
    title: 'Pinewood Derby CFD Drag Minimization',
    tag: 'Aerospace',
    tools: 'SimScale · CFD · MATLAB',
    pdf: 'assets/All Projects/The Pinewood Drag Project.pdf',
    photos: [],
    summary: `
      <p>Applied computational fluid dynamics to design a Pinewood Derby car body that minimizes aerodynamic drag and maximizes speed. Used conservation of energy principles to model the hill and flat sections of the track, then ran 2D and 3D CFD simulations to evaluate competing body geometries.</p>
      <p>The project connected theoretical kinematics models with practical CFD results to recommend an optimal car shape, demonstrating how aerodynamic shaping translates to measurable performance gains.</p>
    `,
  },

  'rover-vibration': {
    title: 'Vibration Control: NASA Curiosity Rover',
    tag: 'Controls',
    tools: 'MATLAB · Control Systems · Laplace Analysis',
    pdf: 'assets/All Projects/Controls Final Project Report.pdf',
    photos: [],
    summary: `
      <p>Designed an active vibration control system for the NASA Curiosity rover's "sky crane" landing mechanism. Modeled the rover–tether system as a coupled mass-spring-damper and designed a linear actuator-based vibration absorber to suppress oscillations during descent.</p>
      <p>The system was formulated using the impedance method in the Laplace domain with the objective of minimizing camera shake and ensuring stable imaging during the final touchdown phase on Mars.</p>
    `,
  },

  'pegasus-rocket': {
    title: 'Trajectory Prediction: Pegasus XL Rocket',
    tag: 'Aerospace',
    tools: 'MATLAB · Rocket Propulsion · Numerical Methods',
    pdf: 'assets/All Projects/Reuploads/Rocket Design Project Report (1).pdf',
    photos: [],
    summary: `
      <p>Developed a trajectory simulation for the Pegasus XL sounding rocket configured for vertical payload deployment. The model incorporated variable gravity, atmospheric density variation with altitude, and multi-stage thrust curves to predict altitude, velocity, and burn times across all flight phases.</p>
      <p>The team analyzed staging event kinematics from liftoff through payload separation, validating the trajectory against known Pegasus XL performance parameters.</p>
    `,
  },

  'composite-stitching': {
    title: 'Fiber Reinforced Composite Stitching Analysis',
    tag: 'Materials',
    tools: 'Experimental Testing · Composites · MATLAB',
    pdf: 'assets/All Projects/Final Project Report.pdf',
    photos: [],
    summary: `
      <p>Investigated the effects of stitching on the mechanical properties and fatigue life of fiber-reinforced composite laminates. Tested multiple layup configurations — fiber-dominated [±45/0/90]s and matrix-dominated [±30²/−30²]s — with and without lock-stitch reinforcement using an industrial sewing machine.</p>
      <p>Results quantified the trade-off between improved delamination resistance (via stitch bridging mechanisms across cracked interfaces) and deterioration of in-plane tensile and compressive strength, informing composite structural design guidelines.</p>
    `,
  },

  'pill-bottle-station': {
    title: 'Automated Pill Bottle Fill Station',
    tag: 'Manufacturing',
    tools: 'SolidWorks · CAD · Prototyping · Arduino',
    pdf: 'assets/All Projects/Final Design Review Report.docx.pdf',
    photos: [],
    summary: `
      <p>Junior design project sponsored by Omega Design and Norwalt Design to develop an automated pill bottle fill station for their packaging product line. The system design features a rotary table conveyor, an automated pill dispensing station, and a passive capping and tightening mechanism with an output ramp.</p>
      <p>The team completed full benchmarking, concept generation and selection, and functional moving prototypes for each subsystem. The final review presented a near-complete integrated system pending sensor integration and procedural code.</p>
    `,
  },

  'instron-sneaker': {
    title: 'Under Armour Instron Sneaker Fixture',
    tag: 'Materials',
    tools: 'Autodesk Inventor · SolidWorks · Instron · CAD',
    pdf: 'assets/All Projects/Team 125_Report_Version 4.docx.pdf',
    photos: [],
    summary: `
      <p>Senior design capstone project sponsored by Under Armour. Designed and fabricated a custom test fixture for the Instron tensile/compression machine to evaluate the mechanical performance of Under Armour footwear under standardized loading conditions.</p>
      <p>The team conducted benchmarking, evaluated multiple fixture concepts, and built a working prototype enabling repeatable shoe compression testing to support Under Armour's product development and quality assurance workflows.</p>
    `,
  },

  'instron-gait': {
    title: 'Instron Gait Compatibility Fixture (Honors)',
    tag: 'Biomechanics',
    tools: 'SolidWorks · Instron E10000 · CAD',
    pdf: 'assets/All Projects/Honors Project Writeup.pdf',
    photos: [],
    summary: `
      <p>Honors extension of the Under Armour senior design project. Designed a proof-of-concept SolidWorks model for a gait simulation fixture that uses the Instron E10000 ElectroPuls to replicate a human walking gait for dynamic footwear stress-testing.</p>
      <p>The transmission system features a gear ring mounted on the actuator, a hex axle drivetrain, custom pillow blocks with linear slides for vertical degree of freedom, and a multi-link mechanism converting actuator rotation into realistic heel-to-toe gait motion.</p>
    `,
  },

  'toy-manufacturing': {
    title: 'Toy Manufacturing Plan: Tower Topper',
    tag: 'Manufacturing',
    tools: '3D Printing · Injection Molding · CAD · Process Engineering',
    pdf: 'assets/All Projects/Summative 1 Final.pdf',
    photos: [],
    summary: `
      <p>Developed an 18-month manufacturing plan for the Melissa & Doug Tower Topper toy part, scaling from early-stage 3D printing to full injection molding production. Six Stratasys F170 printers were used to meet ~1,800 units/month demand while accumulating capital for the tooling investment.</p>
      <p>Included cost modeling, inventory tracking, and manufacturing economics analysis. Injection molding transition was planned for end of Q3 2021 with unit costs ranging from $0.974 to $1.053 depending on batch size (2,500–10,000 units).</p>
    `,
  },

  'eggg101-design': {
    title: 'EGGG101 Engineering Design Project',
    tag: 'Engineering Design',
    tools: 'CAD · Prototyping · Design Process',
    pdf: 'assets/All Projects/Project 1 Final Report.pdf',
    photos: [],
    summary: `
      <p>First-year engineering design project completed as part of EGGG101. Applied the full engineering design process — from background research and problem scoping through wants and constraints definition, design metrics, concept generation, and final prototype selection.</p>
      <p>The team (Group 135) produced a complete design report documenting all phases of the design cycle, from preliminary concept sketches through final design overview and early prototype development.</p>
    `,
  },

  'lifecycle-pans': {
    title: 'Life Cycle Inventory: Cast Iron vs. Non-Stick Pans',
    tag: 'Sustainability',
    tools: 'Life Cycle Analysis · Data Analysis',
    pdf: 'assets/All Projects/Project 2 (1).pdf',
    photos: [],
    summary: `
      <p>Conducted a life cycle inventory (LCI) comparing cast iron and non-stick pans across manufacturing and use phases, measuring waste per year for an average American household. The analysis focused on energy consumption, water usage, and aluminum waste streams.</p>
      <p>Key finding: cast iron pans consume significantly more water during manufacturing, while non-stick pans use more energy. The study concluded neither product is decisively more environmentally friendly, providing consumer guidance for more informed purchasing decisions.</p>
    `,
  },

  'dark-matter': {
    title: 'Proof of Dark Matter via Gravitational Lensing',
    tag: 'Astrophysics',
    tools: 'General Relativity · Physics · Research',
    pdf: 'assets/All Projects/PHYS333_ASTRO TERM PAPER_TIAMSON.pdf',
    photos: [],
    summary: `
      <p>Astrophysics term paper examining observational evidence for dark matter through gravitational lensing. Grounded in Einstein's general relativity, the paper explores how strong lensing, weak lensing, and microlensing phenomena reveal mass distributions inconsistent with visible matter alone.</p>
      <p>Connected the theoretical basis of lensing (Einstein Rings, Einstein Crosses) to galaxy rotation curve anomalies as independent lines of evidence for dark matter, synthesizing multiple observational approaches into a coherent argument.</p>
    `,
  },

  'radioactive-decay': {
    title: 'Radioactive Decay: Numerical & Analytical Methods',
    tag: 'Computational Physics',
    tools: "Python · Euler's Method · ODE Solving",
    pdf: 'assets/All Projects/project01_Tiamson.pdf',
    photos: [],
    summary: `
      <p>Solved coupled dual radioactive decay both analytically and numerically using Euler's first-order method. Investigated how the relative time constants of two coupled nuclei (type A decaying into type B, which also decays) determine the shape of the coupled decay curves.</p>
      <p>The project explored the stability criteria and limitations of Euler's method on this system, directly comparing numerical accuracy against closed-form analytical solutions and quantifying truncation error as a function of step size.</p>
    `,
  },

  'chaotic-scattering': {
    title: 'Deterministic Chaos in 1D Classical Scattering',
    tag: 'Computational Physics',
    tools: 'Python · Poincaré Analysis · Finite Difference',
    pdf: 'assets/All Projects/project02_Tiamson.pdf',
    photos: [],
    summary: `
      <p>Investigated chaotic behavior in a one-dimensional two-ball scattering system with perfectly elastic collisions, simulated using the finite difference midpoint method. Poincaré sections revealed transitions from space-filling chaotic phase-space trajectories to attractors in the equal-mass case.</p>
      <p>Autocorrelation functions quantified the predictability of the system over time, demonstrating that even this minimally complex model exhibits rich nonlinear dynamics and extreme sensitivity to initial conditions.</p>
    `,
  },

  'ising-model': {
    title: 'Metropolis Algorithm on the Ising Model',
    tag: 'Computational Physics',
    tools: 'Python · Monte Carlo · Statistical Mechanics',
    pdf: 'assets/All Projects/project03_Tiamson.pdf',
    photos: [],
    summary: `
      <p>Simulated ferromagnetism using the Metropolis Monte Carlo algorithm applied to the Ising Model on lattices of varying sizes. Studied how temperature drives phase transitions by tracking magnetization per spin, specific heat, and magnetic susceptibility across a range of temperatures.</p>
      <p>Results characterized the difference between first- and second-order phase transitions and identified the critical temperature at which ferromagnetic ordering breaks down, connecting statistical mechanics theory to quantitative simulation outcomes.</p>
    `,
  },

  'fput-paradox': {
    title: 'FPUT Paradox: Vibrational Modes & Ergodicity',
    tag: 'Computational Physics',
    tools: 'Python · Verlet Method · Classical Mechanics',
    pdf: 'assets/All Projects/project04_tiamson.pdf',
    photos: [],
    summary: `
      <p>Investigated the Fermi-Pasta-Ulam-Tsingou (FPUT) paradox using a 1D chain of masses connected by nonlinear springs, simulated via the Verlet method. The paradox challenges the assumption that nonlinearity alone guarantees energy equipartition across vibrational modes.</p>
      <p>Demonstrated super-recurrence in the system and mapped the critical initial energy per mass required for ergodic behavior as a function of both the nonlinear spring constant and chain length, bridging classical and statistical mechanics through simulation.</p>
    `,
  },

  'quantum-tunneling': {
    title: 'Quantum Tunneling of Wave Packets in 1D',
    tag: 'Computational Physics',
    tools: 'Python · Schrödinger Equation · Numerical Methods',
    pdf: 'assets/All Projects/Project_5 (4).pdf',
    photos: [],
    summary: `
      <p>Solved the time-dependent Schrödinger equation to simulate quantum tunneling of a Gaussian wave packet through a potential barrier in a one-dimensional system. Investigated conditions under which a particle with kinetic energy below the barrier height can still transmit through.</p>
      <p>Quantified transmission probabilities as a function of barrier width, height, and wave packet energy, and explored applications in semiconductor physics and quantum computing where tunneling is a key design consideration.</p>
    `,
  },

  'cross-cultural-balance': {
    title: 'Cross-Cultural Examination of Balance',
    tag: 'Humanities',
    tools: 'Research · Philosophy · Writing',
    pdf: 'assets/All Projects/Tiamson, Bryan EW Midterm Paper.pdf',
    photos: [],
    summary: `
      <p>Interdisciplinary paper examining the universal concept of balancing order and chaos across Eastern and Western cultural traditions. Drawing on Buddhism, Daoism, Confucianism, and Ancient Greek philosophy, the paper argues that this archetype of balance is rooted in human neurophysiology.</p>
      <p>Connects ancient philosophical traditions to modern psychology and neuroscience, making the case that cultivating a balance between order and chaos is fundamental to mental growth and the expansion of cognitive capacity.</p>
    `,
  },
};

// ── Thumbnail Map ─────────────────────────────────────────────────────────────
// Auto-generated from first page of each PDF via pdftoppm.

const THUMBNAILS = {
  'swept-wing-cfd':       'assets/thumbnails/swept-wing-cfd-1.png',
  'xfoil-airfoil':        'assets/thumbnails/xfoil-airfoil-1.png',
  'glider-design':        'assets/thumbnails/glider-design-1.png',
  'pinewood-drag':        'assets/thumbnails/pinewood-drag-1.png',
  'rover-vibration':      'assets/thumbnails/rover-vibration-1.png',
  'pegasus-rocket':       'assets/thumbnails/pegasus-rocket-01.png',
  'composite-stitching':  'assets/thumbnails/composite-stitching-1.png',
  'pill-bottle-station':  'assets/thumbnails/pill-bottle-station-01.png',
  'instron-sneaker':      'assets/thumbnails/instron-sneaker-01.png',
  'instron-gait':         'assets/thumbnails/instron-gait-1.png',
  'toy-manufacturing':    'assets/thumbnails/toy-manufacturing-01.png',
  'eggg101-design':       'assets/thumbnails/eggg101-design-01.png',
  'lifecycle-pans':       'assets/thumbnails/lifecycle-pans-1.png',
  'dark-matter':          'assets/thumbnails/dark-matter-01.png',
  'radioactive-decay':    'assets/thumbnails/radioactive-decay-1.png',
  'chaotic-scattering':   'assets/thumbnails/chaotic-scattering-1.png',
  'ising-model':          'assets/thumbnails/ising-model-1.png',
  'fput-paradox':         'assets/thumbnails/fput-paradox-1.png',
  'quantum-tunneling':    'assets/thumbnails/quantum-tunneling-1.png',
  'cross-cultural-balance': 'assets/thumbnails/cross-cultural-balance-01.png',
};

// ── Category Order ────────────────────────────────────────────────────────────

const CATEGORY_ORDER = [
  'Aerospace', 'Controls', 'Biomechanics', 'Manufacturing', 'Materials',
  'Sustainability', 'Computational Physics', 'Astrophysics',
  'Engineering Design', 'Humanities',
];

// ── Render Project Cards (grouped by category) ────────────────────────────────

function renderProjectCards() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  // Group by tag
  const groups = {};
  Object.entries(PROJECTS).forEach(([id, p]) => {
    if (!groups[p.tag]) groups[p.tag] = [];
    groups[p.tag].push({ id, ...p });
  });

  const cats = CATEGORY_ORDER.filter(c => groups[c])
    .concat(Object.keys(groups).filter(c => !CATEGORY_ORDER.includes(c)));

  grid.innerHTML = cats.map(cat => {
    const projects = groups[cat];
    const cardsHtml = projects.map(p => {
      const thumb = THUMBNAILS[p.id];
      const thumbHtml = thumb
        ? `<img class="project-thumb" src="${thumb}" alt="${p.title}" loading="lazy"/>`
        : `<div class="project-thumb project-thumb--blank"></div>`;

      // Strip HTML tags for overlay summary text
      const plainSummary = (p.summary || '')
        .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

      return `
        <div class="project-card" onclick="openProject('${p.id}')">
          ${thumbHtml}
          <div class="card-body">
            <h4>${p.title}</h4>
            <div class="project-tools">${p.tools}</div>
            <p class="card-summary">${plainSummary.slice(0, 110)}…</p>
          </div>
          <div class="hover-summary">
            <p>${plainSummary}</p>
            <span class="hover-hint">View writeup &amp; report →</span>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="category-band">
        <div class="category-band-header">
          <span class="category-label">${cat}</span>
          <span class="category-count">${projects.length} project${projects.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="category-row">${cardsHtml}</div>
      </div>
    `;
  }).join('');
}

// ── Modal Logic ───────────────────────────────────────────────────────────────

function openProject(id) {
  const p = PROJECTS[id];
  if (!p) return;

  document.getElementById('modal-tag').textContent = p.tag;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-tools').textContent = p.tools;

  // Overview tab: summary + optional photo gallery
  const writeupEl = document.getElementById('modal-writeup');
  writeupEl.innerHTML = (p.summary || '').trim() || '<p style="color:var(--gray-400)">No summary available.</p>';

  const gallery = document.getElementById('modal-gallery');
  if (p.photos && p.photos.length > 0) {
    gallery.innerHTML = p.photos.map(photo => `
      <div class="gallery-item" onclick="openLightbox('assets/${id}/${photo}')">
        <img src="assets/${id}/${photo}" alt="${p.title}" loading="lazy"/>
      </div>
    `).join('');
    gallery.style.display = 'grid';
  } else {
    gallery.innerHTML = '';
    gallery.style.display = 'none';
  }

  // PDF tab: store src, load lazily when tab is switched
  const iframe = document.getElementById('modal-pdf-iframe');
  iframe.src = '';
  iframe.dataset.src = p.pdf || '';
  document.getElementById('modal-pdf-link').href = p.pdf || '#';

  // Show/hide PDF tab button based on whether a PDF exists
  const pdfTab = document.querySelector('.modal-tab[data-tab="report"]');
  if (pdfTab) pdfTab.style.display = p.pdf ? '' : 'none';

  // Reset to overview tab
  switchTab('overview');

  document.getElementById('project-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchTab(tabName) {
  document.querySelectorAll('.modal-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });
  document.querySelectorAll('.modal-tab-content').forEach(c => {
    c.style.display = c.id === `tab-${tabName}` ? 'block' : 'none';
  });

  // Load PDF lazily on first open
  if (tabName === 'report') {
    const iframe = document.getElementById('modal-pdf-iframe');
    if (iframe.dataset.src && iframe.src !== iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
    }
  }
}

function closeProjectModal(e) {
  if (e && e.target.id !== 'project-modal') return;
  _closeModal();
}

function _closeModal() {
  document.getElementById('project-modal').classList.remove('open');
  document.body.style.overflow = '';
  // Clear iframe to stop PDF loading/rendering
  const iframe = document.getElementById('modal-pdf-iframe');
  if (iframe) iframe.src = '';
  closeLightbox();
}

// Lightbox for full-size images
function openLightbox(src) {
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.onclick = closeLightbox;
    lb.innerHTML = '<img id="lightbox-img"/><button onclick="closeLightbox()">✕</button>';
    document.body.appendChild(lb);
  }
  document.getElementById('lightbox-img').src = src;
  lb.classList.add('open');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') _closeModal();
});

document.addEventListener('DOMContentLoaded', renderProjectCards);
