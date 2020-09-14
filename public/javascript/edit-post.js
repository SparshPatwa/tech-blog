async function editFormHandler(event) {
  event.preventDefault();


  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const title = document.querySelector('input[name="post-title"]').value;
  const text = document.querySelector('textarea[name="post-text"]').value;


  await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);