window.onload = function () {

    // Tags
    addTagsClickHandler();

    // Sidebar handler
    const sidebar = new Sidebar();
    sidebar.Config();
    sidebar.addClickSideBarHandler();
}


const addTagsClickHandler = () => {
  document.querySelector('.navigation').addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('navigation__link')) {
      if (!e.target.classList.contains('defaultTag')) {


        let clickedTag = e.target;
        removeDefaultTags();
        removeSelectedTags();
        selectClickedTag(clickedTag);
      }

    } else {
      removeSelectedTags()
      selectDefaultTag();
    }
  })
}


const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.navigation__link ');
  tags.forEach(tag => {
    tag.classList.remove('navigation_active');
  })
}

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add('navigation_active');
}

const selectDefaultTag = () => {
  const defaultTag = document.querySelector('.defaultTag');
  defaultTag.classList.add('default');
}

const removeDefaultTags = () => {
  let tags = document.querySelectorAll('.navigation__link ');
  tags.forEach(tag => {
    tag.classList.remove('default')

  })
}

addTagsClickHandler();
const selectButtonAll = document.querySelectorAll('button');
const ButtonVisitPage = () => {
  selectButtonAll.forEach(tag => {
    tag.addEventListener('click', (e) => {
      if (e.target.classList.contains('promo__buttons')) {
        window.location = '../zoos/panda/panda.html';
      }
      if (e.target.classList.contains('button__chooseYourFavourite')) {
        window.location = '../pageMap/map.html';
      }

    })
  })
}

ButtonVisitPage();


let items = document.querySelectorAll('.item');
let currentItem = 0;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    items[currentItem].classList.add(direction);

}
function showItem() {

    items.forEach(el => {
        el.classList.remove('to-down')
    })
}

document.querySelector('.arrowSingle').addEventListener('click', function () {
    if(currentItem !== 4) {
        changeCurrentItem(currentItem + 1)
        hideItem('to-down')

    } else {
        showItem();
        currentItem = 0;
    }

})





class Sidebar {
  constructor(animalList) {
    this.animalList = animalList;
  }

  Config() {
    this.sidebar = document.querySelector('.sidebar');
    this.arrowBtn = document.querySelector('.arrow');
    this.sideBarBorderActive = document.querySelector('.sidebar_border-active');
    this.sideBarBorder = document.querySelector('.sidebar-border_active');
    this.sideBarBorderAll = document.querySelectorAll('.sidebar__border');
    this.sideBarEagles = document.querySelector('.sidebar__eagles');
    this.sideBarGoriila = document.querySelector('.sidebar__gorilla');
    this.sideBarLemur = document.querySelector('.sidebar__lemur');
    this.sideBarPanda = document.querySelector('.sidebar__panda');
    this.sideBarLion = document.querySelector('.sidebar__lion');
    this.sideBarCoala = document.querySelector('.sidebar__coala');
    this.sideBarTiger = document.querySelector('.sidebar__tiger');
    this.sideBarCrocodil = document.querySelector('.sidebar__crocodil ')
    this.gorilla = document.querySelector('.gorilla');
    this.eagles = document.querySelector('.eagles');
    this.lemur = document.querySelector('.lemur');
    this.lion = document.querySelector('.lion');
    this.coala = document.querySelector('.coala');
    this.crocodil = document.querySelector('.crocodil');
    this.tiger = document.querySelector('.tiger');
    this.sideBarArea = document.querySelectorAll('.sidebar__area');
    this.arrowSingle = document.querySelector('.arrowSingle');
    this.textRemove = document.querySelector('.aside-menu__desc');
    this.isOpenAside = false;
  }

  toggleSidebar() {
    if (!this.isOpenAside) {
      this.arrowBtn.classList.add('arrowOpen');
      this.arrowSingle.classList.add('arrowSingleOpen');
      this.sidebar.classList.add('sidebarOpen');
      this.sideBarBorderActive.classList.add('sidebar_border-activeOpen');
      this.sideBarBorderAll.forEach((elem) => {
          elem.classList.add('sidebar_borderOpen');
        // elem.style = 'margin: 45px 17px 46px 33px; border: none; background-color: inherit; box-shadow: none; display: flex; align-items: center';
      });
      this.sideBarArea.forEach((elem) => {
        elem.style = 'padding: 0';
      })
      this.setTextPanda();
      this.setTextGorilla();
      this.setTextEagles();
      this.setTextLemur();
      this.setTextCrodil();
      this.setTextLion();
      this.setTextCoala();
      this.setTextTiger();
        this.isOpenAside = true;
    } else {
        this.arrowBtn.classList.remove('arrowOpen');
        this.arrowSingle.classList.remove('arrowSingleOpen');
        this.sidebar.classList.remove('sidebarOpen');
        this.sideBarBorderActive.classList.remove('sidebar_border-activeOpen');
        this.sideBarBorderAll.forEach((elem) => {
            elem.classList.remove('sidebar_borderOpen')
        });
        this.sideBarArea.forEach((elem) => {
            elem.style = '';
        })
        this.setTextPandaRemove();
        this.isOpenAside = false;
    }

  }

  addClickSideBarHandler() {
    this.arrowBtn.addEventListener('click', this.toggleSidebar.bind(this));
  }

  setTextPanda () {
          const desc = document.createElement('p');
          desc.classList.add('aside-menu__desc')
          desc.innerHTML = "Watch live from China's  Panda Center";
          this.sideBarBorderActive.append(desc);
          this.sideBarPanda.classList.add('sidebar__pandaOpen');
          this.sideBarPanda.classList.add('sidebar_Open');
  }
  setTextPandaRemove () {
      const removeDesc = document.querySelectorAll('.aside-menu__desc');
      removeDesc.forEach((elem) => {
          elem.remove();
      })
      this.sideBarPanda.classList.remove('sidebar__pandaOpen');
      this.sideBarPanda.classList.remove('sidebar_Open');
      this.sideBarGoriila.classList.remove('sidebar__gorillaOpen');
      this.sideBarLemur.classList.remove('sidebar__lemurOpen');
      this.sideBarEagles.classList.remove('sidebar__eaglesOpen');
      this.sideBarCrocodil.classList.remove('sidebar__crocodilOpen');
      this.sideBarCoala.classList.remove('sidebar__coalaOpen');
      this.sideBarTiger.classList.remove('sidebar__tigerOpen');
      this.sideBarLion.classList.remove('sidebar__lionOpen');
  }
  setTextGorilla () {
    const desc = document.createElement('p');
    desc.classList.add('aside-menu__desc')
    desc.innerHTML = "Livestream from Gorilla Forest Corridor habitat cam";
    this.gorilla.append(desc);
    this.sideBarGoriila.classList.add('sidebar__gorillaOpen');
  }
  setTextLemur () {
    const desc = document.createElement('p');
    desc.classList.add('aside-menu__desc')
    desc.innerHTML = "The ring-tailed lemurs play in Madagascar, Lemuria Land";
    this.lemur.append(desc);
    this.sideBarLemur.classList.add('sidebar__lemurOpen');
  }
  setTextEagles () {
    const desc = document.createElement('p');
    desc.classList.add('aside-menu__desc')
    desc.innerHTML = "Watch The Bald Eagles Nest from West End cam";
    this.eagles.append(desc);
    this.sideBarEagles.classList.add('sidebar__eaglesOpen');
  }
  setTextCrodil () {
        const desc = document.createElement('p');
        desc.classList.add('aside-menu__desc')
        desc.innerHTML = "Watch The Crocodile Nest from West End cam";
        this.crocodil.append(desc);
        this.sideBarCrocodil.classList.add('sidebar__crocodilOpen');
    }
    setTextLion () {
        const desc = document.createElement('p');
        desc.classList.add('aside-menu__desc')
        desc.innerHTML = "Watch The Lion Nest from South End cam";
        this.lion.append(desc);
        this.sideBarLion.classList.add('sidebar__lionOpen');
    }
    setTextCoala () {
        const desc = document.createElement('p');
        desc.classList.add('aside-menu__desc')
        desc.innerHTML = "Watch The Lion Nest from South End cam";
        this.coala.append(desc);
        this.sideBarCoala.classList.add('sidebar__coalaOpen');
    }
    setTextTiger () {
        const desc = document.createElement('p');
        desc.classList.add('aside-menu__desc')
        desc.innerHTML = "Watch The Tiger Nest from South End cam";
        this.tiger.append(desc);
        this.sideBarTiger.classList.add('sidebar__tigerOpen');
    }


}




class ChangeCams {
    constructor() {
        this.wrapper = document.querySelector('.panda__wrapper');
        this.items = this.wrapper.querySelectorAll('.iframe__little');
        this.mainIframe = document.getElementById('iframeBig')
    }

    initListener() {
        this.items.forEach((el) => el.addEventListener('click', () => this.handleListener(el)));
    }

    handleListener(el) {
        this.iframeMore = this.findElement(el, 'iframe');

        this.iframeMoreSrc = this.iframeMore.src;
        this.mainIframeSrc = this.mainIframe.src;

        this.iframeMore.src = this.mainIframeSrc;
        this.mainIframe.src = this.iframeMoreSrc;
    }

    findElement(element, classname) {
        return element.querySelector(classname);
    }

    init() {
        this.initListener();
    }
}

const camsChange = new ChangeCams();


camsChange.init();


//
//
// function Ant(crslId) {
//
//     let id = document.getElementById(crslId);
//     if(id) {
//         this.crslRoot = id
//     }
//     else {
//         this.crslRoot = document.querySelector('.ant-carousel')
//     };
//
//     // Carousel objects
//     this.crslList = this.crslRoot.querySelector('.item__list');
//     this.crslElements = this.crslList.querySelectorAll('.item');
//     this.crslElemFirst = this.crslList.querySelector('.item');
//     this.rightArrow = this.crslRoot.querySelector('.arrowSingle');
//
//
//     // Initialization
//     this.options = Ant.defaults;
//     Ant.initialize(this)
// };
//
// Ant.defaults = {
//
//     // Default options for the carousel
//     elemVisible: 2, // Кол-во отображаемых элементов в карусели
//     loop: true,     // Бесконечное зацикливание карусели
//     auto: true,     // Автоматическая прокрутка
//     interval: 15000, // Интервал между прокруткой элементов (мс)
//     speed: 500,     // Скорость анимации (мс)
//     touch: true,    // Прокрутка  прикосновением
//     arrows: true,   // Прокрутка стрелками
//     dots: true      // Индикаторные точки
// };
//
// Ant.prototype.elemPrev = function(num) {
//     num = num || 1;
//
//
//     this.currentElement -= num;
//     if(this.currentElement < 0) this.currentElement = this.dotsVisible-1;
//
//
//     if(!this.options.loop) {  // сдвиг вправо без цикла
//         this.currentOffset += this.elemWidth*num;
//         this.crslList.style.marginLeft = this.currentOffset + 'px';
//         if(this.currentElement == 0) {
//             this.leftArrow.style.display = 'none'; this.touchPrev = false
//             this.left.style.display = 'none'; this.touchPrev = false
//         }
//         this.rightArrow.style.display = 'block'; this.touchNext = true
//     }
//     else {                    // сдвиг вправо с циклом
//         let elm, buf, this$ = this;
//         for(let i=0; i<num; i++) {
//             elm = this.crslList.lastElementChild;
//             buf = elm.cloneNode(true);
//             this.crslList.insertBefore(buf, this.crslList.firstElementChild);
//             this.crslList.removeChild(elm)
//         };
//         this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
//         let compStyle = window.getComputedStyle(this.crslList).marginLeft;
//         this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
//         this.crslList.style.marginLeft = '0px';
//         setTimeout(function() {
//             this$.crslList.style.cssText = 'transition:none;'
//         }, this.options.speed)
//     }
// };
//
// Ant.prototype.elemNext = function(num) {
//     num = num || 1;
//
//
//     this.currentElement += num;
//     if(this.currentElement >= this.dotsVisible) this.currentElement = 0;
//
//
//     if(!this.options.loop) {  // сдвиг влево без цикла
//         this.currentOffset -= this.elemWidth*num;
//         this.crslList.style.marginLeft = this.currentOffset + 'px';
//         this.leftArrow.style.display = 'block'; this.touchPrev = true
//         this.left.style.display = 'block'; this.touchPrev = true
//     }
//     else {                    // сдвиг влево с циклом
//         let elm, buf, this$ = this;
//         this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
//         this.crslList.style.margindown = '-' + this.elemWidth*num + 'px';
//         setTimeout(function() {
//             this$.crslList.style.cssText = 'transition:none;';
//             for(let i=0; i<num; i++) {
//                 elm = this$.crslList.firstElementChild;
//                 buf = elm.cloneNode(true); this$.crslList.appendChild(buf);
//                 this$.crslList.removeChild(elm)
//             };
//             this$.crslList.style.margindown = '0px'
//         }, this.options.speed)
//     }
// };
//
//
//
// Ant.initialize = function(that) {
//
//     // Constants
//     that.elemCount = that.crslElements.length; // Количество элементов
//     that.dotsVisible = that.elemCount;         // Число видимых точек
//     let elemStyle = window.getComputedStyle(that.crslElemFirst);
//     that.elemWidth = that.crslElemFirst.offsetWidth +  // Ширина элемента (без margin)
//         parseInt(elemStyle.marginLeft) + parseInt(elemStyle.marginRight);
//
//     // Variables
//     that.currentElement = 0; that.currentOffset = 0;
//     that.crslElements = 0;
//     that.touchPrev = true; that.touchNext = true;
//     let xTouch, yTouch, xDiff, yDiff, stTime, mvTime;
//     let bgTime = getTime();
//
//     // Functions
//     function getTime() {
//         return new Date().getTime();
//     };
//     function setAutoScroll() {
//         that.autoScroll = setInterval(function() {
//             let fnTime = getTime();
//             if(fnTime - bgTime + 10 > that.options.interval) {
//                 bgTime = fnTime; that.elemNext()
//             }
//         }, that.options.interval)
//     };
//
//     // Start initialization
//     if(that.elemCount <= that.options.elemVisible) {   // Отключить навигацию
//         that.options.auto = false; that.options.touch = false;
//         that.options.arrows = false; that.options.dots = false;
//         that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
//         that.left.style.display = 'none'; that.rightArrow.style.display = 'none'
//     };
//
//     if(!that.options.loop) {       // если нет цикла - уточнить количество точек
//         that.dotsVisible = that.elemCount - that.options.elemVisible + 1;
//         that.leftArrow.style.display = 'none';  // отключить левую стрелку
//         that.left.style.display = 'none';  // отключить левую стрелку
//         that.touchPrev = false;    // отключить прокрутку прикосновением вправо
//         that.options.auto = false; // отключить автопркрутку
//     }
//     else if(that.options.auto) {   // инициализация автопрокруки
//         setAutoScroll();
//         // Остановка прокрутки при наведении мыши на элемент
//         that.crslElement = document.querySelectorAll('.cards__content');
//         that.crslElement.forEach((elem) => {
//             elem.addEventListener('click', function() {
//                 clearTimeout(that.autoScroll)
//                 setInterval(function () { setAutoScroll()}, 60000) ;
//             }, false);
//         })
//
//         // that.crslList.addEventListener('mouseleave', setAutoScroll, false)
//     }
//
//
//
//     if(that.options.touch) {   // инициализация прокрутки прикосновением
//         that.crslList.addEventListener('touchstart', function(e) {
//             xTouch = parseInt(e.touches[0].clientX);
//             yTouch = parseInt(e.touches[0].clientY);
//             stTime = getTime()
//         }, false);
//         that.crslList.addEventListener('touchmove', function(e) {
//             if(!xTouch || !yTouch) return;
//             xDiff = xTouch - parseInt(e.touches[0].clientX);
//             yDiff = yTouch - parseInt(e.touches[0].clientY);
//             mvTime = getTime();
//             if(Math.abs(xDiff) > 15 && Math.abs(xDiff) > Math.abs(yDiff) && mvTime - stTime < 75) {
//                 stTime = 0;
//                 if(that.touchNext && xDiff > 0) {
//                     bgTime = mvTime; that.elemNext()
//                 }
//                 else if(that.touchPrev && xDiff < 0) {
//                     bgTime = mvTime; that.elemPrev()
//                 }
//             }
//         }, false)
//     };
//
//     if(that.options.arrows) {  // инициализация стрелок
//         if(!that.options.loop) that.crslList.style.cssText =
//             'transition:margin '+that.options.speed+'ms ease;';
//         that.leftArrow.addEventListener('click', function() {
//             let fnTime = getTime();
//             if(fnTime - bgTime > that.options.speed) {
//                 bgTime = fnTime; that.elemPrev()
//                 clearTimeout(that.autoScroll)
//                 setInterval(function () { setAutoScroll()}, 60000) ;
//             }
//         }, false);
//         that.rightArrow.addEventListener('click', function() {
//             let fnTime = getTime();
//             if(fnTime - bgTime > that.options.speed) {
//                 bgTime = fnTime; that.elemNext()
//                 clearTimeout(that.autoScroll)
//                 setInterval(function () { setAutoScroll()}, 60000) ;
//             }
//         }, false)
//
//     }
//     else {
//         that.leftArrow.style.display = 'none';
//         that.rightArrow.style.display = 'none'
//     };
//
//
//
//
// };
//
// new Ant();
//

