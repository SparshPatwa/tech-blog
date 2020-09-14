//comment form submission
async function commentFormHandler(event) {
  event.preventDefault();
  //declare 2 variables when the form is submitted: postId from the URL, value of text area element
  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  //needs to have text in the comment
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      //include 2 properties in the body
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);