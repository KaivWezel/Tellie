import express from "express";
import * as path from "path";
import * as fs from "fs";
const fsPromises = fs.promises;
import { fileURLToPath } from "url";
import moment from "moment";

const app = express();
const port = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let games = { list: [] };
const todayDate = moment().format("YYYYMD");
let id = 0;

// if (fs.existsSync("./games.json")) {
// 	fs.unlinkSync("./games.json");
// } else {
// 	console.log("does not exist");
// }

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/create-game", (req, res) => {
	res.render("create");
});

app.get("/scoreboard/:id", async (req, res) => {
	const id = req.params.id;
	const game = await getGameById(id);
	res.render("scoreboard", { game: game });
});

app.get("/score/:id", async (req, res) => {
	const id = req.params.id;
	const game = await getGameById(id);
	console.log(games.list[0]);
	res.render("score", { game: game });
});

app.get("/overview", async (req, res) => {
	if (fs.existsSync("./games.json")) {
		const data = await fsPromises.readFile("./games.json");
		games = JSON.parse(data);
	}
	res.render("overview", { list: games.list });
});

async function getGameById(id) {
	const data = await fsPromises.readFile("./games.json", "utf8");
	games = await JSON.parse(data);
	const game = games.list.filter((game) => game.id === id);
	return game[0];
}

function writeFile(fileDirectory, fileName, content) {
	return fsPromises.mkdir(fileDirectory, { recursive: true }).then(() => {
		return fsPromises.writeFile(
			path.join(fileDirectory, fileName),
			JSON.stringify(content)
		);
	});
}

async function appendGame(content) {
	try {
		if (fs.existsSync("./games.json")) {
			const data = await fsPromises.readFile("./games.json", "utf8");
			games = await JSON.parse(data);
			games.list.push(content);
			writeFile("./", "games.json", games);
		} else {
			games.list.push(content);
			writeFile("./", "games.json", games);
		}
	} catch (err) {
		console.log(err);
	}
}

app.post("/create-game", async (req, res) => {
	id++;
	const game = {
		date: Date.now(),
		id: todayDate + id,
		teamA: req.body.teamA,
		teamB: req.body.teamB,
		scoreA: "0",
		scoreB: "0",
	};
	await appendGame(game);
	res.redirect(`/scoreboard/${todayDate + id}`);
});

app.post("/update-score/:id", async (req, res) => {
	const id = req.params.id;
	const game = await getGameById(id);
	const index = games.list.findIndex((game) => game.id === id);
	const stats = game;
	stats.scoreA = req.body.scoreA;
	stats.scoreB = req.body.scoreB;
	games.list.splice(index, 1, stats);
	writeFile("./", "games.json", games);
	res.redirect(`/scoreboard/${id}`);
});

app.post("/comment/:id", async (req, res) => {
	const id = req.params.id;
	const game = await getGameById(id);
	const index = games.list.findIndex((game) => game.id === id);
	const comment = req.body.comment;
	game.comments = game.comments || [];
	game.comments.push(comment);
	console.log(game);
	games.list.splice(index, 1, game);
	writeFile("./", "games.json", games);
	res.redirect(`/score/${id}`);
});
