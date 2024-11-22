import dayjs from "dayjs"
const frm = document.querySelector('form')
const dialog = document.querySelector('dialog')
const modalDate = document.querySelector('#date-modal')
const selectedDate = document.querySelector('#date')


// Carregando a data atual
const today = dayjs(new Date()).format('YYYY-MM-DD')
selectedDate.value = today
selectedDate.min = today

modalDate.value = today
modalDate.min = today

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const id = new Date().getTime()
  const name = frm.iconName.value
  const pet = frm.iconPet.value
  const tel = frm.iconTel.value
  const descr = frm.descricao.value

  const dados = {
    id: id,
    name: name,
    pet: pet,
    tel: tel,
    descr: descr
  }

  console.log(dados);
  
  dialog.close();
});


