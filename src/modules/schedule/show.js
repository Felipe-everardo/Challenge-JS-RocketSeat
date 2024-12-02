import dayjs from "dayjs";

export function schedulesShow({ dailySchedules }) {
  try {
    console.log("Agendamentos recebidos para renderização:", dailySchedules);

    const manhaSection = document.querySelector("#manha");
    const tardeSection = document.querySelector("#tarde");
    const noiteSection = document.querySelector("#noite");

    // Limpa os contêineres antes de renderizar
    manhaSection.querySelector(".schedule-container")?.remove();
    tardeSection.querySelector(".schedule-container")?.remove();
    noiteSection.querySelector(".schedule-container")?.remove();

    const manhaContainer = document.createElement("div");
    manhaContainer.classList.add("schedule-container");

    const tardeContainer = document.createElement("div");
    tardeContainer.classList.add("schedule-container");

    const noiteContainer = document.createElement("div");
    noiteContainer.classList.add("schedule-container");

    dailySchedules.forEach((schedule) => {
      console.log("Agendamento:", schedule);
    
      const scheduleTime = dayjs(schedule.when).utc().local().hour();
      const scheduleElement = createScheduleElement(schedule);
    
      if (scheduleTime >= 9 && scheduleTime < 12) {
        manhaContainer.appendChild(scheduleElement);
      } else if (scheduleTime >= 13 && scheduleTime < 18) {
        tardeContainer.appendChild(scheduleElement);
      } else if (scheduleTime >= 19 && scheduleTime < 21) {
        noiteContainer.appendChild(scheduleElement);
      }
    });
    

    if (manhaContainer.children.length) manhaSection.appendChild(manhaContainer);
    if (tardeContainer.children.length) tardeSection.appendChild(tardeContainer);
    if (noiteContainer.children.length) noiteSection.appendChild(noiteContainer);
  } catch (error) {
    console.error("Erro ao renderizar agendamentos:", error);
  }
}

function createScheduleElement(schedule) {
  const scheduleDiv = document.createElement("div");
  scheduleDiv.classList.add("schedule");

  const scheduleInfo = document.createElement("div");
  scheduleInfo.classList.add("schedule-info");

  const timeP = document.createElement("p");
  timeP.textContent = dayjs(schedule.when).local().format("HH:mm");

  const petOwnerP = document.createElement("p");
  petOwnerP.textContent = `${schedule.pet} / ${schedule.name}`;

  const descrP = document.createElement("p");
  descrP.textContent = schedule.descr;

  const removeP = document.createElement("p");
  removeP.textContent = "Remover agendamento";
  removeP.classList.add("remove-schedule");
  removeP.addEventListener("click", () => removeSchedule(schedule.id));

  scheduleInfo.appendChild(timeP);
  scheduleInfo.appendChild(petOwnerP);
  scheduleDiv.appendChild(scheduleInfo);
  scheduleDiv.appendChild(descrP);
  scheduleDiv.appendChild(removeP);

  return scheduleDiv;
}

async function removeSchedule(id) {
  try {
    await fetch(`http://localhost:3333/agendamentos/${id}`, { method: "DELETE" });
    alert("Agendamento removido com sucesso!");
    location.reload();
  } catch (error) {
    console.error("Erro ao remover agendamento:", error);
    alert("Não foi possível remover o agendamento.");
  }
}
