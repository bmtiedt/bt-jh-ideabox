ideaBox();

function ideaBox() {
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $saveButton = $('#save-idea-button');
var $ideaCard = $('.idea-section');
var string;
var object;

$saveButton.on('click', makeIdea);
$titleInput.on('keyup', toggleButton);
$bodyInput.on('keyup', toggleButton);


function displayIdea(info) {
  $ideaCard.prepend
  (`<li>
    <article id=${info.id}>
      <button class='delete-button'></button>
      <h1 contenteditable>${info.title}</h1>
      <p contenteditable>${info.body}</p>
      <div>
      <button class='button-up quality-button'></button></buuton>
      <button class='button-down quality-button'></button></button>
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
  var newIdea = new IdeaCreator(ideaTitle, ideaBody, null);
  displayIdea(newIdea);
  toLocalStorage(newIdea);
  $saveButton.prop("disabled", true);
  $saveButton.attr("class", "save-idea-button-disabled input-fields");
  clearInputs();
}

function toLocalStorage(object) {
  var stringifiedObject = JSON.stringify(object);
  localStorage.setItem(object.id, stringifiedObject);
}

function getIdeaFromStorage(object) {
  var objectToDisplay = object.id;
  var string = localStorage.getItem(object.id, objectToDisplay);
  object = JSON.parse(string);
}

function clearInputs() {
  $titleInput.val('');
  $bodyInput.val('');
  $saveButton.prop('disabled', true);
}

function toggleButton() {
  if ($titleInput.val() === '' || $bodyInput.val() === '') {
    $saveButton.prop('disabled', true);
    $saveButton.attr("class", 'save-idea-button-disabled input-fields');
  } else {
    $saveButton.prop('disabled', false);
    $saveButton.attr('class', 'save-idea-button input-fields');
  }
}

$('ul').on('click', 'li article .delete-button', deleteIdea);
$('ul').on('click', 'li article .button-up', upQuality);
$('ul').on('click', 'li article .button-down', downQuality);


function deleteIdea() {
 $(this).parent('article').remove();
 localStorage.removeItem($(this).closest('article').attr('id'));
}

function upQuality() {
  getIdeaFromStorage(this);
 var $ideaQuality = $('h2');
 var ideaQuality = $ideaQuality.val();
 if ($(this).siblings('h2').text() === 'quality: swill') {
    $(this).siblings('h2').text('quality: plausible');
 } else if ($(this).siblings('h2').text() === 'quality: plausible') {
   $(this).siblings('h2').text('quality: genius');
 }
}

function downQuality() {
  getIdeaFromStorage(this);
 var $ideaQuality = $('h2');
 var ideaQuality = $ideaQuality.val();
 if ($(this).siblings('h2').text() === 'quality: genius') {
    $(this).siblings('h2').text('quality: plausible');
 } else if ($(this).siblings('h2').text() === 'quality: plausible') {
   $(this).siblings('h2').text('quality: swill');
 } 
}

function editTitle() {
  title = $(this).text();
  getIdeaFromStorage(this);
  object.title = title;
  updateStorage(object);
}

function editBody() {
  body = $(this).text();
  getIdeaFromStorage(this);
  object.body = title;
  updateStorage(object);
}

function onPageLoad() {
  for (var i = 0; i < localStorage.length; i++) {
    string = localStorage.getItem(localStorage.key(i));
    object = JSON.parse(string);
    displayIdea(object);
  }
}
onPageLoad();
}