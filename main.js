var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $saveButton = $('.save-idea-button');
var $ideaCard = $('.idea-section');

$saveButton.on('click', makeIdea);
$titleInput.on('keyup', toggleButton);
$bodyInput.on('keyup', toggleButton);


function displayIdea(info) {
  $ideaCard.prepend
  (`<li id=${info.id}>
    <article id=${info.id}>
      <button class='delete-button'></button>
      <h1>${info.title}</h1>
      <p>${info.body}</p>
      <div>
      <button class="button-up quality-button"></button></buuton>
      <button class="button-down quality-button"></button></button>
      <h2>quality: swill</h2>
      </div>
    </article>
  </li>`);
  clearInputs();
}

function IdeaCreator(title, body) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
}

function makeIdea() {
  var ideaTitle = $titleInput.val();
  var ideaBody = $bodyInput.val();
  var newIdea = new IdeaCreator(ideaTitle, ideaBody);
  displayIdea(newIdea);
  toLocalStorage(newIdea);
}

function toLocalStorage(object) {
  var objectToStore = object;
  var stringifiedObject = JSON.stringify(objectToStore);
  localStorage.setItem(object.id, stringifiedObject);
  // setIdeaFromStorage();
  // console.log(objectToStore);
}

// $(document).ready(setIdeaFromStorage);

// $(window).on('storage', function(e) {
//   console.log('Heard Event', e);
//   setIdeaFromStorage();
// });

// function setIdeaFromStorage(object) {
//   var objectToDisplay = object.id;
//   var cardId = localStorage.getItem(object.id);
//   var parsedObject = JSON.parse(objectToDisplay);
//   console.log('Got ID', object.id);
// }

function clearInputs() {
  $titleInput.val('');
  $bodyInput.val('');
}

function toggleButton() {
  if ($titleInput.val() === '' || $bodyInput.val() === '') {
    $saveButton.prop('disabled', true);
  } else {
    $saveButton.prop('disabled', false);
  }
}

$('ul').on('click', 'li article .delete-button', deleteIdea);
$('ul').on('click', 'li article .button-up', upQuality);

function deleteIdea() {
 $(this).parent().remove();
}

function upQuality() {
 var $ideaQuality = $('h2');
 var ideaQuality = $ideaQuality.val();
 
 console.log(this.closest('article'));
}

