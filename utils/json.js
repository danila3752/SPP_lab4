const fs = require('fs');
const express = require("express");
module.exports.readToJSON = function(path,userId,isAll) {
    let data = fs.readFileSync(path, "utf8")
    let parsedJSON = JSON.parse(data)
    let p = [[]]
    if (path == 'data.json'&& !isAll) {
        for (let i = 0; i < parsedJSON[0].length; i++) {
            if (parsedJSON[0][i].userId == userId) {
                p[0].push(parsedJSON[0][i])
            }
        }
        console.log(JSON.parse(JSON.stringify(Object.assign({}, p))))
        console.log(parsedJSON)
        return JSON.parse(JSON.stringify(Object.assign({}, p)))

    }
    return parsedJSON
}

module.exports.writeToJSON = function(path, obj) {
    const data = JSON.stringify(obj, null, 2);
    fs.writeFileSync(path, data);
    return data;
}