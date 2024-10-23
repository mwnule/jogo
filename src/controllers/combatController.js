import Combat from "../models/combatModel.js";

export const store = async (req, res) => {
    try {
        const combat = await Combat.create(req.body)
        return res.status(200).json(combat)
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Erro no registro do combate" })
    }
}

export const show = async (req, res) => {
    try {
      const combat = await Combat.findById(req.params.id).exec();
      if (!combat) {
        return res.status(404).json({ error: 'Combate nao encontrado' });
      }
      res.json(combat);
    } catch (error) {
      res.status(400).send(error);
    }
};

export const index = async (req, res) => {
    try {
        const combat = await Combat.find().exec()
        return res.status(200).json(combat)
    } catch (error) {
        return res.status(400).json({ error: "Erro no registro do combate" })
    }
}

export const update = async (req, res) => {
    try {
        const combat = await Combat.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(combat)
    } catch (error) {
        return res.status(400).json({ error: "Erro ao atualizar o combate" })
    }    
}

export const destroy = async (req, res) => {
    try {
        const combat = await Combat.findByIdAndDelete(req.params.id, req.body).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: "Erro ao registrar o combate" })
    }  
}