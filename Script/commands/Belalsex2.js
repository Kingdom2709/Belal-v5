module.exports.config = {
  name: "sex2",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "SAHU",
  description: "Sex video",
  commandCategory: "Adult Content",
  usages: "sex",
  cooldowns: 1,
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
  
  const hi = ["✡️⃝🅰🅳🅼🅸🅽 ◎⃝😘─͢͢চৃাঁদেৃঁরৃঁ পাৃঁহা্ঁড়ৃঁ✡️⎞🪽 🥵🫵"];
  const know = hi[Math.floor(Math.random() * hi.length)];
  
  const videoLinks = [
  "https://drive.google.com/uc?export=download&id=1eaqoBe-Ho8Po6CUYaE75BVpp0XyxK3Zw",
"https://drive.google.com/uc?export=download&id=1TKlX2BV58A0Ft0duXYAcl7EZ7GqGHah_",
"https://drive.google.com/uc?export=download&id=1jnxx20Q9Ygl4lBOm_YQEzj38NIMSZ-Y0",
"https://drive.google.com/uc?export=download&id=1fpXRXzNNS8oNlbHI4VI-38RnLLpHae-B",
"https://drive.google.com/uc?export=download&id=1kZzZ4KArcpHCJJz4u_R5By1ScR7GvFQN",
"https://drive.google.com/uc?export=download&id=1E_l3ZNJREgnzwj5uJo1pxfOhVSpt083X",
"https://drive.google.com/uc?export=download&id=1VhRIsKLQiz39iv5lO1F1xwH5CpiiLOhx",
"https://drive.google.com/uc?export=download&id=1dQInGPz_TvldHLssJLhO4BA2G-PN5_k0",
"https://drive.google.com/uc?export=download&id=1TPWdLviy7I4QwQcANiVglsEyqD7dZTDb",
"https://drive.google.com/uc?export=download&id=10JK5YY0IbXDzab3WlzR5JPgsVQoWqTmq",
"https://drive.google.com/uc?export=download&id=1CihqBoVTxxQtHETtMm7GN0fS--CYS70g",
"https://drive.google.com/uc?export=download&id=1wjWBaFTrffeuMnJ48kLnZiNAQzNFv959",
"https://drive.google.com/uc?export=download&id=1acwK8wXbELRXRNEuoCUStm8INvJOEdPj",
"https://drive.google.com/uc?export=download&id=1kkhE3LIy9wKMIDcmRnVJM09ft3CQQ8ri",
"https://drive.google.com/uc?export=download&id=1PUXtTkoteAAVRw55iW_AArMYuPX2ypB8",
"https://drive.google.com/uc?export=download&id=17H-Uo4fgCcn_4nJtlrXoymLGPx8hp-Nx",
"https://drive.google.com/uc?export=download&id=13NNX86xQx53zCAIkyVkuFeOMQKRH_PWW",
"https://drive.google.com/uc?export=download&id=1Q74A0ML_OfLwP9vLDuTRaU_XYCi6bZdZ",
"https://drive.google.com/uc?export=download&id=1z2lFAAhBgX7IlLBKMMeMcOw3NGEtARLp",
"https://drive.google.com/uc?export=download&id=1F5JZrgtfPD9t6jkjqzsDOoClTkwK62Rw",
"https://drive.google.com/uc?export=download&id=1GFbPeeUIeka22OmlrP6U5jm6BKsm-puc",
"https://drive.google.com/uc?export=download&id=11Fkkgtz-lPGr2olX1eyw80b3FeheL1wJ",
"https://drive.google.com/uc?export=download&id=153LQS0yhWWYInsZqVGEbFBVDA1Rk_WRT",
"https://drive.google.com/uc?export=download&id=1g_-aur5SaRv_N2vrOGh1AIu5NyRw9PK5",
"https://drive.google.com/uc?export=download&id=10jZKiN7Viwh6s7eeVKyRb2pYkO8wfJXQ",
"https://drive.google.com/uc?export=download&id=1kt7oQDq-iE1cMI7GwZnDsmrPPrN76P0b",
"https://drive.google.com/uc?export=download&id=15DymBSASfNm-JiIlq6mSCQc9tndQgRFR",
"https://drive.google.com/uc?export=download&id=1sMGc8hu2la72Trxo1aHj_CRzGYM8MU7f",
"https://drive.google.com/uc?export=download&id=1s73BhDMSTA7CZDN25QOSzwDexqQ6TdiE",
"https://drive.google.com/uc?export=download&id=16YS70w1-9YS9CWP_Qe_Dm7IM_Ez8R1cW",
"https://drive.google.com/uc?export=download&id=17raMR37opqcu2urnJlAoB3eg3fSW02i-",
"https://drive.google.com/uc?export=download&id=113S679OSYwWmbIw0ItcdQQagKqosCBqt",
"https://drive.google.com/uc?export=download&id=16QDTCPasyhki8L80skzVM9PBn9KCU0QG",  
  ];

  const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
  const filePath = __dirname + "/cache/ssexx.mp4";

  const callback = () => {
    api.sendMessage(
      { body: `「 ${know} 」`, attachment: fs.createReadStream(filePath) },
      event.threadID,
      () => fs.unlinkSync(filePath)
    );
  };

  return request(encodeURI(randomLink))
    .pipe(fs.createWriteStream(filePath))
    .on("close", () => callback());
};
