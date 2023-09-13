const viewPosts = async () => {
  const response = await fetch('/api/posts', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const posts = await response.json();
    // Render posts using Handlebars
  } else {
    alert('Failed to load posts');
  }
};

viewPosts();