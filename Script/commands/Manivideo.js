const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "Mani",
  version: "3.0.0",
  hasPermssion: 0,
  credits: "BELAL BOTX666",
  description: "Sad video perfectly sequential player",
  commandCategory: "video",
  usages: "Mani (No serial will be missed)",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID } = event;

  // আপনার দেওয়া ২১টি ভিডিওর নিখুঁত লিস্ট
  const links = [
    "https://i.imgur.com/efujeSb.mp4", // No. 1
    "https://i.imgur.com/9qHtAH5.mp4", // No. 2
    "https://i.imgur.com/DvIy3uB.mp4", // No. 3
    "https://i.imgur.com/HUMT7th.mp4", // No. 4
    "https://i.imgur.com/5JDuFFO.mp4", // No. 5
    "https://i.imgur.com/ufcsl43.mp4", // No. 6
    "https://i.imgur.com/0AwVg2T.mp4", // No. 7
    "https://i.imgur.com/8yGG9Qk.mp4", // No. 8
    "https://i.imgur.com/pWLAvCN.mp4", // No. 9
    "https://i.imgur.com/QihauiW.mp4", // No. 10
    "https://i.imgur.com/vKNO5Td.mp4", // No. 11
    "https://i.imgur.com/mhKPFV6.mp4", // No. 12
    "https://i.imgur.com/d7ZFMMr.mp4", // No. 13
    "https://i.imgur.com/mjbF8EZ.mp4", // No. 14
    "https://i.imgur.com/Mt2qsIh.mp4", // No. 15
    "https://i.imgur.com/ALER7eP.mp4", // No. 16
    "https://i.imgur.com/sHtmmvg.mp4", // No. 17
    "https://i.imgur.com/FEOd8rE.mp4", // No. 18
    "https://i.imgur.com/EZEb7IN.mp4", // No. 19
    "https://i.imgur.com/mLOWOmY.mp4", // No. 20
    "https://i.imgur.com/FmuwMxv.mp4"  // No. 21
  ];

  // সিরিয়াল মনে রাখার জন্য ডাটাবেজ ফাইল
  const savePath = path.join(__dirname, "cache", "mani_exact_serial.json");
  
  // যদি ফাইল না থাকে তবে নতুন করে ০ ইনডেক্স থেকে তৈরি হবে
  if (!fs.existsSync(savePath)) {
    fs.writeJsonSync(savePath, { current: 0 });
  }

  // বর্তমানের সেভ করা ডাটা পড়া
  let storage = fs.readJsonSync(savePath);
  let currentIndex = storage.current;

  // বর্তমান সিরিয়ালের ভিডিও লিংক সিলেক্ট করা
  const videoUrl = links[currentIndex];

  // পরের বার ব্যবহারের জন্য ইনডেক্স ১ বাড়ানো (২১ পার হলে আবার ০ তে ফিরবে)
  storage.current = (currentIndex + 1) % links.length;
  fs.writeJsonSync(savePath, storage);

  const videoPath = path.join(__dirname, "cache", `sad_vid_${Date.now()}.mp4`);
  const infoTag = "Mani] \n┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄";

  // ডাউনলোড ও সেন্ড প্রসেস
  const callback = () => api.sendMessage({
    body: `--- Sad Video Stream ---\n\n[ ${infoTag} ]\n\n--------------------------\n[ Video No: ${currentIndex + 1}/${links.length} ]\nStatus: Successfully Played`,
    attachment: fs.createReadStream(videoPath)
  }, threadID, () => {
    if (fs.existsSync(videoPath)) fs.unlinkSync(videoPath);
  }, messageID);

  request(encodeURI(videoUrl))
    .pipe(fs.createWriteStream(videoPath))
    .on("close", callback);
};
