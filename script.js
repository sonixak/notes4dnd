function saveText() {
  const text = document.getElementById('textArea').value;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'note.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function loadText() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.txt';
  fileInput.style.display = 'none';

  fileInput.onchange = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const text = event.target.result;
      document.getElementById('textArea').value = text;
    };

    reader.readAsText(file);
  };

  document.body.appendChild(fileInput);
  fileInput.click();
}
