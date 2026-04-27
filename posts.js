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