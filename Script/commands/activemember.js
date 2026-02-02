const axios = require('axios');

module.exports.config = {
  name: "activemember",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "ALVI-BOSS",
  description: "শীর্ষ ১০ জন মেম্বারের ট্যাগ সিস্টেম সহ স্টাইলিশ লিডারবোর্ড",
  commandCategory: "group",
  usages: "",
  cooldowns: 15,
};

module.exports.run = async function ({ api, event }) {
  const { threadID, senderID, messageID } = event;

  try {
    const threadInfo = await api.getThreadInfo(threadID);
    const participantIDs = threadInfo.participantIDs;

    const messageCounts = {};
    participantIDs.forEach(id => {
      messageCounts[id] = 0;
    });

    api.sendMessage("📊 র‍্যাঙ্ক বিশ্লেষণ করা হচ্ছে এবং ট্যাগ সেট করা হচ্ছে... একটু অপেক্ষা করুন।", threadID);

    const messages = await api.getThreadHistory(threadID, 1000);

    messages.forEach(msg => {
      const msgSender = msg.senderID;
      if (messageCounts[msgSender] !== undefined) {
        messageCounts[msgSender]++;
      }
    });

    // শীর্ষ ১০ জন সর্ট করা
    const topUsers = Object.entries(messageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    let leaderboard = `┏━━━━━━━━━━━━━━━━━┓\n       🏆  𝗚𝗥𝗢𝗨𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗  🏆\n┗━━━━━━━━━━━━━━━━━┛\n\n`;
    
    const getTitle = (rank) => {
      if (rank === 0) return "「 Legend 」👑";
      if (rank === 1) return "「 Elite 」💎";
      if (rank === 2) return "「 Warrior 」⚔️";
      if (rank < 6) return "「 Active 」🔥";
      return "「 Supporter 」✨";
    };

    const medals = { 0: "🥇", 1: "🥈", 2: "🥉" };
    const mentions = [];
    
    let index = 0;
    for (const [userId, count] of topUsers) {
      if (count > 0) {
        try {
          const info = await api.getUserInfo(userId);
          const name = info[userId].name;
          
          let rankIcon = medals[index] || `🔹 ${index + 1}.`;
          let title = getTitle(index);
          
          // ট্যাগ লজিক: নামের ওপর ট্যাগ বসানো
          leaderboard += `${rankIcon} ${name}\n`;
          leaderboard += `╰─── ${title} 💬 𝙈𝙨𝙜: ${count.toLocaleString()}\n\n`;
          
          mentions.push({
            tag: name,
            id: userId
          });
          
          index++;
        } catch (e) {
          leaderboard += `🔹 ${index + 1}. Unknown User\n╰─── 💬 𝙈𝙨𝙜: ${count}\n\n`;
          index++;
        }
      }
    }

    if (index === 0) {
      return api.sendMessage("❌ বর্তমানে কোনো সক্রিয় মেম্বার ডাটা পাওয়া যায়নি।", threadID, messageID);
    }

    const footer = `━━━━━━━━━━━━━━━━━━\n🗓️ Analysis: Last 1,000 Messages\n🌟 আড্ডা বাড়িয়ে নিজের র‍্যাঙ্ক ধরে রাখুন!`;
    
    return api.sendMessage({
      body: leaderboard + footer,
      mentions: mentions
    }, threadID, messageID);

  } catch (error) {
    console.error(error);
    return api.sendMessage("❌ ত্রুটি ঘটেছে! আবার চেষ্টা করুন।", threadID, messageID);
  }
};
