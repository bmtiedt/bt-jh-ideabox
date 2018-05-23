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
  (`<li id=${info.id}>
    <article id=${info.id}>
      <button class='delete-button'></button>
      <h1>${info.title}</h1>
      <p>${info.body}</p>
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
  var newIdea = new IdeaCreator(ideaTitle, ideaBody);
  displayIdea(newIdea);
  toLocalStorage(newIdea);
  $saveButton.prop("disabled", true);
  $saveButton.attr("class", "save-idea-button-disabled input-fields");
  toLocalStorage(object);
  clearInputs();
  console.log('bing');
}

function toLocalStorage(object) {
  var objectToStore = object;
  var stringifiedObject = JSON.stringify(objectToStore);
  localStorage.setItem(object, stringifiedObject);
  console.log('bang');
}

function getIdeaFromStorage(object) {
  var objectToDisplay = object.id;
  string = localStorage.getItem(object.id);
  object = JSON.parse(string);
}

function updateStorage(object) {
  string = JSON.stringify(object);
  localStorage.setItem(object.id, string);
}

 function deleteFromStorage(object) {
  var objectToDelete = object.id;
  string = localStorage.removeItem(objectToDelete);
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
 $(this).parent().remove();
}

function upQuality() {
  pullFromLocalStorage(this);
 var $ideaQuality = $('h2');
 var ideaQuality = $ideaQuality.val();
 if ($(this).siblings('h2').text() === 'quality: swill') {
    $(this).siblings('h2').text('quality: plausible');
 } else if ($(this).siblings('h2').text() === 'quality: plausible') {
   $(this).siblings('h2').text('quality: genius');
 }
 updateStorage(object); 
}

function downQuality() {
  pullFromLocalStorage(this);
 var $ideaQuality = $('h2');
 var ideaQuality = $ideaQuality.val();
 if ($(this).siblings('h2').text() === 'quality: genius') {
    $(this).siblings('h2').text('quality: plausible');
 } else if ($(this).siblings('h2').text() === 'quality: plausible') {
   $(this).siblings('h2').text('quality: swill');
 } 
 updateStorage(object);
}

function editTitle() {
  title = $(this).text();
  getIdeaFromStorage(this);
  object.title = title;
  updateStorage(object);
  console.log('boom');
}

function editBody() {
  body = $(this).text();
  getIdeaFromStorage(this);
  object.body = title;
  updateStorage(object);
  console.log('BOOM');
}

function onPageLoad() {
  for (var i = 0; i < localStorage.length; i++) {
    string = localStorage.getItem(localStorage.key(i));
    object = JSON.parse(string);
    displayIdea(object);
    console.log('Got it');
  }
}
onPageLoad();
}