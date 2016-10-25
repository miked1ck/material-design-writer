var viewHeight = 300;
var viewWidth = 500;
var button = document.querySelector('.button');
var layout = document.querySelector('.layout');
var textarea = document.querySelector('.editor__textarea');
button.addEventListener('click', function() {
  layout.classList.add('layout--writing');
  button.style.width = viewWidth;
  setTimeout(function() { textarea.focus(); }, 600);
  setTimeout(function() { button.style.height = viewHeight; }, 350);
});
