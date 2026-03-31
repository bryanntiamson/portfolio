// PREVIEW B — Top 3 full-size, rest as compact thumbnail grid.

const DANCE_VIDEOS = [
  {
    id: 'culture-night-2025-jumplings',
    title: 'Culture Night 2025: Jumplings',
    platform: 'youtube',
    videoId: 'vzG6x_6m1UU',
    date: '2025-04',
    dateDisplay: 'April 2025',
    event: 'Culture Night 2025',
    description: `<p>Description coming soon.</p>`,
  },
  {
    id: 'culture-night-2024-udfsa',
    title: 'Culture Night 2024: UDFSA',
    platform: 'vimeo',
    videoId: '1178697935',
    date: '2024-04-b',
    dateDisplay: 'April 2024',
    event: 'Culture Night 2024',
    description: `<p>The closing performance of Culture Night 2024, and the one I'm most proud of from my time in UDFSA. As Performance Chair alongside co-chair Valerie West, we founded Core Team — a dedicated group tasked with carrying on the dance traditions we had built. Our fall dancers prepared their own choreography; meanwhile, the four senior Dance Captains spent the year building our largest performance yet.</p>
<p>This was the first time we set out to tell a single cohesive story across all the dance pieces. Follow the "main couple," marked by white traditional garments, through a love story — falling in love, working through conflict, and finding resolution.</p>`,
  },
  {
    id: 'culture-night-2024-lsu',
    title: 'Culture Night 2024: LSU x Core Team',
    platform: 'youtube',
    videoId: 'ViGfR8vvCko',
    date: '2024-04-a',
    dateDisplay: 'April 2024',
    event: 'Culture Night 2024',
    description: `<p>The opener for Culture Night 2024, and our first official collaboration with an outside group. I had long wanted to blend two distinct cultural styles into a single piece, and Lambda Sigma Upsilon — a Latino fraternity — became the perfect partner. Together, we fused the sharp precision of stepping and strolling with the rhythm and footwork of tinikling: two traditions from very different roots, finding common ground on the same stage.</p>`,
  },
  {
    id: 'hallyu-day-2023',
    title: 'UDFSA Core Team: Hallyu Day 2023',
    platform: 'youtube',
    videoId: 'GlhIwYE7R6k',
    date: '2023-11',
    dateDisplay: 'November 2023',
    event: 'Hallyu Day 2023',
    description: `<p>The first performance of the fully assembled Core Team. After months of fall recruitment, we had just three weeks to prepare a complete piece — far more compressed than anything we had attempted before. Where we once prepared one major performance per year, we were now aiming for one every two to three weeks.</p>
<p>The occasion was UD KoDaC's Hallyu Day, a Korean cultural celebration featuring university dance groups from across the region. I asked the organizers if we could perform Filipino cultural dance with K-pop elements woven in — and it became our first deliberate cultural fusion.</p>`,
  },
  {
    id: 'dance-it-out-2023',
    title: 'UDFSA Core Team: Dance It Out',
    platform: 'youtube',
    videoId: 'KyBaEbc4ajI',
    date: '2023-10',
    dateDisplay: 'October 2023',
    event: 'Dance It Out',
    description: `<p>An early showcase of the newly formed Core Team, performed at Kamaal's dance show. We had just opened recruitment, and this performance marks the debut of freshman Hannah Sazon. While many pieces draw from Culture Night 2023, the set features two new songs and a new ambition: I wanted to push the difficulty of partner work, drawing inspiration from country swing to incorporate lifts we hadn't attempted before.</p>`,
  },
  {
    id: 'culture-night-2023',
    title: 'Culture Night 2023: UDFSA',
    platform: 'youtube',
    videoId: '-NJmWcYjnCo',
    date: '2023-04',
    dateDisplay: 'April 2023',
    event: 'Culture Night 2023',
    description: `<p>Description coming soon.</p>`,
  },
  {
    id: 'under-the-parols-2022',
    title: 'UDFSA Choreographers: Under the Parols',
    platform: 'youtube',
    videoId: '2LX6HGHspQs',
    date: '2022-12',
    dateDisplay: 'December 2022',
    event: 'Under the Parols 2022',
    description: `<p>Description coming soon.</p>`,
  },
  {
    id: 'culture-night-2022',
    title: 'Culture Night 2022: UDFSA',
    platform: 'youtube',
    videoId: 'W1J8d87mDEQ',
    date: '2022-04',
    dateDisplay: 'April 2022',
    event: 'Culture Night 2022',
    description: `<p>Description coming soon.</p>`,
  },
  {
    id: 'charter-culture-day-2020',
    title: 'Charter Culture Day 2020',
    platform: 'youtube',
    videoId: 's-CN92v13Fw',
    date: '2020-05',
    dateDisplay: 'Spring 2020',
    event: 'Charter Culture Day',
    description: `<p>My earliest recorded performance, and the one that started everything. My senior year of high school — my third year performing at Culture Day. The first year, I kept time with the tinikling sticks. By the second year, I was learning more advanced choreography from the older students. My senior year, I wanted to push the complexity further — and found something I couldn't let go.</p>
<p>Culture was never something to be locked away and preserved unchanged. Every year at Culture Day, I loved watching classmates step tentatively between the sticks, asking if they could try. That curiosity sparked a question I've been chasing ever since: if the people who invented tinikling were alive today, what would they do? They were creative enough to build a dance inspired by tikling birds avoiding bamboo traps — surely they wouldn't stop there. This performance was the beginning of my attempt to answer that.</p>`,
  },
];

function renderCreativeSection() {
  const grid = document.getElementById('creativeGrid');
  if (!grid) return;

  const sorted = [...DANCE_VIDEOS].sort((a, b) => b.date.localeCompare(a.date));
  const featured = sorted.slice(0, 3);
  const compact = sorted.slice(3);

  const fullCards = featured.map(v => {
    const facadeInner = v.platform === 'vimeo'
      ? `<div class="vimeo-placeholder" data-vimeoid="${v.videoId}"></div>`
      : `<img src="https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg" alt="${v.title}" loading="lazy"/>`;

    return `
    <div class="video-card">
      <div class="yt-facade" data-videoid="${v.videoId}" data-platform="${v.platform}" onclick="loadVideo(this)" role="button" tabindex="0" aria-label="Play ${v.title}">
        ${facadeInner}
        <div class="yt-play-btn" aria-hidden="true">
          <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.52 7.74A8.5 8.5 0 0 0 60.63 1.8C55.32 0 34 0 34 0S12.68 0 7.37 1.8A8.5 8.5 0 0 0 1.48 7.74C0 13.07 0 24 0 24s0 10.93 1.48 16.26A8.5 8.5 0 0 0 7.37 46.2C12.68 48 34 48 34 48s21.32 0 26.63-1.8a8.5 8.5 0 0 0 5.89-5.94C68 34.93 68 24 68 24s0-10.93-1.48-16.26z" fill="${v.platform === 'vimeo' ? '#1ab7ea' : '#ff0000'}"/><path d="M27 34l18-10-18-10v20z" fill="#fff"/></svg>
        </div>
      </div>
      <div class="video-info">
        <div class="video-meta">
          <span class="video-event">${v.event}</span>
          <span class="video-date">${v.dateDisplay}</span>
        </div>
        <h4 class="video-title">${v.title}</h4>
        <div class="video-description">${v.description}</div>
      </div>
    </div>`;
  }).join('');

  const compactCards = compact.length > 0 ? `
    <p class="creative-compact-header">More Performances</p>
    <div class="creative-compact-grid">
      ${compact.map(v => {
        const plain = v.description.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        return `
      <div class="video-card-sm">
        <div class="yt-facade" data-videoid="${v.videoId}" data-platform="${v.platform}" onclick="loadVideo(this)" role="button" tabindex="0" aria-label="Play ${v.title}">
          <img src="https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg" alt="${v.title}" loading="lazy"/>
          <div class="yt-play-btn" aria-hidden="true">
            <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.52 7.74A8.5 8.5 0 0 0 60.63 1.8C55.32 0 34 0 34 0S12.68 0 7.37 1.8A8.5 8.5 0 0 0 1.48 7.74C0 13.07 0 24 0 24s0 10.93 1.48 16.26A8.5 8.5 0 0 0 7.37 46.2C12.68 48 34 48 34 48s21.32 0 26.63-1.8a8.5 8.5 0 0 0 5.89-5.94C68 34.93 68 24 68 24s0-10.93-1.48-16.26z" fill="#ff0000"/><path d="M27 34l18-10-18-10v20z" fill="#fff"/></svg>
          </div>
        </div>
        <div class="video-card-sm-info">
          <div class="video-card-sm-event">${v.event} · ${v.dateDisplay}</div>
          <div class="video-card-sm-title">${v.title}</div>
        </div>
        <div class="video-card-sm-overlay" style="opacity:0" onclick="loadVideoFromOverlay(this)">
          <p>${plain}</p>
          <span class="hover-hint">Click to play →</span>
        </div>
      </div>`;
      }).join('')}
    </div>` : '';

  grid.innerHTML = fullCards + compactCards;

  // JS-driven hover for compact cards (bypasses CSS :hover)
  document.querySelectorAll('.video-card-sm').forEach(card => {
    const overlay = card.querySelector('.video-card-sm-overlay');
    if (!overlay) return;
    card.addEventListener('mouseenter', () => { overlay.style.opacity = '1'; });
    card.addEventListener('mouseleave', () => { overlay.style.opacity = '0'; });
  });

  fetchVimeoThumbnails();
}

function fetchVimeoThumbnails() {
  document.querySelectorAll('.vimeo-placeholder[data-vimeoid]').forEach(placeholder => {
    const id = placeholder.dataset.vimeoid;
    fetch(`https://vimeo.com/api/v2/video/${id}.json`)
      .then(r => r.json())
      .then(data => {
        const img = document.createElement('img');
        img.src = data[0].thumbnail_large;
        img.alt = placeholder.closest('.yt-facade').getAttribute('aria-label') || '';
        img.loading = 'lazy';
        placeholder.replaceWith(img);
      })
      .catch(() => {});
  });
}

function loadVideoFromOverlay(overlay) {
  const facade = overlay.closest('.video-card-sm').querySelector('.yt-facade');
  if (facade) loadVideo(facade);
}

function loadVideo(facade) {
  const id = facade.dataset.videoid;
  const platform = facade.dataset.platform;
  const src = platform === 'vimeo'
    ? `https://player.vimeo.com/video/${id}?autoplay=1`
    : `https://www.youtube.com/embed/${id}?autoplay=1`;

  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  iframe.allowFullscreen = true;
  iframe.className = 'yt-iframe';
  iframe.title = 'Video player';
  facade.replaceWith(iframe);
}

document.addEventListener('DOMContentLoaded', renderCreativeSection);
