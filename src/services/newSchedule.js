import {apiConfig} from "./api-config.js"

export async function newSchedule({ id, name, pet, tel, descr, day, hour}) {
  try {
    await fetch(`${apiConfig.baseURL}/agendamentos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id, name, pet, tel, descr, day, hour}),
    })

    alert('Agendamento realizado com sucesso!')
  } catch (error) {
    console.log(error);
    alert('Não foi possivel agendar')
  }
}