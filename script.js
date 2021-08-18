'use strict'

const DomElement = function (selector = '.logo', height = '55px', width = '700px', bg = 'tomato', fontSize = '35px') {

   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;

};

DomElement.prototype.createElement = function () {

   let elemPage;

   if (this.selector.charAt(0) === '.') {

      elemPage = document.createElement('div');
      elemPage.className = this.selector.slice(1);

   } else if (this.selector.charAt(0) === '#') {

      elemPage = document.createElement('p');
      elemPage.id = this.selector.slice(1);
   }

   elemPage.style.height = this.height;
   elemPage.style.width = this.width;
   elemPage.style.backgroundColor = this.bg;
   elemPage.style.fontSize = this.fontSize;
   elemPage.innerHTML = `Вы создали элемент с <strong>${this.selector}</strong>`;
   document.body.append(elemPage);

};

const domElement = new DomElement('#footer', '125px', '850px', 'red', '55px');
domElement.createElement();