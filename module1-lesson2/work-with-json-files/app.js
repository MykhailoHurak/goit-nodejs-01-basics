const players = require("./players");

const invokeAction = async ({ action, id, name, country }) => {
    switch (action) {
        case "all":
            const allPlayers = await players.getAll();
            console.log(allPlayers);
            break;
        case "getById":
            const playerById = await players.getById(id);
            console.log(playerById);
            break;
        case "add":
            const addPlayer = await players.add({name, country});
            console.log(addPlayer);
            break;
        case "updateById":
            const updatePlayer = await players.update(id, {name, country});
            console.log(updatePlayer);
            break;
        case "removeById":
            const removePlayer = await players.remove(id);
            console.log(removePlayer);
            break;
        default:
            console.log("Unknown action");
    }
}

// invokeAction({ action: "all" });
// invokeAction({ action: "getById", id: "id-01q" });
// invokeAction({ action: "add", name: "Modric", country: "Croatia" });
// invokeAction({ action: "updateById", id: "j-0Q_lTWbnWDR84Wpa6Rk", name: "De Breine", country: "Belgium" });
invokeAction({ action: "removeById", id: "6J3ldoxrNO_wnf9dNs9JG"});