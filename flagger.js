"use strict";

function flags(obj) {
    let aliasObj = new Object
    aliasObj = {
        alias: {h: "help"},
        description: ""
    }
    for (const [key, value] of Object.entries(obj)) {
        if (key !== "help") {
            aliasObj["alias"][key.at(0)] = key
        } else {
            for (const flag of obj["help"]) {
                aliasObj["description"] += `-${flag.at(0)}, --${flag}: ${obj[flag]}\n`
            }
        }
        if (!obj["help"]) {
            aliasObj["description"] += `-${key.at(0)}, --${key}: ${value}\n`
        }
    }
    aliasObj["description"] = aliasObj["description"].slice(0, -1)

    return aliasObj
}