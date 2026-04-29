const mobileFix = document.createElement('style');
mobileFix.textContent = `
  @media (max-width: 700px) {
    .sneaker-card {
      min-height: 430px !important;
      justify-content: flex-start !important;
      padding: 220px 26px 26px !important;
    }

    .shoe-graphic {
      top: 54px !important;
      width: 210px !important;
      height: 114px !important;
    }

    .shoe-graphic strong {
      left: 36px !important;
      top: 41px !important;
      font-size: 2rem !important;
    }

    .tagline {
      position: relative !important;
      z-index: 2 !important;
      margin: 0 0 12px !important;
      max-width: 100% !important;
      font-size: 1rem !important;
      line-height: 1.45 !important;
    }

    .mini-stats {
      position: relative !important;
      z-index: 2 !important;
    }
  }

  @media (max-width: 390px) {
    .sneaker-card {
      min-height: 450px !important;
      padding-top: 230px !important;
    }

    .shoe-graphic {
      width: 194px !important;
      height: 106px !important;
    }

    .tagline {
      font-size: 0.96rem !important;
    }
  }
`;
document.head.appendChild(mobileFix);

fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('medium-posts');
    if (!posts || !posts.length) return;

    container.innerHTML = posts.slice(0,5).map(post => `
      <article class="post-card">
        <span>${new Date(post.pubDate).toLocaleDateString()}</span>
        <h3><a href="${post.link}" target="_blank">${post.title}</a></h3>
        <p>${post.description.slice(0,120)}...</p>
      </article>
    `).join('');
  })
  .catch(() => {
    console.log('No posts yet');
  });