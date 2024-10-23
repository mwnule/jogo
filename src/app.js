import express from "express";
import connectDB from "./config/dbConfig.js";
import combatRoutes from "./routes/combatRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import monsterRoutes from "./routes/monsterRoutes.js";

connectDB();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/combat", combatRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/monster", monsterRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
