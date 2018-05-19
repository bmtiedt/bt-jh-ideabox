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
    <article>
      <h1>${ideaTitle}</h1>
      <button class='delete-button'>x</button>
      <p>${ideaBody}</p>
    </article>
  </li>`);
  clearInputs();
}

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




