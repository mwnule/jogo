import Monster from "../models/monsterModel.js";

export const store = async (req, res) => {
    try {
        const monster = await Monster.create(req.body)
        return res.status(200).json(monster)
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Erro ao registrar o monstro" })
    }
}

export const index = async (req, res) => {
    try {
        const monster = await Monster.find().exec()
        return res.status(200).json(monster)
    } catch (error) {
        return res.status(400).json({ error: "Erro na listagem dos monstros" })
    }
}

export const show = async (req, res) => {
    try {
      const monster = await Monster.findById(req.params.id).exec();
      if (!monster) {
        return res.status(404).json({ error: 'Monstro nao encontrado' });
      }
      res.json(monster);
    } catch (error) {
      res.status(400).send(error);
    }
};

export const update = async (req, res) => {
    try {
        const monster = await Monster.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(monster)
    } catch (error) {
        return res.status(400).json({ error: "Erro ao atualizar o monstro" })
    }    
}

export const destroy = async (req, res) => {
    try {
        const monster = await Monster.findByIdAndDelete(req.params.id, req.body).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: "Erro ao deletar o monstro" })
    }  
}