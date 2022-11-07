const fileBtn = document.querySelector('.file-button');
const fileBtnText = document.querySelector('.file-button-text');
const fileInput = document.querySelector('.file-input');
const mainContainer = document.querySelector('.main_container');
const form = document.querySelector('.newProject_form');
const customSelect = document.getElementsByClassName('custom-select');

for (i = 0; i < customSelect.length; i++) {
  const selElement = customSelect[i].getElementsByTagName('select')[0];
  const selectedItem = document.createElement('div');
  selectedItem.setAttribute('class', 'select-selected');
  selectedItem.innerHTML = selElement.options[selElement.selectedIndex].innerHTML;
  customSelect[i].appendChild(selectedItem);
  const selOptionList = document.createElement('div');
  selOptionList.setAttribute('class', 'select-items select-hide');
  for (j = 1; j < selElement.length; j++) {
    const selOption = document.createElement('div');
    selOption.innerHTML = selElement.options[j].innerHTML;
    selOption.addEventListener('click', function() {
      let selBox = this.parentNode.parentNode.getElementsByTagName('select')[0];
      let prevSelOption = this.parentNode.previousSibling;
      for (i = 0; i < selBox.length; i++) {
        if (selBox.options[i].innerHTML === this.innerHTML) {
          selBox.selectedIndex = i;
          prevSelOption.innerHTML = this.innerHTML;
          const sameSel = this.parentNode.getElementsByClassName('same-as-selected');
          for (k = 0; k < sameSel.length; k++) {
            sameSel[k].removeAttribute('class');
          }
          this.setAttribute('class', 'same-as-selected');
          break;
        }
      }
      prevSelOption.click();
    });
    selOptionList.appendChild(selOption);
  }
  customSelect[i].appendChild(selOptionList);
  selectedItem.addEventListener('click', function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    if (this.classList.contains('select-arrow-active')) {
      this.nextSibling.classList.add('select-hide');
    } else {
      this.nextSibling.classList.remove('select-hide');
    }
    this.classList.toggle('select-arrow-active');
  });
}

function closeAllSelect(element) {
  let arrNo = [];
  const selItems = document.getElementsByClassName('select-items');
  const selectedSel = document.getElementsByClassName('select-selected');
  for (i = 0; i < selectedSel.length; i++) {
    if(element == selectedSel[i]) {
      arrNo.push[i];
    } else {
      selectedSel[i].classList.remove('select-arrow-active');
    }
  }
  for (i = 0; i < selItems.length; i++) {
    if (arrNo.indexOf(i)){
      selItems[i].classList.add('select-hide');
    }
  }
}

document.addEventListener('click', closeAllSelect);


if (fileInput) {
  fileInput.addEventListener('change', updateButton);
}

function updateButton() {
  let curFile = fileInput.files;
  const cancelBtn = document.createElement('div');
  cancelBtn.className = 'fileCancel-button';
  const stroke1 = document.createElement('div');
  stroke1.className = 'fileCancel-button_stroke1';
  const stroke2 = document.createElement('div');
  stroke2.className = 'fileCancel-button_stroke2';
  cancelBtn.appendChild(stroke1);
  cancelBtn.appendChild(stroke2);
  fileInput.style.pointerEvents = 'none';
  fileBtn.style.border = '1px solid rgba(118, 118, 118, 0.3)';
  fileBtn.style.fontSize = '13px';
  fileBtn.style.cursor = 'auto';
  fileBtn.style.justifyContent = 'space-between';
  fileBtnText.textContent = curFile[0].name;
  fileBtn.appendChild(cancelBtn);

  cancelBtn.addEventListener('click', deleteFile);

  function deleteFile() {
    fileInput.value = '';
    fileInput.style.pointerEvents = 'auto';
    fileBtn.removeChild(cancelBtn);
    fileBtn.style.border = '1px solid #9AD351';
    fileBtn.style.fontSize = '16px';
    fileBtn.style.cursor = 'pointer';
    fileBtn.style.justifyContent = 'center';
    fileBtnText.textContent = 'Прикрепить файл';
    
    cancelBtn.removeEventListener('click', deleteFile);
  }
}

// TODO: когда будем отправлять запрос на сервер, переделать.
if (form) {
  form.onsubmit = function(e) {
    e.preventDefault();
    const formHtml = form.innerHTML;
    mainContainerHtml = mainContainer.innerHTML;
    mainContainer.innerHTML = `
      <h1 class="title">Спасибо за обращение!</h1>
      <p>Мы обрабатываем вашу заявку. В ближайшее время наш аккаунт-менеджер свяжется с вами. Хорошего дня!</p>
    `;
    form.innerHTML = ``;
    const resetBtn = document.createElement('button');
    resetBtn.className = 'reset-button';
    resetBtn.innerText = 'Отправить повторно';
    resetBtn.style.marginTop = '200px';
    form.appendChild(resetBtn);

    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mainContainer.innerHTML = mainContainerHtml;
      form.innerHTML = formHtml;
    });
  };
};
