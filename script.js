function closewindow() {
  let closewindow = confirm('Sure You Want to Close the Window?');
  if (closewindow == true) {
    window.close();
  }
}

function popupaddtask() {
  let absscreen = document.getElementById('popcontainer');
  let addtaskpopup = document.getElementById('addtaskpopup');
  absscreen.style.zIndex = '2';
  addtaskpopup.style.scale = '1';
  addtaskpopup.style.transform = ' translateY(0px)';
  addtaskpopup.style.transition = 'all 0.3s';
}

function closepopup() {
  let absscreen = document.getElementById('popcontainer');
  let addtaskpopup = document.getElementById('addtaskpopup');
  addtaskpopup.style.scale = '0';
  addtaskpopup.style.transition = 'all 0.3s';
  addtaskpopup.style.transform = ' translateY(500px)';
  setTimeout(() => {
    absscreen.style.zIndex = '-1';
  }, 300);
}

let impbuttoncount = 0;
let pributtoncount = 0;
let secbuttoncount = 0;
let impbutton = document.getElementById('important');
let pributton = document.getElementById('primary');
let secbutton = document.getElementById('secondary');

function imptagcolor() {
  if (impbuttoncount % 2 == 0) {
    impbutton.style.backgroundColor = '#FF605C';
    impbutton.style.color = 'white';
    impbuttoncount++;
  } else if (impbuttoncount % 2 != 0) {
    impbutton.style.backgroundColor = 'transparent';
    impbutton.style.color = '#FF605C';
    impbuttoncount++;
  }
}

function pritagcolor() {
  if (pributtoncount % 2 == 0) {
    pributton.style.backgroundColor = '#FFBD44';
    pributton.style.color = 'white';
    pributtoncount++;
  } else if (pributtoncount % 2 != 0) {
    pributton.style.backgroundColor = 'transparent';
    pributton.style.color = '#FFBD44';
    pributtoncount++;
  }
}

function sectagcolor() {
  if (secbuttoncount % 2 == 0) {
    secbutton.style.backgroundColor = '#00CA4E';
    secbutton.style.color = 'white';
    secbuttoncount++;
  } else if (secbuttoncount % 2 != 0) {
    secbutton.style.backgroundColor = 'transparent';
    secbutton.style.color = '#00CA4E';
    secbuttoncount++;
  }
}

let source = 'primary.png';

let ownername;
let owneremail;
let titletask;
let sourcelinktask;
let desctask;
let tagstask;

function togetvalues() {
  ownername = document.getElementById('ownername').value;
  owneremail = document.getElementById('owneremail').value;
  titletask = document.getElementById('titletask').value;
  sourcelinktask = document.getElementById('sourcelink').value;
  desctask = document.getElementById('descpop').value;
  tagstask = 'IMP';
}

function createelementside() {
  if (
    ownername == '' ||
    owneremail == '' ||
    titletask == '' ||
    desctask == '' ||
    tagstask == ''
  ) {
    return false;
  } else if (
    ownername != '' ||
    owneremail != '' ||
    titletask != '' ||
    desctask != '' ||
    tagstask != ''
  ) {
    let maincontainer = document.getElementById('insidescroll');
    let noteside = document.createElement('div');
    noteside.className = 'note1';
    let sidetagimagediv = document.createElement('div');
    sidetagimagediv.className = 'tagiconside';
    let sidecardimage = document.createElement('img');
    sidecardimage.src = source;
    sidecardimage.innerText = tagstask;
    sidecardimage.className = 'tagimageside';
    // sidecardimage.width = '20px';
    let titlesidecard = document.createElement('div');
    titlesidecard.className = 'titlesidecard';
    titlesidecard.innerText = titletask;
    sidetagimagediv.appendChild(sidecardimage);
    noteside.appendChild(sidetagimagediv);
    noteside.appendChild(titlesidecard);

    maincontainer.appendChild(noteside);
  }
}

function createelementmain() {
  if (
    ownername == '' ||
    owneremail == '' ||
    titletask == '' ||
    desctask == '' ||
    tagstask == ''
  ) {
    alert('Please Enter Correct Details');
  } else if (
    ownername != '' ||
    owneremail != '' ||
    titletask != '' ||
    desctask != '' ||
    tagstask != ''
  ) {
    let maincontainer = document.getElementById('mainnotessection');
    let notecontainer = document.createElement('div');
    notecontainer.className = 'note1main';

    let firstsection = document.createElement('div');
    firstsection.className = 'firstsectionmain';
    let secondsection = document.createElement('div');
    secondsection.className = 'secondsection';
    let thirdsection = document.createElement('div');
    thirdsection.className = 'thirdsection';

    //firstsection dynamic generation

    let titlemaincard = document.createElement('div');
    titlemaincard.className = 'titlemaincard';
    titlemaincard.innerText = titletask;

    let tagmainsection = document.createElement('div');
    tagmainsection.className = 'tagmainsection';

    let tag = document.createElement('div');
    tag.className = 'important';
    tag.classList.add('tagsmark');
    tag.onclick = imptagcolor;
    tag.innerText = tagstask;

    tagmainsection.appendChild(tag);
    firstsection.appendChild(titlemaincard);
    firstsection.appendChild(tagmainsection);

    //secondsection dynamic generation

    secondsection.innerText = desctask;
    secondsection.className = 'secondsection';

    //thirdsection dynamic generation

    let sourcemaincard = document.createElement('div');
    sourcemaincard.className = 'sourcemaincard';

    let sourcehead = document.createElement('div');
    sourcehead.className = 'sourcehead';
    sourcehead.innerText = 'Source';

    let sourcename = document.createElement('div');
    sourcename.className = 'sourcename';
    sourcename.innerText = ownername;

    sourcemaincard.appendChild(sourcehead);
    sourcemaincard.appendChild(sourcename);

    let buttonsectionmain = document.createElement('div');
    buttonsectionmain.className = 'buttonssectionmain';

    let linkimg = document.createElement('img');
    linkimg.src = 'link.png';
    linkimg.className = 'cardbuttonimages';

    let deleteimg = document.createElement('img');
    deleteimg.src = 'delete.png';
    deleteimg.className = 'cardbuttonimages';

    let editimg = document.createElement('img');
    editimg.src = 'edit.png';
    editimg.className = 'cardbuttonimages';

    let completedimg = document.createElement('img');
    completedimg.src = 'completed.png';
    completedimg.className = 'cardbuttonimages';

    buttonsectionmain.appendChild(linkimg);
    buttonsectionmain.appendChild(deleteimg);
    buttonsectionmain.appendChild(editimg);
    buttonsectionmain.appendChild(completedimg);

    thirdsection.appendChild(sourcemaincard);
    thirdsection.appendChild(buttonsectionmain);

    notecontainer.appendChild(firstsection);
    notecontainer.appendChild(secondsection);
    notecontainer.appendChild(thirdsection);
    maincontainer.appendChild(notecontainer);
  }
}

let completetaskcount = 0;
function completedtask() {
  if (completetaskcount % 2 == 0) {
    document.getElementById('titlemain').style.textDecoration = 'line-through';
    completetaskcount++;
  } else {
    document.getElementById('titlemain').style.textDecoration = 'none';
    completetaskcount++;
  }
}

function clearvalues() {
  ownername = document.getElementById('ownername').value = '';
  owneremail = document.getElementById('owneremail').value = '';
  titletask = document.getElementById('titletask').value = '';
  sourcelinktask = document.getElementById('sourcelink').value = '';
  desctask = document.getElementById('descpop').value = '';
  tagstask = 'IMP';
}
