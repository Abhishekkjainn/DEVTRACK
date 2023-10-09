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
