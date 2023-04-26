const Games = {
	Wow: Symbol("Wow"),
	Minecraft: Symbol("Minecraft"),
	FiveM: Symbol("FiveM")
}

let game = Games.Minecraft

switch (game) {
	case Games.Wow:
	console.log('The Game is World of Warcraft')
	break;
	case Games.Minecraft:
	console.log('The Game is Minecraft')
	break;
	case Games.FiveM:
	console.log('The Game is FiveM')
	break;
	default:
		console.log('Error')
}