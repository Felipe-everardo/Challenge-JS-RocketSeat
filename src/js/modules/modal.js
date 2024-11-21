export function setupModal() {
  const newScheduleBtn = document.querySelector('#newScheduleBtn');
  const dialog = document.querySelector('dialog');

  // Abre o diálogo ao clicar no botão
  newScheduleBtn.addEventListener('click', () => {
    dialog.showModal(); // Abre o diálogo como modal
  });

  // Fecha o diálogo ao clicar fora dele
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
} 