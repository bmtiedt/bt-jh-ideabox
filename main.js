var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $saveButton = $('.save-idea-button');
var $ideaCard = $('.idea-section');

$saveButton.on('click', makeIdea);
$titleInput.on('keyup', toggleButton);
$bodyInput.on('keyup', toggleButton);


function displayIdea(info) {
  $ideaCard.prepend
  (`<li>
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
  setIdeaFromStorage();
  // console.log(objectToStore);
}

$(document).ready(setIdeaFromStorage);

$(window).on('storage', function(e) {
  console.log('Heard Event', e);
  setIdeaFromStorage();
});

function setIdeaFromStorage(object) {
  var objectToDisplay = object.id;
  var parsedObject = JSON.parse(objectToDisplay);
  var cardId = localStorage.getItem(object.id);
  console.log('Got ID', object.id);

}

//==================================
// function retrieveItem(object) {
//   var objectToParse = object;
//   var parsedObject = JSON.parse(objectToParse);
//   localStorage.getItem(object.id, parsedObject);
// }
//====================================


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

function deleteIdea() {
 $(this).parent().remove();
}



