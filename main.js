const wWindow = document.documentElement.clientWidth;
const hWindow = document.documentElement.clientHeight;
const containMenu = document.querySelector('.menuArea');
const [inline,block] = ['inline-block','block'];

const menuName = ['main','about','listens','0','Bonjour'];

menuShower(menuMaker(menuName));

/**
 * param {String} [name]
 * param {String} [class]
 * param {Number} [width]
 * param {Number} [height]
 */
function Menu(name,$class,w,h) {
  this.name = name;
  this.class = $class;
  this.w = w;
  this.h = h;
}
/**
 * param {array[strings]} Names
 * param {array[objects]} Menu
 */
function menuMaker(menuName) {
  let menu = [];
  for(let prop of menuName) {
    menu.push(new Menu(prop,'menu',((wWindow/hWindow)*3),((wWindow/hWindow)*2)));
  }
  return menu;
}
/**
 * param {function} menuMaker]
 * 51 String. Working only with English lang. Rewrite this if you speaking any lang
 */
function menuShower(menu) {
  const container = document.createElement('ul');
  container.classList.add('myMenu');
  containMenu.appendChild(container);
  for(let prop of menu) {
    const staff = document.createElement('li');
    staff.style.display = block; //inline; or block;
    staff.addEventListener('click',clickMove);
    staff.classList.add('change');
    staff.innerText = prop.name;
    container.appendChild(staff);
    function clickMove() {
      staff.style.marginLeft = '10%';
      setTimeout(()=>staff.style.marginLeft = '1%',1000);
      setTimeout(()=>location.href=`${staff.innerText}.html`,1200); //// Only EN lang working;
    }
  }
}
function myProp() {
  for(let prop in this) {
    if(typeof this[prop]!='function') {
    console.log(prop);
    }
  }
}
