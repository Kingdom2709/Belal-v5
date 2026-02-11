const request = require("request");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "hhh",
  version: "4.0.0",
  hasPermssion: 0,
  credits: "Siegfried Sama",
  description: "Girl to boy slap animation with mention",
  commandCategory: "Entertainment",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID, mentions } = event;
  const mentionIDs = Object.keys(mentions);

  // যদি কাউকে মেনশন না করা হয়
  if (mentionIDs.length == 0) return api.sendMessage("Please mention someone to slap!", threadID, messageID);

  // মেনশন করা ব্যক্তির নাম নেওয়া
  const id = mentionIDs[0];
  const name = mentions[id].replace("@", "");

  const links = [
    "https://i.imgur.com/AOsqr9I.gif", "https://i.imgur.com/AjBUT46.gif",
    "https://i.imgur.com/nAAnaT6.gif", "https://i.imgur.com/KFVJ7f0.gif",
    "https://i.imgur.com/iDh2fpc.gif", "https://i.imgur.com/k8kTWL3.gif",
    "https://i.imgur.com/XjkgvlV.gif", "https://i.imgur.com/LUZG4Kr.gif",
    "https://i.imgur.com/VCbqfmW.gif", "https://i.imgur.com/ABd46Qp.gif",
    "https://i.imgur.com/MH6qoWl.gif", "https://i.imgur.com/ojj62z0.gif",
    "https://i.imgur.com/3qmpK79.gif", "https://i.imgur.com/FctLFUH.gif",
    "https://i.imgur.com/HUS7pKS.gif", "https://i.imgur.com/PAxal0O.gif",
    "https://i.imgur.com/3TOzKPE.gif", "https://i.imgur.com/Xy4RD4b.gif",
    "https://i.imgur.com/npOzDPs.gif", "https://i.imgur.com/9aBtiwE.gif",
    "https://i.imgur.com/BizXRvm.gif", "https://i.imgur.com/lmnnGBg.gif",
    "https://i.imgur.com/j10gZv3.gif", "https://i.imgur.com/lKgtja5.gif",
    "https://i.imgur.com/IjINErh.gif", "https://i.imgur.com/buQCZJx.gif",
    "https://i.imgur.com/kDpH2DN.gif", "https://i.imgur.com/N7p6H5A.gif",
    "https://i.imgur.com/dQUd3Zh.gif", "https://i.imgur.com/oQf1iwl.gif",
    "https://i.imgur.com/l8EpeGm.gif", "https://i.imgur.com/p9aGjlu.gif",
    "https://i.imgur.com/XoUfM1L.gif", "https://i.imgur.com/AN64ISY.gif",
    "https://i.imgur.com/gxuefLX.gif", "https://i.imgur.com/nivOa3P.gif",
    "https://i.imgur.com/VWfwWs0.gif", "https://i.imgur.com/uJZbULR.gif",
    "https://i.imgur.com/vnOInOk.gif", "https://i.imgur.com/FyftWV3.gif",
    "https://i.imgur.com/OOMPEtQ.gif", "https://i.imgur.com/xSvwdlh.gif",
    "https://i.imgur.com/4GwjZlh.gif", "https://i.imgur.com/dSlZzkV.gif",
    "https://i.imgur.com/GQNmfYF.gif", "https://i.imgur.com/BApeRez.gif",
    "https://i.imgur.com/dABPaKh.gif", "https://i.imgur.com/6pwEjg1.gif",
    "https://i.imgur.com/nkarRdc.gif", "https://i.imgur.com/2UjXCYz.gif",
    "https://i.imgur.com/SfvtcBZ.gif"
  ];

  const randomGif = links[Math.floor(Math.random() * links.length)];
  const cachePath = path.join(__dirname, "cache", "slap.gif");

  // ডাটা ডাউনলোড এবং মেসেজ পাঠানো
  const callback = () => api.sendMessage({
    body: `--- Slap Action ---\n\n🖕🖕 ${name}\n\nএই হাত মারা মাগি আই খেলব 🥵 🤏\n\n-------------------\nStatus: Action Executed`,
    mentions: [{ tag: name, id: id }],
    attachment: fs.createReadStream(cachePath)
  }, threadID, () => {
    if (fs.existsSync(cachePath)) fs.unlinkSync(cachePath);
  }, messageID);

  return request(encodeURI(randomGif)).pipe(fs.createWriteStream(cachePath)).on("close", callback);
};
    
