const fileBtn = document.querySelector('.file-button');
const fileInput = document.querySelector('.file-input');

fileInput.addEventListener('change', updateButton);

function updateButton() {
  let curFile = fileInput.files;

  let cancelBtn = document.createElement('div');
  cancelBtn.className = 'fileCancel-button';
  let stroke1 = document.createElement('div');
  stroke1.className = 'fileCancel-button_stroke1';
  let stroke2 = document.createElement('div');
  stroke2.className = 'fileCancel-button_stroke2';
  cancelBtn.appendChild(stroke1);
  cancelBtn.appendChild(stroke2);
  
  fileBtn.style.border = '1px solid rgba(118, 118, 118, 0.3)';
  fileBtn.style.fontSize = '13px';
  fileBtn.style.cursor = 'auto';
  fileBtn.style.justifyContent = 'space-between';
  fileBtn.innerHTML = curFile[0].name;
    
  fileBtn.appendChild(cancelBtn);
  cancelBtn.addEventListener('click', deleteFile);

  function deleteFile() {
    fileInput.value = '';
    fileBtn.removeChild(cancelBtn);
    fileBtn.style.border = '1px solid #9AD351';
    fileBtn.style.fontSize = '16px';
    fileBtn.style.cursor = 'pointer';
    fileBtn.style.justifyContent = 'center';
    fileBtn.innerHTML = `Прикрепить файл <label for="file"><span class="label-title">Прикрепите документ</span></label>
    <input class="file-input" type="file" name="file" id="file" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
    `
    cancelBtn.removeEventListener('click', deleteFile);
  }
}