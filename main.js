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
      <button class='delete-button'></button>
      <h1>${ideaTitle}</h1>
      <p>${ideaBody}</p>
      <div>
      <button class="button-up quality-button"></button></buuton>
      <button class="button-down quality-button"></button></button>
      <h2>quality: swill</h2>
      </div>
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




