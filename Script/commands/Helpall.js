const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports.config = {
 name: "helpall",
 version: "5.0.0",
 hasPermssion: 0,
 credits: "BELAL BOTX666",
 description: "Clean and Simple Master Command List",
 commandCategory: "system",
 usages: "[No args]",
 cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
 const { commands } = global.client;
 const { threadID, messageID } = event;

 // ক্যাটাগরি অনুযায়ী সাজানো
 const categories = {};
 for (let [name, value] of commands) {
    const category = value.config.commandCategory || "General";
    if (!categories[category]) categories[category] = [];
    categories[category].push(name);
 }

 const sig = "┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄";
 
 // মেইন ডিজাইন শুরু (সাধারণ ইংরেজি ফন্ট)
 let finalText = `--- BELAL BOT X666 ---\n\n`;

 for (const category in categories) {
    finalText += `[ ${category.toUpperCase()} ]\n`;
    // কমান্ডগুলোকে লিস্ট আকারে সাজানো
    const cmdList = categories[category].sort().map(cmd => `> ${cmd}`).join("\n");
    finalText += `${cmdList}\n\n`;
 }

 finalText += `--------------------------\n`;
 finalText += `Owner: ${sig}\n`;
 finalText += `Total: ${commands.size} Commands\n`;
 finalText += `Status: Active & Secure\n`;
 finalText += `--------------------------`;

 // আপনার স্পেশাল ইমেজ লিঙ্ক
 const backgrounds = [
 "https://i.imgur.com/6b6DGcW.jpeg",
 "https://i.imgur.com/FQQq8WH.jpeg"
 ];
 
 const selectedBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
 const cacheDir = path.join(__dirname, "cache");
 if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);
 const imgPath = path.join(cacheDir, `helpall_${Date.now()}.jpg`);

 const callback = () =>
 api.sendMessage({ 
    body: finalText, 
    attachment: fs.createReadStream(imgPath) 
 }, threadID, () => {
    if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
 }, messageID);

 request(encodeURI(selectedBg))
 .pipe(fs.createWriteStream(imgPath))
 .on("close", callback);
};
  
