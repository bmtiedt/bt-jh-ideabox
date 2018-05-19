var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $saveButton = $('.save-idea-button');
var $ideaCard = $('.idea-section');

$saveButton.on('click', displayIdea);
$titleInput.on('keyup', toggleButton);
$bodyInput.on('keyup', toggleButton);

function displayIdea(event) {
  event.preventDefault();
  var ideaTitle = $titleInput.val();
  var ideaBody = $bodyInput.val();
  $ideaCard.prepend
  (`<li>
    <h1>${ideaTitle}</h1>
    <button>x</button>
    <p>${ideaBody}</p>
    <button>
  </li>`);
  clearInputs();
}

function clearInputs() {
  $titleInput.val('');
  $bodyInput.val('');
}

function toggleButton() {
  if ($titleInput.val() === '' || $bodyInput.val() === '') {
    console.log('if');
    $saveButton.prop('disabled', true);
  } else {
    console.log('else');
    $saveButton.prop('disabled', false);
  }
}
