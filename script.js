var likes = 0;

// Adds 1 to the number of likes, and updates the text of the button
function likeButton() {
  likes = likes + 1;

  var myButton = document.querySelector("button");
  myButton.innerText = "👍 " + likes;
}
