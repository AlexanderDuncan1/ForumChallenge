const addPost = async (post) => {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to add post');
  }
};

document.querySelector('#add-post').addEventListener('click', () => {
  const post = { /* Get post data from form */ };
  addPost(post);
});