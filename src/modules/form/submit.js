import dayjs from "dayjs";
import { newSchedule } from "../../services/newSchedule.js";

const frm = document.querySelector("form");
const dialog = document.querySelector("dialog");
const modalDate = document.querySelector("#date-modal");
const selectedDate = document.querySelector("#date");

// Carrega a data atual e define valores mínimos
const today = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = today;
selectedDate.min = today;

modalDate.value = today;
modalDate.min = today;

frm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const formData = {
      id: new Date().getTime(),
      name: frm.iconName.value.trim(),
      pet: frm.iconPet.value.trim(),
      tel: frm.iconTel.value.trim(),
      descr: frm.descricao.value.trim(),
      day: modalDate.value,
      hour: document.querySelector("#time-modal").value,
    };

    // Validação simples (opcional)
    if (Object.values(formData).some((value) => !value)) {
      throw new Error("Todos os campos devem ser preenchidos.");
    }

    // Faz o agendamento
    await newSchedule(formData);

    // Exibe mensagem de sucesso no submit
    alert("Agendamento realizado com sucesso!");
    dialog.close();
  } catch (error) {
    console.error("Erro ao realizar o agendamento:", error);
    alert(`Erro: ${error.message}`);
  }
});
