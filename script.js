const videos = [...document.querySelectorAll("video[data-demo]")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

for (const video of videos) {
  // Keep every demo silent, including after browser state restoration.
  video.muted = true;
  video.defaultMuted = true;

  const frame = video.closest(".video-frame");
  const toggle = frame?.querySelector(".play-toggle");

  const syncButton = () => {
    if (!toggle) return;
    const paused = video.paused;
    toggle.textContent = paused ? "Play" : "Pause";
    toggle.setAttribute("aria-label", paused ? "播放视频" : "暂停视频");
  };

  const togglePlayback = () => {
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  video.addEventListener("click", togglePlayback);
  video.addEventListener("play", syncButton);
  video.addEventListener("pause", syncButton);
  toggle?.addEventListener("click", togglePlayback);
  syncButton();
}

if ("IntersectionObserver" in window && !reducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.muted = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    },
    { threshold: 0.35, rootMargin: "80px 0px" },
  );

  videos.forEach((video) => observer.observe(video));
} else if (reducedMotion) {
  videos.forEach((video) => video.pause());
}

document.getElementById("year").textContent = new Date().getFullYear();
