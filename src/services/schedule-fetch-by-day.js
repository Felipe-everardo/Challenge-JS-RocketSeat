import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/agendamentos`);
    const data = await response.json();

    const dailySchedule = data.filter((schedule) =>
      dayjs(schedule.when).isSame(dayjs(date), "day")
    );

    console.log("Agendamentos do dia:", dailySchedule); // Para validação
    return dailySchedule;
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    alert("Não foi possível buscar os agendamentos do dia selecionado");
  }
}
