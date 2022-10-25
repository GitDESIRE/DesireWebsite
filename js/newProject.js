const fileBtn = document.querySelector('.file-button');
const fileInput = document.querySelector('.file-input');
const mainContainer = document.querySelector('.main_container');
const form = document.forms[0];

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

form.onsubmit = function(e) {
  e.preventDefault();
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
    mainContainer.innerHTML = `
    <h1 class="title">Начнём ваш проект</h1>
    <p>Кратко опишите свою задачу, и мы свяжемся с вами в кратчайшие сроки</p>
    `;
    form.innerHTML = `
    <div class="inputsBox">
    <div class="inputsBox_leftSide">
      <label for="name"><span class="label-title">Введите своё имя</span></label>
      <input name="name" id="name" placeholder="ИМЯ"/>
      <label for="email"><span class="label-title">Введите свою почту</span></label>
      <input type="email" name="email" id="email" placeholder="EMAIL" required/>
      <label for="category"><span class="label-title">Выберите категорию</span></label>
      <select type="select" name="category" id="category">
        <option value="">выберите категорию проекта</option>
        <option value="SEO">SEO</option>
        <option value="Лендинг">Лендинг</option>
        <option value="Корпоративный сайт">Корпоративный сайт</option>
        <option value="Интернет - магазин">Интернет - магазин</option>
        <option value="Дополнительные страницы">Дополнительные страницы</option>
        <option value="Редизайн сайта">Редизайн сайта</option>
        <option value="Разработка уникального дизайна">Разработка уникального дизайна</option>
      </select>
    </div>
    <div class="inputsBox_rightSide">
      <label for="tel"><span class="label-title">Введите свой телефон</span></label>
      <input type="tel" name="tel" id="tel" placeholder="телефон" required/>
      <label for="telegram"><span class="label-title">Введите свой Телеграм</span></label>
      <input name="telegram" id="telegram" placeholder="telegram"/>
    </div>
  </div>
  <div class="buttonsBox">
    <button class="file-button" type="button">Прикрепить файл
      <label for="file"><span class="label-title">Прикрепите документ</span></label>
      <input class="file-input" type="file" name="file" id="file" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
    </button>
    <button class="submit-button" type="submit">Отправить</button>
  </div>
  <div class="agreement_box">
    <label class="checkbox-label">
      <input type="checkbox" class="checkbox-input">
      <div class="checkbox">
          <svg id='agr-arrow-icon' width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.20284L4.7828 10.5L0 5.67571L0.696799 4.97287L4.7828 9.09431L13.3032 0.5L14 1.20284Z" fill="Grey"/>
          </svg>
      </div> 
      <span class="rights">Даю согласие на обработку 
      <a href="#" class="agreementData-link">Персональных данных</a></span>
    </label>
  </div>
    `
  });
};