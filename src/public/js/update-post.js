const updateFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  if (title && content) {
    const response = await fetch(`/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update blog');
    }
  }
};

document
  .querySelector('.update-post-form')
  .addEventListener('submit', updateFormHandler);

const deleteButtonHandler = async (event) => {
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/blogs/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete blog');
  }
};

document
  .querySelector('.delete-post-btn')
  .addEventListener('click', deleteButtonHandler);