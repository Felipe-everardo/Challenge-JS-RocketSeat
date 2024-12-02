import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedule/show.js";

const selectedDate = document.querySelector("#date");

export async function schedulesDay() {
  console.log("schedulesDay foi chamado");
  try {
    const date = selectedDate.value; 
    const dailySchedules = await scheduleFetchByDay({ date });

    schedulesShow({ dailySchedules }); // Renderiza os agendamentos
  } catch (error) {
    console.error("Erro ao carregar agendamentos:", error);
  }
}

// Atualiza os agendamentos quando a data é alterada
selectedDate.addEventListener("change", schedulesDay);
