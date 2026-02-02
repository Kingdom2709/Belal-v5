/** Don't change credits bro i will fix¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "18+v2", // মূল কমান্ড
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Belal BOTX666",
  description: "18+ VIDEOS",
  commandCategory: "video",
  usages: "/18+v2",
  cooldowns: 5,
  // aliases ড্রপ করা হয়েছে
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  var captions = ["18+v2 এই নে এবার যা হেন্ডেল মেরে আয় 🙂"];
  var caption = captions[Math.floor(Math.random() * captions.length)];

  var links = [
      "https://drive.google.com/uc?export=download&id=1OZUKqC7ooU572Vice1a0w3O3qRbC1F-r",
      "https://drive.google.com/uc?export=download&id=1P36Avho0fdTGnIm--wsIbSXqvTtaNbGA",
      "https://drive.google.com/uc?export=download&id=1PU4U-VHzWzZ_3chEOUdUJOeOj_8QTC19",
      "https://drive.google.com/uc?export=download&id=1Q-ZiZE9B1nADleloUlZPk9Yt2UcT9Jli",
      "https://drive.google.com/uc?export=download&id=1Q6ZlUc7gYbKng2T5BW8ihDXSohNVvl9i",
      "https://drive.google.com/uc?export=download&id=1QS5LbZmGXsHynBSVP2eNMBctjp7i8Veh",
      "https://drive.google.com/uc?export=download&id=1QoegqFfHWnaSRimcwZouya7xM9aIYOLO",
      "https://drive.google.com/uc?export=download&id=1RFtXmVTzPt6LkpX2q_2co9_-lpKI5czZ",
      "https://drive.google.com/uc?export=download&id=1Rtx9IpniEP0RQ8cREvf4q5OjoBvlxlVd",
      "https://drive.google.com/uc?export=download&id=1RwR0hE9oroYy1r92qySPSFbddsBdnGZd",
      "https://drive.google.com/uc?export=download&id=1TAshp38cUnJ0bQxSnlur_srBG-iSmhKZ",
      "https://drive.google.com/uc?export=download&id=1V5IB7_yn1mPhgnY15Zqo7hl6_ypAj-c_",
      "https://drive.google.com/uc?export=download&id=1VdwLFjOyTX0n5UwyqMtC8_xnwVCEFx3Y",
      "https://drive.google.com/uc?export=download&id=1Wja3iI8LALkZs_XIMLRziTrcPGMipAvW",
      "https://drive.google.com/uc?export=download&id=1X84nddHJ-_4Lc6p9Hj-IXaBmwVkx4alc",
      "https://drive.google.com/uc?export=download&id=1Xw8Mxk3RJJ3Rc1wCZiRg5oKGRN4e_l2L",
      "https://drive.google.com/uc?export=download&id=1Y34gETXZwRBXf60nYOyDNjMEb3GcHw_p",
      "https://drive.google.com/uc?export=download&id=1Z8fRrmLaq2VopeJDxBRyB6m6Aupq38Fw",
      "https://drive.google.com/uc?export=download&id=1ZHd4NUAaWrlyvysQ1VnfkeexlK2t3u46",
      "https://drive.google.com/uc?export=download&id=1ZW_b6EQ4DQI-hSFw3wJeekaSuL-CTt-X",
      "https://drive.google.com/uc?export=download&id=1ZWnRry0HcXUAkeqvEHR51ukzVMWP4q1j",
      "https://drive.google.com/uc?export=download&id=1_7LZ4go5LMgWvRPoKJIku0_Tz3rxdgS-",
      "https://drive.google.com/uc?export=download&id=1_8uTqb3XQcKdLxg-kCPose2zizbjuEfh",
      "https://drive.google.com/uc?export=download&id=1a3nlk9nFVQ4UHNpXzxWZWz1kzcVW2q3f",
      "https://drive.google.com/uc?export=download&id=1ajf90OK-R27jrqJ_ot8O6bCdtQn8PYo0",
      "https://drive.google.com/uc?export=download&id=1auj8r7iOzIAfxhH0GI9JvuYaPxFs6Or3",
      "https://drive.google.com/uc?export=download&id=1b6O6LdfitQLU5o8YnyOUjRP422eE9qwA",
      "https://drive.google.com/uc?export=download&id=1bZIPoHp6UcMXHIISvA0PNirfnQGN0Fdp",
      "https://drive.google.com/uc?export=download&id=1cDyFQ9BfrqKZH1AYgjT9DDxpR7pTcKVI",
      "https://drive.google.com/uc?export=download&id=1e9Ut8dt4BpEwEoaIbh_4ktCY8pLm_90R",
      "https://drive.google.com/uc?export=download&id=1eBj_m0bsySjUcsJEm8DJ-zGaq9tI3gK4",
      "https://drive.google.com/uc?export=download&id=1eEaIBikLu5kwOw3U3xmowlu7TxNFCYGG",
      "https://drive.google.com/uc?export=download&id=1fltQlOK7O4hBNjzqFrhTcZkkalyX-xtP",
      "https://drive.google.com/uc?export=download&id=1iCgSIdDe3OAlbLfHj9MOM5r4p2wJ3IVX",
      "https://drive.google.com/uc?export=download&id=1iDsDpwRTyqVtlkK1cr2yCmX9RWBqro83",
      "https://drive.google.com/uc?export=download&id=1ilsbQ41h27oYFLTkF7DGh5E1y87Fb4Li",
      "https://drive.google.com/uc?export=download&id=1kvPCFpazUyG4kweLotGo4MBOV6ITbDhO",
      "https://drive.google.com/uc?export=download&id=1l-F5zFd9n3xkpNVQVfEQ1QY5Qk0vSuRP",
      "https://drive.google.com/uc?export=download&id=1lHlClK9_bIsIg4GZXTmtcD2uL7HCBidC",
      "https://drive.google.com/uc?export=download&id=1ldhd9bDe5P7dr5IjRSFNw7_p4-T-bUHq",
      "https://drive.google.com/uc?export=download&id=1lgy4CM0dZTgUQe97cHv8ckI-TH1fEdDA",
      "https://drive.google.com/uc?export=download&id=1mr8XTjOfylN4RU8qHQGGLpdBhD9u1922",
      "https://drive.google.com/uc?export=download&id=1mviQxG7P__nj6pzHykEdOxLERwIJCp8E",
      "https://drive.google.com/uc?export=download&id=1pMNK9J3016kHBePSN0yr0QnDSifDlmvX",
      "https://drive.google.com/uc?export=download&id=1q6BysXVGDKrkoV9cLsdtJf37bkCSpxYf",
      "https://drive.google.com/uc?export=download&id=1qOB3u_06QrNcaKcJrnH27db5gplNCv8n",
      "https://drive.google.com/uc?export=download&id=1qWNdqTwOrc7RJUqgHO9vnC_zWqhobg-8",
      "https://drive.google.com/uc?export=download&id=1qZGH73eGzBngq6tzHtm9ssc3nHRG7gdP",
      "https://drive.google.com/uc?export=download&id=1rGfGZT9gu5H9ABnHN5ekXIb7600gFm9d",
      "https://drive.google.com/uc?export=download&id=1rLAG_cGzBAYE1l2OZCs8tdRtCHFpBmz9",
      "https://drive.google.com/uc?export=download&id=12Q0PJAVmHVgsRF7akn3PNRru-tepia5y",
      "https://drive.google.com/uc?export=download&id=1rULVaU0D727BpFK2Rzuw5quMrYXQuT6T",
      "https://drive.google.com/uc?export=download&id=1s3qb7YOWbuy3yRD9TPyCKVolT15MECKe",
      "https://drive.google.com/uc?export=download&id=1s3qb7YOWbuy3yRD9TPyCKVolT15MECKe",
      "https://drive.google.com/uc?export=download&id=1soaiC_lLQboDwSeIJpse6diMEpcvXQv-",
      "https://drive.google.com/uc?export=download&id=1sxPeSpyIXO-hitBSGElJBzasuSOJXVM4",
      "https://drive.google.com/uc?export=download&id=1vg49E9Hw4w56CSISINZH_ZSQRSIfCVHN",
      "https://drive.google.com/uc?export=download&id=1vmZKmjJmgsDSbtlUqIRCa1rNjKzq_B9v",
      "https://drive.google.com/uc?export=download&id=1woxnScrA2ADpZnTQeQt3tidrXDVGN6Z-",
      "https://drive.google.com/uc?export=download&id=1x164E3sV32WaeduO14BbbNSVjqm-zBW3",
      "https://drive.google.com/uc?export=download&id=1x3N_JlNIROo_2v7A4jYsIzIYd3Ez-0ep"
  ];

  var callback = () => api.sendMessage(
    { body: `「 ${caption} 」`, attachment: fs.createReadStream(__dirname + "/cache/video.mp4") },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/video.mp4")
  );

  return request(encodeURI(links[Math.floor(Math.random() * links.length)]))
    .pipe(fs.createWriteStream(__dirname + "/cache/video.mp4"))
    .on("close", () => callback());
};
