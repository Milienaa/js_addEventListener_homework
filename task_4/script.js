'use strict'

class CommentSection { 
    constructor(comm, user, input, button) {
        this.commentsList = document.querySelector(comm);
        this.usernameInput = document.querySelector(user);
        this.commentInput = document.querySelector(input);
        this.addCommentButton = document.querySelector(button);
    }

    addComment() {
        const username = this.usernameInput.value;
        const commentText = this.commentInput.value;

        if (username && commentText) {
            const currentDate = new Date();
            const dateTimeString = currentDate.toLocaleString();

            const commentItem = document.createElement('li');
            commentItem.innerHTML = `<strong>${username}</strong> (${dateTimeString}): ${commentText}`;

            this.commentsList.appendChild(commentItem);

            this.usernameInput.value = '';
            this.commentInput.value = '';
        }
    }

    init() {
        this.addCommentButton.addEventListener('click', this.addComment.bind(this));
    }
}