// ── Creative / Dance Videos ────────────────────────────────────────────────
// To add a new video:
//   1. Prepend a new entry to DANCE_VIDEOS (most recent first)
//   2. Fill in youtubeId (the 11-char ID from the YouTube URL)
//   3. Set date as 'YYYY-MM' for sorting, dateDisplay for display
// ─────────────────────────────────────────────────────────────────────────────

const DANCE_VIDEOS = [
  // Entries will be added here. Example structure:
  // {
  //   id: 'fsa-spring-2024',
  //   title: 'Performance Title',
  //   youtubeId: 'dQw4w9WgXcQ',
  //   date: '2024-04',
  //   dateDisplay: 'April 2024',
  //   event: 'FSA Spring Show',
  //   description: `<p>Description here.</p>`,
  // },
];

// ── Render ────────────────────────────────────────────────────────────────────

function renderCreativeSection() {
  const grid = document.getElementById('creativeGrid');
  if (!grid) return;

  if (DANCE_VIDEOS.length === 0) {
    grid.innerHTML = '<p class="creative-empty">Videos coming soon.</p>';
    return;
  }

  // Sort most recent first
  const sorted = [...DANCE_VIDEOS].sort((a, b) => b.date.localeCompare(a.date));

  grid.innerHTML = sorted.map(v => `
    <div class="video-card">
      <div class="yt-facade" data-ytid="${v.youtubeId}" onclick="loadYT(this)" role="button" tabindex="0" aria-label="Play ${v.title}">
        <img src="https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg" alt="${v.title}" loading="lazy"/>
        <div class="yt-play-btn" aria-hidden="true">
          <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.52 7.74A8.5 8.5 0 0 0 60.63 1.8C55.32 0 34 0 34 0S12.68 0 7.37 1.8A8.5 8.5 0 0 0 1.48 7.74C0 13.07 0 24 0 24s0 10.93 1.48 16.26A8.5 8.5 0 0 0 7.37 46.2C12.68 48 34 48 34 48s21.32 0 26.63-1.8a8.5 8.5 0 0 0 5.89-5.94C68 34.93 68 24 68 24s0-10.93-1.48-16.26z" fill="#ff0000"/><path d="M27 34l18-10-18-10v20z" fill="#fff"/></svg>
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
    </div>
  `).join('');
}

function loadYT(facade) {
  const id = facade.dataset.ytid;
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.className = 'yt-iframe';
  iframe.title = 'YouTube video player';
  facade.replaceWith(iframe);
}

document.addEventListener('DOMContentLoaded', renderCreativeSection);
