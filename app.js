const sessionSenderConfig = { serverId: 151, active: true };

function savePAYMENT(payload) {
    let result = payload * 95;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module sessionSender loaded successfully.");