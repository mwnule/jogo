import Hero from "../models/heroModel.js";

export const store = async (req, res) => {
    try {
        const hero = await Hero.create(req.body)
        return res.status(200).json(hero)
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Erro ao registrar o heroi" })
    }
}

export const index = async (req, res) => {
    try {
        const hero = await Hero.find().exec()
        return res.status(200).json(hero)
    } catch (error) {
        return res.status(400).json({ error: "Erro na listagem dos herois" })
    }
}

export const show = async (req, res) => {
    try {
      const hero = await Hero.findById(req.params.id).exec();
      if (!hero) {
        return res.status(404).json({ error: 'Heroi nao encontrado' });
      }
      res.json(hero);
    } catch (error) {
      res.status(400).send(error);
    }
  };

export const update = async (req, res) => {
    try {
        const hero = await Hero.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(hero)
    } catch (error) {
        return res.status(400).json({ error: "Erro ao atualizar o heroi" })
    }    
}

export const destroy = async (req, res) => {
    try {
        const hero = await Hero.findByIdAndDelete(req.params.id, req.body).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: "Erro ao deletar o heroi" })
    }  
}