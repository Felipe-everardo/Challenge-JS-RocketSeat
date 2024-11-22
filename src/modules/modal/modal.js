const newScheduleBtn = document.querySelector('#newScheduleBtn');
const dialog = document.querySelector('#scheduleDialog');
const frm = dialog.querySelector('form');

newScheduleBtn.addEventListener('click', () => {
  dialog.showModal();
});

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});


