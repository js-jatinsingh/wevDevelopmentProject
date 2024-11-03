// Load comments from local storage for a specific post
function loadComments(postId) {
   const comments = JSON.parse(localStorage.getItem(`comments_${postId}`)) || [];
   const commentsList = document.querySelector(`.blog-post[data-post-id="${postId}"] .comments-list`);
   commentsList.innerHTML = ""; // Clear current list

   comments.forEach(comment => {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
      commentDiv.innerHTML = `
         <p class="username">${comment.username}</p>
         <p class="comment-text">${comment.text}</p>
         <p class="comment-date">${comment.date}</p>
      `;
      commentsList.appendChild(commentDiv);
   });
}

// Save comments to local storage for a specific post
function saveComment(postId, username, text) {
   const comments = JSON.parse(localStorage.getItem(`comments_${postId}`)) || [];
   const date = new Date().toLocaleString();
   comments.push({ username, text, date });
   localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
}

// Add event listeners to each comment form
document.querySelectorAll(".comment-form").forEach(form => {
   form.addEventListener("submit", function(e) {
      e.preventDefault();
      const postId = this.closest(".blog-post").getAttribute("data-post-id");
      const username = this.querySelector(".username-input").value;
      const commentText = this.querySelector(".comment-text-input").value;

      // Save comment and reload comments list for the current post
      saveComment(postId, username, commentText);
      loadComments(postId);

      // Clear form
      this.reset();
   });
});

// Initial load of comments for each post
document.querySelectorAll(".blog-post").forEach(post => {
   const postId = post.getAttribute("data-post-id");
   loadComments(postId);
});
