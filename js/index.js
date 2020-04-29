
var body = document.getElementsByTagName('body')[0];

/*=================================
  Share button animation and action
==================================*/

var shareSVG = document.getElementById('share');
var input = document.getElementsByClassName('input')[0];

function addClassList() {
  shareSVG.classList.add('share');
  input.classList.add('show-input');
}

function removeClassList() {
  shareSVG.classList.remove('share');
  input.classList.remove('show-input');
}

var toggleButton = 0;

shareSVG.onclick = function() {
  toggleButton++;
  
  if (toggleButton == 1) {
    removeClassList();
  }

  if(toggleButton == 2) {
    addClassList();
    toggleButton = 1;
    toggleButton--;
  }
}

function functionLink() {
  var link = document.getElementsByClassName('link')[0];
  link.select();
  link.setSelectionRange(0, 99999)
  document.execCommand('copy');
  //----------------------------------------------------------------
  var commentBox = document.getElementsByClassName('comment-box')[0];
  commentBox.innerHTML = 'Copied to clipboard!';
  var clickTimer = 0; 
  var interval = setInterval(addRemove, 300);
  function addRemove() {
    commentBox.classList.remove('remove-opacity');
    commentBox.classList.add('add-opacity');
    clickTimer += 0.3;
    if (clickTimer >= 0.9) {
      commentBox.classList.remove('add-opacity');
      commentBox.classList.add('remove-opacity');
      clickTimer = 0;
      clearInterval(interval); 
    }
  }
  //-----------------------------------------------------------------
}

var copyLink = document.getElementsByClassName('copy-link')[0];

copyLink.onclick = function() {
  functionLink();
}


/*=================================
  Scale (animate) Images on scroll
==================================*/

function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
      var context = this, args = arguments;
      var later = function() {
          timeout = null;
          if(!immediate) func.apply(context, args);
      }

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  }
}

var imgs = document.querySelectorAll('.myImg');
function imageScale(e) {
  imgs.forEach(img => {
    img.classList.add('transition');
    var pointOfChange = (window.scrollY + window.innerHeight) - img.height/2;
    var imgBottom = img.offsetTop + img.height;
    var isHalfShown = pointOfChange > img.offsetTop;
    var isNotScrolledPast =  window.scrollY < imgBottom;
    
    if (isHalfShown && isNotScrolledPast) {
      img.classList.add('appear');
      img.classList.remove('disappear');
    }
    else {
      img.classList.add('disappear');
      img.classList.remove('appear');
    }
  }); 
}
window.addEventListener('scroll', debounce(imageScale));


window.onorientationchange = function() {
  imgs.forEach(img => {
  img.classList.remove('transition');
  });
}

window.onresize = function() {
  imgs.forEach(img => {
  img.classList.remove('transition');
  });
}




/*========== Show width of screen on resize ===================
let pixels = document.getElementById('displayPixels');
pixels.innerText = document.documentElement.clientWidth + "px";
window.onresize = function() {
    pixels.innerText = document.documentElement.clientWidth + "px";
    pixels.classList.add('show-width');
    setTimeout(remove, 2000);
    function remove() {
        pixels.classList.remove('show-width');
    }
}

window.addEventListener('resize', onresize);
===========================================*/


/*========================================
  Nav links: First 3 links in the document
========================================//
var a = document.getElementsByTagName('a');

function list(x) {
  var selectedLinks = document.getElementsByClassName('selected')[0];
  a[x].onmouseover = function() {
    a[x].style.color = '#7ce0b7';
    if (a[x].className !== 'selected') {
      selectedLinks.style.borderBottom = '2px solid transparent';  
      selectedLinks.style.color = 'white';
    }
  }

  a[x].onmouseout = function() {
    selectedLinks.style.borderBottom = '2px solid #FFFC53';  
    selectedLinks.style.color = '#FFFC53';
    if (a[x].className !== 'selected') {
      a[x].style.color = 'white';
    }
  }
}
 
for (x=0; x<3; x++) {
 list(x);
}
=============================================*/

//copyright.scrollIntoView();

/*
window.onscroll = function() {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    alert('page bottom');
  }
}*/

  