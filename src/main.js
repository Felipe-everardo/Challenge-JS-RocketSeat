"use strict"

// CSS
import "./styles/global.css"
import "./styles/modal.css"
import "./styles/schedules.css"
import "./styles/temas.css"

import { setupModal } from './js/modules/modal.js'

const submit = document.querySelector('#newScheduleBtn')

submit.addEventListener('click', () => {
  setupModal()
})