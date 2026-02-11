const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');

const pathFile = path.join(__dirname, '/cache/prefix_status.txt');
const serialFile = path.join(__dirname, '/cache/prefix_serial.json');

module.exports.config = {
  name: "X666",
  version: "2.0.0",
  hasPermssion: 2,
  credits: "BELAL BOTX666",
  prefix: true,
  description: "সিরিয়াল অনুযায়ী প্রিফিক্স ভিডিও রেসপন্স",
  commandCategory: "system",
  usages: "prefix on/off",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ api, event }) => {
  const { threadID, messageID, body } = event;
  if (!body) return;

  // অন/অফ স্ট্যাটাস চেক
  if (!fs.existsSync(pathFile)) fs.writeFileSync(pathFile, 'true');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable !== "true") return;

  const msg = body.toLowerCase();
  if (msg.indexOf("prefix") === 0 || msg === "প্রিফিক্স") {
    
    // ভিডিও লিংকের লিস্ট (সিরিয়াল অনুযায়ী চলবে)
    const imgur = [
      "https://i.imgur.com/7iSEVbJ.mp4",
      "https://i.imgur.com/LPzGxdH.mp4",
      "https://i.imgur.com/h35gNwV.mp4",
      "https://i.imgur.com/zn0OM6Q.mp4",
      "https://i.imgur.com/luAKUui.mp4",
      "https://i.imgur.com/MKrOU6c.mp4",
      "https://i.imgur.com/loyKW60.mp4",
      "https://i.imgur.com/iH6Fw42.mp4",
      "https://i.imgur.com/sHhBFTZ.mp4",
      "https://i.imgur.com/CAZdrYq.mp4"
    ];

    // সিরিয়াল মেইনটেইন লজিক
    if (!fs.existsSync(serialFile)) fs.writeJsonSync(serialFile, { index: 0 });
    let storage = fs.readJsonSync(serialFile);
    let currentIndex = storage.index;

    const videoLink = imgur[currentIndex];

    // ইনডেক্স আপডেট (১০টি শেষ হলে আবার ০ থেকে শুরু)
    storage.index = (currentIndex + 1) % imgur.length;
    fs.writeJsonSync(serialFile, storage);

    try {
      const threadInfo = await api.getThreadInfo(threadID);
      const threadName = threadInfo.threadName || "Unknown Group";
      const time = moment.tz("Asia/Dhaka").format("LLLL");

      const callback = async () => {
        const text = `╭•┄┅═══❁🌺❁═══┅┄•╮\n   🤍✨𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✨🤍\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n𝐁𝐎𝐓 𝐍𝐀𝐌Ｅ : ${global.config.BOTNAME}\n𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ｢ ${global.config.PREFIX} ｣\n𝐑𝐎𝐁𝐎𝐓 𝐂𝐌𝐃 : ｢ ${client.commands.size} ｣\n𝐓𝐈𝐌𝐄 : ${time}\n𝐆𝐑𝐎𝐔𝐏 : ${threadName}\n\n[ Video No: ${currentIndex + 1}/${imgur.length} ]`;

        api.sendMessage({
          body: text,
          attachment: fs.createReadStream(__dirname + `/cache/prefix_vid.mp4`)
        }, threadID, () => fs.unlinkSync(__dirname + `/cache/prefix_vid.mp4`), messageID);
      };

      const res = await axios.get(videoLink, { responseType: 'arraybuffer' });
      fs.writeFileSync(__dirname + `/cache/prefix_vid.mp4`, Buffer.from(res.data, 'binary'));
      callback();

    } catch (err) {
      console.error(err);
    }
  }
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  if (!args[0]) return api.sendMessage(`ভুল ফরম্যাট! ব্যবহার করুন: ${global.config.PREFIX}${this.config.name} on/off`, threadID, messageID);

  if (args[0] == "on") {
    fs.writeFileSync(pathFile, "true");
    return api.sendMessage("Prefix response has been turned ON.", threadID, messageID);
  } else if (args[0] == "off") {
    fs.writeFileSync(pathFile, "false");
    return api.sendMessage("Prefix response has been turned OFF.", threadID, messageID);
  }
};
