const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.config = {
  name: "anisearch",
  version: "2.5.0",
  hasPermssion: 0,
  credits: "ALVI-BOSS",
  description: "Search and download High-Quality Anime Edits",
  commandCategory: "media",
  usages: "[anime name]",
  cooldowns: 10,
  dependencies: {
    "axios": "",
    "fs-extra": ""
  }
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;
  const query = args.join(' ');

  if (!query) return api.sendMessage("✨ অনুগ্রহ করে এনিমে এর নাম লিখুন!\nউদাহরণ: /anisearch Naruto", threadID, messageID);

  try {
    // রিঅ্যাকশন এবং প্রাথমিক মেসেজ
    api.setMessageReaction("🔍", messageID, (err) => {}, true);
    
    const waitMsg = await api.sendMessage(`✨ 𝗔𝗻𝗶𝗺𝗲 𝗘𝗱𝗶𝘁 𝗗𝗲𝘁𝗲𝗰𝘁𝗶𝗻𝗴... ✨\n━━━━━━━━━━━━━━━━━━━━\n🔍 𝗤𝘂𝗲𝗿𝘆: ${query}\n⌛ আপনার জন্য সেরা ভিডিওটি খোঁজা হচ্ছে...`, threadID, messageID);

    // টিকটক এপিআই থেকে ডাটা ফেচিং
    const modifiedQuery = `${query} anime edit`;
    const response = await axios.get(`https://lyric-search-neon.vercel.app/kshitiz?keyword=${encodeURIComponent(modifiedQuery)}`);
    const videos = response.data;

    if (!videos || videos.length === 0) {
      api.unsendMessage(waitMsg.messageID);
      return api.sendMessage(`❌ দুঃখিত! "${query}" এর কোনো এনিমে এডিট পাওয়া যায়নি।`, threadID, messageID);
    }

    // র‍্যান্ডম ভিডিও সিলেকশন
    const selectedVideo = videos[Math.floor(Math.random() * videos.length)];
    const videoUrl = selectedVideo.videoUrl;

    if (!videoUrl) {
      api.unsendMessage(waitMsg.messageID);
      return api.sendMessage("❌ ভিডিও ইউআরএল খুঁজে পাওয়া যায়নি!", threadID, messageID);
    }

    // ভিডিও স্ট্রিম বাফার হিসেবে ডাউনলোড করা
    const videoStream = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    
    const cachePath = path.join(__dirname, 'cache', `ani_${Date.now()}.mp4`);
    if (!fs.existsSync(path.join(__dirname, 'cache'))) fs.mkdirSync(path.join(__dirname, 'cache'));
    
    fs.writeFileSync(cachePath, Buffer.from(videoStream.data, 'utf-8'));

    // প্রলয়ংকরী সুন্দর ডিজাইন ক্যাপশন
    const msg = {
      body: `🎥 𝗔𝗡𝗜𝗠𝗘 𝗘𝗗𝗜𝗧 𝗙𝗢𝗨𝗡𝗗! 🎥\n━━━━━━━━━━━━━━━━━━━━\n🌟 𝗦𝗲𝗮𝗿𝗰𝗵: ${query.toUpperCase()}\n🎬 𝗧𝘆𝗽𝗲: Anime Cinematic Edit\n⚡ 𝗤𝘂𝗮𝗹𝗶𝘁𝘆: High Definition\n━━━━━━━━━━━━━━━━━━━━\n✨ 𝗘𝗻𝗷𝗼𝘆 𝘆𝗼𝘂𝗿 𝗮𝗻𝗶𝗺𝗲 𝘃𝗶𝗯𝗲 ✨`,
      attachment: fs.createReadStream(cachePath)
    };

    api.unsendMessage(waitMsg.messageID);
    api.setMessageReaction("✅", messageID, (err) => {}, true);

    return api.sendMessage(msg, threadID, () => {
      if (fs.existsSync(cachePath)) fs.unlinkSync(cachePath);
    }, messageID);

  } catch (error) {
    console.error(error);
    api.setMessageReaction("❌", messageID, (err) => {}, true);
    return api.sendMessage("⚠️ ভিডিওটি প্রসেস করার সময় একটি ত্রুটি ঘটেছে। পরে চেষ্টা করুন।", threadID, messageID);
  }
};
