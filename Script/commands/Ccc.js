var mysterious = "Siegfried Sama";
const request = require("request");
const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");

module.exports.config = {
  name: "ccc",
  version: "3.1.0",
  hasPermssion: 0,
  credits: `${mysterious}`,
  description: "Girl to boy slap (Fixed Mention Name)",
  commandCategory: "fun",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID, mentions } = event;

  var link = [
    "https://i.imgur.com/gYQEAa9.gif",
    "https://i.imgur.com/4RzBwA3.gif",
    "https://i.imgur.com/hdSsfvz.gif",
    "https://i.imgur.com/hlCrdhk.gif",
    "https://i.imgur.com/qJ8KHKX.gif",
    "https://i.imgur.com/1albCLd.gif",
    "https://i.imgur.com/VOAUb0Y.gif",
    "https://i.imgur.com/mrFGFRT.gif",
    "https://i.imgur.com/M6cXMsu.gif",
    "https://i.imgur.com/P6bU8Al.gif",
    "https://i.imgur.com/3Mpno6D.gif",
    "https://i.imgur.com/GrcZ4Dl.gif",
    "https://i.imgur.com/3LctQ4n.gif",
    "https://i.imgur.com/0fJzlTv.gif",
    "https://i.imgur.com/XRjGuUL.gif",
    "https://i.imgur.com/6uU6g8w.gif",
    "https://i.imgur.com/C8Mi9Vn.gif",
    "https://i.imgur.com/su5zoIL.gif",
    "https://i.imgur.com/96w64pu.gif",
    "https://i.imgur.com/fjVBIT9.gif",
    "https://i.imgur.com/fyGp13f.gif",
    "https://i.imgur.com/eM7Awpr.gif",
    "https://i.imgur.com/9vaarKK.gif"
  ];

  // মেনশন চেক করা
  const mentionIDs = Object.keys(mentions);
  if (mentionIDs.length === 0) return api.sendMessage("কাউকে তো মেনশন কর আগে! 😒", threadID, messageID);

  // মেনশন করা প্রথম ব্যক্তির নাম বের করা
  const userID = mentionIDs[0];
  const nameUser = mentions[userID].replace("@", "");

  const cachePath = path.join(__dirname, "cache", "slap_fix.gif");

  const callback = () => {
    api.sendMessage({
      body: `╭──────•◈•───────╮\n\n\n 🖕🖕 ${nameUser}` + `\n\n  আই চুষে দিব 🥵 🤏\n\n\n╰──────•◈•───────╯`,
      mentions: [{
        tag: nameUser,
        id: userID
      }],
      attachment: fs.createReadStream(cachePath)
    }, threadID, () => {
      if (fs.existsSync(cachePath)) fs.unlinkSync(cachePath);
    }, messageID);
  };

  // র‍্যান্ডম লিংক থেকে ভিডিও ডাউনলোড
  const randomLink = link[Math.floor(Math.random() * link.length)];

  request(encodeURI(randomLink))
    .pipe(fs.createWriteStream(cachePath))
    .on("close", callback);
};
