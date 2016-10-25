// window/doc
var viewHeight = 300;
var viewWidth = 500;

// els
var button = document.querySelector('.button');
var layout = document.querySelector('.layout');
var textarea = document.querySelector('.editor__textarea');

button.addEventListener('click', function() {
  layout.classList.add('layout--writing');
  button.style.width = viewWidth;
  button.style.height = viewHeight;
  setTimeout(function() {
    textarea.focus();
  }, 600);
});
