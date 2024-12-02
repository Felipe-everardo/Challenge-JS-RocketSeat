import dayjs from "dayjs";
import { newSchedule } from "../../services/newSchedule.js";

const frm = document.querySelector("form");
const dialog = document.querySelector("dialog");
const modalDate = document.querySelector("#date-modal");
const selectedDate = document.querySelector("#date");

const today = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = today;
selectedDate.min = today;

modalDate.value = today;
modalDate.min = today;

frm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const hourSelected = document.querySelector("#time-modal")
    const [hour,] = hourSelected.value.split(':')
    const when = dayjs(selectedDate.value).add(hour, 'hour')
    
    const formData = {
      id: new Date().getTime(),
      name: frm.iconName.value.trim(),
      pet: frm.iconPet.value.trim(),
      tel: frm.iconTel.value.trim(),
      descr: frm.descricao.value.trim(),
      when: when
    };

    await newSchedule(formData);

    alert("Agendamento realizado com sucesso!");
    dialog.close();
  } catch (error) {
    console.error("Erro ao realizar o agendamento:", error);
    alert(`Erro: ${error.message}`);
  }
});
