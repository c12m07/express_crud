import express from 'express'

import {
  getMedicamentos,
  getMedicamentoById,
  createMedicamento,
  updateMedicamento,
  deleteMedicamento
} from '../controllers/Medicamentos.js'

const Router = express.Router();

Router.get('/medicamentos', getMedicamentos);

Router.get('/medicamentos/:id', getMedicamentoById);

Router.post('/medicamentos', createMedicamento);

Router.put('/medicamentos/:id', updateMedicamento);

Router.delete('/medicamentos/:id', deleteMedicamento);

export default Router
