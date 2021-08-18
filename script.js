'use strict'

const inputElem = document.createElement('input'),
   headingElem = document.createElement('h1'),
   buttonElem = document.createElement('button');

headingElem.innerText = 'Введите нужный вам селектор (класс или ID)';

buttonElem.innerText = 'Ввод';
buttonElem.style.padding = '10px';
buttonElem.style.width = '100px';

inputElem.style.margin = '10px 20px 30px 20px';
inputElem.style.padding = '10px 25px';
inputElem.style.width = '300px';

document.body.append(headingElem);
document.body.append(inputElem);
document.body.append(buttonElem);


const DomElement = function () {

   this.selector = '';
   this.height = '30px';
   this.width = '700px';
   this.bg = 'tomato';
   this.fontSize = '28px';

};

DomElement.prototype.createElement = function () {

   if (this.selector.charAt(0) === '.') {

      const divElem = document.createElement('div');

      divElem.className = this.selector.slice(1);

      divElem.style.height = this.height;
      divElem.style.width = this.width;
      divElem.style.backgroundColor = this.bg;
      divElem.style.fontSize = this.fontSize;


      divElem.innerHTML = `Вы создали <strong>div</strong> элемент с классом <strong>${this.selector}</strong>`;
      document.body.append(divElem);
   } else if (this.selector.charAt(0) === '#') {

      const pElem = document.createElement('p');

      pElem.id = this.selector.slice(1);

      pElem.style.height = this.height;
      pElem.style.width = this.width;
      pElem.style.backgroundColor = this.bg;
      pElem.style.fontSize = this.fontSize;

      pElem.innerHTML = `Вы создали <strong>p</strong> элемент с id <strong>${this.selector}</strong>`;
      document.body.append(pElem);
   } else {
      alert('Введите селектор корректно!');
   }

};

const domElement = new DomElement();


buttonElem.addEventListener('click', function () {
   domElement.selector = inputElem.value;
   domElement.createElement();
});
