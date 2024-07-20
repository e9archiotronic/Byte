(function (_0x163e8b, _0x5a6816) {
    const _0x21b42c = _0x163e8b();
    while (true) {
      try {
        const _0x502e62 = -parseInt(_0xfd30(1948, 'yK[[')) / 1 * (parseInt(_0xfd30(1580, 'lEAn')) / 2) + -parseInt(_0xfd30(3237, '#o*&')) / 3 * (-parseInt(_0xfd30(4914, 'HS@a')) / 4) + parseInt(_0xfd30(3511, 'xTWN')) / 5 + -parseInt(_0xfd30(2327, 'Feil')) / 6 * (-parseInt(_0xfd30(1511, 'afWg')) / 7) + -parseInt(_0xfd30(2847, 'GXWo')) / 8 + parseInt(_0xfd30(3524, '2vgq')) / 9 * (-parseInt(_0xfd30(2007, 'nU)g')) / 10) + parseInt(_0xfd30(2404, 'HS@a')) / 11;
        if (_0x502e62 === _0x5a6816) {
          break;
        } else {
          _0x21b42c.push(_0x21b42c.shift());
        }
      } catch (_0x3683e8) {
        _0x21b42c.push(_0x21b42c.shift());
      }
    }
  })(_0x3cbe, 133449);
  const config = require("../settings");
  function _0x3785e6(_0x2e2114, _0x3e8697, _0x3af4bd, _0x5787f4, _0x23db59) {
    return _0xfd30(_0x3e8697 + 0x2f7, _0x3af4bd);
  }
  const apkdl = require("../lib/apkdl");
  var request = require("request");
  const {
    mediafireDl
  } = require("mfiredlcore-vihangayt");
  const {
    pinterest,
    wallpaper,
    wikimedia,
    quotesAnime,
    aiovideodl,
    umma,
    ringtone,
    styletext
  } = require("../lib/scraper");
  const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    jsonformat
  } = require("../lib/functions");
  const fg = require("api-dylux");
  const {
    searchSinhalasub,
    downSinhalasub
  } = require("../lib/movie.js");
  const l = console.log;
  const getFbVideoInfo = require("fb-downloader-scrapper");
  var {
    subsearch,
    subdl
  } = require("@sl-code-lords/si-subdl");
  var {
    SinhalaSub
  } = require("@sl-code-lords/movie-dl");
  const {
    Tiktok
  } = require("../lib/tiktok");
  function regtik(_0x3866e0) {
    return _0x3866e0.includes("tiktok.com");
  }
  const {
    cmd,
    commands
  } = require("../lib/command");
  let soundcloud = async _0x1a7a8a => {
    return new Promise((_0x327760, _0x21eb97) => {
      const _0x3c77b0 = {
        method: "POST",
        url: "https://www.klickaud.co/download.php",
        headers: {},
        formData: {}
      };
      _0x3c77b0.headers["content-type"] = "application/x-www-form-urlencoded";
      _0x3c77b0.formData.value = _0x1a7a8a;
      _0x3c77b0.formData["2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37"] = "710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3";
      request(_0x3c77b0, async function (_0x8d052b, _0x513f34, _0x3b1964) {
        if (_0x8d052b) {
          throw new Error(_0x8d052b);
        }
        const _0x2f65c3 = cheerio.load(_0x3b1964);
        _0x327760({
          'judul': _0x2f65c3("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)").text(),
          'download_count': _0x2f65c3("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)").text(),
          'thumb': _0x2f65c3("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img").attr("src"),
          'link': _0x2f65c3("#dlMP3").attr("onclick").split("downloadFile('")[1].split("',")[0]
        });
      });
    });
  };
  let axios = require("axios");
  async function ssearch(_0x5da8da) {
    let _0x317925 = await axios.get("https://m.soundcloud.com/search?q=" + encodeURIComponent(_0x5da8da), {
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      }
    });
    let _0x30e2f7 = cheerio.load(_0x317925.data);
    let _0x3b5715 = [];
    _0x30e2f7("div > ul > li > div").each(function (_0xdfdf45, _0x2dfda0) {
      let _0x32517a = _0x30e2f7(_0x2dfda0).find('a').attr("aria-label");
      let _0x2a7ad2 = "https://m.soundcloud.com" + _0x30e2f7(_0x2dfda0).find('a').attr("href");
      let _0x386439 = _0x30e2f7(_0x2dfda0).find("a > div > div > div > picture > img").attr("src");
      let _0x4b1e1a = _0x30e2f7(_0x2dfda0).find("a > div > div > div").eq(1).text();
      let _0x1e1b7c = _0x30e2f7(_0x2dfda0).find("a > div > div > div > div > div").eq(0).text();
      let _0x2dbdc9 = _0x30e2f7(_0x2dfda0).find("a > div > div > div > div > div").eq(1).text();
      let _0x319c6c = _0x30e2f7(_0x2dfda0).find("a > div > div > div > div > div").eq(2).text();
      const _0x57f630 = {
        title: _0x32517a,
        url: _0x2a7ad2,
        thumb: _0x386439,
        artist: _0x4b1e1a,
        views: _0x1e1b7c,
        release: _0x319c6c,
        timestamp: _0x2dbdc9
      };
      _0x3b5715.push(_0x57f630);
    });
    return {
      'status': _0x317925.status,
      'creator': "Caliph",
      'result': _0x3b5715
    };
  }
  var needus = '';
  if (config.LANG === 'SI') {
    needus = "*කරුණාකර මට threads url එකක් දෙන්න !!*";
  } else {
    needus = "*Please give me threads url !!*";
  }
  var desc = '';
  if (config.LANG === 'SI') {
    desc = "Tiktok වෙතින් වීඩියෝ බාගත කරයි.";
  } else {
    desc = "Download videos from Facebook.";
  }
  var N_FOUND = '';
  if (config.LANG === 'SI') {
    N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
  } else {
    N_FOUND = "*I couldn't find anything :(*";
  }
  var urlneed = '';
  if (config.LANG === 'SI') {
    urlneed = "*කරුණාකර Tiktok video url එකක් ලබා දෙන්න*";
  } else {
    urlneed = "*Please give me tiktok video url..*";
  }
  if (config.COMMAND_TYPE === "button") {
    const _0x5d1030 = {
      pattern: "save",
      category: "download",
      react: '🎧',
      use: ".save",
      filename: __filename
    };
    cmd(_0x5d1030, async (_0x2af288, _0x4e4a66, _0xc0056e, {
      from: _0x174bfa,
      q: _0x1332f9,
      reply: _0x30d393
    }) => {
      try {
        var _0x5cb0b1 = _0xc0056e.key.remoteJid;
        const _0xba2489 = _0x5cb0b1?.["endsWith"]("@g.us");
        var _0x555eae = _0xba2489 ? ms.key.participant ? ms.key.participant : ms.participant : _0x5cb0b1;
        var _0x5cb494 = _0xc0056e.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
        var _0x555eae = _0xba2489 ? _0xc0056e.key.participant ? _0xc0056e.key.participant : _0xc0056e.participant : _0x5cb0b1;
        if (_0x5cb494) {
          console.log(_0x5cb494);
          let _0x1c88db;
          if (_0x5cb494.imageMessage) {
            let _0xea933d = await _0x2af288.downloadAndSaveMediaMessage(_0x5cb494.imageMessage);
            const _0x2d99c7 = {
              url: _0xea933d
            };
            const _0x2af091 = {
              image: _0x2d99c7,
              caption: _0x5cb494.imageMessage.caption
            };
            _0x1c88db = _0x2af091;
          } else {
            if (_0x5cb494.videoMessage) {
              let _0x4f98eb = await _0x2af288.downloadAndSaveMediaMessage(_0x5cb494.videoMessage);
              const _0x14831e = {
                url: _0x4f98eb
              };
              const _0x15cf36 = {
                video: _0x14831e,
                caption: _0x5cb494.videoMessage.caption
              };
              _0x1c88db = _0x15cf36;
            } else {
              if (_0x5cb494.audioMessage) {
                let _0x1b7b75 = await _0x2af288.downloadAndSaveMediaMessage(_0x5cb494.audioMessage);
                const _0x12382c = {
                  url: _0x1b7b75
                };
                const _0x37af14 = {
                  audio: _0x12382c,
                  mimetype: "audio/mp4"
                };
                _0x1c88db = _0x37af14;
              } else {
                if (_0x5cb494.stickerMessage) {
                  let _0x545f8e = await _0x2af288.downloadAndSaveMediaMessage(_0x5cb494.stickerMessage);
                  const _0x655af = {
                    pack: "X-BYTE",
                    type: StickerTypes.CROPPED,
                    categories: ['🤩', '🎉'],
                    id: "12345",
                    quality: 0x46,
                    background: "transparent"
                  };
                  let _0xb58048 = new Sticker(_0x545f8e, _0x655af);
                  const _0x2ddbd1 = await _0xb58048.toBuffer();
                  const _0x2b61d7 = {
                    sticker: _0x2ddbd1
                  };
                  _0x1c88db = _0x2b61d7;
                } else {
                  const _0x268247 = {
                    q: _0x5cb494.conversation
                  };
                  _0x1c88db = _0x268247;
                }
              }
            }
          }
          _0x2af288.sendMessage(_0x555eae, _0x1c88db);
        } else {
          _0x30d393("Mention the message that you want to save");
        }
      } catch (_0x21d2ad) {
        console.log(_0x21d2ad);
        _0x30d393("*Error !!*");
      }
    });
    const _0x37b058 = {
      pattern: "smovie",
      react: '📃',
      desc: "Search movie  from Web Site",
      category: "download",
      use: ".slsub",
      filename: __filename
    };
    cmd(_0x37b058, async (_0x31af69, _0x150331, _0x2fd3af, {
      from: _0x856ea1,
      l: _0x3928c7,
      quoted: _0x53f478,
      body: _0x362675,
      isCmd: _0x50220b,
      command: _0x23aaf2,
      args: _0x1f2b4a,
      q: _0x51ed61,
      isGroup: _0x253f3c,
      sender: _0x55f556,
      senderNumber: _0x55ed9d,
      botNumber2: _0x2f74af,
      botNumber: _0x1939e8,
      pushname: _0x5f4da0,
      isMe: _0x241890,
      isOwner: _0x5bdd40,
      groupMetadata: _0x2fc5b1,
      groupName: _0x9f88cb,
      participants: _0x50b75c,
      groupAdmins: _0x4635f7,
      isBotAdmins: _0x2fe03b,
      isCreator: _0x417b91,
      isDev: _0x29df0d,
      isAdmins: _0x46c005,
      reply: _0x720fd
    }) => {
      try {
        if (!_0x51ed61) {
          return _0x720fd("❗ *Please enter movie name to download*");
        }
        var {
          SinhalaSub: _0x267697
        } = require("@sl-code-lords/movie-dl");
        var _0x2d9d02 = await _0x267697.movie(_0x51ed61);
        let _0x2bea70 = "X - B Y T E | MOVIE SEARCHER\n\n";
        for (let _0x47f71e = 0; _0x47f71e < 1; _0x47f71e++) {
          _0x2bea70 += "*⛓️ No:* " + _0x2d9d02.result[_0x47f71e].title + "\n";
          _0x2bea70 += "*📃 Title:* " + _0x2d9d02.result[_0x47f71e].subtitle_author + "\n";
          _0x2bea70 += "*📚 CatName:* " + _0x2d9d02.result[_0x47f71e].country + "\n";
          _0x2bea70 += "*🕒 Time:* " + _0x2d9d02.result[_0x47f71e].duration + "\n";
          _0x2bea70 += "*📚 CatName:* " + _0x2d9d02.result[_0x47f71e].categories + "\n";
          _0x2bea70 += "*🕒 Time:* " + _0x2d9d02.result[_0x47f71e].release_date + "\n";
          _0x2bea70 += "*📎 Link:* " + _0x2d9d02.result[_0x47f71e].cast + "\n\n--------------------------------------------\n\n\n";
        }
        return await _0x720fd(_0x2bea70);
        const _0x7529e6 = {
          url: _0x2d9d02.result[i].images
        };
        const _0xcf7fdb = {
          image: _0x7529e6,
          caption: _0x2bea70
        };
        const _0x23215f = {
          quoted: _0x150331
        };
        return await _0x31af69.sendMessage(_0x856ea1, _0xcf7fdb, _0x23215f);
      } catch (_0x5d3a31) {
        _0x720fd("🚫 *Error Accurated !!*\n\n" + _0x5d3a31);
        _0x3928c7(_0x5d3a31);
      }
    });
    const _0x5bcd28 = {
      pattern: "soundcloud",
      react: "🗃️",
      desc: "Download songs in SoundCloud",
      category: "download",
      use: ".soundcloud",
      filename: __filename
    };
    cmd(_0x5bcd28, async (_0x55ae5a, _0x90627f, _0x340741, {
      from: _0xa33db8,
      q: _0x145d64,
      pushname: _0x10131f,
      reply: _0x11dd98
    }) => {
      try {
        const _0x59fc56 = await ssearch(_0x145d64);
        const _0x51346a = _0x59fc56.result;
        const _0x7b7d14 = [];
        for (var _0x552e35 = 0; _0x552e35 < _0x51346a.length; _0x552e35++) {
          _0x7b7d14.push({
            'header': _0x552e35 + 1,
            'title': '' + _0x51346a[_0x552e35].title,
            'description': _0x51346a[_0x552e35].title + " | " + _0x51346a[_0x552e35].artist + " | " + _0x51346a[_0x552e35].views + " | " + _0x51346a[_0x552e35].release + " | " + _0x51346a[_0x552e35].timestamp,
            'id': ".selectaud3 " + _0x51346a[_0x552e35].url
          });
        }
        const _0x5e99ec = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x55875d = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x5e99ec)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select news types",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x7b7d14
            }]
          })
        }];
        const _0x31de12 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "> 📥 X-BYTE SOUNDCLOUD 📥\n\n\t SONGS DOWNLOADER 📥"
        };
        return await _0x55ae5a.sendButtonMessage(_0xa33db8, _0x55875d, _0x340741, _0x31de12);
      } catch (_0x567fbd) {
        _0x11dd98("*Error !!*");
        console.log(_0x567fbd);
      }
    });
    const _0xbb69df = {
      alias: ["selectaud3"],
      react: '🎧',
      filename: __filename
    };
    cmd(_0xbb69df, async (_0x5a64a0, _0x45e283, _0x5aba22, {
      from: _0x139dfc,
      q: _0x7e3450,
      reply: _0x3010b7
    }) => {
      try {
        if (!_0x7e3450) {
          return await _0x3010b7("*Please enter a query or a url!*");
        }
        let _0x1c1322 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Audio",
            'id': ".soundaud " + _0x7e3450
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Document",
            'id': ".sounddoc " + _0x7e3450
          })
        }];
        const _0x3852dc = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: "`✦ 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦`\n\n  > *SELECT AUDIO QUALITY*"
        };
        return await _0x5a64a0.sendButtonMessage(_0x139dfc, _0x1c1322, _0x45e283, _0x3852dc);
      } catch (_0x52781b) {
        console.log(_0x52781b);
        _0x3010b7("*Error !!*");
      }
    });
    const _0x119e72 = {
      pattern: "sounddoc",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x119e72, async (_0x345a26, _0x20f138, _0x555ed6, {
      from: _0x1bd775,
      l: _0x2b8e42,
      quoted: _0x5b69ac,
      body: _0x3e7c32,
      isCmd: _0x48fa85,
      command: _0x120a56,
      args: _0x444b78,
      q: _0x1bfd3e,
      isGroup: _0xd59dcf,
      sender: _0x969fca,
      senderNumber: _0x1c75cc,
      botNumber2: _0x268a84,
      botNumber: _0x34b944,
      pushname: _0x32ab2f,
      isMe: _0x42478e,
      isOwner: _0x1e0d9b,
      groupMetadata: _0x2b8c51,
      groupName: _0x3a1fbe,
      participants: _0x2c51e2,
      groupAdmins: _0x2b0475,
      isBotAdmins: _0x6b7158,
      isAdmins: _0xd03c66,
      reply: _0x3a2603
    }) => {
      try {
        const _0x2f6a29 = {
          text: '📥',
          key: _0x20f138.key
        };
        const _0x12d67a = {
          react: _0x2f6a29
        };
        await _0x345a26.sendMessage(_0x1bd775, _0x12d67a);
        const _0x377e7d = {
          text: "*Need link...*"
        };
        const _0x2ebacd = {
          quoted: _0x20f138
        };
        if (!_0x1bfd3e) {
          return await _0x345a26.sendMessage(_0x1bd775, _0x377e7d, _0x2ebacd);
        }
        const _0x560e7c = await soundcloud(_0x1bfd3e);
        let _0x325800 = "*📚 Name :* " + _0x560e7c.judul + "\n*📺 Down Count :* " + _0x560e7c.download_count;
        const _0x413222 = {
          url: _0x560e7c.thumb
        };
        const _0x3955f6 = {
          image: _0x413222,
          caption: _0x325800
        };
        const _0x238f88 = {
          quoted: _0x20f138
        };
        await _0x345a26.sendMessage(_0x1bd775, _0x3955f6, _0x238f88);
        const _0x3ff31f = {
          url: _0x560e7c.link
        };
        const _0x418a1d = {
          quoted: _0x20f138
        };
        let _0x5cc7bb = await _0x345a26.sendMessage(_0x1bd775, {
          'document': _0x3ff31f,
          'mimetype': "audio/mpeg",
          'fileName': _0x560e7c.judul + '.' + "mp3"
        }, _0x418a1d);
        const _0x12e397 = {
          text: '📁',
          key: _0x5cc7bb.key
        };
        const _0x1f03dd = {
          react: _0x12e397
        };
        await _0x345a26.sendMessage(_0x1bd775, _0x1f03dd);
        const _0x7d8605 = {
          text: '✔',
          key: _0x20f138.key
        };
        const _0xd1a251 = {
          react: _0x7d8605
        };
        await _0x345a26.sendMessage(_0x1bd775, _0xd1a251);
      } catch (_0x30ab65) {
        _0x3a2603("*ERROR !!*");
        _0x2b8e42(_0x30ab65);
      }
    });
    const _0x1068f4 = {
      pattern: "soundaud",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x1068f4, async (_0x2cb024, _0x2fe0cf, _0x1c8ae5, {
      from: _0x28d850,
      l: _0x22b4c8,
      quoted: _0x11b9dc,
      body: _0x3f2049,
      isCmd: _0x261a28,
      command: _0x15a6e7,
      args: _0x5d068f,
      q: _0x2ef9de,
      isGroup: _0x1df4f3,
      sender: _0x242564,
      senderNumber: _0x484be5,
      botNumber2: _0x3dcd76,
      botNumber: _0x1174da,
      pushname: _0x446540,
      isMe: _0x540305,
      isOwner: _0x555a21,
      groupMetadata: _0x29969f,
      groupName: _0x1c3b45,
      participants: _0x5532b7,
      groupAdmins: _0x889cdd,
      isBotAdmins: _0x5a0030,
      isAdmins: _0x275d71,
      reply: _0x44ba97
    }) => {
      try {
        const _0x457596 = {
          text: '📥',
          key: _0x2fe0cf.key
        };
        const _0x37e228 = {
          react: _0x457596
        };
        await _0x2cb024.sendMessage(_0x28d850, _0x37e228);
        const _0x47dcd9 = {
          text: "*Need link...*"
        };
        const _0x177108 = {
          quoted: _0x2fe0cf
        };
        if (!_0x2ef9de) {
          return await _0x2cb024.sendMessage(_0x28d850, _0x47dcd9, _0x177108);
        }
        const _0x4a9bff = await soundcloud(_0x2ef9de);
        let _0xa1f8e5 = "*📚 Name :* " + _0x4a9bff.judul + "\n*📺 Down Count :* " + _0x4a9bff.download_count;
        const _0x2310c4 = {
          url: _0x4a9bff.thumb
        };
        const _0x10abac = {
          image: _0x2310c4,
          caption: _0xa1f8e5
        };
        const _0x286e3c = {
          quoted: _0x2fe0cf
        };
        await _0x2cb024.sendMessage(_0x28d850, _0x10abac, _0x286e3c);
        const _0x3471eb = {
          url: _0x4a9bff.link
        };
        const _0x5b2212 = {
          quoted: _0x2fe0cf
        };
        let _0x5ed588 = await _0x2cb024.sendMessage(_0x28d850, {
          'audio': _0x3471eb,
          'mimetype': "audio/mpeg",
          'fileName': _0x4a9bff.judul + '.' + "mp3"
        }, _0x5b2212);
        const _0x57087d = {
          text: '📁',
          key: _0x5ed588.key
        };
        const _0xb3200b = {
          react: _0x57087d
        };
        await _0x2cb024.sendMessage(_0x28d850, _0xb3200b);
        const _0x4987fd = {
          text: '✔',
          key: _0x2fe0cf.key
        };
        const _0x22865c = {
          react: _0x4987fd
        };
        await _0x2cb024.sendMessage(_0x28d850, _0x22865c);
      } catch (_0x1cf695) {
        _0x44ba97("*ERROR !!*");
        _0x22b4c8(_0x1cf695);
      }
    });
    const _0x576a70 = {
      pattern: "fmmods",
      react: "🗃️",
      desc: "get applications",
      category: "download",
      use: ".fmmods",
      filename: __filename
    };
    cmd(_0x576a70, async (_0x2e154f, _0x16de24, _0x1b8380, {
      from: _0x90d538,
      q: _0x1dee1d,
      pushname: _0x23cb86,
      reply: _0x119b8f
    }) => {
      try {
        let _0x2dc9aa = (await fetchJson("https://BYTE-api-7967fdc132a8.herokuapp.com/downloader/fmmods")).data;
        const _0x44e2d4 = [];
        for (var _0x39a0a8 = 0; _0x39a0a8 < 1; _0x39a0a8++) {
          _0x44e2d4.push({
            'header': '',
            'title': "Beta Whatsapp",
            'description': "Download Beta Whatsapp",
            'id': ".dmod " + _0x2dc9aa.com_whatsapp.link + '+' + _0x2dc9aa.com_whatsapp.name
          });
          _0x44e2d4.push({
            'header': '',
            'title': "Fm Whatsapp",
            'description': "Download Fm Whatsapp",
            'id': ".dmod " + _0x2dc9aa.com_fmwhatsapp.link + '+' + _0x2dc9aa.com_fmwhatsapp.name
          });
          _0x44e2d4.push({
            'header': '',
            'title': "Gb Whatsapp",
            'description': "Download Gb Whatsapp",
            'id': ".dmod " + _0x2dc9aa.com_gbwhatsapp.link + '+' + _0x2dc9aa.com_gbwhatsapp.name
          });
          _0x44e2d4.push({
            'header': '',
            'title': "Yo Whatsapp",
            'description': "Download Yo Whatsapp",
            'id': ".dmod " + _0x2dc9aa.com_yowhatsapp.link + '+' + _0x2dc9aa.com_yowhatsapp.name
          });
        }
        const _0x154369 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x45f3c3 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x154369)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select news types",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x44e2d4
            }]
          })
        }];
        const _0x383ef2 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "> 📥 X-BYTE APKDL 📥\n\n\t APPLICATION DOWNLOADER 📥"
        };
        return await _0x2e154f.sendButtonMessage(_0x90d538, _0x45f3c3, _0x1b8380, _0x383ef2);
      } catch (_0x140fc4) {
        _0x119b8f("*Error !!*");
        console.log(_0x140fc4);
      }
    });
    const _0x2f3343 = {
      pattern: "dmod",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x2f3343, async (_0x297994, _0x3e3ee1, _0x1cd9a8, {
      from: _0x12ce13,
      l: _0x3096b2,
      quoted: _0x475e61,
      body: _0x29a1e2,
      isCmd: _0x3d3918,
      command: _0x10640d,
      args: _0x4a1597,
      q: _0x2bb67e,
      isGroup: _0x478126,
      sender: _0x2628a3,
      senderNumber: _0x26a475,
      botNumber2: _0x2b87a3,
      botNumber: _0x26a535,
      pushname: _0x2e79d4,
      isMe: _0x466ff6,
      isOwner: _0x2f8455,
      groupMetadata: _0xb471a8,
      groupName: _0x14bc31,
      participants: _0x1bd89d,
      groupAdmins: _0x24f78c,
      isBotAdmins: _0x46c91a,
      isAdmins: _0x43a784,
      reply: _0x33a053
    }) => {
      try {
        const _0x1974d7 = {
          text: '📥',
          key: _0x3e3ee1.key
        };
        const _0x3c34a8 = {
          react: _0x1974d7
        };
        await _0x297994.sendMessage(_0x12ce13, _0x3c34a8);
        let [_0x2df622, _0x38914e] = _0x2bb67e.split`+`;
        const _0x20195b = {
          url: _0x2df622
        };
        const _0x4e80d5 = {
          quoted: _0x3e3ee1
        };
        await _0x297994.sendMessage(_0x12ce13, {
          'document': _0x20195b,
          'fileName': _0x38914e + ".apk",
          'mimetype': "application/vnd.android.package-archive"
        }, _0x4e80d5);
        const _0x4c92dc = {
          text: '✔',
          key: _0x3e3ee1.key
        };
        const _0x6a793a = {
          react: _0x4c92dc
        };
        await _0x297994.sendMessage(_0x12ce13, _0x6a793a);
      } catch (_0x26e3ab) {
        _0x33a053("*ERROR !!*");
        _0x3096b2(_0x26e3ab);
      }
    });
    const _0x4e5380 = {
      pattern: "wallpaper",
      use: ".wallpaper bike",
      react: '🎧',
      desc: "Download images",
      category: "download",
      filename: __filename
    };
    cmd(_0x4e5380, async (_0x3dd2ce, _0x4f97f1, _0x3301cc, {
      from: _0x1e3704,
      q: _0x15d327,
      reply: _0x484b01
    }) => {
      try {
        let {
          wallpaper: _0x5791e9
        } = require("../lib/scraper");
        anu = await _0x5791e9(_0x15d327);
        result = anu[Math.floor(Math.random() * anu.length)];
        let _0x52b59f = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Next Picture",
            'id': ".wallpaper " + _0x15d327
          })
        }];
        const _0x5b187a = {
          url: result.image[0]
        };
        const _0x4e03bd = {
          image: _0x5b187a,
          header: '',
          footer: config.FOOTER,
          body: "🔮 𝗧𝗜𝗧𝗟𝗘 : " + result.title + "\n🔮 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : " + result.type + "\n🔮 𝗗𝗘𝗧𝗔𝗜𝗟 : " + result.source + "\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : " + (result.image[2] || result.image[1] || result.image[0])
        };
        return await _0x3dd2ce.sendButtonMessage(_0x1e3704, _0x52b59f, _0x4f97f1, _0x4e03bd);
      } catch (_0x266390) {
        _0x484b01("*Error !!*");
        l(_0x266390);
      }
    });
    const _0x1747d0 = {
      pattern: "apk2",
      react: "🗃️",
      desc: "get applications",
      category: "download",
      use: ".apk2 whatsapp",
      filename: __filename
    };
    cmd(_0x1747d0, async (_0x3398bb, _0x390288, _0x266720, {
      from: _0x7ffdbd,
      q: _0x208959,
      pushname: _0x21a1c1,
      reply: _0x115443
    }) => {
      try {
        const _0x2f41e8 = await apkdl.search(_0x208959);
        const _0x22829b = [];
        for (var _0x3b481e = 0; _0x3b481e < _0x2f41e8.length; _0x3b481e++) {
          _0x22829b.push({
            'header': _0x3b481e + 1,
            'title': '' + _0x2f41e8[_0x3b481e].name,
            'description': '',
            'id': ".dapk " + _0x2f41e8[_0x3b481e].id
          });
        }
        const _0x26b32b = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x189d68 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x26b32b)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select news types",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x22829b
            }]
          })
        }];
        const _0x31975d = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "> 📥 X-BYTE APKDL 📥\n\n\t APPLICATION DOWNLOADER 📥"
        };
        return await _0x3398bb.sendButtonMessage(_0x7ffdbd, _0x189d68, _0x266720, _0x31975d);
      } catch (_0x2ecb56) {
        _0x115443("*Error !!*");
        console.log(_0x2ecb56);
      }
    });
    const _0x41f44f = {
      pattern: "sub",
      react: "🗃️",
      desc: "get subtitles",
      category: "download",
      use: ".sub avengers",
      filename: __filename
    };
    cmd(_0x41f44f, async (_0x56706c, _0x19e88c, _0x582b23, {
      from: _0x494a9d,
      q: _0x310740,
      pushname: _0x4b9399,
      reply: _0x318a16
    }) => {
      try {
        const _0x217e67 = await subsearch(_0x310740);
        const _0x1b1dd1 = _0x217e67.results;
        const _0x345cbf = [];
        for (var _0x5b5186 = 0; _0x5b5186 < _0x1b1dd1.length; _0x5b5186++) {
          _0x345cbf.push({
            'header': _0x5b5186 + 1,
            'title': '' + _0x1b1dd1[_0x5b5186].title,
            'description': '',
            'id': ".dsub " + _0x1b1dd1[_0x5b5186].link
          });
        }
        const _0x2ff893 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x59a7b6 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x2ff893)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select news types",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x345cbf
            }]
          })
        }];
        const _0x175214 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "> 🎬 X-BYTE SUBDL 🎬\t\n\n\t> SUBTITILE DOWNLOADER 🎥"
        };
        return await _0x56706c.sendButtonMessage(_0x494a9d, _0x59a7b6, _0x582b23, _0x175214);
      } catch (_0x5038bd) {
        _0x318a16("*Error !!*");
        console.log(_0x5038bd);
      }
    });
    const _0x5eb2dc = {
      pattern: "dsub",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x5eb2dc, async (_0x3c2725, _0x2f3619, _0x26cff2, {
      from: _0x4b9733,
      l: _0x39f007,
      quoted: _0x3c3956,
      body: _0x7c63f7,
      isCmd: _0x208237,
      command: _0x1fdc94,
      args: _0x46d57a,
      q: _0x20689f,
      isGroup: _0x49838b,
      sender: _0x2c573f,
      senderNumber: _0x36d09f,
      botNumber2: _0x2754d4,
      botNumber: _0xc6053b,
      pushname: _0x4e0021,
      isMe: _0x484907,
      isOwner: _0x555584,
      groupMetadata: _0x76188b,
      groupName: _0x4badb3,
      participants: _0x32fc26,
      groupAdmins: _0x56b329,
      isBotAdmins: _0x3792ab,
      isAdmins: _0xeeeb67,
      reply: _0x52be1b
    }) => {
      try {
        const _0x4e34d4 = {
          text: '📥',
          key: _0x2f3619.key
        };
        const _0x172602 = {
          react: _0x4e34d4
        };
        await _0x3c2725.sendMessage(_0x4b9733, _0x172602);
        const _0x211a3b = {
          text: "*Need sub link...*"
        };
        const _0x40a9f1 = {
          quoted: _0x2f3619
        };
        if (!_0x20689f) {
          return await _0x3c2725.sendMessage(_0x4b9733, _0x211a3b, _0x40a9f1);
        }
        const _0x422c92 = await subdl(_0x20689f);
        let _0x29f4ad = _0x422c92.results;
        let _0x57cf56 = "*📚 Title :* " + _0x29f4ad.title.trim() + "\n*💼 Creater :* " + _0x29f4ad.creater;
        const _0x3f8f84 = {
          url: _0x29f4ad.img
        };
        const _0x13d2ac = {
          image: _0x3f8f84,
          caption: _0x57cf56
        };
        const _0x5692ab = {
          quoted: _0x2f3619
        };
        await _0x3c2725.sendMessage(_0x4b9733, _0x13d2ac, _0x5692ab);
        const _0x914110 = {
          url: _0x29f4ad.dl_link
        };
        const _0x5119ee = {
          quoted: _0x2f3619
        };
        let _0x116769 = await _0x3c2725.sendMessage(_0x4b9733, {
          'document': _0x914110,
          'mimetype': "application/zip",
          'fileName': _0x29f4ad.title.trim() + '.' + "zip",
          'caption': ''
        }, _0x5119ee);
        const _0x1b6a4c = {
          text: '📁',
          key: _0x116769.key
        };
        const _0x1abef7 = {
          react: _0x1b6a4c
        };
        await _0x3c2725.sendMessage(_0x4b9733, _0x1abef7);
        const _0x116942 = {
          text: '✔',
          key: _0x2f3619.key
        };
        const _0x1170a2 = {
          react: _0x116942
        };
        await _0x3c2725.sendMessage(_0x4b9733, _0x1170a2);
      } catch (_0x169505) {
        _0x52be1b("*ERROR !!*");
        _0x39f007(_0x169505);
      }
    });
    const _0x387fda = {
      pattern: "xnxx",
      react: "🙄",
      desc: "Get news",
      use: ".xxx",
      filename: __filename
    };
    cmd(_0x387fda, async (_0x543781, _0x339ac1, _0x2db0ea, {
      from: _0x2d1c2c,
      q: _0x22d024,
      isMe: _0x153cc8,
      pushname: _0x4819b2,
      reply: _0x1d9b12
    }) => {
      try {
        if (!_0x153cc8) {
          return await _0x1d9b12(" 🔐 Premium users only can use this command\nbuy via message to owner buy type .owner!!");
        }
        const _0x38451e = require("api-dylux");
        let _0x4921eb = await _0x38451e.xnxxSearch(_0x22d024);
        const _0x5b735e = [];
        let _0xc10569 = _0x4921eb.result.map((_0x3317e7, _0x1e2010) => _0x1e2010 + 1 + "┃ *Title* : " + _0x3317e7.title + "\n*Link:* " + _0x3317e7.link + "\n").join("\n");
        if (_0x4921eb.status) {
          _0x339ac1.reply(_0xc10569);
        }
        const _0x448cb0 = _0x4921eb.result;
        for (var _0x48096b = 0; _0x48096b < _0x448cb0.length; _0x48096b++) {
          _0x5b735e.push({
            'header': _0x48096b + 1,
            'title': '' + _0x448cb0[_0x48096b].title,
            'description': '',
            'id': ".xnxxdl " + _0x448cb0[_0x48096b].link
          });
        }
        const _0x3cebe6 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x3c69f3 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x3cebe6)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Please select video type",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x5b735e
            }]
          })
        }];
        const _0x15c60d = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "> 🤤 X-BYTE XXXDL"
        };
        return await _0x543781.sendButtonMessage(_0x2d1c2c, _0x3c69f3, _0x2db0ea, _0x15c60d);
      } catch (_0x5c0800) {
        _0x1d9b12("*Error !!*");
        console.log(_0x5c0800);
      }
    });
    const _0x1940a9 = {
      pattern: "xnxxdl",
      react: '🙄',
      desc: "to take xnxx video",
      use: ".xnxxdl",
      filename: __filename
    };
    cmd(_0x1940a9, async (_0xa5ef5a, _0x274fb0, _0x1244b1, {
      from: _0x357e43,
      l: _0x3e3fdf,
      prefix: _0x58bf06,
      quoted: _0x36f6d3,
      body: _0x3ac9d6,
      isCmd: _0x176c7f,
      command: _0xf6ec31,
      args: _0xcedd40,
      q: _0x43abc1,
      isGroup: _0x39c138,
      sender: _0xaa73f7,
      senderNumber: _0x59a27d,
      botNumber2: _0x49d3cc,
      botNumber: _0x340e03,
      pushname: _0x405185,
      isMe: _0x5d0bff,
      isOwner: _0x13772d,
      groupMetadata: _0x525467,
      groupName: _0x50205e,
      participants: _0x40bd4e,
      groupAdmins: _0x4b6de9,
      isBotAdmins: _0x537e29,
      isAdmins: _0x5c8534,
      reply: _0x55cecb
    }) => {
      try {
        if (!_0x43abc1.includes("xnxx.com")) {
          return _0x274fb0.reply("Enter an xnxx link");
        }
        const _0x2c0764 = require("api-dylux");
        let _0x3c8fa7 = await _0x2c0764.xnxxdl(_0x43abc1);
        const _0x4b230c = {
          caption: "  *XNXX DL*\n        \n✍ *Title:* " + _0x3c8fa7.title + "\n⌛ *Duration:* " + _0x3c8fa7.duration + "\n📽 *Visual Quality:* " + _0x3c8fa7.quality,
          video: {}
        };
        _0x4b230c.video.url = _0x3c8fa7.url_dl;
        _0xa5ef5a.sendMessage(_0x274fb0.chat, _0x4b230c, {
          'quoted': _0x274fb0
        });
      } catch (_0x2f9f53) {
        _0x3e3fdf(_0x2f9f53);
      }
    });
    const _0x412c75 = {
      pattern: "apk",
      react: "🗃️",
      desc: "apk download.",
      category: "download",
      use: ".apk whatsapp",
      filename: __filename
    };
    cmd(_0x412c75, async (_0x4b9e9d, _0x1af0f4, _0x243a87, {
      from: _0x1a6dc8,
      q: _0x616ce5,
      pushname: _0x5c4df6,
      reply: _0x5ae3ce
    }) => {
      try {
        const _0x621b5d = {
          text: "*Need apk name...*"
        };
        const _0x32a024 = {
          quoted: _0x1af0f4
        };
        if (!_0x616ce5) {
          return await _0x4b9e9d.sendMessage(_0x1a6dc8, _0x621b5d, _0x32a024);
        }
        const _0xfc9922 = await apkdl.download(_0x616ce5);
        let _0x3ea81c = "[X - B Y T E]\n   \n *APK-DOWNLOADER*\n\n *📚 ᴀᴘᴘ ɴᴀᴍᴇ: " + _0xfc9922.name + "*\n *📈 ᴀᴘᴘ ꜱɪᴢᴇ: " + _0xfc9922.size + "*\n \n─────────────────────────────";
        let _0x2e94eb = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "see in playstore",
            'url': _0x616ce5,
            'merchant_url': _0x616ce5
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Download apk 📥",
            'id': ".dapk " + _0x616ce5
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Info of apk 📊",
            'id': ".apkinfo " + _0x616ce5
          })
        }];
        const _0x217068 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x3ea81c
        };
        return await _0x4b9e9d.sendButtonMessage(_0x1a6dc8, _0x2e94eb, _0x243a87, _0x217068);
      } catch (_0x21cec3) {
        _0x5ae3ce("*Error !!*");
        console.log(_0x21cec3);
      }
    });
    const _0x25c38e = {
      pattern: "dapk",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x25c38e, async (_0x14f086, _0x38078f, _0x19d3e4, {
      from: _0x5b323f,
      q: _0x1f69dd,
      reply: _0x157865
    }) => {
      try {
        const _0x9ba14d = {
          text: '📥',
          key: _0x19d3e4.key
        };
        const _0x492eba = {
          react: _0x9ba14d
        };
        await _0x14f086.sendMessage(_0x5b323f, _0x492eba);
        const _0x2fa38b = {
          text: "*Need apk link...*"
        };
        const _0x722b90 = {
          quoted: _0x19d3e4
        };
        if (!_0x1f69dd) {
          return await _0x14f086.sendMessage(_0x5b323f, _0x2fa38b, _0x722b90);
        }
        const _0x2279c7 = await apkdl.download(_0x1f69dd);
        const _0x56f4cc = {
          url: _0x2279c7.dllink
        };
        const _0x12229f = {
          quoted: _0x19d3e4
        };
        let _0x4c6423 = await _0x14f086.sendMessage(_0x5b323f, {
          'document': _0x56f4cc,
          'mimetype': "application/vnd.android.package-archive",
          'fileName': _0x2279c7.name + '.' + "apk",
          'caption': "*X-BYTE*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hamza*"
        }, _0x12229f);
        const _0x40a0b1 = {
          text: '📁',
          key: _0x4c6423.key
        };
        const _0xd24f10 = {
          react: _0x40a0b1
        };
        await _0x14f086.sendMessage(_0x5b323f, _0xd24f10);
        const _0x1d45d8 = {
          text: '✔',
          key: _0x19d3e4.key
        };
        const _0x33ffdc = {
          react: _0x1d45d8
        };
        await _0x14f086.sendMessage(_0x5b323f, _0x33ffdc);
      } catch (_0x5c75ea) {
        _0x157865("*ERROR !!*");
        l(_0x5c75ea);
      }
    });
    const _0x4a5574 = {
      pattern: "apkinfo",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x4a5574, async (_0x349bb6, _0x263481, _0x1e0208, {
      from: _0x4df62f,
      q: _0x27a325,
      reply: _0x40aed4
    }) => {
      try {
        const _0x39039f = {
          text: 'ℹ️',
          key: _0x1e0208.key
        };
        const _0xd9ed9e = {
          react: _0x39039f
        };
        await _0x349bb6.sendMessage(_0x4df62f, _0xd9ed9e);
        const _0x4101ae = {
          text: "*Need apk link...*"
        };
        const _0x514e59 = {
          quoted: _0x1e0208
        };
        if (!_0x27a325) {
          return await _0x349bb6.sendMessage(_0x4df62f, _0x4101ae, _0x514e59);
        }
        const _0x126901 = await apkdl.download(_0x27a325);
        let _0x531e2f = "╔═══════════════════╗\n*║BYTE PLAYSTORE-SEARCH*\n╚═══════════════════╝\n\n*📚 ᴀᴘᴘ ɴᴀᴍᴇ: " + _0x126901.name + "* \n\n*📈 ᴀᴘᴘ ꜱɪᴢᴇ(ᴍʙ): " + _0x126901.size + "*\n\n*📱 ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ: " + _0x126901.lastup + "*\n\n*📦 ᴅᴇᴠᴇʟᴏᴘᴇʀ: " + _0x126901["package"] + "* \n\n_*◯──────────────────────────────────◯*_";
        const _0x1b758d = {
          url: _0x126901.icon
        };
        const _0xacddb7 = {
          image: _0x1b758d,
          caption: _0x531e2f
        };
        const _0x12e61e = {
          quoted: _0x1e0208
        };
        await _0x349bb6.sendMessage(_0x4df62f, _0xacddb7, _0x12e61e);
        const _0x5539c4 = {
          text: '✔',
          key: _0x1e0208.key
        };
        const _0x2f6afe = {
          react: _0x5539c4
        };
        await _0x349bb6.sendMessage(_0x4df62f, _0x2f6afe);
      } catch (_0x1e60c0) {
        l(_0x1e60c0);
      }
    });
    const _0x32010e = {
      pattern: "img",
      react: "🗃️",
      desc: "image list.",
      category: "download",
      use: ".img",
      filename: __filename
    };
    cmd(_0x32010e, async (_0x5d54fd, _0xa0d6c7, _0x42036c, {
      from: _0x1e0293,
      q: _0x3539d1,
      pushname: _0x4a4a8d,
      reply: _0x23c777
    }) => {
      try {
        const _0x1ccc49 = "[X - B Y T E]\n   \n ▏ *IMG-DOWNLOADER*\n\n ▏ *🎭 ʀᴇǫᴜᴇꜱᴛᴇʀ: " + _0x4a4a8d + "*\n ▏ *✏️ ʀᴇꜱᴜʟᴛ: " + _0x3539d1 + "*\n\n└──────◉";
        let _0x104f8c = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "see in google",
            'url': _0x3539d1,
            'merchant_url': _0x3539d1
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Normal type 🖼️",
            'id': ".imgno " + _0x3539d1
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Document type 📂",
            'id': ".imgdoc " + _0x3539d1
          })
        }];
        const _0x20c2cd = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x1ccc49
        };
        return await _0x5d54fd.sendButtonMessage(_0x1e0293, _0x104f8c, _0x42036c, _0x20c2cd);
      } catch (_0x208814) {
        _0x23c777("*Error !!*");
        console.log(_0x208814);
      }
    });
    const _0x2ebb3e = {
      pattern: "imgno",
      react: '👾',
      desc: "to down images",
      category: '',
      use: ".im",
      filename: __filename
    };
    cmd(_0x2ebb3e, async (_0x431b5d, _0x1ac5b0, _0x1fac18, {
      from: _0x4847ab,
      q: _0x34fde7,
      reply: _0x1169f7
    }) => {
      try {
        if (!_0x34fde7) {
          throw "Example: " + (prefix + command) + " Bike";
        }
        let _0x1dbb93 = require("g-i-s");
        _0x1dbb93(_0x34fde7, async (_0x43ece4, _0x3c9fe7) => {
          if (_0x43ece4) {
            console.error("Error fetching images:", _0x43ece4);
            return _0x1169f7("Error fetching images. Please try again later.");
          }
          const _0x1b96c5 = _0x3c9fe7.slice(0, 5);
          for (let _0x245b67 = 0; _0x245b67 < _0x1b96c5.length; _0x245b67++) {
            const _0x653479 = _0x1b96c5[_0x245b67].url;
            const _0x20dc68 = {
              url: _0x653479
            };
            let _0x28ba01 = {
              'image': _0x20dc68,
              'caption': "*-------「 X-BYTE GIMAGE SEARCH 」-------*\n🤠 *Query* : " + _0x34fde7 + "\n\n🔗 *Image " + (_0x245b67 + 1) + " Url* : " + _0x653479
            };
            const _0xe6754c = {
              quoted: _0x1fac18
            };
            _0x431b5d.sendMessage(_0x4847ab, _0x28ba01, _0xe6754c);
          }
        });
        const _0x243404 = {
          text: '✅',
          key: _0x1fac18.key
        };
        const _0x2d7fc9 = {
          react: _0x243404
        };
        await _0x431b5d.sendMessage(_0x4847ab, _0x2d7fc9);
      } catch (_0x2fb9b5) {
        l(_0x2fb9b5);
      }
    });
    const _0x342ee6 = {
      pattern: "imgdoc",
      react: '👾',
      desc: "to down images",
      category: '',
      use: ".im",
      filename: __filename
    };
    cmd(_0x342ee6, async (_0x31be40, _0x364e72, _0x3fcc8c, {
      from: _0x332af4,
      q: _0x8df994,
      reply: _0x3cab46
    }) => {
      try {
        if (!_0x8df994) {
          throw "Example: " + (prefix + command) + " Bike";
        }
        let _0x3c824f = require("g-i-s");
        _0x3c824f(_0x8df994, async (_0x37daad, _0x23b5b0) => {
          if (_0x37daad) {
            console.error("Error fetching images:", _0x37daad);
            return _0x3cab46("Error fetching images. Please try again later.");
          }
          const _0x3a9d07 = _0x23b5b0.slice(0, 5);
          for (let _0xffbf4f = 0; _0xffbf4f < _0x3a9d07.length; _0xffbf4f++) {
            const _0x851c68 = _0x3a9d07[_0xffbf4f].url;
            const _0x2832d5 = {
              url: _0x851c68
            };
            let _0x1857f5 = {
              'document': _0x2832d5,
              'fileName': "image.jpg",
              'mimetype': "image/jpeg",
              'caption': "*-------「 X-BYTE GIMAGE SEARCH 」-------*\n🤠 *Query* : " + _0x8df994 + "\n\n🔗 *Image " + (_0xffbf4f + 1) + " Url* : " + _0x851c68
            };
            const _0x4dd0d3 = {
              quoted: _0x3fcc8c
            };
            _0x31be40.sendMessage(_0x332af4, _0x1857f5, _0x4dd0d3);
          }
        });
        const _0x5c8c01 = {
          text: '✅',
          key: _0x3fcc8c.key
        };
        const _0x474300 = {
          react: _0x5c8c01
        };
        await _0x31be40.sendMessage(_0x332af4, _0x474300);
      } catch (_0x5d545a) {
        l(_0x5d545a);
      }
    });
    const _0x2b1e9b = {
      pattern: 'fb',
      alias: ["facebook"],
      use: ".fb https://www.facebook.com/100029474354770/videos/837567391064603/",
      react: '🎥',
      desc: "Download videos from facebook",
      category: "download",
      filename: __filename
    };
    cmd(_0x2b1e9b, async (_0x5953be, _0x17bd93, _0xb89e9e, {
      from: _0x4fee8e,
      q: _0x14af65,
      reply: _0x4e2c2c
    }) => {
      if (!_0x14af65 || !_0x14af65.includes("facebook.com")) {
        return await _0x4e2c2c("*Please enter a valid facebook url!*");
      }
      const _0x4fdaf1 = _0x14af65.replace(/\?mibextid=[^&]*/, '');
      getFbVideoInfo(_0x4fdaf1).then(_0x2cc956 => {
        let _0x1bb7d6 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Watch on Facebook",
            'url': _0x14af65,
            'merchant_url': _0x14af65
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "SD Quality",
            'id': ".downfb " + _0x2cc956.sd
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "HD Quality",
            'id': ".downfb " + _0x2cc956.hd
          })
        }];
        const _0x160805 = {
          image: _0x2cc956.thumbnail,
          header: '',
          footer: config.FOOTER,
          body: "`✦ 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦`\n"
        };
        return _0x5953be.sendButtonMessage(_0x4fee8e, _0x1bb7d6, _0x17bd93, _0x160805);
      })["catch"](_0x7c061a => {
        console.log(_0x7c061a);
      });
    });
    const _0x368c6d = {
      pattern: "downfb",
      react: '🎥',
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x368c6d, async (_0x27a019, _0x5becf3, _0x21f0ed, {
      from: _0x44d92e,
      q: _0x15af90,
      reply: _0x5a3e69
    }) => {
      try {
        if (!_0x15af90) {
          return await _0x5a3e69("*Not Found!*");
        }
        const _0xb14082 = {
          url: _0x15af90
        };
        const _0x16a036 = {
          video: _0xb14082
        };
        const _0x1ab7a2 = {
          quoted: _0x5becf3
        };
        await _0x27a019.sendMessage(_0x44d92e, _0x16a036, _0x1ab7a2);
        const _0x10cead = {
          text: '✅',
          key: _0x5becf3.key
        };
        const _0x59e57f = {
          react: _0x10cead
        };
        await _0x27a019.sendMessage(_0x44d92e, _0x59e57f);
      } catch (_0xc591b8) {
        _0x5a3e69("*Error !!*");
        console.log(_0xc591b8);
      }
    });
    const _0x3a8993 = {
      pattern: "tiktok",
      alias: ['tt'],
      use: ".fb url",
      react: '🎥',
      desc: "Download videos from tiktok",
      category: "download",
      filename: __filename
    };
    cmd(_0x3a8993, async (_0xd9007d, _0x1353e7, _0x3834f3, {
      from: _0x3112a6,
      q: _0x1d389d,
      reply: _0x318212
    }) => {
      try {
        if (!_0x1d389d.includes("tiktok.com")) {
          return await _0x318212(urlneed);
        }
        var _0x2c6f91 = '';
        let _0x4e35f = await fetchJson("https://widipe.com/download/tikdl?url=" + _0x1d389d);
        if (_0x4e35f.msg == 'OK') {
          const _0x52959e = {
            title: _0x4e35f.result.desc,
            nowm: _0x4e35f.result.withoutWaterMarkVideo,
            watermark: _0x4e35f.result.waterMarkVideo,
            audio: _0x4e35f.result.music,
            thumbnail: _0x4e35f.result.cover,
            author: _0x4e35f.result.author
          };
          _0x2c6f91 = _0x52959e;
        } else {
          let _0x4decca = await Tiktok(_0x1d389d);
          _0x2c6f91 = _0x4decca;
        }
        let _0x349bf7 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Watch on tiktok",
            'url': _0x1d389d,
            'merchant_url': _0x1d389d
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "VIDEO NO WATERMARK",
            'id': ".dvideo " + _0x2c6f91.nowm
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "VIDEO WITH WATERMARK",
            'id': ".dvideo " + _0x2c6f91.watermark
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "AUDIO DOWNLOAD",
            'id': ".dau " + _0x2c6f91.audio
          })
        }];
        const _0xed0eae = {
          image: result.thumbnail,
          header: '',
          footer: config.FOOTER,
          body: "`✦ 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦`\n"
        };
        return await _0xd9007d.sendButtonMessage(_0x3112a6, _0x349bf7, _0x1353e7, _0xed0eae);
      } catch (_0x58eb76) {
        console.log(_0x58eb76);
        _0x318212("*Error !!*");
      }
    });
    const _0x190bed = {
      pattern: "dau",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x190bed, async (_0x47bc58, _0x1598c7, _0x3a7819, {
      from: _0x3125b2,
      l: _0x513442,
      quoted: _0x5c737b,
      body: _0x3113b9,
      isCmd: _0x1f3824,
      command: _0x53fe93,
      args: _0x17559a,
      q: _0x4cea59,
      isGroup: _0x453944,
      sender: _0x20503f,
      senderNumber: _0x3481ee,
      botNumber2: _0x4c46cc,
      botNumber: _0x26d063,
      pushname: _0x49fd01,
      isMe: _0x29ca6f,
      isOwner: _0x4251d5,
      groupMetadata: _0x8036e7,
      groupName: _0x530853,
      participants: _0x5823d4,
      groupAdmins: _0x4d918b,
      isBotAdmins: _0x1ac118,
      isAdmins: _0x361015,
      reply: _0xfda3b
    }) => {
      try {
        const _0xcb2ab0 = {
          text: '📥',
          key: _0x1598c7.key
        };
        const _0x40d64b = {
          react: _0xcb2ab0
        };
        await _0x47bc58.sendMessage(_0x3125b2, _0x40d64b);
        const _0x4feb57 = {
          url: _0x4cea59
        };
        const _0x1efef3 = {
          quoted: _0x1598c7
        };
        await _0x47bc58.sendMessage(_0x3125b2, {
          'document': _0x4feb57,
          'mimetype': "audio/mpeg",
          'fileName': "TikTok Audio.mp3",
          'caption': config.FOOTER
        }, _0x1efef3);
        const _0xae8dd0 = {
          text: '✔',
          key: _0x1598c7.key
        };
        const _0xad0a83 = {
          react: _0xae8dd0
        };
        await _0x47bc58.sendMessage(_0x3125b2, _0xad0a83);
      } catch (_0x5858cb) {
        _0xfda3b("*ERROR !!*");
        _0x513442(_0x5858cb);
      }
    });
    const _0x3d3f2e = {
      pattern: "dvideo",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x3d3f2e, async (_0xb480ca, _0x37fdca, _0x5e1306, {
      from: _0x36b24b,
      l: _0x3883ff,
      quoted: _0x2506fe,
      body: _0x590744,
      isCmd: _0x5e63d6,
      command: _0x59a277,
      args: _0xb0888a,
      q: _0x3db7f3,
      isGroup: _0x1f5449,
      sender: _0x5dc14e,
      senderNumber: _0x4ff8e5,
      botNumber2: _0x1d0c65,
      botNumber: _0x41aa74,
      pushname: _0x2a867c,
      isMe: _0x5c0e81,
      isOwner: _0x4111e4,
      groupMetadata: _0x3c3c03,
      groupName: _0x2cb7df,
      participants: _0x102267,
      groupAdmins: _0x15e7a1,
      isBotAdmins: _0x85d81e,
      isAdmins: _0xbb39c7,
      reply: _0x3f4809
    }) => {
      try {
        const _0x3f233d = {
          text: '📥',
          key: _0x37fdca.key
        };
        const _0x5167b6 = {
          react: _0x3f233d
        };
        await _0xb480ca.sendMessage(_0x36b24b, _0x5167b6);
        const _0x153110 = {
          url: _0x3db7f3
        };
        const _0x1e9e47 = {
          video: _0x153110,
          caption: config.FOOTER
        };
        const _0x32b010 = {
          quoted: _0x37fdca
        };
        await _0xb480ca.sendMessage(_0x36b24b, _0x1e9e47, _0x32b010);
        const _0x59d4e6 = {
          text: '✔',
          key: _0x37fdca.key
        };
        const _0x3deb6a = {
          react: _0x59d4e6
        };
        await _0xb480ca.sendMessage(_0x36b24b, _0x3deb6a);
      } catch (_0x2403ba) {
        _0x3f4809("*ERROR !!*");
        _0x3883ff(_0x2403ba);
      }
    });
  }
  const _0x5a7577 = {
    pattern: "threads",
    alias: ["thread"],
    react: '🧵',
    desc: "Download threads videos/photos.",
    category: "download",
    use: ".threads <threads link>",
    filename: __filename
  };
  cmd(_0x5a7577, async (_0x4738cc, _0x5ded6f, _0x21fb00, {
    from: _0x3dc5c6,
    l: _0x186daa,
    quoted: _0x472af9,
    body: _0x577271,
    isCmd: _0x2e0e87,
    command: _0x540943,
    args: _0xf75d5d,
    q: _0x5a9cb,
    isGroup: _0x4a11b9,
    sender: _0x15f3f2,
    senderNumber: _0x405425,
    botNumber2: _0x2bb510,
    botNumber: _0x247299,
    pushname: _0x5f2a7d,
    isMe: _0x3b1623,
    isOwner: _0x2eb04d,
    groupMetadata: _0x274a5e,
    groupName: _0x3f6122,
    participants: _0x1598ed,
    groupAdmins: _0x1a1923,
    isBotAdmins: _0x5346ea,
    isAdmins: _0x104610,
    reply: _0x3b2ee3
  }) => {
    try {
      if (!_0x5a9cb) {
        return await _0x3b2ee3(needus);
      }
      let _0x5407a2 = await Download(_0x5a9cb);
      for (let _0x6c992f = 0; _0x6c992f < _0x5407a2.download.length; _0x6c992f++) {
        const _0x446256 = {
          quoted: _0x5ded6f
        };
        const _0x777904 = {
          quoted: _0x5ded6f
        };
        if (_0x5407a2.download[_0x6c992f].type === "image") {
          await _0x4738cc.sendMessage(_0x3dc5c6, {
            'image': {
              'url': _0x5407a2.download[_0x6c992f].url
            },
            'caption': config.FOOTER
          }, _0x446256);
        } else {
          await _0x4738cc.sendMessage(_0x3dc5c6, {
            'video': {
              'url': _0x5407a2.download[_0x6c992f].url
            },
            'caption': config.FOOTER
          }, _0x777904);
        }
      }
    } catch (_0x52b689) {
      _0x3b2ee3(cantf);
      _0x186daa(_0x52b689);
    }
  });
  const _0x55b2dd = {
    pattern: "pindl",
    react: '🔖',
    desc: "download pinterest images",
    category: "download",
    use: ".pindl",
    filename: __filename
  };
  cmd(_0x55b2dd, async (_0x2fecf0, _0x3284f8, _0x271110, {
    from: _0x54c2dc,
    l: _0x19fc94,
    quoted: _0x2a44c4,
    body: _0x4c76a0,
    isCmd: _0x15b1db,
    command: _0x4171ea,
    args: _0x280732,
    q: _0x55cbb9,
    isGroup: _0x4dd7ff,
    sender: _0x37aae3,
    senderNumber: _0x53ecca,
    botNumber2: _0x23fed8,
    botNumber: _0x4c4fc3,
    pushname: _0xeed672,
    isMe: _0x497bf4,
    isOwner: _0x5b0df4,
    groupMetadata: _0x1568ea,
    groupName: _0x4463b7,
    participants: _0x494fe8,
    groupAdmins: _0x208a80,
    isBotAdmins: _0x34bde1,
    isAdmins: _0x32d08b,
    reply: _0x28a249
  }) => {
    try {
      let {
        pinterest: _0x1ffcd7
      } = require("../lib/scraper");
      anu = await _0x1ffcd7(_0x55cbb9);
      result = anu[Math.floor(Math.random() * anu.length)];
      const _0x4b87ad = {
        url: result
      };
      _0x2fecf0.sendMessage(_0x3284f8.chat, {
        'image': _0x4b87ad,
        'caption': "🔮 Media Url : " + result
      }, {
        'quoted': _0x3284f8
      });
      const _0x4dfa4c = {
        text: '✅',
        key: _0x3284f8.key
      };
      const _0x247620 = {
        react: _0x4dfa4c
      };
      await _0x2fecf0.sendMessage(_0x54c2dc, _0x247620);
    } catch (_0xef9fb1) {
      _0x28a249();
      _0x19fc94(_0xef9fb1);
    }
  });
  const _0x4972a3 = {
    pattern: "gdrive",
    alias: ["googledrive'"],
    react: '📑',
    desc: "Download googledrive files."
  };
  function _0x62c4b9(_0x56c2da, _0x10ccc1, _0x175e34, _0x4a625c, _0x135ab2) {
    return _0xfd30(_0x4a625c - 0x1af, _0x10ccc1);
  }
  _0x4972a3.category = "download";
  _0x4972a3.use = ".gdrive <googledrive link>";
  _0x4972a3.filename = __filename;
  cmd(_0x4972a3, async (_0x4c066a, _0x2e419e, _0x5f364c, {
    from: _0x4cde23,
    l: _0x55cdbc,
    quoted: _0xc24045,
    body: _0x221462,
    isCmd: _0x31f82f,
    command: _0x1195fe,
    args: _0x93a1f3,
    q: _0x43a86d,
    isGroup: _0x344686,
    sender: _0x5c900c,
    senderNumber: _0x24e862,
    botNumber2: _0x285f2a,
    botNumber: _0x5995d9,
    pushname: _0x253909,
    isMe: _0x1023ff,
    isOwner: _0x55bf09,
    groupMetadata: _0x5e0485,
    groupName: _0xfa26c9,
    participants: _0x2a243c,
    groupAdmins: _0xfb9a80,
    isBotAdmins: _0x40599c,
    isAdmins: _0x134179,
    reply: _0x3296dd
  }) => {
    try {
      if (!_0x43a86d) {
        return await _0x3296dd("*Please give me googledrive url !!*");
      }
      let _0xc0cf7f = await fg.GDriveDl(_0x43a86d);
      _0x3296dd("*📃 File name:*  " + _0xc0cf7f.fileName + "\n*💈 File Size:* " + _0xc0cf7f.fileSize + "\n*🕹️ File type:* " + _0xc0cf7f.mimetype);
      const _0x34f736 = {
        url: _0xc0cf7f.downloadUrl
      };
      const _0x2c20cf = {
        document: _0x34f736,
        fileName: _0xc0cf7f.fileName,
        mimetype: _0xc0cf7f.mimetype
      };
      const _0x11d19d = {
        quoted: _0x2e419e
      };
      _0x4c066a.sendMessage(_0x4cde23, _0x2c20cf, _0x11d19d);
    } catch (_0x34d15e) {
      _0x3296dd("*Error !!*");
      _0x55cdbc(_0x34d15e);
    }
  });
  const _0x5d7eb2 = {
    pattern: "tempmail",
    react: '👾',
    desc: "to take a tempmail",
    category: "download",
    use: ".tempmail",
    filename: __filename
  };
  cmd(_0x5d7eb2, async (_0x29c382, _0x3e44e9, _0x430dff, {
    from: _0x56a755,
    l: _0x2b7430,
    prefix: _0x503fbf,
    quoted: _0x2d4b53,
    body: _0x33cc8f,
    isCmd: _0x1c6170,
    command: _0x4671c8,
    args: _0x19da08,
    q: _0x41ce21,
    isGroup: _0x5ad718,
    sender: _0x1ea8ab,
    senderNumber: _0x1b2434,
    botNumber2: _0x4e2fa2,
    botNumber: _0x1735f6,
    pushname: _0x23b13a,
    isMe: _0x5c5a85,
    isOwner: _0x4d89e4,
    groupMetadata: _0x54ee26,
    groupName: _0x50f1a7,
    participants: _0xf57566,
    groupAdmins: _0x47f746,
    isBotAdmins: _0x28e415,
    isAdmins: _0x26181f,
    reply: _0x366895
  }) => {
    try {
      const _0x3fd9d7 = await fetch("https://tempmail.apinepdev.workers.dev/api/gen");
      const _0x1eb672 = await _0x3fd9d7.json();
      if (!_0x1eb672 || !_0x1eb672.email) {
        return _0x366895("Failed to generate temporary email");
      }
      const _0x2600ba = _0x1eb672.email;
      return _0x366895("Generated Temporary Email: " + _0x2600ba);
    } catch (_0x435c70) {
      return _0x366895("Unexpected error occurred during the request.");
      _0x2b7430(_0x435c70);
    }
  });
  const _0x16680b = {};
  function _0x5f94a(_0x245874, _0x4dc066, _0x2376e0, _0x23d15d, _0x1445e4) {
    return _0xfd30(_0x23d15d - 0x339, _0x2376e0);
  }
  _0x16680b.pattern = "checkmail";
  _0x16680b.react = '👾';
  _0x16680b.desc = "to see mail";
  _0x16680b.category = "download";
  _0x16680b.use = ".checkmail";
  _0x16680b.filename = __filename;
  cmd(_0x16680b, async (_0x5e866b, _0x297261, _0xc65929, {
    from: _0x33b86c,
    l: _0x57a49b,
    prefix: _0x385cb6,
    quoted: _0x5cf121,
    body: _0x3656ea,
    isCmd: _0x2a58dd,
    command: _0x178945,
    args: _0x5e8467,
    q: _0xc2f2bb,
    isGroup: _0x280ea4,
    sender: _0x13fc2e,
    senderNumber: _0x42a333,
    botNumber2: _0x21e0be,
    botNumber: _0x1d3b17,
    pushname: _0x2496ac,
    isMe: _0x2f9d7b,
    isOwner: _0x54e913,
    groupMetadata: _0x348be5,
    groupName: _0x7d5efd,
    participants: _0x49913b,
    groupAdmins: _0x99b0ea,
    isBotAdmins: _0x2861cc,
    isAdmins: _0x5eb1b8,
    reply: _0x356026
  }) => {
    try {
      if (!_0xc2f2bb) {
        return _0x356026("*Provide me tempmail for view inbox*");
      }
      const _0x575521 = encodeURIComponent(_0xc2f2bb);
      const _0x4061e5 = "https://tempmail.apinepdev.workers.dev/api/getmessage?email=" + _0x575521;
      const _0x2e2791 = await fetch(_0x4061e5);
      if (!_0x2e2791.ok) {
        return _0x356026("Invalid response from the API. Status code: " + _0x2e2791.status);
      }
      const _0x446cef = await _0x2e2791.json();
      if (!_0x446cef || !_0x446cef.messages) {
        return _0x356026("Failed to retrieve email messages");
      }
      const _0x3acf5b = _0x446cef.messages;
      for (const _0x2abc9f of _0x3acf5b) {
        const _0x40817b = _0x2abc9f.sender;
        const _0x2722f7 = _0x2abc9f.subject;
        const _0x2aa83f = new Date(JSON.parse(_0x2abc9f.message).date).toLocaleString();
        const _0x5c5b17 = JSON.parse(_0x2abc9f.message).body;
        const _0x15bf63 = "Sender: " + _0x40817b + "\nSubject: " + _0x2722f7 + "\nDate: " + _0x2aa83f + "\nMessage: " + _0x5c5b17;
        await _0x356026(_0x15bf63);
      }
    } catch (_0x21259d) {
      console.error("Error during API request:", _0x21259d);
      return _0x356026("Unexpected error occurred during the request.");
      _0x57a49b(_0x21259d);
    }
  });
  const _0x327511 = {
    pattern: "gitclone",
    react: '🔖',
    desc: "download github repos",
    category: "download",
    use: ".gitclone",
    filename: __filename
  };
  cmd(_0x327511, async (_0x35d528, _0x4cc19e, _0x47a44d, {
    from: _0x2f40fb,
    prefix: _0x2eb624,
    l: _0x39f905,
    quoted: _0x468da5,
    body: _0x47e19b,
    isCmd: _0x480a26,
    command: _0x503f78,
    args: _0x1adcaa,
    q: _0x5798c1,
    isGroup: _0x5929d2,
    sender: _0x220437,
    senderNumber: _0x4d9b72,
    botNumber2: _0x32c95f,
    botNumber: _0x5ea350,
    pushname: _0x4f75c5,
    isMe: _0x5aebca,
    isOwner: _0x153a80,
    groupMetadata: _0x5b8490,
    groupName: _0x2df3c2,
    participants: _0x3d955a,
    groupAdmins: _0x41d497,
    isBotAdmins: _0x22e19c,
    isAdmins: _0x42b391,
    reply: _0x523969
  }) => {
    try {
      if (!_0x1adcaa[0]) {
        _0x523969("Use " + _0x2eb624 + "gitclone repo link\n: https://github.com/HyHamza/X-BYTE");
      }
      if (!/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i.test(_0x1adcaa[0])) {
        return _0x523969("link");
      }
      let [, _0x58b4d7, _0x4766a2] = _0x1adcaa[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || [];
      _0x4766a2 = _0x4766a2.replace(/.git$/, '');
      let _0x836b88 = "https://api.github.com/repos/" + _0x58b4d7 + '/' + _0x4766a2 + "/zipball";
      let _0x3f95d6 = '' + _0x58b4d7 + _0x4766a2;
      const _0x101fc7 = {
        url: _0x836b88
      };
      _0x35d528.sendMessage(_0x4cc19e.chat, {
        'document': _0x101fc7,
        'fileName': _0x3f95d6 + ".zip",
        'mimetype': "application/zip",
        'caption': "*ǫᴜᴇᴇɴ-ɪᴢᴜᴍɪ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hamza*"
      }, {
        'quoted': _0x4cc19e
      })["catch"](_0x3c819b => _0x523969(mess.error));
    } catch (_0x4a688e) {
      _0x523969();
      _0x39f905(_0x4a688e);
    }
  });
  const _0x18068c = {
    pattern: "ringtone",
    react: '🔖',
    desc: "to download ringtone",
    category: "download",
    use: ".ringtone",
    filename: __filename
  };
  cmd(_0x18068c, async (_0x5e3d16, _0x24daa1, _0x36485e, {
    from: _0x431af6,
    l: _0x4db44e,
    quoted: _0x540e17,
    prefix: _0x4699b8,
    body: _0x3b5563,
    isCmd: _0x427142,
    command: _0xfbd92e,
    args: _0x393b6b,
    q: _0xd3392e,
    isGroup: _0x1854ca,
    sender: _0x25284e,
    senderNumber: _0x14a2da,
    botNumber2: _0x58dbe6,
    botNumber: _0x157c19,
    pushname: _0x2618a8,
    isMe: _0x19a744,
    isOwner: _0x501e02,
    groupMetadata: _0x32df0c,
    groupName: _0x17b9e5,
    participants: _0x3a607b,
    groupAdmins: _0x4c2b6e,
    isBotAdmins: _0x40900d,
    isAdmins: _0x39c876,
    reply: _0x2baefc
  }) => {
    try {
      if (!_0xd3392e) {
        _0x2baefc`${Lang.EXAMPLE}\n : ${_0x4699b8 + _0xfbd92e} black rover`;
      }
      let {
        ringtone: _0xddbb1a
      } = require("../lib/scraper");
      let _0x41d3d0 = await _0xddbb1a(_0xd3392e);
      let _0x4f5b28 = _0x41d3d0[Math.floor(Math.random() * _0x41d3d0.length)];
      const _0x4fb215 = {
        url: _0x4f5b28.audio
      };
      _0x5e3d16.sendMessage(_0x24daa1.chat, {
        'audio': _0x4fb215,
        'fileName': _0x4f5b28.title + ".mp3",
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x24daa1
      });
      const _0x2b1421 = {
        text: '✅',
        key: _0x24daa1.key
      };
      const _0x3e4336 = {
        react: _0x2b1421
      };
      await _0x5e3d16.sendMessage(_0x431af6, _0x3e4336);
    } catch (_0x3df198) {
      _0x2baefc();
      _0x4db44e(_0x3df198);
    }
  });
  function _0xfd30(_0x498c13, _0x342875) {
    const _0x448a6e = _0x3cbe();
    _0xfd30 = function (_0x2f32f7, _0xdb0a39) {
      _0x2f32f7 = _0x2f32f7 - 496;
      let _0x333112 = _0x448a6e[_0x2f32f7];
      if (_0xfd30.DUPQJI === undefined) {
        var _0x103734 = function (_0x49046c) {
          let _0x1cf773 = '';
          let _0xc7848c = '';
          let _0x493fcf = 0;
          let _0x286454;
          let _0x531c49;
          for (let _0x4e0975 = 0; _0x531c49 = _0x49046c.charAt(_0x4e0975++); ~_0x531c49 && (_0x286454 = _0x493fcf % 4 ? _0x286454 * 64 + _0x531c49 : _0x531c49, _0x493fcf++ % 4) ? _0x1cf773 += String.fromCharCode(255 & _0x286454 >> (-2 * _0x493fcf & 6)) : 0) {
            _0x531c49 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x531c49);
          }
          let _0x1a3a77 = 0;
          for (let _0x292363 = _0x1cf773.length; _0x1a3a77 < _0x292363; _0x1a3a77++) {
            _0xc7848c += '%' + ('00' + _0x1cf773.charCodeAt(_0x1a3a77).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0xc7848c);
        };
        const _0x57fcbe = function (_0xf29e69, _0x11e316) {
          let _0x4720b4 = [];
          let _0x2b42c1 = 0;
          let _0x2108fd;
          let _0x1c3c10 = '';
          _0xf29e69 = _0x103734(_0xf29e69);
          let _0x282232;
          for (_0x282232 = 0; _0x282232 < 256; _0x282232++) {
            _0x4720b4[_0x282232] = _0x282232;
          }
          for (_0x282232 = 0; _0x282232 < 256; _0x282232++) {
            _0x2b42c1 = (_0x2b42c1 + _0x4720b4[_0x282232] + _0x11e316.charCodeAt(_0x282232 % _0x11e316.length)) % 256;
            _0x2108fd = _0x4720b4[_0x282232];
            _0x4720b4[_0x282232] = _0x4720b4[_0x2b42c1];
            _0x4720b4[_0x2b42c1] = _0x2108fd;
          }
          _0x282232 = 0;
          _0x2b42c1 = 0;
          for (let _0x144f8c = 0; _0x144f8c < _0xf29e69.length; _0x144f8c++) {
            _0x282232 = (_0x282232 + 1) % 256;
            _0x2b42c1 = (_0x2b42c1 + _0x4720b4[_0x282232]) % 256;
            _0x2108fd = _0x4720b4[_0x282232];
            _0x4720b4[_0x282232] = _0x4720b4[_0x2b42c1];
            _0x4720b4[_0x2b42c1] = _0x2108fd;
            _0x1c3c10 += String.fromCharCode(_0xf29e69.charCodeAt(_0x144f8c) ^ _0x4720b4[(_0x4720b4[_0x282232] + _0x4720b4[_0x2b42c1]) % 256]);
          }
          return _0x1c3c10;
        };
        _0xfd30.yVgFAc = _0x57fcbe;
        _0x498c13 = arguments;
        _0xfd30.DUPQJI = true;
      }
      const _0xbca379 = _0x448a6e[0];
      const _0x561e90 = _0x2f32f7 + _0xbca379;
      const _0x15fa2d = _0x498c13[_0x561e90];
      if (!_0x15fa2d) {
        if (_0xfd30.bSmGwa === undefined) {
          _0xfd30.bSmGwa = true;
        }
        _0x333112 = _0xfd30.yVgFAc(_0x333112, _0xdb0a39);
        _0x498c13[_0x561e90] = _0x333112;
      } else {
        _0x333112 = _0x15fa2d;
      }
      return _0x333112;
    };
    return _0xfd30(_0x498c13, _0x342875);
  }
  const _0x59e3cd = {
    pattern: "couplepp",
    react: '🔖',
    desc: "couple pic download",
    category: "download",
    use: ".couplepp",
    filename: __filename
  };
  cmd(_0x59e3cd, async (_0x297561, _0x3ca165, _0x4dc2ec, {
    from: _0x28f7e2,
    l: _0x14bdf4,
    quoted: _0x5a3bb8,
    body: _0x1c87f4,
    isCmd: _0x352b99,
    command: _0x5c4b79,
    args: _0x432ebf,
    q: _0x31d304,
    isGroup: _0x18dccd,
    sender: _0x1e26b9,
    senderNumber: _0x30ab1f,
    botNumber2: _0x2de5ac,
    botNumber: _0x53d72d,
    pushname: _0x2eff2c,
    isMe: _0x6aa4ea,
    isOwner: _0x1b20a7,
    groupMetadata: _0x4ee131,
    groupName: _0x239c49,
    participants: _0x4f7fe0,
    groupAdmins: _0x1f7255,
    isBotAdmins: _0x1710d1,
    isAdmins: _0x2072f4,
    reply: _0x4ecc52
  }) => {
    try {
      const _0x5315c2 = {
        text: '💏',
        key: _0x3ca165.key
      };
      const _0x4c3bc6 = {
        react: _0x5315c2
      };
      await _0x297561.sendMessage(_0x28f7e2, _0x4c3bc6);
      let _0x1c97ee = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json");
      let _0x193e1d = _0x1c97ee[Math.floor(Math.random() * _0x1c97ee.length)];
      const _0x409cec = {
        url: _0x193e1d.male
      };
      const _0x57def3 = {
        image: _0x409cec,
        caption: "Couple Male"
      };
      _0x297561.sendMessage(_0x3ca165.chat, _0x57def3, {
        'quoted': _0x3ca165
      });
      const _0x382582 = {
        url: _0x193e1d.female
      };
      const _0x3b8ad0 = {
        image: _0x382582,
        caption: "Couple Female"
      };
      _0x297561.sendMessage(_0x3ca165.chat, _0x3b8ad0, {
        'quoted': _0x3ca165
      });
      const _0x2c4a0f = {
        text: '✅',
        key: _0x3ca165.key
      };
      const _0x37a8f2 = {
        react: _0x2c4a0f
      };
      await _0x297561.sendMessage(_0x28f7e2, _0x37a8f2);
    } catch (_0x45c11f) {
      _0x4ecc52();
      _0x14bdf4(_0x45c11f);
    }
  });
  const _0x97e0ac = {
    pattern: "slsub",
    react: '📃',
    alias: ["srisub"],
    desc: "Search Sinhala Subtitles  from Web Site",
    use: ".slsub",
    filename: __filename
  };
  cmd(_0x97e0ac, async (_0x16eae9, _0xa15873, _0x50fea7, {
    from: _0x44d8c5,
    l: _0x38f9d9,
    quoted: _0x40b076,
    body: _0x5cfec5,
    isCmd: _0x2f7645,
    command: _0x28e498,
    args: _0xefe311,
    q: _0x21183b,
    isGroup: _0x49ef01,
    sender: _0x38aee,
    senderNumber: _0x3fb97c,
    botNumber2: _0x436d85,
    botNumber: _0x432336,
    pushname: _0x421c95,
    isMe: _0x120230,
    isOwner: _0x53cb77,
    groupMetadata: _0x431888,
    groupName: _0x4efbf8,
    participants: _0x1b61c4,
    groupAdmins: _0x1a1895,
    isBotAdmins: _0xca9b4a,
    isCreator: _0x27a757,
    isDev: _0x362d6e,
    isAdmins: _0x45faa7,
    reply: _0x1657a2
  }) => {
    try {
      if (!_0x21183b) {
        return _0x1657a2("❗ *Please enter movie name to download Subtitles*");
      }
      const _0x115aef = await subsearch(_0x21183b);
      const _0x2f510d = await subdl(_0x115aef.results[0].link);
      const _0x40ca3b = "*X-BYTE SINHALA SUB DOWNLOADER*\n\n📊 *Movie Title - " + _0x2f510d.results.title + "*\n\n🔒 Creator - " + _0x2f510d.results.creater + "\n\n🖇️ _Link_ - " + _0x115aef.results[0].link + "\n\n";
      const _0xf9c5c7 = {
        url: _0x2f510d.results.img
      };
      const _0x4544fc = {
        quoted: _0xa15873
      };
      await _0x16eae9.sendMessage(_0x44d8c5, {
        'image': _0xf9c5c7,
        'caption': _0x40ca3b + "*X-BYTE ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hamza*"
      }, _0x4544fc);
      const _0x2d52e2 = {
        url: _0x2f510d.results.dl_link
      };
      const _0x1aa8ea = {
        document: _0x2d52e2,
        caption: _0x2f510d.results.title,
        mimetype: "application/zip",
        fileName: _0x2f510d.results.title + ".zip"
      };
      const _0x187f72 = {
        quoted: _0xa15873
      };
      await _0x16eae9.sendMessage(_0x44d8c5, _0x1aa8ea, _0x187f72);
    } catch (_0x122f7e) {
      _0x1657a2("🚫 *Error Accurated !!*\n\n" + _0x122f7e);
      _0x38f9d9(_0x122f7e);
    }
  });
  const _0x13072e = {
    pattern: "subdlfromlink"
  };
  function _0x54e853(_0x12fef4, _0x52f58d, _0x34412f, _0x8f17a5, _0x4c10e4) {
    return _0xfd30(_0x8f17a5 + 0x283, _0x52f58d);
  }
  _0x13072e.react = '📃';
  _0x13072e.desc = "Download subtitles from Web Sites";
  _0x13072e.category = "download";
  _0x13072e.use = ".subdlfromlink";
  _0x13072e.filename = __filename;
  cmd(_0x13072e, async (_0x389e49, _0x5101cf, _0x125d9f, {
    from: _0x2d2508,
    l: _0x8fa1e7,
    quoted: _0x40f77a,
    body: _0x546893,
    isCmd: _0x1b3989,
    command: _0x1d78c8,
    args: _0x2c2328,
    q: _0x56c234,
    isGroup: _0x5369e3,
    sender: _0x1b751d,
    senderNumber: _0x25be4f,
    botNumber2: _0x237638,
    botNumber: _0xb6531f,
    pushname: _0xc17c35,
    isMe: _0x296b3d,
    isOwner: _0x166408,
    groupMetadata: _0x9ab496,
    groupName: _0x4925c6,
    participants: _0x2416fe,
    groupAdmins: _0x5d0b5b,
    isBotAdmins: _0x3baa50,
    isCreator: _0x56a67f,
    isDev: _0x4d4441,
    isAdmins: _0x302f69,
    reply: _0x1eb9c9
  }) => {
    try {
      if (!_0x56c234) {
        return _0x1eb9c9("❗ Please enter movie Link to download Subtitles*");
      }
      if (!_0x56c234.includes("baiscope")) {
        return _0x1eb9c9("🚫 *Please enter Valid Movie url*");
      }
      const _0x3787de = await subdl(_0x56c234);
      const _0x4acc03 = "*X-BYTE SL SUBTITLES DOWNLOADER*\n\n📊 *Movie title - " + _0x3787de.results.title + "*\n\n🔒 Creator - " + _0x3787de.results.creater + "\n\n🖇️ _Link_ - " + _0x56c234 + "\n\n*X-BYTE-ᴠ3*\n*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ - ʙʏ ᴠᴀᴊɪʀᴀ*";
      const _0x569bac = {
        text: _0x4acc03
      };
      const _0xc34b83 = {
        quoted: _0x5101cf
      };
      await _0x389e49.sendMessage(_0x2d2508, _0x569bac, _0xc34b83);
      const _0xdb8e52 = {
        url: _0x3787de.results.dl_link
      };
      const _0x145929 = {
        document: _0xdb8e52,
        caption: _0x3787de.results.title,
        mimetype: "application/zip",
        fileName: _0x3787de.results.title + ".zip"
      };
      const _0x892687 = {
        quoted: _0x5101cf
      };
      await _0x389e49.sendMessage(_0x2d2508, _0x145929, _0x892687);
    } catch (_0x11b733) {
      _0x1eb9c9("🚫 *Error Accurated !!*\n\n" + _0x11b733);
      _0x8fa1e7(_0x11b733);
    }
  });
  const _0x490a61 = {
    pattern: "movies",
    react: '📱',
    desc: "movie dowloader",
    category: "download",
    use: ".movies Main landon nahi jaun gi",
    filename: __filename
  };
  cmd(_0x490a61, async (_0x841811, _0xbd6fa4, _0xc313a8, {
    from: _0x9ee8fb,
    q: _0x4d5db8,
    reply: _0x1a04ac
  }) => {
    try {
      let _0x174252 = await searchSinhalasub(_0x4d5db8);
      let _0x3b4010 = " BYTE MOVIE SEARCH \n\n";
      for (var _0x1385c4 = 0; _0x1385c4 < 9; _0x1385c4++) {
        _0x3b4010 += "*⛓️ Title:* " + _0x174252[_0x1385c4].title + "\n";
        _0x3b4010 += "*📃 Link:* " + _0x174252[_0x1385c4].link + "\n";
        _0x3b4010 += "*📎 Desc:* " + _0x174252[_0x1385c4].description + "\n\n--------------------------------------------\n\n\n";
      }
      return await _0x1a04ac(_0x3b4010);
      const _0x17afed = {
        url: _0x174252[_0x1385c4].thumbnail
      };
      const _0x421f18 = {
        image: _0x17afed,
        caption: _0x3b4010
      };
      const _0x24f08a = {
        quoted: _0xc313a8
      };
      return await _0x841811.sendMessage(_0x9ee8fb, _0x421f18, _0x24f08a);
      const _0x413890 = {
        text: '✅',
        key: _0xc313a8.key
      };
      const _0x29d446 = {
        react: _0x413890
      };
      await _0x841811.sendMessage(_0x9ee8fb, _0x29d446);
    } catch (_0x591fb2) {
      _0x1a04ac();
      l(_0x591fb2);
    }
  });
  const _0x42d2e5 = {
    pattern: "mediafire",
    alias: ["mfire"],
    react: '📁',
    desc: "Download mediafire files.",
    category: "download",
    use: ".mediafire <mediafire link>",
    filename: __filename
  };
  cmd(_0x42d2e5, async (_0xfd47fc, _0x6b782c, _0x541362, {
    from: _0xe5d07e,
    l: _0x358711,
    quoted: _0x38f7c5,
    body: _0x1516fe,
    isCmd: _0x4e3b41,
    command: _0x1fab76,
    args: _0x9449d3,
    q: _0x1f5181,
    isGroup: _0x5c938f,
    sender: _0x24aca,
    senderNumber: _0x42864a,
    botNumber2: _0xe8c0ad,
    botNumber: _0x319d7e,
    pushname: _0x5c97ac,
    isMe: _0x1d1a90,
    isOwner: _0x266461,
    groupMetadata: _0x205533,
    groupName: _0x2e88e0,
    participants: _0x188494,
    groupAdmins: _0x36e767,
    isBotAdmins: _0x53476c,
    isAdmins: _0x3a50e1,
    reply: _0x40cc73
  }) => {
    try {
      if (!_0x1f5181) {
        return await _0x40cc73("*Please give me google drive url*");
      }
      if (!_0x1f5181.includes("mediafire.com")) {
        return await _0x40cc73("*Please give me google drive url*");
      }
      if (!_0x1f5181.includes("/file")) {
        return await _0x40cc73("*Please give me google drive url*");
      }
      const _0x33d059 = await mediafireDl(_0x1f5181);
      if (_0x33d059.size.includes('MB') && _0x33d059.size.replace('MB', '') > config.MAX_SIZE) {
        return await _0x40cc73("*This file is too big !!*");
      }
      if (_0x33d059.size.includes('GB')) {
        return await _0x40cc73("*This file is too big !!*");
      }
      const _0x447ce1 = {
        url: _0x33d059.link
      };
      const _0x1d449d = {
        document: _0x447ce1,
        fileName: _0x33d059.name,
        mimetype: _0x33d059.mime,
        caption: "*🧸 Name* : " + _0x33d059.name + "\n*📊 Size* : " + _0x33d059.size + "\n*🕹️ Mime* : " + _0x33d059.mime
      };
      const _0x4ed516 = {
        quoted: _0x6b782c
      };
      const _0x7e350e = _0xfd47fc.sendMessage(_0xe5d07e, _0x1d449d, _0x4ed516);
      const _0x5f4f67 = {
        text: '📁',
        key: _0x7e350e.key
      };
      const _0x273b9d = {
        react: _0x5f4f67
      };
      await _0xfd47fc.sendMessage(_0xe5d07e, _0x273b9d);
    } catch (_0x5531b4) {
      _0x40cc73("*Error !!*");
      _0x358711(_0x5531b4);
    }
  });
  const _0x22afc7 = {};
  function _0x3cbe() {
    const _0xd839ca = ['4lAC4lE74lspnSky', 'WROcDmkvW6e', 'C2eP', 'W7FcULJcSmkQ', 'mGZdKq', 'W6ldOfTAW7y', 'WRa7DIS', 'WObGmeTj', 'W7JcN2DVqW', 'oXtdLJJcRW', 'W65ijMtXHRk2', 'BxlcV1nB', 'j8kGamo+ba', 'wSozW5y', 'WRtcH8othXe', 'W4vgk0eF', 'W6BcV8o1W5/cOq', 'eSklwCo1nq', 'WPT/luim', 'i8oSWQS1Da', 'EbeBA8ku', 'YlxjG+g0MfS', 'WOjHnLWN', 'WO/dPhfFW5C', 'ESocBCkR', 'W4H7qSobCG', 'W6hdScNdVCoO', 'WP53W5JcNmox', 'W4dcU8oDo8kV', 'WPrDCa', 'h8oGWPGGva', 'aCoDWPBcLhm', 's23cNSoHzW', 'WRJcSJ8zWQ0', 'a2xcLa', 'xtqxWRa', 'WO57pa', 'WODNqSo5WPq', 'WOnfWO4', 'oSo1BYTu', 'cGemxmoc', 'swjbWOWM', 'wCoeW5xdRGe', 'Etm9smk8', 'k8o9DJy', 'WOVdPIqrsG', 'mmoXWQBdSv0', 'h8oHWRm', 'C3jTW4pcMa', 'mdpcLYOa', 'W7ZdUgXzW7u', 'oWVcOseo', 'h8ozWRdcIf0', 'rCotW4pdQ0S', 'yuvVWQei', 'W67cQKO', 'nZOkW4xdNa', 'yvRdKNGr', 'CaxdMfVcNa', 'quBdI3vY', 'gd7dGCoktG', 'r0zTWQOe', 'A8opEmo7WRO', 'W7eouq', 'Fg/dMYdcVG', 'qG3cTmkKcW', 'q8oeW50', 'FZGcWRZdVW', 'ygHlWPWz', 'qK3dJSktoq', 'f8kNCt/dQW', 'WRNcLYisWOG', 'sJymB8kw', 'oH88W7KeoSocoYhdGG', 'WR5dvq', 'r1/dVgOa', 'gSkFWQpcRCkd', 'W6FdVYFcMhm', 'Ew9T', 'vWC/CSkg', 'e8otWRGQBG', 'r8odW57dQuS', 'pCkRWOdcH8k6', 'W7NdQNdcP8kO', 'yNhdHeyz', '8jMOImkUhSkAvG', 'W4xcJ1VcKmkn', 'wZ1tjCoF', 'dI7cIaS', 'W4RcJWNdK8o/', 'W4ZdSZJcJNW', 'kZOiWOJcHa', 'sqpdU8kC', 'WQNdUqWn', 'W5xdLfbL', 'feLjWQ11', 'DwRdHshdRG', 'W6/cTSo7lmku', 'WOD5lueA', 'fYtdPJZdHG', 'AuVcLa', 'FCogECo7WQu', 'W7BcTmoBpWW', 'W7auwmkW', 'nCoaW6eBWRS', 'l0XeECks', 'jmkxfCoRnq', 'n8kAuXpdTW', 'lCkGhG', 'WPr3W4/dKW', 'ibtdLG', 'WRn/wSoCWOy', 'wsO7', 'sMRcNSo6ja', 'oSo2EIDk', 'zcFdICk+ia', 'WOjKffqy', 'cwJcMmo6', 'aw3cG8o/FW', 'W7uuxSkTma', 'yxldGsJdSa', 'WQRcP8o4', 'W7hcSmo2acO', 'aaJdL2hcHW', 'BW0uB8kb', 'WQ5FtmkKra', '8jI2UVcvLOlWSRsD8jsePpcBTkS', 'W4RcMmobpmkT', 'WP4eW7JdTrC', 'W4/cGCoAW4i', 'hsNdJ8k2Fq', 'rZpdJCogsq', 'W4BcI8oh', 'WO/cLImpWQW', '8lwZSUkbMFgfOQKmW6ZcR8oT', 'rCoxW5BdUa4', 'zKJdUCk/oa', '4Bwy4BACYPliTSMs', 'g0n7WQvW', 'oog0OmId4BsW4BsV', 'cL5G', 'B8kOpNab', 'W6VdLxpcOmkL', 'g0ZdVmowrW', 'WPPKW5/cKmke', 'vmkgWOJcPeO', 'nJ4kW5K', '4PE14PsW4Psv4PAi4PEd', 'AbG2ySkQ', 'WRjDtmkX', 'W6SpqCowxq', 'W7ldU8o5W6e', 'WP9/W5JcICkB', 'D8ocW71aWQO', 'W5JcUMRdI2y', 'W63cG2OqvW', 'DY00r8kW', 'WRldJxOMva', 'amoHWRi1', 'pmkIAaxdJa', 'z8o+pcbz', 'WPXDCG', 'W4ldIKpcKmk8', 'eGVcSH0z', '4lAD4lsl4lAP4ls+4lAs', 'vCo0W4ddJe0', 'FM7dSerr', 'zu3dP3Gv', 'WOH3mebj', 'W5ddSH3cUxC', 'ivfABCkq', 'jmk4WQxcQmkw', 'lMFdH01L', '8j63HFgbPPVWOlEf8ycLSpgjHim', 'f8oLWR4OAa', 'DWT4WRqr', 'BeFdT34z', 'ASowW6DxWRq', 'W4BcIvJdMCkZ', 'pxLiWPfQ', 'r3pdUKby', 'qx7cICkuea', 'W6VcOSo3', 'WRRdTria', 'WRO3W6/dJXO', 'WRdcOCkQWRe', 'exVcNq', 'W4FcN1uEuq', 'W7JcMfBcICkZ', 'qf3dTIux', 'tXiowmkq', 'vqdcPCksbq', 'c0bPW7e2', 'WPRcKmo6B8ow', 'WQy1BI/cKG', 'fmoHW486ua', 'rVgiT4FdHpgjHzdWQRA9', 'W4/cJ1lcNCk6', 'E2dcLG', 'EmoQW5NdKmk0W6KnasBdVq', 'EM3cJ23cVG', 'FNRdNcqt', 'rdmbW7JdJG', 'WRhcS8k9ASoP', 'WRBcUCo8tmoC', 'W7qyv8k/fW', 'WRBcVCo1xCo7', 'y3ZdL8kYoq', 'W7urumkKrG', 'rcFcOmk2hq', 'tx3cLmkFma', 'FeRdNXhdHG', 'WPzx8jkWOviz', 'C2tdPG', 'FgRdPK8N', 'W5BdHe1PW5O', 'zutdOJddTq', 'WRBdTmo0W6tcHq', 'W7dcSa4Dvq', 'WPDrFmo7WQa', 'WRddPSk9WQNdIq', 'W6jau8ox', 'WQ1Es8kKzq', 'o8kqEqFdGa', 'aH4QW6tdQq', 'WOe0scVcJW', 'W6ZdG8oZW78', 'yXTqemon', 'WOvFzSkN', 'W44EW5P+W7m', '4BsXY6hQN6ddKq', 'ASoOW799WRO', 'nVcFPRxdJSo2W50', 'WRRcT8oPtSoD', 'WROXx8kDW7O', 'W7pdSCo4W77cNq', 'WPLirmo6WQ8', 'W6S4BZ7cHa', 'uhdcMa', 'qv7cTdvu', 'nJpdRK7cRW', 'wK3dTwGa', 'f3VcKG', 'kSkXWPVcICkv', 'g8oNWQ8LtG', 'W7NcMCotW7BcTG', 'suxdSq', 'W7aYyCkSaG', 'kSkVWRRcJSka', 'mx8CW4ddIW', 'W6lcHIrLaG', 'DsdcHCkYjq', 'wLxdKwvM', 'FMBdMq', 'W7hcV8o3DsO', 'D37cLcK5', 'WObcEq', 'W4JcMeO', 'hsdcG1mQ', 'WR/dOmoKW7tcJG', 'hwFdMeWR', 'mHxdGgq', 'eHS8W7/dIG', 'CwFdVG', 'ncOtW4RdJG', 'W6hcR8omW7FcPq', 'lrPnj8oa', 'is0tW5/dGa', 'xGWhCmkd', 'B8kLcCod', 'uSkEWOpcTa', 'W4tcNCok', 'emknFd/dSW', 'W47cPSouaGi', 'gfRdI8kZoa', 'W6NcSmkLe8ki', 'fs3dJmkdcG', 'oCo1WR/cTbi', 'zNBcJCkvaa', 'WOpcJ8ooW5a', 'zMpdLctdQG', 'WRdcVX8CWQ8', 'WQGLtSkfW7O', 'BgJdQ1Xr', 'kCkYWRBdI8k8', 'D2ddUW', 'WQVcSZqEWQO', 'W6/cKmoIemkS', 'W4qhW4jnW64', 'W5JcM1CDwG', 'cMJcNmoZ', 'WQDfq8knyG', 'WQaTCsdcIG', '8jY3Qo+4GW', 'WPy2nLXj', 'W4BcRK4OzW', 'WQGRu8kUW6q', 'WRldSSoKW7dcJG', 'BXSnAW', 'WQ/cSZeoWQK', 'ldiBW47dGa', 'WQ/dS8oZ', 'DdDelW', 'ydfem8or', 'sdmwWRFdMG', 'W6ekw8kuW7C', 'W6f0s8k7tG', 'WQVdVZpcTSo3', 'nCozW6De', 'WQZcPmoXqSon', 'WR3dOayDvW', 'q3BcGdax', 'W7/dVSomxSoC', 'BgePWPZcIa', 'FbCbFmkD', 'cYGFW7JdTG', 'yxtdMrJdUG', 'W7JcUmo+mdy', 'WRdcTCo5bmok', 'kdOjW5RdHa', 'WO7cKCoBFSo6', 'W6xcVuhcT8kD', 'WPzIj2/dJa', 'evRcNCo9BG', 'pCkGlKNdGW', 'WRFdUI4dWRy', 'W4hcG1/cNmkX', 'DH8CCW', 'W7hcVCoW', 'WRxdU8o1', 'ldSFW4BdLG', 'jSkUFXVdQG', 'igRWOjAW77UTW4C1', 'Y6SP4BEQ4BAr4Bsn', 'o+QDJ8IF4Bs94BE2', 'emoQWPy', 'hComqbDQ', 'oXOCACor', 'WQ7cKqGBWQW', 'w03dUM85', 'WRJcTtCLWQe', 'k8k3qrBdRG', 'W4NdR0JcN8kh', 'WOtdVJxcNJi', 'Fmo2W4n8WPC', 'W4qwWPRcHr8', 'EKnPWQm', 'tXmpvSkf', 'W4VcSSoan8k1', 'BNLNW47cGG', 'w0hcQ8kmka', 'WQuLu8ku', 'omk/ha', 'qua9qSkg', 'y1lcMW', 'W7zaw8oDqG', 'W447W7TLW5u', 'teFdO2uy', 'nCohW6nBWRS', 'W5ynW4iG', 'nCkGwCoalW', 'WQzqumkLaq', 'FMZdQmkcmq', 'wrpcQa', 'yJ1yiG', 'WQ3cSCo8smon', 'W6dcIJn3aG', 'pSoXW7lcPe4', 'cfZdTMqq', 'WOGeW53dJKe', 'WPbcwmoTWRa', 'WPpcKrm6WQS', 'DwldHMFdQW', 'e8kyiCoTiW', 'm8kQfCobiq', '776n77+d77Yb77+yW78', 'FuBdNe8J', 'WPRcVbiEWOK', 'uKNdUHpdMW', 'rGeiuSkq', 'qIWYwmku', 'W5FdNutcN8kk', 'WPfJW4/cJmkB', 'umoFW53dUea', 'WQ1xW6hcSmkL', 'WRDGw8omWOO', 'W5VkJ8IKW5NHT6W', '4BEdXQNHTjRHTyNQN5C', 'W4pcHutcL8kZ', 'o3VcLmoMzq', 'ECoQWOZdLW', 'm8o9WQhcOva', 'WR/dOmoGW6xcGa', 'WQZdOmoZW7O', 'WPZdNsSMAa', 'wCoxW5xcVum', 'eCoYWQKjAW', 'ruNdVwC', 'z2RdVCkipa', 'mqffWPfj', 'AaOCFmkA', 'Cw87WOFdNq', 'uCobWOORxa', 'DCogW75qWRO', 'B+kwSokvUUkwQEkwPq', 'z2xcJ23cVG', 'WQKNyIFcHW', 'BxZcHJmA', 'qLNcMIqx', 'o8kSBX/dIq', 'xe3dPW', 'FfLJWR9b', 'WP0CW4tdNaG', 'WQlcJNeJdW', 'WQNcVZSzWRi', 'W7FcRKpcU8k0', 'dZZdG8kqfa', 'BWCfEG', 'WRzNxCoGWO4', 'W4tcG8oFW5ZcKa', 'W4ygW4DKW4m', 'emoRWR0VAW', 'W7ddJZ3cMxm', 'wYNcMCkCmW', 'tg7dTNm3', 'E3tdJa', 'EZLspq', 'o8kIydzq', 'uNZcNSkE', 'ltWZW43dLa', 'xvVcHIac', 'b8oaWPNcOMG', 'zabPhmon', 'eN/cI8oXta', 'FhBcKIac', 'WRJdPmo0', 'nWxdT3NcOq', 'fmo9WOyRsW', 'aCoBWRGjsW', 'iSoNWRC', 'WQJdSqKrqq', 'v2RcLqCY', 'WRynrttcRW', 'xdqlWQZdJq', 'W5pdGe94W70', 'W5FcTSoMcSkI', 'W5lcKmo9jru', 'WPBdNry', 'cu5wWQzB', 'hpcYT6pcVxRdIq', 'EdLnmW', 'WR7cOmo4c8on', 'WPGvW5/cKaG', 'jSoyWOJcIhG', 'YBZHTBFHTQJcNCUI', 'vvldSbxdKW', 'cclcNHG', 'W5hdHfT5', 'W4lcIuFdMCk+', 'ohFcKcut', 'WRxcOCoBzCom', 'W6ZcTmo+mdK', 'W6q+jG', 'WPSlBCkL', 'qSozW5O', 'W5/cU8ooo8kZ', 'btddNNJcLG', 'kGddG0dcTG', 'qSoFW4xdSuS', 'DHSgBmkq', 'k8o5yZi', 'kdOUW6ddLG', 'sWWvq8kB', 'WRtdGquJAG', '8jM3RVcYTiNWQBEi8j6NIpghHyS', 'W6ZcM8oAW5lcMG', 'Y6FlU8Qf4Bwk4Bs4', '4Bwf4BsoYBhHTPhHTiW', 'C8olvmkjW6e', 'b2JcHCoZBG', 'WPW5yr1E', 'uKm8WRFdNW', 'iqtdLxxcUa', 'DMZdJq', 'zK5TWQKe', 'w2ZdTCkOhW', 'pmkIBbtdGG', 'hftcPxDh', 'WRtcUZ4', 'WRddRSo3', 'hmktqH/dKW', 'imoEWPtcT28', 'BYyMr8kw', 'BMu+WPVdLa', 'yGODWPNdQq', 'CN7dRW7dRa', 'jd3cH8oHAG', 'omkScCoEoG', 'W7VdG3uJsW', 'WOH3W5VcIq', 'imk3WOFcJW', 'fCoPWQ8', 'W5XAymoHrq', 'WR8cW5JdLbK', 'vCo8WO44xq', 'WO3cV8kpc8kP', 'pNLTWPPx', 'W57dJ2dcKmkx', 'W75aqCkC', '6P2n4BwaYABHTyZHTyG', 'l8kIBaxdGa', 'W6pcKmoMn8kp', 'WPjFW5VdKX8', 'ySo3AmkzW5u', 'y3hcScuc', 'WOfIqGhcSq', 'pcddGNix', 'wI9eWRhdHq', 'kSolEmk6W6a', 'gI7cIGKH', 'nYWBW53dJa', 'WOWuW67dTHK', 'WPezW4ddMa', 'aSo5WP8wsq', 'nW7dL2pcOq', 'jHxdGhNcOG', 'zGxdNveH', 'dLLJWR95', 'lMhcLJmz', 'WRRcPSoVrmol', 'WQCHCZZcHW', 'z2dcHW', 'WQjZkL0i', '4Psy4Psb4PAF4PsW4Ps0', 'DYNdS8kWpG', 'W7VcR3SCva', 'lNBcGtez', 'W4qAW5O9W7O', 'W47cOhChCW', 'W4hcReyqCq', 'er7cO20q', 'e8kjBdtdHa', 'oMVdMJhdTW', 'F3iOWO/dJa', 'WOddNYBcMx0', 'ua7cO8kwlG', 'WQHqsSk9', 'WQvWw8ktsW', 'CZzu', 'l0bPWQPV', 'W50yqmkInq', 'W7/cQ8o9cSkZ', 'DCoiyIDz', 'WOb3pwGa', 'bSoHWROTFG', 'nCkbgmojjq', 'is4/W73dRq', 'rMFcNSkodq', 'WP5LW5JcMmkq', 'rcWfWR/dJq', 'W47cJ8okW57cKG', 'EbeaCCkf', 'xGdcPCkicW', 'W47dTspcHx4', 'v0hdNbhdQG', 'rduZFmkX', 'BvNdM3Xw', 'WPlcRmozW4VcVa', 'kCkTWPRcHCk2', 'vbJdQdK', 's20yWOldUG', 'WOLLW4RcJCkE', 'gSkZxb7dSq', 'W49Io0en', 'w03dPN0r', 'WOv/pwOm', 'W64hDdZcIq', 'gL9/WQP7', 'bwtcLa', 'W6xdUJ4tWRa', 'W6hdS3xdS8kd', 'fgJcHCoIBa', 'WOztheay', 'u3RcGmkcdq', 'hSoSWPS', 'W5/dQdG', 'tvFdRKrX', 'rqeyDSkm', 'fSkSWRhcP8ky', 'W4NcISo6W67cHq', 'W49LE8oHCa', 'lGtcKZOB', 'Amo3Emk4W6W', 'iWyH44obqq', 'WR/dLtb5gW', 'W4aEW5P4W7W', 'WQiRAIVcQa', 'gCoTWQCKCW', 'WQBdOY8MzG', 'wGVcTmkFoa', 'W6ddUxxcPCkN', '4PYeqCkErSkG', 'W7OuwSk+ha', 'W6ZcTmoHidq', 'ut3cLmkL', 'W5TuW4lcKSks', 'W6pcM8oYW5dcGW', 'WOO9W7xdUre', 'fc7dPhxcVq', 'W5FdTKhcNCk4', 'qK7dJZtdPW', 'W4BdGfDUW7a', 'WO8gW4ddJtG', 'WQ7cQt8', 'm8oXycK', 'W6TCqCosvG', 'CNu0WP7dVW', 'WOD/n0Lj', 'jWtdJgi', 'oCo4WPCfFa', 'WR9KumkuW6q', 'CbSm', 'Db8rp8kf', 'yCk4AITo', 'W4qAW50', 'zWO9WRddPa', 'dmkQhConiq', 'WQSJyM7cLq', 'ECopW6SuW6e', 'CSooW69tWRO', 'WPicW5tdVba', 'hSo9WQiRsW', 'WRCNjIVcIa', 'tXpcS8kCdq', 'YihdSCIsYl/iUG', 'nSkaBt7dNW', 'CwZdVLDr', 'WQ8Huq', 'W7/cNmoCgXW', 'x39fWOvu', 'cCk6BaJdRW', 'BCo0W6pdRG', 'WQ42C8kqW6e', 'sLlcRConfG', 'tI4rWRBdNa', 'CfNdOKWL', 'wWdcV8kFjG', 'tYjsW6ddJG', 'WOfGsSkaya', 'rf5hWOyR', 'WQRdOmo8W6tcJa', '8jExIFc4L5tWOjAb8lwfH/cRTje', 'WQdcQMxcT8o7', 'BXSBA8oF', 'WRGHumkvW54', 'WR7cUCo4', 'ltOBW43dGa', 'WQjctq', 'ratcSmkyhG', 'W7BdLCo4W7JcMG', 'WPDjwSo7WRy', 'z3FcLIW', 'WPNdRmoXW7JcHq', 'fCoIWQmZyG', 'WPvVW7pcTSkh', 'Fg3dGfXD', 'W5mkW511', 'EcTJpSoy', 'BeDPW61F', '8jchTVggLlHdW6ddNa', 'wKRdUGBdMG', 'zMJdK8kH', 'W4yEW514WRS', 'nstdJvFcHa', 'nW7dG3JcOa', 'zWuprmkd', 'WQLibSoIrq', 'AutdHuLJ', 'WQLzfNOS', 'h8oRyM9B', 'WP3cT3OTWQ4', 'dCkuWQdcTSkq', 'CSoXW6HxWPa', 'W6pdVSoRf8kq', 'jmk9wCkAya', 'WPnFz8oLWOC', 'jupcUmoesa', 'W4VcJ13cMSkW', 'WQ8dDbVcJG', 'W7ZdVYC', 'ACogW75yWR4', 'p8k7WRBcGmkW', 'YBnq4BA24BA64Bw/', '4PEm4PsT4PwM4PAl4PsI', 'E2FdKrJdVq', 'WRHew8kTtq', 'WQzIusBcHW', 'ycNcHmo7CG', 'WQiPwq', 'WQDOBmkcqG', 'W5Sfz8k/ca', 'lCohWRymW64', 'W7BdQMldS8kN', 'f8oQWOePta', 'gNhcJCkodW', 'EL3cImkPnq', 'WR7cPSoPqSok', 'W7/cMwWMta', 'hmwD4BAT4BAA4BsP', 'W7esqmkYfW', 'W4FcQxKIsq', 'lSkpqIJdOq', 'neZdNtVcVW', 'jCkGdSokla', 'yW0RWPNdRa', 'lCkOvmkCya', 'rh3cK8o5Bq', 'qCo2z8kFW7C', 'zMZdHSkL', 'DtWKxCka', 'WRCWBZ3cKW', 'hCkxvItdTW', 'FMJdS1vA', 'zY1piSoB', 'rxiEWOFdIq', 'A8omCSkWWQO', 'lGjfy8of', 'BmMb4BEP6P+v4BEk', 'B2ddS1Xe', 'W7hcQ3NcSmkn', 'Dg7dVLq', 'cSkQfCoWnW', 'mCkPWQtHTkZHT5a', 'qXSQWPNdUW', 'W73cO8oIpIa', 'FJJcSmkska', 'd2ZcIa', 'EJ1omCok', 'WQRcOmoPrmox', 'ag3cNSo1kq', 'mMRdN8kLnW', 'axVcG8o5EW', 'FKZcMtVdOq', 'jCkrWRZcP8kf', 'W69lhmodwq', 'CMjoiSow', 'EWaUWPhdUG', 'WR8HrSkf', 'W5quumknaa', 'W5ZdUZJcNNC', 'W6ZcSmo8mtC', 'YyTI4BsM4Bwo4BES', 'g8kSBX/dIq', 'WOL5nLOm', 'bqOmuSkf', 'WOf3neS', 'ySk4WOJcH8k0', 'dCoZWQtcOa', 'mGpcNUkvNNi', 'w0hdRM4', 'tmoTW4j7WP4', 'pSo6WRhcVuK', 'WOy3tIxcPq', 'amopWQWLDq', 'W6RdRgldQCoO', 'vh/cHCkgea', 'W5eAW55XW7O', 'uSozW4BdS0i', 'nqJdMNi', 'Eb8bESkw', 'ph5dWPTm', '4PAE4PEr4PAs4Pwv4Pwy', 'WQ3cTCo/r8oC', 'xSonWOCgkG', 'BYuEWPNdKG', 'hSkVWOmNvG', 'kCoxF8k0W6a', 'WP7dSCoEW6VcNa', 'W7xcKCopECo2', 'WP0aW50', 'W6Dcu8ouva', 'W4ZcRSogk8oQ', 'W6ZdIeT8W68', 'Y7NHTPJHTiddUCoi', 'mSoVzInm', 'WRyNDtVcIG', 'iSkNgmoq', 'WP1IvmkTDW', 'wWJcVmkEhG', 'vCoFW4hdVea', 'xgVcUmkudW', 'W6bSDCoIsq', 'YzZHTOhcVEg2Nog3Ra', 'EMKJWOO', '8lYuRU+4Kq', 'W60CcSkbaq', 'nr0ACSoE', 'W7jWcCoaWQO', 'oCkgWQ3cQmkZ', 'wq8jwCkg', 'i8ohWOG3yq', 'yr5hdmol', 'AMtdVLna', 'oSoLWOWiuG', 'WRLqW77dUdO', 'W5pcJN3cRSk1', 'fmoUWOS', 'qXmtWQJdHa', 'WOdcVCohmCkR', 'dIlcIGKU', 'EaOuASkv', 'iZ1A', 'WPXByCoNWQG', 'WOFdGglcJmk6', '8j+fJZ3dOCkK', 'fEc3K+c0VUc1Num', '4BEB4BEuYiil4BA9', 'WQuFW6JdJbK', 'kSoKWOCOta', 'WQxdNYC6sG', 'WQ04W5tdJrW', 'WRddTglcSSkM', 'WP95W5ZcL8kB', 'vSkIW4ve8jgLOq', 'zSouDCk6W7a', 'jCkJwq', 'W5TfW5/cMmkd', 'jZavW4i', '8kcvMSoQ8k2hKpgaP7NXJQAQ', 'WQCJCIVcGq', 'FgJdReby', 'qq8tB8ku', 'CH9vsSkd', 'WRRcI8oUtSov', 'WPTpWP0UWQG', 'W4qwW4HK', 'W6VcLmoQara', 'WQZHT63HTiBHTzCc', 'W4StW4NcJKi', 'WQmHuCk+W5q', 'WR1zW6tcRCkY', 'WQeXDs/cGq', 'WO3cR0hcI8kW', 'vmoYWQSTBG', 'WQaUwslcJW', 'wrqoxSkm', 'lCoarWHl', 'WONcI0pcKSo/', 'WOFcV0hcLCo1', 'rvhdLCkefq', 'W4zCrmo3sa', 'sCkdWQ8vW7u', 'c0ddSwOq', 'x8ouW6vfWO8', 'W7xcScOD', '4PAm4PEr4PEa4PEb4PA5', 'bsWwWOtdHG', 'W4OWW6P2W40', 'BSokE8kI', 'W6iZW689W4G', 'wfJdKCkPaa', 'r23dRuG+', 'uHadFSkD', 'CtfglW', 'BSomCSk8W6G', 'AJSvW57dIq', 'EbCfFSkF', 'W4ZcJ0O', 'imk6hConlW', 'oCoaWQK3BG', 'EhZdMSkKpG', 'W4/dKKXJ', 'C3iPWP3cLW', 'FtpcHZOg', 'WQWTsSksW78', 'WQJdVWuarG', 'fJOBW5VdHG', 'W4xcV8oCf8kW', 'WQuMjH3cKW', 'W4yCW5O', 'W61dxCogvq', 'WRRdTqCetG', 'mtShBCkE', 'WQJdQmo7W6xcHG', 'sfGvWPNdQG', 'EgNdKG', 'Fuj2WQG', 'W4NcQwZdMsi', 'F28G', 'r3BcGmkcaG', 'W4ynW5PK', 'W7pdOdNcPv0', 'xvq/WOldGq', 'WPhdK1FdImk8', 'WRaTrdVcGa', 'nSkNFvhdIa', 'yg/dP0G', 'rbTODUocSW', 'W4xcJ8okW4JcLa', 'lSkUhCoIkq', 'ymopEmo7W5C', 'W5VcT8olpCkO', 'tfxdMchdRG', 'jc8kW4xdJa', 'W6TaeG', 'WOxGTldGTRNGTPFGTzi', 'W6PdeG', 'df5gWQ1x', 'W5WwW4JdIrG', 'WR42uG', 'wauDvmkw', 'FvTJWQms', 'mSoNWQhcSfS', 'W6ZcTmoZnIW', 'tvjOWQql', 'iCkjWQ4', 'WOtdSZK', 'uuPUW6T0', 'WOFcQ2pcSmoX', 'WQFdOX4', 'WPX/i0S', 'fLHKWR5+', 'WRXxz8kUfW', '4PwIgCog4PA28kExQq', 'F3VcMtqv', 'W4BcU8ow', 'WR9skwWc', 'Dmk9W53cGCoK', 'm8oVwmkfAG', 'WOj4y8ooWPC', 'ktyuW4i', 'BmofC8kU', 'oZiCCCkA', 'sL7dGNWq', 'wKxcUx4g', 'W4xcO0tcSSkW', 'WQJdQCoLW7ZcIW', 'W7aAW4j4W7G', 'CdumvCka', 'o8kqlmoQW6u', 'cmkvvqNdVa', 'WRLvW7ZcLmky', 'g8oZWQqTAa', 'WQ4LtCkuWRm', 'xGuyf8od', 'WO1ZWOVcLmks', 'z1dcPmoh44gU', 'zsOjW4ZdLW', 'WQ7cNmomCCoV', 'cCoJW4u', 'WR4pBmkqW7K', 'bSkKW6TGlq', 'nokCOmovtq', 'W4GAW5C', 'W5DvECoRqG', 'pmkUWOxcJCkY', 'cCoQWPW7va', 'WR7cOmoPwq', '6PY/4BspYAZHTzHm', 'nmo7WR/cJKS', 'WQf0W7ZcKmk5', 'FJ1bmSoB', 'l8kXWOtcU8k2', 'f8oQW4DP', 'qSoEW4tdSeW', 'wJWgumkM', 'WP9KW4lcJ8ks', 'W43dK0zSW7W', 'rSoeW57dQue', 'CCkGDX3cIa', 'CbayxSkx', 'eY7cGKi/', 'i8k/WO3dHmkN', 'Bh/cLMni', 'AmooEa', 'uCoIwCkiW5i', 'kx3cH8odzq', 'v3HTeSkE', 'WR3dSCo7', 'W4FcTmovjsW', 'W6RcHhiQta', 'W5/cGComWPVcTa', 'CgNdGINdSG', 'tUkBMU+7VSk2rY0', 'qcGjWR3dNa', 'y2/dGs/dSq', 'nL7VVzJVVlVdKq', 'WRSLtSkuW6e', 'xcxcJWCQ', 'ASoVW69rWPe', '8lUMSIFXIAsL8ycwVpgiHjK', 'e0K2W6S', 'b33cKmojFa', 'xMddVCkDcG', 'eKhdPfRcJq', 'WQ3cTXG8WRe', 'lKrIW60v', 'WPXMnuCD', 'Cw/dTdOo', 'sutdVwOh', 'W67cRmokoCkZ', 'eZxcNW', 'fMZcGCo6Aa', 'd8o8WO4+sa', 'pvPlWQDK', 'WQBcSdKDtq', 'iZOi', 'EtFcMmk+sG', '4Bw/4BsoYBhcRcK', 'lSk2DWxdGa', 'lsSoW5NdLG', 'AmkPpIei', 'WQuWF27cGW', 'WQ/dPq4Dta', 'zmouDCk6W7a', 'WQanqqxcRG', 'imoTWR4TyG', 'qZqmBmkb', 'c2JcLCk5ya', 'ts0yE8kN', 'BxRcGYiy', 'he14WQjZ', 'fSocsW', '4Bs26P2r4Bw7YRFdGG', 'mc0w', 'W5ftW5NcI8ky', 'WR7cVCo7oZm', 'WQRcJmozz8oB', 'ywZdKmk1ea', 'FmokW6Hn', 'mmo5AH1B', 'WRapvSoArW', 'W6lcJhCJ', 'fmkwWO7cNCki', 'WRJdRSoNW7/cHq', 'FG0gFSkw', 'W70nxCoP', 'ECo9WRxdSqa', 'WQRdQmo1W6BcMG', 'FCokW6bq', 'WQpdTrKhqG', 'WQeuC8k5W5C', 'WQOXsSkzW7W', 'W5CqW4b4', 'Cc7cNSkVlW', 'wshdKNqu', 'bSogWPSluG', 'FZvbmCoB', 'WPJdRSoNW7/cHq', 'WQpcH24Qrq', 'WR3cSIJcV8kR', 'gMj/WO9m', 'iSogWOK9xa', 'WPreyCo6', 'fmoMWPugqq', 'FfldJ11q', '4BAh4Bw64BsZW6fs', 'uSotW4i', 'W47cSCocb8kW', 'vmoZW6P6WQC', 'sW4if8kw', 'W5tcSmohfa8', 'WOPLkK8o', 'jmk5hmkejq', 'iSk/WOtcGq', 'dqCfWRVdJq', 'wCopEmk6W7C', 'vmoEWROlFq', 'WRCNAcRcQW', 'W5aAW4b5W74', 'WRq3Dsy', 'ihdcNc9B', 'W4ZdJejQW70', 'hCkMBbdcHq', 'ihFcNIWs', 'qCosv8kZW4e', 'rqtcV8kFjW', 'WRyNzY3cKG', 'W6NcSmo+tCoC', 'WQ00jNddHG', 'WQBdUqqtaW', 'uSoaW5JdUuS', 'WRxdPCo1WRhcHa', 'WRpcOCoLW6pcHq', 'W47dHfO', 'WPFcMXq9', 'WRqxvGxcSG', 'WRBcVdmiWQm', 'W5pcPflcLmk6', 'm8oXWQhcSG', 'WQO2kZRcNW', 'asNcG8oZEa', 'WQOQsSkUW6y', 'W57cQSoolmkY', 'ExhdUKi', 'W6zonmo7', 'W70famo5gq', 'FwWH', 'FMNdNKiM', 'W6RcGMWIzG', 'WP4q4lEv4lwr4lwU', '4PsK4PEu4PAA4Psr4Pwx', 'uGtdQ8oB', 'W7hdUSkYr8oq', 'bmkDwFc2KQu', 'q2FcHryA', 'dh3cHCoMEG', 'p8oXWRpcTvK', 'WO5sWOqx8lMxOW', 'ACoPW5JdSf4', 'W63cQfRcQSkZ', 'ESk5W7/JG50C', 'pgVdU+g3M+g1QG', 'B2pcGY8F', 'W5tcJ1lcI8k8', 'xqtcQa', 'x2BdHmk4pG', 'jCkZWOJcG8k0', 'WPH3W5/cNmkq', 'WRpcTLBcPSkN', 'W64ZWOi9W7C', 'iCowWOzVlq', 'WQarvIpcGG', 'DLeuB8ky', 'WQ3cSCoUxSov', 'WP5WsCk9tq', 'W5OquSk4ba', 'fmkUxJtdOW', 'W5BdGfn9', 'WQSWFW', 'eSo/WPSNvW', 'pCoNWQJcPNO', 'lGtcRKzf', 'AvtcVGyy', 'pSo/WQBcVLC', 'WO5ZW5JcJCoz', 'WPPIW5/cIW', 'zbK0ECk2', 'vWtcNCkvha', 'WP3dHXfVW7K', 'nW7dG3JcQG', 'k8o4WQKzyG', 'W5/cI8onW47cMq', 'oXGABCor', 'WQ9jBCkZvW', 'hmkwWRVcLWq', 'W7VcOSoHnd8', 'W69cvW', 'W6VcGMW2', 'bokCR8or8lI3KpcTTRC', 'W4WiW4z8W68', 'W4PEwSouCW', 'W5meW4tdLHq', 'W4JcIMq1ya', 'dun5WQv4', 'W4NcH8oiWPVdIW', 'pgqKWPG', 'BMFdM18X', 'agP2f+kvRq', 'WO9ZW5pcJq', 'WPpdSCoPW6BcMq', 'yCo3W5LZWQW', 'W4hcICoUgCkX', 'DgJdSvS', 'W6RdQvPeW7i', 'omkOEZBdRq', 'xXmzrq', 'zmotCmk6W60', 'EwZdUG', 'WOy4ne8b', 'wG0tE8kC', 'WPPcBa', '4PAtWPPGxVcxOBm', 'WQm3E8kJW5y', 'FCokW6jrWRe', 'W5xcG8oZnIK', 'WPSzW4VdHa', 'W7VcP8o6W77cUG', 'BmkQWOVcI8k1', 'W47cV8oBpCkG', 'WRC2zZRcKW', 'W4/cG0xcNa', 'eSo9Ftfz', 'WRZcPSo4sSon', 'WPnvEmoPWQ8', 'W7VcP1GPCq', 'WR7cOCo5qSow', 'tuVdOcSv', 'E2tdN8k2nW', 'WOFcNLZdMCk7', 'WRZcVYK', 'tqJdKM4z', 'W4BcH1y', 'DCoDxbb3', 'CuVcN8kXjG', 'pGddMNlcGa', 'nJbuiSoo', 'CmogW7C', 'gclcLq8', 'qSoSW7HsWQC', 'Fe5TWQ4v', 'WQu2Ds/cLG', 'B2FcKG', 'pW7dLxlcQq', 'WPxdM33cImkMraiG', 'g8o8WOiyAa', 'pog0Nog1LEg3Q+g2Ua', 'vqdcPCkEdq', 'WOVdU8oZW5VcKq', 'lmkQc8ohka', 'WQSJvYNcPa', 'WRFdPmoP', 'WRdcR8oXW6hcGa', 'gmosW57dQKa', '8kAAOSorWRXmma', 'WR3cOCkUWRhcJq', 'vFcuK4/dQ0G6', 'mslcLr8U', 'WOrdA8k8sG', 'WR7dTmkJc8oD', 'W47cOdRcN3O', 'WRzIj2/dJa', 'saWzf8oC', 'WQ9usG', 'gmoKWO47xa', 'BY5TWR7dLa', 'BCo2W5rrWRi', 'u03dU8kdEa', 'bCkYFGhdGa', 'hK9NW6TQ', 'WP3dUqKdAa', 'nLnymSoC', 'iIVcVW', 'dmoivaL7', 'vg7dKNTe', 'WOPIoa4+', 'WPuoBGFcHq', 'E27dQKby', 'W7TdvSoDfG', 'Y5NHT67HTRpHTRZdJW', 'WRjvE8oTWRe', 'xhxdGWpdPW', 'zh5q', 'lKxcKI8F', 'W5FdHe9OW7K', 'kCkde8oYga', 'uqJcT8kc', 'wepdPMFdMG', 'FZmqBmkc', 'z2pdMYpdKW', 'W4NcQmokW7hcTa', 'dSkiWRJcTCkd', 'CgVdMIm', 'WRxcIIGvWRy', 'WRG3W4pdJGW', 'CXCzESor', 'YBdHTjNHTyhHTkNlQq', 'lCo9BYfm', 'n2ZdR1vt', 'x8omW7LAWRm', 'ENxdGsBdUq', 'W4qPW4nAW7e', 'YylcM8UB4BA/4BsY', 'uYRcLGKO', 'WQpdSqmy', 'pokDL++4R3BiVUg3Jq', 'WQGLsSkuW7q', 'm8oGWPOgBG', 'prJdRfNcVa', 'W5OpW4S', 'W7VcRfiMsq', 'WRRcPSk9sCom', 'vtdcL8knha', 'smk8W592ahpdG8kEpCowWRlcTG', '8kkNU/cELjpWMPA2xUkDRW', 'WOdcUSod', 'W5xcPgVcRmk3', 'WPnqW57dNa0', 'W4ddK3lcKCkv', 'pSkZCvZcKG', 'qMFcGGu5', 'BurOWQG', 'kmkIgmodjq', 'WQVcUY4oWQm', 'WRJdTuOzrG', 'mSoBWRzK', 'W7ldSwi', 'W7VdKgBcOSkB', 'smk4W4f9dG', 'W7BcLfyeya', 'WQ7dPmoXW7lcNq', 'W6VcQ33cVG', 'WQFdVWq', 'W5JdVZJcJNm', 'WPvEW4RdLa8', 'hSo+W4JdHCo7', 'hCoPWQSMyG', 'W7tcVmo8mmkY', 'nSkUErBdGa', 'WQ7cOCoYx8oC', 'FSotW6euWRm', 'CJDoiSo/', 'lmk2lHju', 'WPiuW4ldIGG', 'AJG/E8kd', 'FcNcRbK', 'WPOrW47dMbK', 'amoInmoG', 'Y7SP4BE1YjNkKa', 'E2KRWPC', '8jU6OSkEW7ScFG', 'W5dcLConaqe', 'W4BcMuRcL8k8', 'pSkUFq', 'W4u7Dane', 'y3RcNIyc', '8ygJS8kHW7pdVNG', 'mmoQDW', 'W5NcI8ogW48', 'veNcLaKc', 'W4WEW4O', 'xJuwWRhdHG', 'dZpcLauH', 'W71kv8ktwa', 'WRNdHCo8', 'WRNdS8oIW77cMW', 'W6qMCZZcJW', 'W40HW4/cN8kt', 'WOPKC8k1WRm', 'rSotW4hdML0', 'YQNHTBRkU8ow4BwV', 'WPOzW4hdMdu', 'bokCR8or8lI3RVcTTR8', 'W6ddKq3cG14', 'W41QvmoNAW', 'W4zFWOldNaS', 'rCotWPhdUKC', 'WQVdTdqFWRi', 'tajru8kn', 'hCoMWOmRvG', 'W7e1BSkVka', 'W7Wpe8ksgW', 'k3hcMCo7Bq', 'oMHQWQ9g', 'WRdcTCo5c8o/', '4lAm4lwQ4lEk4lEl4lw4', 'WQKYAY/cJW', '4BwYYyBIGk7HT4BHTia', 'aVcvL4yRiaO', 'yK42W60', 'Bmk4WOJcH8k0', 'hCo8Danc', 'iSkUcCoqkq', 'B2uJWORdTq', '4BAl4BADY5tHT6ZHTjC', 'WQNcVYKpWQO', 'rMfyWOVdHG', 'WPaEW5JdTsG', 'CCkNEqhdJG', 'WPnFESo8WQy', 'WRpcS8kWe8kz', 'WQhdVWe', 'uKVdK1Lx', 'WQXKh8oqWRK', 'WPf/W4/cVCks', 'ac4zuSkg', 'WO9KW5ldMCkw', 'W4iyW4S9W68', 'rCocW5ddQvS', 'gCouBcbP', 'baKrumkm', 'CxFdUHbb', 'agXj44ouWOG', 'dwBcNW', 'rHtcOSkt', 'W7FcPMNcP8kQ', 'W4VcH8osW57cMW', 'xZTIgCoD', 'AMvTWPVdIG', 'ESoPWO3cGSk1', 'Fh3cK8kLkW', 'w2dcISkTaa', 'FW4Exmki', 'xCoSW4fGWPO', 'EmodW73dTLG', 'W7XyASoDFa', 'u8ofW4xcVuC', 'W4tdGKzVW7C', 'WORcPJNcJNy', 'rxRcHmktcW', 'W7ldPvJcP8kN', 'gcJcKqiJ', 'fmkHW4u', 'W69hgCo0fq', 'c8oUWPS6xq', 'ygpdJtm', 'WQeDwSkCW7C', 'W4VcOSo3Dq', 'WP9hh3WA', 'W6/cPmo9it0', 'E2hcNW', 'rrif', 'WRJdQmoMWRhdLW', 'aghVVzldRCki', '4ls34lwe4lwLEoc1Qa', 'qxBcLmkt', 'nZOjW5ZdIq', 'W5lcNKFcLSkX', 're/cUtnu', 'WOpdSmkanmkU', 'W7isqCk2', 'W7utfSkihq', 'ratcOSkobG', 'kd4uW43dQq', 'W4bmWPyVWQS', 'WQWNzYRcGW', 'nmk1WRZcLmkE', 'wtmnWRu', 'cftcTa', 'rgBcG8ktbG', 'petcTCoCxW', 'ecldHGiU', 'WQVdOXKvra', 'YQFkSEg2K8Ql6P2f', 'WPWRBSkgW5G', 'DZrm', 'W4RcGLuQra', 'i1dcHmo1FG', 'CZvji8ot', 'FJLujCoF', 'W5xdPLlcPSk6', 'WQOysa/cTq', 'yurNW6mc', 'WRZdTrKbtW', 'mtyoW4xdGa', 'W6e7e+g3KEg0RG', 'adaquSkd', 'cf3dPMDv', 'W6ddVZ3dUCoI', 'bLXP', 'yCkCnCkeeW', 'WP5vumoUWQO', 'W4JcJCovW5tdNa', 'DINdISk+CG', 'ocJcKqiJ', 'WOrZia', 'W6/cPmo7nJm', 'F2ZdQSkyiq', 'W4iBWObTW7m', '8lwSTL3dOrHy', 'WRxcUZCF', 'a1JdPSocxq', 'WQaTAdRcPW', 'rG8B', 'vCoRWOiHxa', 'ESowW6PDWRa', 'CSozW6SEW78', 'Ew7dJuyg', 'W6BdMYBcP0i', 'uv/dLmk8oW', 'qCkWWQ9Y', 'W67INiKs8lgNQpgjHkS', 'rMVdTmk8mW', 'W7ldS8o5W7/cJG', 'WO5ds8kMuW', 'W4hdIfuTWQy', 'W5eAW51OW7C', 'wSozW5ddUq', 'W7BdRIFdRCoI', 'WRhcRZ4pWQO', 'W7RdSfbW', 'fsRcHWSQ', 'WR7cSsRdVSoV', 'sstdNmk7ja', 'W7VdGXxcUve', 'A2tdSvr5', 'W7ldUCk3iFcXTRi', 'WQ4ZW6xcNEobTG', 'cGuorCkn', 'lmkMDHxdQa', 'W6tcPx7cTmkE', 'WQJdUqyrtq', 'WOvdfKak', 'DSogW71hWR4', 'W7JcHgOJrW', 'WPu6h8kOW6m', 'W6ParCoDxq', 'W4Xxx8owrq', 'CY/dOdBdVq', 'nSoHWRBcUfm', 'vMZdGqJdHW', 'W4VcH8oqW58', 'WPP7W44', 'ctpcKGmH', 'W63dRJTlWQm', 'xZmqWOhdPG', 'ocZcVW', 'WP43W7JdKrq', 'W58uW4hdScS', 'ErGFvSkK', 'mwhdM8kWnG', 'W7VdQXdcHvm', 'fx/cHCkjca', 'vMRdI0fI', 'WOb3pq4o', 'W6ddUwNcT8kp', 'W6GytSkV', 'bbmjvCoc', 'Y5JiJEg3LCMr6PYn', 'i8kRWOFcKmoX', 'WO/dPSoHW4BcJq', 'WQmJBYddHG', 'B3q/WOFdLG', 'W4RdK1O', 'F8ogWRqu', 'BMyfWPJdVG', 'WPnZW4RcNCks', 'WPm5W4NdKbe', 'x8osW6ztWP0', 'W5u6nCkIWOi', 'W53cJ8okW4/cKa', 'WP5FxmkXuq', 'h1BcVSk1la', 'WP02zW4D', 'ACogW69xWQS', 'W4dcM3a6Ca', 'ndJcLspdTW', 'e2eaWRhdNG', 'W5BWV4gTWRhdG8o0', 'iIlcUszz', 'oCoZW7lcPvq', 'FwJdMSkxoW', 'vstcNmkbcW', 'WRdcTCo/oJW', 'dgdcN8oXkq', 'zWvRWQqv', 'WPdcTxVcIMi', 'oSkMWOJcKmki', 'WPPMW5VcLCkE', 'FwFcMIaD', 'noc2Soc1UUc3M+c0SW', 'CgznWPdcKG', 'WQldLqSJBW', 'rWmpWO3dIG', 'W7SWwSkwgG', '4Bst4BsMY5/HTypHTPK', 'pSo5WRpcTLK', 'W7xcK2NcRCk6', 'AfRdVCk9pq', 'WRf+W4dcKCke', 'WQu3yIFcIq', 'Aaq4CCkA', 'W7/dVwxcTSkU', 'BXSrp8oq', 'E8oGvSoqjq', 'DxpdM1jC', 'gSohWO0rFG', 'qSoEW4pdUe8', 'WR7cOmoUsSoj', 'df/cHmohxW', 'uCoFW5FdPa', 'EM7dKfGS', 'WOWqk8kOWRC', 'mmkXCrtdLG', 'WRaNFJO', 'WPb0CmoUWQi', 'kJ4EWONdLq', 'vCoEW5ddQq', 'WPaeW5tdLs0', 'fW/dSuhcPq', 'aCk7WPRcL8kW', 'vKRcTtC9', 'EhlcNSkmnq', 'qsGkWRm', 'CxBdMMFdSG', '77Yt772w77+IW5VWPBk94OgW8lsHKq', 'EupdQCkfea', 'W6VdRwXmW5W', 'nXSOW4FdTW', 'D3NdJG', 'W7VcRJGvWQi', 'W4b2rSojrq', 'DCocW61FW6a', 'WQ4IFCkJW6O', 'dMFdH01L', 'W64yv8k4bG', 'x2pdMrpdQq', 'WRVdOGy', 'fSo8WQlcOK8', 'ss0Zrmk7', 'jCkWWOldRSoR', 'rGXqiCoN', 'cmoQWP04xq', 'yvflWOeY', 'W67WR7ofBSkYfW', 'rqeyf8kG', 'tGFcTSkiiq', 'YBBHTjNHTyieyW', '4BA/4BEwYjlHTzlHTz0', 'BxpdSW', 'W4e5WOtcJSka', 'WR0MzmkCW5q', 'tG8lwCko', 'fCo1WPpcUMG', 'D2FdHtpdTW', 'WRaRCIlcGW', 'zSohBG', 'WQ8TsmorWQ0', 'W77WT4gl4Oca8lMqH8kg77+977YO', 'W7ZdVSo/oI4', 'rgxdHIZdUG', 'W4tcUVcLSR4dW7O', 'WOtdUtVcHJ0', 'WQtIM7ZVUl3cK2xcUa', 'W5NdRIBcGNW', 'eCo2W6C7CG', 'jqJdRvpcGG', 'qcakWRZdPa', 'W57cRSodmCkZ', 'wN7dG8kvbG', 'A/gmORFcHarB', 'oSkKWO4oua', 'W7hdVZhdQ8kK', 'W6pcOCoeW7ZcLa', 'YllHT7xlLmkw4BEW', 'n39BWOJcJW', 'x8oBW5ddUKS', 'W6ddOWyhvG', 's2KJW5JcJa', 'nCkMeSoqlW', 'sqemq8kl', 'fSosW4tdR0C', 'ksSaW63dPG', '4BAd4BsQh+g2KWi', 'dsunWQ7cIa', '8jc2T/gjHkpWP7sa8kkfJFghT5O', 'uJlcGCkwdG', 'WR7dVXLB', 'WPKrW4NdJLS', 'lSkUhConlG', 'W5z1W4pcKmkB', 'W4PEW4FcKCkgkx8', 'WR5ds8kSrq', 'gSo/WP8Iuq', 'WR3dRmo1', 'wSoGWQSXBa', 'zv97WRux', 'W6q2W6nCW5W', 'FXO2CmkC', 'W6JcVmkE8lg9Ka', 'W6BdUxtcP8oS', '4BAK4Bw7YlljQCUX', 'W7mkW7HxW6e', 'W7hcRSo0wW', 'YQLb4BEvYBtlSW', 'WRm1kYJcIq', 'fw8mWR3dMG', 'iSkUdCobjW', 'sWWz', 'W77dJsbVvG', 'W7dcG1BcV8kk', 'nVcFKOpdJSo8W5K', 'W4pdIe1P', 'W70jrCk6aG', 'BMuSWO3dJa', 'W4tdUZ3cHW', 'W5y2776g77+DW5C', 'AvtcTZao', 'WOSmyGdcSa', 'FFc6LOddSwH2', 'DL9fWQmh', 'WQxdMJ0Gyq', 'WRVcSCoUsa', 'fgJcG8oIya', '4BEF4BEAY4vA4BEc', 'sXqvwmkm', 'FJNcK8k9ba', 'W7JcKSomfCkw', 'AxRcLtO', 'W5eAW49+W68', '4BsLYylIGRBHTiBHTAG', 'WRPsCmoYWQS', 'D2u0', 'WRjaESokWQq', 'W6PkqCoq', 'Exm+WO/dNW', 'W7RcT8okhSks', 'oCknWOxcJ8k2', 'm8o9ycvm', 'W6NcN2WGua', 'WRddV8k9ote', 'AqDFp8ol', 'WPCvW5tdJHq', 'WRjctCkMuW', 'F8okEmkSW7C', 'WQ3cUZypWQm', 'vEkoGY5OFa', 'i8kGhCoD', 'W4ZcTmoBpmkD', 'evRcOSovFq', 'sN7dL19+bmorWO7dLurHW4C', 'yxxdKdu', 'imo1WQBcTe4', 'edeFW5hdLq', 'mSk0WQdcTe0', 'DmorW6DrWQW', 'W7FdSfJcV8kR', 'u3HZe8o/', 'W5/cJ8oCW5FcKa', 'E2ddQ1vt', 's8o3uW', 'W6NcJZ4CsW', 'yJfuoSoB', 'dXmTW4tdKq', 'W6uRW79CW5e', 'v03dMCkvpq', 'F8oUzYzD', 'W4ParCoDxq', 'kCk5WQVcPCkM', 'W5NcTSo1lmk9', 'BXe5Cmks', '776o77+y77YsW5NVV6S', 'BxldUG', 'W6ddRMq', 'FCooW6nBWRS', 'wSozW71GWOS', 'ocpdG3rf', 'Cs0rB8k8', 'z8oXwSkWW48', 'W6LVk2pdIW', 'oX48W7rw', 'WPhdOG8etW', 'jCosAJzs', 'r0P2WOu3', 'W4xcMSokW4VcHG', 'yZWLDCkL', 'tf/dSZpdLq', 'nCkKWOCfjW', 'W4NdPmoblmkV', 'oSk4ic1p', 'nYlcOWm/', 'WPmfW4K', 'W5GRrCkocG', 'x8oJW5NdMx8', 'W4VdQJhcMq', 'W7FcOSoM', 'W4CwW5G9WQu', 'WOxdTwTeW5y', 'WQuYyZW', 'pcRdGfxcMa', 'FgtdRfm', 'WR/dOmoJW6u', 'kmk7WP/dI8kW', 'ztLqjG', '776c77+j77YBW5NVV7e', 'WRLusSk8tq', 'Au3dVLv6', 'wCkPW6DSkG', '8k+jPfNcJGvm', 'yxRcL20g', 'nmkMAGlcIW', 'W4BdGfDOW78', 'WROybCkdhG', 'WPr3W4/dMCkU', 'W5aEW55T', 'W7BWO5AdWP3WO6ss8lgvIa', 'W6KpwG', 'WP7dPcW3Ca', 'W5fDWOdcKfy', 'fMZcKmo1Fq', 'eIBcIWK', 'o8ooW6fcWRy', 'WQBdSsi1sW', 'WQaRCg7dMa', 'W67dV8oXoJu', 'FtpcHsOs', 'gtxdHLjV', 'zMpdHJldSG', 'WPX/W43cGa', 'WQtdSrWTsa', 'W4JcGKRcL8ky', 'W5ddLvDIW7y', 'WRpcSsC', 'rdFdKCoIAa', 'F2JdUuK', 'n03dKCohFa', 'geLIWQ5U', 'vmkdW5lcQK0', 'nHldH3FcQW', 'W7VdSHeYWPi', 'imoJW7/cT1m', 'EMFdMci', 'ss4kWQZdQq', 'dmoYWRKlxq', '4PAB4PwH4PwP4PAz4PwX', 'jCoqBZz8', 'WR3cVComrSo0', 'iZywW4ZdIW', 'ASoxFmkeW7e', 'x3/cUmkdiq', 'B19PW60v', 'xIGEWR0', 'lJOd', 'CmotEa', 'W67dRthcUuG', 'W5/dVSoao8kK', 'WQKtW4hdLYS', 'jCoJWOukqq', 'q05/WR4a', 'E1BdUwPy', 'WR3dRCo5W7dcMG', 'W5THW4pcMmkd', 'FSorWQnoWQO', 'y0PIWQK', 'WO3cLCkWzSo9', 'W7FcUhxcGmkq', 'yhL7WR0n', 'eePC', 'WOpcICoAW4NcNa', 'zGOrx8k6', 'W7xdTha', 'A2dcGcir', 'ExVcKJCf', 'WRu3AtRcGW', 'WODLhhWS', 'WP7dLCoEW4tcUW', 'WP0uWOm', 'W4pcRmolkmk9', 'WRZcQdSxW6y', 'W4hcIhOMqW', 'taKsuW', 'yqy6wmkl', 'fe1eWQn6', 'wSotW5/dULO', 'WRHrz8oJWPu', 'W4NdUYdcJNu', 'WOpdMuC5zW', 'uSkEWOdcTa4', 'gmoTWQqQ', 'nmk9fCke4lEr', 'WOnaC8kHza', '8l63SpcrTASrW6VdNW', 'WQ/dPbKvuW', 'W6dcGN8R', 'WO0+ECk6W4K', 'F8okW7GuW6e', 'BxlcHYyr', 'gSo2WP/cPfS', 'WQVdO0OzsG', 'zqtcVCkEcq', 'jmoXWRZcTxe', 'xXFdSCofsG', 'WRHQhSkHW78', 'hSoUWP0Tua', 'p8oeWQRcQ1m', 'y1lcPSkUmq', 'w2/dUSkcaq', 'WQhdVG0haW', 'WPLFCG', 'tIGuWRNdHG', 'DSokW6nr', '8yItQEkcNFc7GzlcGSkBb8kD', 'iZ7dMuNWOOsW', 'eCkP8lY0O8o/dG', 'EZ1snCow', 'FuDfFmkq', 'W79Aw8oqwG', 'W68jrmkYha', 'wdib', 'W5lcMf/dHa', 'W4BdJK4', 'W53cM8onW5m', 'gYlcIaK9', 'bSkTwCoZka', 'WOHZW4xcNCk1', 'WQnmwSoAxq', 'jmoVdCoblq', 'egxcLmojAa', 'W73cMhe7rW', 'WRRcP8oUsSoE', 'EMvTWQae', 'FM3dMJtdKa', 'W6Gjx8k1fq', 'DtTvjmoF', 'ESk5W7JdM/cqPl8', 'W4dcH8otW57cGq', 'cWNcLHGE', 'WQ9EtSkNtq', 'WR9BFmklAq', 'uKhcPCkusG', 'xSoUW7ldJKS', 'W4pdIKFcLSo/', 'pSomAYfq', 'htFcLG', 'W68ywmk/pW', 'W6/cG8oxW4ZcPq', 'WOaTztRcKq', 'W6vsvSkLda', 'AtywwSkl', 'AComW7WuWP4', 'zCoMW6VdLM0', 'WRDSjH7cIG', 'emoRWQq1rG', 'WPNdKqCMAa', 'qWpcPCkshG', 'b8oOWRK0zq', 'hY3cGZGB', 'C2ePW47dKq', 'W6vQeCkDW7O', 'rIqD', 'yuPO', 'W6hcVgJcSmkH', 'gbVcUmkl', '6P6/4BsV4BsQ4BAReq', 'W7RcTCoPk8k+', 'WQaJCI8', 'r0tcLCkFfq', 'ECoOw8kUW4S', 'WQqNxCkeW6e', 'WQldUJKBWQG', 'BrOzxSkr', 'W7HgvSowxG', 'EmoTW5JdLSoHWRnQmbddUfRcMIi', 'qW0Dumkh', 'zhGEDSok', 'b8kvqcpdRG', 'eSoRWQu1yG', 'WQ8HtCks', 'dtlcIrGQ', 'wqdcTq', 'evHPWRK8', 'BfRcISkubW', 'oYpcHaOv', 'WR/cIqOxWQi', 'tKhdPM5A', 'CSk1i28v', 'WPmaW4JdKvu', 'tGpdKCk2kq', 'WR3dTCoKW6m', 'W41wiSkWWQC', 'W4utW4fYW6K', 'WPtcKrC5WQ3cJSkwWP5OWRVdUXLR', 'nWddGhm', 'W4iwW4i', 'B1vW8lwgTZS', 'W4xdQxtcT8kV', 'zd1ti8os', 'WOSdqGVcTa', 'W43dSZlcKG', '8jU6OSkEW7Sxya', 'ENBcIZC', 'xHabESkd', 'bvldOCoduSoNpSomWQ5QW4ldUW', 'qsixWP/dSq', 'm8kQcSorla', 'e8oTWQW4', 'nColAJj1', 'xe3dRh8', 'r0BcRIfu', 'z8kxW7ieWQm', 'YP3kKog2UCMr6P2J', 'WQ0MyYhdHG', 's0FdUvqs', 'xu4xw8kl', '4Pwm4PEE4PEP4PEK4PEr', 'w8oRWOy4ga', 'keLoWQj0', 'W5aAW4b5W5K', 'WRSLtmkcW7y', 'bmoLWR41yG', 'CKVcVHW', 'W71DxCk6hG', 'WR8TsSkDW7y', 'zxyabSos', 'q8oMuCkHW6C', 'kZ4xW4W', 'WRNcVGeysG', 'W4NcQxtcQmkN', 'cCkVW45VeG', 'aCo3WQ8', 'zSomW5/dSv8', 'jCoXFG', 'W4FcJLbUW6O', 'W68Cqmk+', 'W4pcHv3cJCkE', 'dSo9zsb3', 'eCk1qdNdJq', 'egZcICoI', 'uxrPWR4S', 'gchcVIO1', 'dwxcLmk2Fq', 'eCoJWOGaCa', '4Pwb4PEp4Pw54PAK4Pwa', 'CYPulW', 'u3RcGmkclq', 'WQiWr8olWRK', 'W6uFfSkLsa', 'eKL4WQnZ', 'WQ5ds8kMuW', 'WQ54v8oreq', 'eaBcLaqU', 'FmogW70', 'uMNdIqaM', 'jG48W5/dKW', 'yGulWOhdMa', 'dJdcVGic', 'yYT4n8oo', 'qgFcMmkidq', 'DYXtn8oo', 'mSk7c8onlG', 'vmozW5xdPa', 'jCo1WRZcTvm', 'zdeQWO/dGa', 'WPiwW4lcNq', 'W6KyrCkVsa', 'lxTuWOj/', 'Fxa9', 'WRefBSkHW4a', 'WPTrEmoT', 'WP8yWPldJey', 'WPFcKHS9WQVcHmoVWRnzWOZdNWG', 'wSoLW7ddHw8', 'ywZdKmk1hW', 'egZcLCk2ka', 'WQ3dSX8gqG', 'A2tcV0bg', 'WOFcNLhcLSk7', 'xMq3WQ/dGG', 'W77dS1Ld', 'dwFcMG', 'hKVdKdtdRq', 'Fu/cM2xcQq', 'WQPdumkOda', 'n8kbd8owfq', 'Ft1z', 'WP3dSmkFy8oN', 'iCkNWQpcImkK', 'wv3dU38r', 'mGSEW4ldGG', '8yYwLFcCTQZXHlAu8lMNKpgiH58', 'kX02W7JdHG', 'oCoRWRWOyG', 'kmoKWOFcKmk5', 'WRP9y8kqzq', 'cCoGWP1UEq', 'FSkU8y20Uo+4ImoxvG', 'W47cMSoFW6tcGa', 'ltyuW47cHq', 'ymojtCkXW48', 'W7RdUCkHFa', 'rwe3WRhdHG', 'W7xdTwVcTSkS', 'W6zBrSodqG', 'vmobW5NdVfO', 'yhtdNcO', 'WQ7dPmoJW6tcHq', 'E8ogFmkVW6e', 'WQLdsCkHzq', 'W5RdSNtcP8kJ', 'WRH3lu0b', 'BLe5WOpdQq', 'z3FcLIWf', 'E2NdKIVdUW', 'sYGkWRW', 'c8o/WRKexG', 'tIKfWQW', 'W7/cP8oOsCkz', 'WQVdSGuBsa', 'eCkKWRGKDG', 'v1RcLtas', 'W7RdSwBcTmkN', 'w8oSWO46xq', 'lSkRdmoijq', 'WOFcGCoyySo2', 'zSkBWRVcTSkE', 'FJfomCkE', 'WQ/dOanzrW', 'W4tcHv7cPSkM', 'xmoaW4BdQuq', 'rxlcMmktbG', 'ppcPK6n2W7lcOW', 'W5irW53dLHi', 'WO4CW4z0W7C', 'setdMLv7', 'x8ofW4u', 'imkIha', 'WQRdQmo1W6BdIq', 'kWVdN3NcGa', 'gSkesapdOq', 'eK14WQH0', 'DYXb', 'W6ldNbhcHNy', 'gtxcLam9', 'WQfYF8obWPm', 'uSonW7HvWRm', 'W7hdOSo4W7JcHq', 'W47dVctcKvq', 'oHG9W79rymkLcHFdH8kZDd8', 'ncJdNKhcNa', 'WPlcSCoUwmoy', 'nSoixYDp', 'uHhcVmkvgq', 'w0KaWQ/dVW', 'W5xcMhaasW', 'W6vgx8o6rW', 'yCkRdmowkq', 'WP9zBSkgCG', 'WRLXw8op', 'jWtdH2lcOq', 'W7ZdLSozW4xcOq', 'cCoQWOTUtW', 'WQVdTmoZtSoo', 'WRNcVCoZtW', 'WOT5oLSe', 'hmk6FbJdJW', 'WO/dPff/W7C', 'W4i7DooaOKK', 'W5JcMSoPW5RcGq', 'WR5rW7VcI8kZ', 'agdcH8k2nW', 'WQNdTCoKW77cHW', 'yMJdISkLnW', 'WQdcVXaDuW', 'ghdcHmkodW', 'W7VdIeZcHSke', 'Ba1Oi8o7', 'WQzua8oJaq', 'maddGh/cOW', 'W69BuW', 'uuHHWQr4', 'yCkAc8oiAG', 'W5xcJ1lcMSkR', 'FLLKWQWK', 'ACogW79bWRO', 'W4lcHeC', 'WOPYme8p', 'W6zoqCo8rG', 'CgJdL8kJFa', 'y3NcISkTjq', 'W7JcP8oQbZC', 'fSIVYl7cVEg0Tq', 'lmo9ycz1', 'mmkRsZldHa', 'ex3cHCo5zW', 'W5/cJ8otWPVcGW', 'W6ddSWuydG', 'xqL3imor', 'WORdHX7dLmoY', 'q2/dT8kRja', 'p8k7WOFcGmkC', '4PE64PEk4Pse4PA74Pwc', 'z3ldHY7dSa', 'W57dVYZcNW', 'WOf7xCojWQ8', 'e8oLWQmVjW', 'W7eyfSoHwa', 'WRFcSCo8t8oC', 'W7eDW6XQW5m', 'WOZdO8oFW6hcJW', 'AaiTqSkW', 'Cw7dNL8c', 'pmk/WPVcKmk4', 'W5iuW4ddKH8', 'b8oOWQmIyG', 'WOzusSk6qa', 'dCoJovdcJW', 'DxBdHsVdTW', 'W4ilW48', 'wmkzW4VdTf4', 'lmkGd8onjq', 'dx9eWQZdIq', 'pmkgWPhcSmke', 'W7NcH8ovW4/cMG', 'WQvfDCkGAW', 'WQ9Iwmk/ra', 'FxxdGcBdSG', 'u0hXI4wh77ML', 'W5xdNVc4G6hcMCk4', 'xvRdM2Gn', 'Bv9TWPiu', 'W7hcS2tcVmkV', 'W4ZcKmk/gbW', 'W4VdQItcH3S', 'WPpdLmoEW5xcQG', 'CgpdHIq', 'WQ5yxSkbyW', 'qN7dUmkgca', 'W7K3x8k/', 'o8oSWRSxxq', 'WRZcU8oWbmki', 'W4BcU8kpimkP', 'WR9HESoWWPe', 'WPr9W57cMmkh', 'imk7WPRdJG', 'C8ogW69qWRO', 'hSkzsaFdIq', 'W7OmySkbpa', 'a2JcMmo4kq', 'CvBdHYJdRG', 'WRdcQCo8lsa', 'x8oZtmkSW6m', 'rCovW4hdHea', 'W4xcMeRcT8k4', 'k33cRKWe', 'dqXJWQH/', 'mHKDW7pdKa', 'FSoiW69HWQS', 'WQxdTrm', 'zI1tpG', 'DxhdKSkbjW', 'b8oTWRaK', 'W4hdIYhcVNS', 'Bmo8BSk+W6G', 'o05KWQ9L', 'pCo/WPZcVvK', 'WR7dV2/cUSkU', 'Eb8fA8ky', 'qCoxW4xdUfW', 'W5OpqCkwnG', 'W5eAW5PVW7i', 'nWtdH3u', 'fmo5WOyQxq', 'fCkhuX7dPW', 'FIXujSon', 'WQ/dOCkKyw4', 'W75AqCoB', 'mcpdHuFcRW', 'WQzYE8kMrG', 'sfZcVbCZ', 'WR5cxa', 'eCoBWRKKAW', 'pXNXHjwG77MSW7RcOW', 'bCopWP4grG', '4PE74Psw4PAR4PE54PE3', 'FhhdSL5h', 'WPLgpgeS', 'W7xcGwS3', 'yHngmSom', 'W4xcHLBdMCoH', 'EgK7W47cHG', 'ESo5W7ddMwS', 'uf3cG8kOcq', 'm0JcHCoxwW', 'owndWP9z', 'WQFdUW9uza', 'fNddM8k2mW', 'rCotW5/dUwm', 'W71kxmoxFa', 'W49ImeuD', 'waesu8kn', 't8ouW4XbWQ0', 'W7SNW5XkW7G', 'BuP8WRKi', 'rmozW5ZcVxK', 'WOFcM8oDkSkO', 'W5ZcGr0TW6W', 'AMKPWOVdLW', 'WPCMW4tdMr4', 'AGSAA8ku', 'W68CrSkR', 'WQGTtSkqW70', 'e8oxsq0', 'WQabhCoFwa', 'W4VcGfBcNCkn', 'W7ayuSkPgW', 'W5RcVSoLoZq', 'B8ogW7za', 'W67cSmoMit0', 'WO3cJCoBoCkZ', 'jCoTW7JdSqy', 'W55yxmogzG', 'mmkIFa', 'pGddMhm', 'uef8WQ57', 'WRtdJCo6W4FcSq', 'W5FcP8ooemkW', 'WOfyFmo7W6m', 'W4lcMCoqW5FcMG', 'nmoZWQiODa', 'WQJdS8oXW7/cMG', 'ESoxFmkVW7e', 'W7pcSmo1mcS', 'W7/dJVcWSz4', 've3dT8kYbW', 'qKlcUCkdfW', 'uCorW7DgWQO', 'gM9xW64', 'FwFdMW', 'wdmi', 'oCoZW7lcKgW', 'WOFXHlESWPVcOCke', 'o8kMAXi', 'BgtdP0q', 'CLRcOCkMja', 'WQuNsIdcKa', 'W51Ir8o8qW', 'aGOzW6FdOq', 'W5pcJvRcGmkC', 'qCkLW48', 'W53cV8oBlmkI', 'BSkHn3un', 'F2JdMCk0iq', 'DwVdKa', 'W67dTG8aqa', 'h8oQWPW', 'g8kPp8ogoq', 'DSokW6nrWQS', 'WRtdU8oyW6BcKa', 'g014WQO', 'W4hdJLrJW7q', 'W7ZHTOtHTPFHTRhHT64', 'kSkEkmolmG', 'jrtcSImD', 'k8kIuWxdTa', 'ESoPvmk/W6C', 'W6BcQmovary', 'sY0lWRFdMG', 'bwFdMeW7', 'vXJcJSkpdW', 'W4meDmk5WQy', 'k0f4WQvw', 'WP51W5/cNmkt', 'r2xdMuu8', 'qwffW7NcGG', 'pCovWOiKBW', 'AmogW6bqWPi', 'DCksbgJWKzkE', 'zNddJSk0', 'WQZcIxe4ta', 'omkSAGG', 'yh/dHsi', 'xdycWOhdPG', 'pJxdLulcNq', 'DHedDSku', 'B1TN', 'WPmcW5q', 'WRZcTCoTx8oq', 'Ab8fBW', 'wr09C8k5', 'hSkTWRdcJCkl', 'W7Ouwmk/', 'zu51', 'WOpcS8oFAW', 'WOvryCo8WQy', 'Fw0O', 'W48wW4b2', 'pLBdMsldVW', 'p8kQWPVcJCk/', 'W6Gru8o7sa', 'W6SrgCoPaq', 'W47cS3ZcQSkN', 'jJVcJ8k3mq', 'ywtdGs7dQG', 'D2FdIG', 'W7mIcCojW7C', 'WQ0SzslcKW', 'ibSIW7Lx', 'WRlcTdKwWRm', 'W4lcRmow', 'W7tcISoIiSkk', 'W7hdSgldS8o8', 'sL/dVgOa', 'xuldNmk/ma', '4BAy4Bw9YQNdU+g1TG', 'cZhdShRcHW', 'W47cIvZcLW', 'bCkGdSokla', 'W69DrSoAqG', 'WO3cJ8ooW5ddLq', 'oog0KEg2SEg3Sog1Lq', 'W6dcU8oblmkU', 'W63cTmo3Dte', 'dMFdMeW7', 'WQylCqxcIq', 'fSkVWPSMxq', 'WPdcIvFdISoM', 'WPjCW6ZcI8kz', 'WOtdUtVdHhy', 'WRBdQHSwEq', 'W7lcNSofiIG', 'ibhdLLZcJq', 'wqusu8kV', 'W44AW5P1W7q', 'WQ5jv8ohuG', 'W7xcJSoRnmkm', 'D8oWWRVcPXW', 'uh3cMCkkbG', 'oCoXyID2', 'bSo3qZP8', 'W6dcGNK', 'vmojWO5HrG', 'zSoqmW', 'W7ZdVwm', 'W7/cNxeHuq', 'iSkSdmowiq', 'k3acWOtdKG', 'l8kQWOJcU8kK', 'WOTZkK0', 'ittcRGuf', '4lA24lEk4lsJ4lww4lAt', 'bSoTWQqMCW', 'W4ZcJCovW5RcKG', 'W57dLftcGSkY', 'aCo2WQy', 'W7lcT8o1qSov', 'WPzFEmoxWRO', 'W60iwCkVfW', 'a8o9WRNcHvm', 'WRlcMr0pWPm', 'cvrTWR9f', 'ohtdRfuu', 'W5lcUwdcUSkR', 'ESoxB8kYW6O', '8lwXV17dOrTX', 'WP9CtCkNAW', 'W77dUt3dUCoI', 'W4lcUKhcLSkV', 'WRLuvmkMvq', 'W5NcU8oxla', 'CeuSWRNdTa', 'hYBcKGKO', 'W6VcT8oDW6ZcTG', 'nsZcSH0z', 'yLhdHSkgpq', 'mtBcSc06', 'n8k6DrNdTa', 'WQ7cQcGFWQi', 'FSorW7XBWQ0', 'rWvwf8oy', 'ELBdHYJdRG', 'CHqLDCk6', 'WPVdISozW5ZcQW', 'W70iuSkYhq', 'WQhdSq4', 'WR43wW', 'W5ddLuTIW6O', 'dSonWOeYtG', 'W4RcV8ognSoN', 'lSoZWO8utW', 'W6xcH1RcJSkp', 'nmkTsIpdNq', 'A1L+WQit', 'WRPevSk9ra', 'W4OAWOb3W6G', 'W7RcTmoHnG', 'b2BcN8oGBa', 'hSo9W49Wga', 'thBcQHSt', 'WOHqW4pdMaW', 'EZ0pB8kl', 'W7ldQhpcOq', 'iJBcHxdcRq', 'lSoTytzD', 'DSo2W4m', 'W48erCk+ba', 'F8kNBqpdJa', 'WQL7pu0F', 'WPKrgmoOcW', 'W5FcI0FcJCk6', 'kX1gka', 'yCoLkmorjq', 'W7OZqSkvhq', 'WO3dOmkplmkM', 'o8o2WQKRzq', 'WQCHumksW7W', 'WQRcPSoX', 'FdVdSurC', 'W67cPmoHpq', 'swxdMKuW', 'f3ZcK8oIya', 'hSoaWQxcUNm', 'W448uYq', 'W4xdUZddI2e', 'WP1zE8oVW6m', 'W7ZcV8oAiXm', 'yL5lp8kf', 'WR3cSZyFWQG', 'WO3dKmkEW4/cLa', 'W6efW51PW5y', 'iCo+WP3cJmk0', 'W7RcUmoKDwy', 'W4ipW55XW7i', 'WQaHAIhcKW', 'W7P8CSk7W5TXWOyo', 'maJcOsm', 'W4SEW5PUW7O', 'j8oKW7ZcSLm', 'deLIWQ9r', 'W6e7gEkvHGe', 'oCkAg8oadG', 'z0zPW6Db', 'x2ffW7NcGG', 'iSohWR7cULS', 'W6JcVmozdCkG', 'sriDr8ks', 'BZpdJwms', 'F8kSDLhdOW', 'uaJcV8kF', 'nq7dHNVcIa', 'W5RdUKpcGmkr', 'WRRdUbGrqG', 'mZyFW57dLG', 'B1vW4PA94PAL', 'WQxdSCo1WRhXHygG', 'BN7dShGw', 'gmoUWPSRxW', 'AmotW6jDWQS', 'D2FdGs7dSq', 's2hcGsWe', 'W4NcU8ojoCkY', 'W63cSmoIjq', 'Eb0aBCkq', '8yQKVVc6H4RWS4wn8lU2RFcOH5O', 'WQ5mEmkQcZNdQmkk', 'idWoWONdHa', 'gmonWPNcQ30', 'As4tWRBdHa', 'WPbdzSoPWQq', 'W5xcJ0dcJmkZ', 'o8o7WRpcTq', 'r8orW6tdIga', 'W7dcSpcLSPedW78', 'W6fPe8oCWR4', 'm8kMDHBdKq', 'xe7dIh54', 'ymoxW7/dJ2q', 'i8oZCCk+W6u', 'WRzjamorua', 'DeySWRZdTq', 'W5y1W5/dJXq', 'krJdLv7cUW', 'W4tdJey', 'W4/cUJlcMx0', 'W77cIh8SvG', 'fmkqFYJdQq', 'WP1/W4FcNmkz', 'vCo8WOa7vG', 't03dPW', 'iZ7dNM5B', 'dqmnWRpdJq', 'W63cSCkKWQxdNmkqW70tWRBcGs8vW7S', 'f8kom8oTeG', 'DXCBDa', 'W6StfSkYhW', 'WOX4W4FcLSkw', 'W4JcGCoBW4/cPq', 'W57cGmoFW5JcNG', 'suHVWQ15', 'lhia', 'WQ3dICobW4VcVW', 'bsVcKXq', 'W63cTmkYmJe', 'W7NcN3i', 'DZvf', 'WOzGErbj', 'W4lcNmoh', 'kHa5W7NdOq', 'l8kYWOBcKCk1', 'WPVdPmoKWRhcHW', 'e0LIWQXO', 'WRRdTmoZsSou', 'Fv9+WQqp', '8yQvMFc5LBtdIEkEHmkT', 'yXyVtSk1', 'yGVcQ8klda', 'pSo0zZzb', 'uv9PWQD5', 'WQ0TuSkuW70', 'W7Phr8oEuW', 'W6pcUwKFW7m', 'AYhdSf5y', 'ggvbWRfz', 'keLUW6Tp', 'Agu1WPO', 'tmoHW5rEWPm', 'xCoBW5ddTei', 'tadcPIi', 'ANlcHYi', 'zftdVcpdHW', 'fsVdPhJcMG', 'gGBcQZ0a', 'AMtdR1Xn', 'WPD3W4NcNmkB', 'whlcMsOe', 'W7RcTCoroJu', 'W5pdMuj5W4e', 'FKP4WRKe', 'hokASU+7NSoBpSk8', 'hYVdGfpcRq', 'e8oUWOmVga', 'qxlcGCkx', 'WR/dU8kyxW', 'n1VdMMlcPa', 'WQ3dGpctOipdV2q', 'tqKAtG', 'dCovWPSQCG', 'nKhdH3pcOa', 'WQaRDt7cIG', 'f3JcKX4J', 'WQpdSqqqBW', 'Ftfnh8oi', 'vwL+WRLZ', 'WPybtM7JG6S', 'mSkGdmokja', 'qSotW4NdQq', 'isuXW4pdJa', 'W5BdPMBcOSke', 'E8ogBSkUW6G', 'W78CrSkVgW', 'ACogW7PgWRy', 'jgvPWQGf', 'WRZcTCoPtSoE', 'W73dK1D3W4a', 'p8oGWQBcOu8', 'W6ebBmkJW5W', 'zreMW60', '4Bwg4BElY6xlKmIQ', 'WQCJCI3cJG', 'WRj2sCkFBq', 'eSovWP0WDG', 'W6NcNM0Urq', 'WR3cUhO', 'W6ZcT8oVW4VcHq', 'WRy4rmkPhq', 'WOOfW6BdUH8', 'WQ95W6hcKmkE', 'W4e78jghNGhdPa', 'gttcLq0O', 'l8kyWP7cP8kH', 'nmk9fq', 'iCoNWRWRxq', 'cM3dU8o0Fa', 'WQDszSoSWQC', 'W7pdOYBcH14', 'W5TBW6/dMCkK', 'jfBcOre5', 'AmogWQ5tWRy', 'WQ8RsCkFW78', 'nCo7WRBcQa', 'W67dMh14qq', 'WR8RhSkcW7y', 'WPerW5NdNHm', 'qLNcQSkbma', 'WQJcRJmzWQ0', 'W68pr8obxq', 'c3ZcN8oI', 'omo1WRBcKfi', 'W5FcImoQiSkl', 'mSoLWQmTyG', 'WO/cJHW9WOe', 'WRNdIKBcMCkl', 'pgqKWPJcMa', 'W6FdUx/cPW', 'A0H4', 'pmkREqu', 'itOj', 'WQyXtCkyW7a', 'W6VcV1GvBa', 'W7JcTvBcISks', 'yf8HWRKy', 'FYJdLIJdSW', 'uqJcQISa', 'AIhcVHeE', 'imk9dConmW', 'W57dSYdcH3C', 'rGvuea', 'bJNdImkVBq', 'pIlcKG1V', 'DaPObSo4', 'emkAtIhdOW', 'W5tcNKhcKmkX', 'W7TDxG', 'W5hdIfDHW70', 'W67dTspcHx4', 'WQ3dOpctP67dVWO', 'W6JcGMKHtG', 'kJ4EWONdOW', 'nbWoW6JdSa', 'amoYWRm1va', 'WRJcVCo7uG', 'W7RcTmoH', 'nhpcN8o6Ea', 'W4/cL8oye8kO', 'sIGcWQe', 'WOTcf8k+sq', 'lSklWORcL8k9', 'WOTJk08D', 'qg3dMhW8', 'W4/dQcBcHga', 'zhGbD8ku', 'WOVdOHGBuq', 'WOFdHXm', 'Dw0Q', 'EeldVcxdSW', 'n8kdDmk2W6m', 'W5tdHMDpW5i', 'lxVcLIis', 'sJKiWOJdNq', 'WP8rW5NdMbW', 'debLWQH5', 'WObHmu8D', 'W6f1ySokzG', 'WQZcSCoZt8o0', '4Pso4PsR4Psm4PEn4PwH', 'baqkxSkg', 'gcpWSlgzCLq', 'WO1IDcVcLW', 'wdC+xmkL', 'aZ0OW7RdLW', 'EmomW6baWRO', 'DMNdKt4', 'gblcVSkoba', 'W7ZcO1TfqG', 'DSouW6zvWQS', 'W7xdQMDbWRG', 'W4BdU3VdNJW', 'BurHWPih', 'qIXlWQRdJq', 'ANZdML4M', 'EwBcGSk/fa', 'AmotBCk3W60', 'uXlcOSkAdq', 'W6pcG17cLSk4', 'WPPIW5JcMmkh', 'wJDfbmoo', 'o8oxW6DaWRm', 'oaBdSvhcPG', 'WPjIW4pcJmkv', 'WQSJyG', 'yMJdJmk0pa', 'DMBdKmkLeW', 'B8k7eCowjq', 'W6NdMW7cQgq', 'x8o5D8kIW7e', 'WRZGT4dGTOdGTjrs', 'luH7WQDk', 'E+kDMfxWMQsx8yAvSW', 'WOKcW4e', 'W6RcUCo7oZ8', 'F2e5WO3dKa', 'W7/dUxtdS8kK', 'W7VdTwNcTmoI', 'WR10W7NcQSkf', 'pmkSFbq', 'xIqkWRZdPq', 'm8k0WP/cVKO', 'pSk3Eq', 'z2/dMYddSG', 'qqXOWQjQ', 'za9IpCo5', 'WRtcUqOTWR4', 'W4fLvmofFW', 'jmk8cSofjW', 'B3aHWOFdJa', 'DCofW75gWOu', 'WPRcM8oxymoi', 'k8kPnSoUkW', 'WR7cSmoIpNG', 'mCkKWPKerG', 'Df4AAmkF', 'ia7dGwtcRW', 'i8o4WRFcOHW', 'W5mkW4tdJrK', 'wK3dP34y', 'WRHKsSkiW6m', 'nrmqE8ky', 'W4pcVmojW4VcMq', '4BAj4BspYzJHTRFHTly', 'uKtcNSkmcG', 'W6DEASoPyq', 'W63cNxS9', 'W4ZcM8oAW5lcMG', 'WQiTDcpcOG', 'FZzlxmke', 'A2JcSKnb', 'WP1cCmoU', 'WO8vW4pdMty', 'W6hdUxtcPSkU', 'q3RcImkcda', 'WQ9qsCkI', 'WRmhW4tdLZO', 'WOKNDt3cHW', 'lSk9aa', 'dfH+WQjY', 'ACk0WPBcNNi', 'CJDxomos', 'W5/cI8oFW5JcGq', 'zJLqm8om', 'WQSJyM7cOq', 'hmohWRxcIha', 'tI4kWQ7dJq', 'WOxdH0z5W7S', 'zSkxW4NcH8k+', 'oSoXWRBcUf0', '4BsEWOpcOXtjHG', 'WPdcRG4EWOC', 'WRO/W6ldQt4', 'nI/cSrO', '4PsyWOpcPgdcTG', 'W5FdHejUW6W', 'WQePzXVcKG', 'WOb3pq4a', 'zdxcOCkOiq', 'W6FcIgC', 'W4HrW41YW7y', 'WRZcOmo8Dmom', 'lmk3AHJdIW', 'd8o0AYnl', 'wSogCCk+W6C', 'tmoSWOT9aq', 'W63cRCodDCkK', 'mSkQf8oadq', 'yKjIWQzF', 'W5enW6zTW4G', 'ESkzmSo0W6m', 'gmoGWOirqq', 'WRKcW5/dKGK', 'CcBdISk4oq', 'W7mZW51fW6W', 'yCoZW4tdICo8', 'jXldLwBcVa', 'W5FdMaKTWQi', 'hoc0JUc0LSk94lA0', 'B8k8f8ofiW', 'pCkRWOBcKmk0', 'kJr0W57cGa', 'wg86WOddLa', 'z2RdNctdUW', 'mCkTW6lcSL0', 'jCoWWO7cJCkL', 'W70jvW', 'D0FcOSkYmq', 'lrmqW7/dVq', 'WQ/dPq4', 'WPvEofOT', 'hZpdPSoTpa', 'WOr2x8oSWRe', 'WPKdW57dNbW', 'vGBcIeWQ', 'eConWPNcON0', 'B37cLG', 'krtcSaOy', 'vs8CWQddJa', 'tvJcPmkGiG', 'W6VGT57GTOxGTyVGTye', 'dSoyWPhcP2u', 'W6vkD8ovwa', 'tComASk1W6G', 'WRWWCSo7kG', 'WOL/n0O', 'EsPz', 'Dr8yEG', 'BxZcNHWr', 'WRxdRmoXW7BcJa', 'h8oqW7lcGeK', 'C8owW6XbWQW', 'EJDh', 'sh1KWQaQ', '4Psu4Psg4PA1', 'WQ/dPaS', 'WQOPwW', 'WRpdTSo+W73cHG', 'c8kCpCoXjW', 'WRhcPSo5w8od', 'CvZcUmk/gq', 'Ev8+WOVdLa', 'y8kpWRZcOCku', 'WQfWf0Sk', 'WOpdSmkf', 'r3BcJCkefW', 'fSoGWQy', 'WQrQqmobxG', 'WPPKnq', '8lEIT8ko4BsD4BAd4BEB', 'sGFdP2Gg', 'W5euW4e', 'W7xcPtFcSmkJ', 'ecWFWOK', 'x0fJWR11', 'eYBcGKWO', 'W4JcNConW5RcKG', 'W7JdOZlcJ0u', 'dquRWO/dPG', 'tfZdHr7dKW', 'dCoQW48Jxq', 'yCkTW6pdOG0Vi8oSpYySlq', 'W7qoC8kjnW', 'WQZdVa9uhq', 'WQRcSbGDtq', 't8oLCCkXW74', 'W5VdUg7cNCkm', 'qh5UWPOg', 'zsPd', 'm0vFWQ1e', 'WPLqW4ddNbi', 'W7tcNeFcNCkP', 'BCoWFmkTW6e', 'W7pcS8o2nc8', '4Pwm4Pwr4PEp4PwG4PwK', 'svJdPgCD', 'W7/dIfLPW5q', 'txVdM8kHpG', 'WQhdGdnIdW', 'W47cJ8ooW4/cNa', 'vXmgWQVdRq', 'mSoSWQBcTfi', 'W6VlNCQXW5hHTOG', 'ecBcKGK9', 'WRZcQKO', 'WO3cOmoXWPVcOG', 'W48AWOy6', 'WR3cSI0', '8kQLUFcETP3WK5AA8jUMI/cXPli', 'WQ5hrSohqq', 'B8k8fSorlG', 'W4lcQCobEmke', 'WOzLlq', 'f2ZcN8oYra', 'oSoXWQBcUvm', 'WQ0VzYNcGW', 'DCktDbtdHa', 'Fw45WRhdJq', 'FwFcGsOy', 'nCkCWOVcGSk1', 'WPbEyCoTWRe', 'ESoxW7Pg', 'WOfUiq4f', 'qxRcMmklbG', 'BeFdO2uy', 'uGxcKSkubW', 'W6RdOHyWWO5+WQT/', 'uSotW4ldVG', '6PYQYjtHTzFHTjJdIW', 'xh7cJCkabG', 'qGKsumoc', 'WQrdtCkAvq', 'W6ddTWmaqa', 'W5NdRZBcGxC', 'W6JcNmomW5tcHW', 'WQFdVqStrG', 'cr40W64', 'W6GsrCo1', 'ncVdOLdcMG', 'C8ocW7PhWR4', 'eslcLa8N', 'WQP7i0SB', 'CW7dMJBcIG', 'WPRcHSk98jwHNa', 'kCohDmkTWQq', 'W7hcNYGiWQK', 'e8oQWO4Qxq', 'W5aAW4b5W5y', 'WO9/W5/cLCks', 'WOH3W4ZcNa', 'WO0ZW5NdVc4', 'z8ogBCk/W6e', 'WORdVJ3cNti', 'BSorW6i', 's8oL8kgaMgb9', 'WQNdS8o8', 'WRNcRr01WQS', 'WRNcOCoKW77dIq', 'EmocW7PDWRa', 'DZpcMG', 'WOFcJfBcJCk8', 'W5xcMSogW7/cRq', 'WR7dS8oGW7NcRq', 'ArSgASkD', 'WPXDCSoMWQW', 'x0HLWR08', 'F0C9WQRdRa', 'W5tdHbpcQCkZ', 'WOWfW57dLq', 'pSoHutzD', 'ssqxWRS', 'vdpdKSohbW', 'W7xcLmowk8k3', 'FwJdMG', 't8ooW7PAWPu', 'qeRdTSoX44gF', 'AaOhDSkF', 'WRKOhSoqWRi', 'W5pcVSo2idq', 'yfT6WO45', 'W7yurmk6xW', 'xXxcUq', 'YQRHTAbr4Bs64BEN', 'W5TdECo7WRy', 'FM7cK8oPCG', 'WQZcGxDVha', 'm8oXWRtcUfi', 'kCo2B8k3WQ4', 'W6barCoE', 'W75orSohva', 'W7/cUuWoua', 'F8oBW5ddUKS', 'W6xcS8k+W7NcJa', 'xbdcPZGk', 'WPOrvmkYW5W', 'WRupsSkfbq', 'W7ZcJgO7rW', 'vmovW7RdMhW', 'C0hcGSk+kW', 'WQ5tW5lcQ8kC', 'dSoSqcrQ', 'WOGzW5NdKr4', 'e0KKW6W', 'W68nwSkYbG', 'xNBcQCkbcG', 'E0BdR3rG', 'DguSWORdNq', 'nZzvWPZcLG', 'WQGLsSkyW7W', 'mSkNiCofna', 'wdXbnmou', 'W4JdJSokW57cMa', 'sCofW6L/WQG', 'F8omW7LAWRm', 'k8kBimolgq', 'BtKjvmkv', '4BsQ4Bw44BwKf8Qw', 'WOeWDchcLa', 'W4iyW4TU', 'oCkTWOW', 'F15JWRKe', 'W7iwdmoXuG', 'pJldRxxcJG', 'WRKHx8ksW6C', 'E2ddR0rD', 'W5/dTwNcUmkD', 'yMJdJmkLoW', 'jvZcTCoFrG', 'W5lcMehcNmk7', 'WR7cUmo4Emon', 'W7KorCk6fq', 'WQaNDs0', 'qGtcQCkp', 'nJ1sjmor', 'EJhcPGLq', 'DCoDFdbx', 'fSoDWR/cUuO', 'WOFcJLRcJ8o/', 'lmkVCrldGa', 'ysdcPCk6oa', 'W4xdNu3cMSkq', 'zd1bnCok', 'W7OpwCk2hG', 'WPmEW4G', 'WOzGi0CM', 'W7RdSMtcV8k3', 'b33cKmoJBq', 'WP1Zoe0D', 'F2pdJa', 'WRjvB8oGWOW', 'vVcUOlXmdfu', 'mSo6WQBcTe4', 'W73cSmoMmd8', 'jIPT', 'WPbcDSoNWQ0', 'W4lcV8ol', 'WQblu8odwG', 'xchcLamI', 'pCocWRFcVLC', '4lA04lAN4lEe4lEv4lwa', 'WRRdTmoUtSov', 'cmkKvdRdGq', 'WQWfW7VdTWe', 'htpcKH4', 'smoprmk1W4C', 'xv7dSmkDhq', 'E2ddOwGa', 'WR7cHsKFWQO', 'i8oXWQRcPq', 'WQVcVCoPr8oC', 'W65Df8o6wa', 'tXhcTa', 'taKquSkm', 'WPFcQrqYWRa', 'WO5IW5/cLSkz', 'fKfTWQX5', 'WQrvxmoKtq', 'BmooFmkYW6G', 'WPD7W6ZcQmkc', 'eaNcRae5', '8kkMOmodsW3dVG', 'jv4fDSks', 'yK5IWQOv', 'BJ3dGSoJ', 'hGWYW6T4', 'FqT4WRqr', 'W6tcS8oop8kI', 'WRKrb8oPvq', 'W5ddNvpcMSkn', 'CSoqW7O', 'mmk5WRVdVe8', 'mJ4oW4ZdLW', 'W63dSCoMlcG', 'mmkIFdddIW', '8l6uTFcATQOc4P+ToG', 'ExjTW5dcMa', 'B0DLWQWs', 'WOLEW77cSCkq', 'WQuVyW', 'WP8yW4ZdIq', 'oLrTWQzS', 'rGJdPgCv', 'pW7dKW', 'pKbvWQvF', 'ugdcN8kgba', 'W7hXIBkawSksrG', 'WQWMW4NdJZO', 'W4xhVEg1HEg0QEg1RG', '8lEIMSkKf8ksW6m', 'WRpdUM7cV8kN', 'i8oAWQS3Cq', 'W7VcHgONtq', 'rehdUMa', 'W6BcMwC4tG', 'ArSuFmkf', 'wdzVpSol', 'WPVdL8oAWORcLG', 'WQrgv8oPyG', 'EhJcGJKV', 'WPjzC8oX', 'WO0rW4tdTce', 'FCoABCk+', 'WR9ztmkKqW', 'W4Sormk1na', 'lmoSFcTw', '4lEMW68nW4WY', 'WPtcUSkAASkI', 'W5ZcTcpcHga', 'dSoeWOKKFG', 'W6eCfmoKda', 'WQrExSkLra', 'W5ymW4S', 'W5mEW5PPW74', 'EHmq', 'WPZdUs8Cuq', '4PEV4Psw4Pwz4PsU4PwP', 'p3HHjSoo', 'xwVdPIVdSa', 'WRHbvCkGvq', 'zNRcNsrw', 'rMO4WR7dQq', 'sCk6W596dhhdOSkKeCoiWOtcIq', 'lderWPC', 'W4xcGh8OrW', 'cwZcGSoLAa', 'z2pdQIpdVW', 'W4SqCCoHWRu', 'WRZcV8o4x8ok', 'FwVdKIpdSq', 'jCoXWQhcPfa', 'FSo7W5pdHe8', 'WPu2W4ZcLSky', 'FuZdHge6', 'W4WEW4O9W5K', 'gmoHWQqMCW', 'WOHMc1W6', 'fCoDqJHB', 'hwfmWO/dGq', 'W6BdR2i', 'W7tdUxpdS8kX', 'BxlcNY8', 'iKBcVSocta', 'WRldJxCIrq', 'W4ddGfbOWRG', 'xWupq8om', 'WRVcSCo7sSom', 'W5SUfUkFJq', 'w8o6t8k8W7W', 'W4pcHuxcNCkq', 'WORcVbmaWRa', 'FqddMNlcVG', 'WPdcMSo5zCoV', 'W6JcIhGMta', 'gCoHWP4iDa', 'rXCuvSkw', 'WRiJAJVcGW', 'W4/dTca', 'W5xdGff5W7e', 't3xWOBEq77QQoZG', 'zSs14BE14BEJ4BEw', 'xXiq', 'xNBcLq', 'cZNcLflcGa', 'cCoGWOq7wq', 'hComqa', 'WQiRAIVcIa', 'osVcMgRcSW', 'W6VcO8o+', '4lE54lE94lw8W5VGT5S', 'oCoXyIDw', 'f8oLWR4Kya', 'W54KAHPC', 'WOL1WOtHTj3iHa', 'sW4iAmkx', 'W6DbrSowqW', 'WRJcHmoBw8o/', 'qqPVgmo5', 'CHmuEmku', 'W7lcHfBcGCkV', 'WRy7lg7dNa', 'W7ZcPvPaf8kzW7qVseTkW4q', 'lCkQWOZcGmoX', 'DwhdKh3cVG', 'W7JdUxxcOmoS', 'nmk8wCohlW', 'W4dcOKlcN8kx', 'W7PcqSoKya', 'u8ofW4ldVeK', 'W57dKtlcJ2a', 'WODRE8kNqa', 'xa3cMmkjlW', 'm8kIBbtdLW', 'W5NcGCkEW5/cMG', 'ltGxWQ3dSCoXqSoE', 'WRL3m0CB', 'iSo+WRBcQx0', 'WQjKo2qm', 'W7KytmkAkW', 'zI87Ea', '4Bw84BAVYOxHTyRHTl8', 'W4CtW4j0W7u', 'BSokACk4W6G', 'hmoWWR4XDa', 'dmo9yIDB', '4lwwxEc3TEc0H+c3Ia', 'WOaxW4T8W78', '4Psj4PsX4PEK4Pwg4PAC', 'g8oBWPpcLq', 'W6WirCkZ', 'AtpcHYSt', 'W4RcUeGPua', 'W5tcH1dcUSk8', 'rmocW7BdKvS', 'CISaoSox', 'WOT3W4JcKSkw', 'lINcMIBdRG', 'Ft1miSoZ', 'gmolWPOQBa', 'WO4lF8kYW7C', 'BXeFW4ZdGq', 'WR4CDSkIW4y', 'W5hdHfb5', 'W4isW4S', 'W7uqv8k8fW', 'WQ9qtmkTaq', 'W6ZdJhbHW7y', 'DvBdUqJdRa', 'BelcMY4G', 'W4hcGujJW6e', 'gCoBW4hdUeK', 'W4tdJ1DsW60', 'cmkwW6ldIgW', 'eSoOWPW6vW', 'jCk/WO/cJCkJ', 'l1zRWQHn', 'E8otW5xdTe8', 'guvGWQ5Y', 'FxBcNsC0', 'd01+WR91', 'm8o/i3Oy', 'v8opW67dQuS', 'W4BdSZRcGa', 'BComC8kVW4u', 'WRNdTtWpWQG', 'fmo6WOe6', 'cGmDq8kh', 'W7NdNXxcUve', 'W5y7WOBdLmoA', 'vmoxW5ldTKK', 'udpcNSkceG', 'W4ymW518W7W', 'zN5MWQea', 'wCoGW6HCWRa', 'WRJdRmovW4BcOG', 'uhJcMmk/gq', 'uhldSeaY', 'hG7cKXqo', 'W4VcG13cKSoX', 'fW7dG3JcOa', 'EuZcMtVdOq', 'W67cGgdcLmkA', 'WPX/n0Kf', 'W6ldGMzIvq', 'mSk3vsVdVq', 'W6/cHwlcL8ko', 'qKNdPZhdQq', 'W5pcTmoHjJK', 'pSoNWQy', 'qGuDu8kh', 'BrCrESkE', 'sNZcKdyB', 'hLH4WRK', 'W7/cJg4/', 'bSklc8onnG', 'CXtdMdBdSG', 'hIJcIqDH', 'W6r4jG', 'zJLsjCoB', 'h8oRWQWHvq', 'WQbcqSka', 'W7VcO8oH', 'pmkwWPVWUio0WOa', 'nKjQWQq8', 'WOmlW4zVW74', 'zmocC8k/W4G', 'pbpdJq', '8j2iId3dSCobta', 'gblcPmkzdG', 'Cmk5CqhdHW', 'WORdHX7JG7xdVW', 'wCkPW6FJGy0N', 'fSoWWQm1AW', 'WPT/neSA', 'lCkRWP3cJmk+', 'WRJcKbWWWRa', 'F3bvW4JdLq', 'FcNdKW', 'FwJdMSoXiq', 'W4RcK8odfCkV', 'W63cTmo8mrO', 'CtpcQmk8ka', 'teNdOgO', 'zSoAW5tdVf0', 'W4ldIev0', 'WRpcVZSEWQm', 'eCo3WRKGya', 'oYBdG3Pb', 'veldP8k4oG', 'WPrCFmoPWRa', 'W6pcJhO', 'WOWrW5NdIr4', 'Aur+WRq', 'W4lcMmo1p8kD', 'W6uLumkvW6e', 'WQDwfmoXaq', 'mNJdI8k0ia', 'WOWcW4ldIrq', 'FYHup8or', 'qNlcMmkceq', 'phRdM8k9nW', 'W67cUmoPW5lcSq', 'acxdM8ouwG', 'b2BcLCoZ', 'W4tdT0hcOmk7', 'wsGjWR3dMW', 'zt1omSoZ', 'ubDVaSo7', 'uCoLESkPW7u', 'WQFdMI0gtq', 'W6hdTmo0rSoE', 'ESowW7PCWRa', 'quBdT2Cb', 'ie96WQqf', 'ymooFmk8W6e', 'WQzsgCkTeW', 'qJneW7xcIa', 'wsGqWRtdJq', 'W7eEfSkOuq', 'nISBW53dKa', 'ACogW71bWRm', 'WQBXHioeB2hcQG', 'W6NdQwjkW7uxWOHQCYJcQtq', '8jI2UFcvLOZcNVgpT7lXGPE4', 'WRJdUq8daW', 'W6narmoAva', '8lw1ME+5MW', 'iSoMWR4', 'eSoxWQaYtW', 'WRpdRmoKW7VcVa', 'xrCKrSku', 'FK/dQ35B', 'mMuHWOzy', 'WQtcS2ZcVmkY', 'WRGLtSkb', 'W4i7Dane', 'be5w', 'yCogFmk/W6e', 'yCk9WOhcJCk9', 'W6hdUwBcSmk2', '4Bs14BsE4BERW51d', 'W7ddS2RcJmk1', 'W5tdVSkrEmkZ', 'W6ThumkTra', 'Cx/dHG', 'WQ5csSkOrG', 'WP51W5/dMCkw', 'W6ShvSkdW7W', 'oCk7WPRcKmoR', 'jmkPoSo2oq', 'FCompCkVW6u', 'r1RdRq', 'W4VcT8odpCku', 'lCo8zGPY', 'kCk0BsNdJq', 'W4BdTtm', '4PEo4PAb4PEc4Psf4Psi', 'eclcIa8G', 'c19pWQn2', 'vCkhWOlcR08', 'WRRcQIOwWQ8', 'iCkDWQVcI8k2', 'W5tdHupcKCkW', 'W5GDomkLW64', 'BCk/lG3cLa', 'W6PkvSoNva', 'yxhdUG', 'W7TosmoHyq', 'FwpcNYOc', 'WRZdTqSxvW', 'WQtWLko8WPn9WRG', 'FCooBCkmW5u', 'W6tdJSomW57cHa', 'wmoDWO8', 'pGddHa', 'WOVdIe5Q', 'YBpHTi15YQ7HTA4', 'BgtdUXav', 'e8oVwmkfAG', 'k8kyWOFcGmk7', 'E2FdPcddNa', '4lEq4lss4lEx4lwQWQq', 'pZCZW7VdGa', 'WRRdQrOr', 'B8kSeCobiW', 'gIVdGMlcVq', 'W6fovSowqW', 'W6NcGg4Gua', 'tmkdtSkEW4u', '8kYsTUkdPpggKARdMLrfAG', 'qghcGa', 'rgddVCkwpW', 'FSorW7Pn', 'j1/cM8o7ya', 'W4JcRCoCoCkG', 'W5tcML/cKmkR', 'Cwv3W4tcMa', 'WPPwnCoPWRm', 'W6OTW689W5y', 'WP99EFcuSOW', 'W6tcMMdWOPsXWOK', 'WQOXwSkyW7W', 'WPG+W6JdMZ4', 'W7/cIhaRBW', 'DCofW6hdJvW', 'W6LlqmoArW', 'W7tdTxpcSmkU', 'c2JcLCoxzW', 'imkXWO4', 'W6HgxSowxW', 'C8oxW7PeWQW', 'nxzzWOXT', 'cYNcPSo+Aa', 'wuP4WQ4j', 'iatdMNlcGq', 'AujQWRq', 'o8kSEW', 'z0pdSfKE', 'lbu9W5VdIW', 'xtFcUmkFdW', 'jbBcMxdcOW', 'qLVdNhvw', 'F8klWR0D', 'omoMWQS', 'W6hcVcBdSSoO', 'WQnew8oNqG', 'W6nAx8oswG', 'WP8RDmkyW7O', 'fSoZWQiGCW', 'WRtcUZ5AWQC', 'D2ddU1vg', 'W7BdHmoIW6pcHG', 'W591z8o6WQW', 'W40uWPq3WRS', 'W6RdJvn8W7y', 'WOTZpq', 'WQ8/W6pdUIG', 'W77cI8oqW5/cKa', 'EgpcUu87', 'W5TdW5NcLCoD', 'yKRdMI7dIa', 'pYtcK8o8FW', 'oHFcLcJdRa', 'W7/cTv08qq', 'W5Kprmk0aa', 'W5BdLvfKW7y', 'xMddTLXr', 'kSo9Ftyw', 'udpcN8kcdW', 'ygRcICkKlG', 'WRBdUG0mCa', 'vmk6W6O1zG', 'DXes', 'zMFcHZmf', 'WQFdLpc0Py/dP8oB', 'WQ4Ct8kGsq', 'W5ZcQmo2nZy', 'WPNcLVcEP4tdOSoE', 'W6xdPCkLWQpcJa', 'jv4rDSkh', 'WRqJCJRcGW', 'xKBdQ8kvCG', 'W6KouW', 'DtDnECox', 'j8o2WRiYvq', 'CtrrpCoB', 'smoZtCkxW40', 'dSkmAZtdIa', 'W6ldH2dcVmkE', 'vmovWR8GAW', 'WO4vW53dKqi', 'W6xcNheyvq', 'o3unE8kt', 'EgK+WP7dLa', 'WP5KWOVdH8ox', 'W4yrW5O', 'Fu5IWQKS', 'B8orW7CuWR4', 'WR/cTs0uWQO', 'W70nx8o2fG', 'WQ9usSkQ', 'EgFdH18', 'Cs/dSLfC', 'xXyS', 'lK1PWRKc', 'FxBcNsC7', 'oatdJq', 'rmoBWPZdQfW', 'cL9P', 'W4ddKLbSW78', 'x3tcVaGW', 'eMdcLmoHEG', 'WO5MmG4n', 'eGK3W5hdVa', 'W6G5W5DKW5a', 'W7/cTCoZc8ob', 'aM3dHLK7', 'c2JcLCk2ua', 'W4ZcQSoBkG', 'WPzeDmoxWRy', 'WO3dVX8etW', 'xXmz', 'rwJdMYhdPa', 'ztDvomoA', 'nJ5soCot', 'W5vHW4RcLCkB', 'f8kin8oIga', 'mSo3WP8Cyq', 'W5ddRgrOW5W', 'yCkNdCoqma', 'WP0iW4tdKGG', 'egVcK8oABW', 'sbSzESks', 'wINXG5Y6krq', 'DYusWRldQq', 'peVcNCksba', 'r0xdNmkyhW', 'W70zgmkRgG', 'dSotWOBcLhO', 'reFdSW', 'WQKOW7FdNHC', 'W4NcJCoolSkI', 'WPbcnCk2W6m', 'zJuXwmkK', 'W78BqCkpjq', 'rmkwW57dVK0', 'l8klxHNdGa', '8j2fOo+4KG', 'WQbZuSocWRe', 'tGutf8kx', 'WOj7t8k9ua', 'mHxdLq', 'xmodW7FdK1S', 'xLqdWRVdQG', 'hmoQWPS', 'AmogW7XcWRO', 'BG0q', 'o0H5WP56', 'rZilWRy', 'FxBdKYyy', 'dSoGWOa9EW', 'F8kNCqFcHq', 'WRBdOcWouG', 'W7FcHLBcMmkS', 'pWtdHgy', 'A8kkc8owlW', 'WQ5+z8oYFq', 'Dh92WOW7', 'BgBcHZCz', 'WOJcOCofW4lcRa', 'zrS1W77dQW', 'kCkiWQVcQSk5', 'WQ5qwSkH', 'W4dcG1xcGa', '4PYSWQ/dHr5u', 'hNHPWQH0', 'W4nkqCoaua', 'FqJdMxhcQa', 'fSoQW490eG', 'WOnfWOy3', 'uG7cPSkvbG', 'xSobW7HHWRG', 'WP3cSWSJWQm', 'W7/cHgqQ', 'WRlcKmoBC8oV', 'W6ldTxFcNCke', 'DComW7Lz', 'pmoXWQS', 'WPnxW73cMmkt', 'EMKHWOVdLG', 'lSonWRShBa', 'mNCSWOldLa', 'W5TtESkNWQC', 'W4ZcQ8olmCkO', 'cmkVWPS3sa', 'x8osW5tdSG', 'W7Wpdmktrq', 'W4ZcS8ok', 'WP51x8kDtq', 'itOjW4RdLW', 'WR7cQbCBWRq', 'W4jADCoera', 'W6ZcTmoIotK', 'W5NdSuNcPmka', 'Bmk6WPZcLSk4', 'W73cS3/dVSk1', 'WO0BW4fQW7u', 'tGupva', 'lKDLWQmk', 'W6xcQSkEW6RcGa', 'uc7cOmkika', 'B1hcLGah', 'WQxdKmobW7RcNa', 'zComEG', 'uwu+WP3dMq', 'xxpdRv9g', 'nSk7fSoRbG', 'WQDRACkVBW', 'W48FoSo8WQy', 'WQKRwSki', 'WODrhNWn', 'W6pcUCoYW73cJa', 'oH3cIZSG', 'W6tcIh8RrW', 'auhcLtFdPG', 'iaJdMNhcOa', 'bqxcUszz', 'E38EW4ddKW', 'p8kSWOO', 'gadcOCkqwa', 'z19GWQHB', 'WRpcVCoZqmkx', 'zNZdJmk0CG', 'qw7cV2DC', 'W7/dMbdcPZi', '4BAQYA7QNO/cKq', 'W7hcSmo2Dr8', 'wZKfWQZdSq', 'WOOUrmkGW5y', 'WQ8rx8kOqG', 'W5qhBmkAoG', 'EGObBq', 'W6qRDw7cKG', 'WOXImeeh', 'WR/cQs8y', 'WRZcUSorqSoQ', 'wNlcIa', '8jkeVComWQOgWR4', 'WO7cUSodfCkx', 'cCkSWPVcI8kJ', 'W6T3DSkBaq', 'FwVdLcddUW', 'ngxdLdpdUW', 'kSoQBZzr', 'W4dcTxuCrW', 'mmoGWR3cV1K', 'CWObB8kc', 'wWtcO8kyaG', 'i8oMWQVdSv0', 'WQJdRCo1WQVdGW', 'WRyTwSk+eW', 'AK5/WQ4t', 'pSo0yG', 'W7TdrG', '4PsC4Psa4Pwn4PEU4PA4', 'n8kQDHBcHq', 'E3BcLmktqW', 'i+g2G+g0NEg3KCUU', 'W5vwCmo8WQa', 'WQnqvCkOaq', 'eCofWOFcUM4', 'W6ZcU2tcJ8kW', 'BhldUcldRq', 'hsldHu/cQW', 'k8kMyau', 'lxX/', '8kcNR++4GW', 'WQrqxq', 'W67dTHGBtG', 'qIaa', 'WPCvW6JdMXi', 'W7eC8lwNRSoxCG', 'pL9lWQXj', 'W4pdIffO', 'WRL1vSoCW6m', 'D3RdJCkWnq', 'nKu/WPZdLW', 'emoHWRXUzG', 'wraqxSkw', 'vghcMZldRq', 'W4qtWP7dMe4', 'WOzrzCo4', 'W4xdN1ddJSk8', 'EN3dISkHiq', 'aSkGdmoula', 'mHpdJtBcQq', 'W73cVNhcUmkg', 'WQCkDmkCW6u', 'AKr7WQmn', 'AhjxWOtcIa', 'eK1IWQ9q', 'W6DzeSkneq', 'kCk9hmoc', 'WOldNY07', 'A1H/WQWg', 'W6JdHfb+W7K', 'WPWAqGldHG', 'nCoaW6fbWQ8', 'ifnIWRuz', 'eCkovrFdKq', 'WQrdqa', 'vMVdLSk1kW', 'gshcPt42', 'DhVdKCk8CG', 'ESogC8k/W4K', 'A2tdRuzr', 'wLm4wW', 'E1LG', 'WQDEv8kS', 'W7ddTuBcGSkb', 'W67cS8oaiCkU', 'rq1trCkh', 'DxBdNgRdUG', 'WOnv8lsUSmk7Yym', 'jCoXWQlcVuu', 'FmoqEmkP', 'sdixWRNdJW', '4lEk4lAW4lwveoc3Ta', 'jWNdLwldRa', 'l8k2WOJcKa', 'WQLIusBcHW', 'DbawC8ky', 'WRaNDtO', 'vdhcM8ktgq', 'pWpcTmoB', 'pgpdJSk2', 'W47dVZlcIMC', 'FuFcOmk3fa', 'jCk0W7pdSby', 'W7uzfSkPfW', 'A8ogAmkSW6y', 'W7dcSmo7oq', 'WOS9W4ddHZ4', 'vWJcV8ouaq', 'F2SSWPVdNa', 'W6Tfw8kMrq', 'WOPJW4tcJCks', 'qehdOM4', 'WPVdImoDW5dcRG', 'WRaQDcVcHW', 'W4hdVY0', 'wK3dPgCv', 'F8oOWOVcGmoO', 'cgZdKCoYEW', 'bwxcMmo3EG', 'b+kAKU+5Q8o4W6zq', 'xr8CC8ku', 'W6WBW4XeW4m', 'wCoeW4G', 'WR7cTsLvWRy', 'vsVdUam', 'EebDfSoi', 'F+g3G+g0Gog1QCkf', 'W5hWMRgXW5NcUtK', 'WOG2w8kqW6C', 'hK5IWQ9R', 'f2ZcNCoZAG', 'jcegW6FWP4kL', 'FSocW71rW78', 'pgRdKCk8Fq', 'w8oRWOy4', 'WPDFCCoX', 'W7qfW41xW6m', 'AKrVWRGm', 'EadcMmkpma', 'W4tcMSowW47cLW', 'BxuIWPRdNq', 'FhFcMWS8', 'EmocW7PrWRG', 'WQaNDq', 'WQ43tCkqW7q', 'FriACmkd', 'W5JcNmomW57cKq', 'W7Pgx8owqG', 'ChpdTv1T', 'W5GsqCk1hG', 'amoHWQ5HjG', 'CM/dMsldSa', 'W6BdGe9KW6G', 'cdxcN0WU', '8y2GRokaS/gdGkGa77+A772c77YX', 'W7PkqCoh', 'F2BcNdCt', 'zgFdK0q', 'ygZdJCkKpG', 'w03dUM82', 'ueBdRhmq', 'yINcSmkzcq', 'WRJcQCkHWRJdIq', 'WOS+AWC', 'WOddKXSTra', 'EYaoWRhdMG', 'uxZcJ8ksdG', 'WPNdS8oIW77cMW', 'W41qW5r0W6S', 'WRlcVNOiWQm', 'WObECColWQ8', 'nGTbmmoF', 'pGNcQYqK', 'WQpdVZtdPa', 'W7ldPCoJW6tcIW', 'DCkgsIpdQG', 'su/dSq', 'WOT3la', 'W7JdUx4', 'amoOWQ9RjW', 'W4RdJ0bHW7e', 'W600W4r/W5y', 'W7JcSJ8BWQi', 'W7vKwSkyW6u', 'EIyktSkd', 'jmkUW73dVLS', 'xIqkWRZdQG', 'W71ZwSkxW7C', 'EsaCWQNdKG', 'WPTZivO', 'WOGyW5JdKbK', 'FwCOWP0', 'smofv8k8W4m', 'W7GsqCk1hG', 'xYqfWRVdNa', '4P+9WROeWOD3', 'W4NdGfDOW6O', 'WORdKSo9W7xcVW', 'vKxdOIRdSq', 'WQRcRa8OWQ4', 'nmk8hmow', 'WOFcP3FdMCkE', 'WOWzWOldMH4', '4Pso4Pst4PEZ4Pwd4Pw2', 'oqJdKflcQq', 'WQeHCIVcGG', 'W4ZcRSokkG', 'FuP8WR0', 'kSkWFq', 'WQRdTcKBtG', 'W6JcTSo9W6hcPq', 'k8kMALhdHa', 'W53cMCoDgW8', 'W7/cM8o7W7dcGG', 'tCoGW79ZyG', 'yvddJLTb', 'b3pcGSoqtW', 'hspcLuXZ', 'BComASk1W6G', 'bWO+W7pdKW', 'AejGWQGV', 'omk3WP3cImk0', 'W7LDumkPhq', 'W7LorSowqW', 'WPeQxI3cTa', 'WQL6FmkaCG', 'EuddNh11', 'qWmOWONdIW', 'omo1WRy', 'W77dTwRcTSk2', 'uepdP23cLa', 'W4JcGMKHtG', 'zqOnWRldGG', 'pSo9WP0HsG', 'W7XkqCogxq', 'WRVcVCoRc8kh', 'wHaqxSkb', 'C3CJWOldLW', 'W4tcTs7cGMi', 'WORdKKzSW6O', 'W7eCx8k3tW', 'ENFdIuDq', 'WRRdKsa3AG', 'f8oNWR8ZzG', 'W4VcG13cKG', 'BhlcMJfy', 'wI8iWRFdIq', 'efTIWQDZ', 'FXiwCmkd', 'tuBdOcSa', 'vCozW5ZdGLC', 'wxZcIW', 'g8o0WQ8', 'WR/cVYKz', 'o8oXWQe', 'pVcESA9NW53dVW', 'W7PgrSoFva', 'ycWGWRRdMG', 'rmotW5ddVLO', 'CuFcTfWC', 'k8k1yqxdTG', 'zwvA', 'tvVcVG', 'A1X/', 'xvRdUa', 'WRW7uI/cIq', 'zrafqmks', 'dwtcKmoXBa', 'F8ogW70', 'omkqWOJcICk0', 'm8kKnuNcHq', 'AKKlWPtdNa', 'AxqLWOhdIG', 'hGtdKh/cRq', 'W7RdSCoMoNG', 'WQ0HwSkNW54', 'vq7cVmkKdq', 'jIhcTwnX', 'qs4d', 'WRjKamorW6C', 'rx7cJCkodW', 'pgyIWPZcMa', 'W7hcRmk9WRZdHa', 'ktNdHxn9W57cJI0', 'DsNcNSk1pq', 'fSoUWOeQDa', 'zSocECo7W5C', 'xh3dHG', 'jCoIWOm7Cq', 'vWZcTa', 'zMZdJCkL', 'FdZcLs4B', 'xwKjWPJdIa', 'kmkXWP7cISk9', 'WQKJBYldHG', 'WQjCwmkUra', 'kZqsW5hdJq', 'WRLcW6u', 'WQddSqCr', 'W7uzu8k0aq', 'lMPCWOrp', 'BuP4WQGg', 'W6Oha8kAeq', 'W6RcOSoZjsG', 'WODqkg8U', 'dSo7WRGVta', 'WO4vW57dIbC', 'WQqLwSorW6u', 'eu1HWQ4', 'eCo2W6P/jW', 'ugxcJ8kVdW', 'hmk3WORcKmkK', 'D8omW6K', 'W6TvvSk+tq', 'svVdSsSr', 'WOpcKJ0dWP8', 'W4pcV8ocpq', 'B2pcMcOy', 'ta8tq8kh', 'aSk4kSoSmW', 'W73cSmo+oq', 'W5Gq77YJWR3dOW', '8yoNGFc3PkxXGkAmpFc6Hze', 'WRddOmoKW7tcMW', 'hCoRWQq', 'DbfxhCor', 'dCocWRRcL1m', 'W6BdH37cVq', 'WQzusSk6qa', 'mCo9WR7cTfi', 'AerJWRKe', 'D3pdPG', 'gmkxWR3cRCkD', 'j8k7WPa', 'omkSWPddHmkW', 'WQ/cOCoUqW', 'bsddVL/cNG', 'CghcNSkieq', 'z19KWRGd', 'vsKmCCkz', 'DM3dVCk+pW', 'nmk8ha', 'WODvDmoRWRC', 'WPyeqH3cVG', 'oSo1WQdcUG', 'W7xdHsFcJMy', 'W6ZcG0FdLSoQ', 'omk7WPhcKa', 'W5apW4j0W68', 'f8oRWQq1yG', 'W4lcUSokDCkR', 'vuddS8kqfq', 'YB4R4BAW4Bwa4BA+', 'jmkSdq', 'WPFdTpc4GypIGRtWU7cHrv8', 'Fg7dQf5y', 'WRfFySoMWQ8', 'WOK2WORdMmoD', 'igXbz8oB', 'kmk/WP3cHq', 'W7fReCkCWR0', 'W7r8CCoFxG', 'fLHP', 'mGldN3FcQW', 'WORcJr7cKmoY', 'gCoNW6tdMgS', 'w8kRWR02Ca', 'nSoQWPW9wq', 'WP7dGZmeEq', 'xeVdNHhdLq', 'pwlcLSogqq', 'W4ldH1lcI8k8', 'gsZcHZK7', 'W5NcHSolW5BcLW', 'WQiOw8kcWR0', 'W4ZdHg1DW6S', 'AMvTWOpdNq', 'FhBcGdyA', 'W4VcVCouW4JcVq', 'ge1LWQu8', 'FM8PWPC', 'nJ9poCoz', 'cZpXHkEdq8km', 'W7BWV4gtWRhcR8ol', 'o8ofW6DyWRO', 'pSo1FcTc', 'FwldQWOu', 'F8ogW71x', 'ycBdMYldQq', 'WQ4reSohua', 'W4zFW4n4W6G', 'jsVdGxlcPa', 'WP3cTs8uWQi', 'ANBcGca', 'WOH5k1C', 'F2FdGvm8', 'W63cTmo8mru', 'W6ddMqtcJfC', 'jCkWWOVcI8kP', 'WQfDyCoMWOK', 'umoFW5/dUq', 'W7hcPmo0rCoD', 'WPpcV8oqyCo8', 'WRJdHqq+CW', 'drhcVJOL', 't8ojW7reWRK', 'WOxcNWn5W7K', 'gCo1WPVcPwy', 'WOPbW4ZcQCkF', 'W5SrW5zLWRu', 'WP3dGHbOWQ0', 'wxRcGSkm', 'deLIWQ9E', 'bSkRkCoJkq', 'jCo1WQdcQbW', 'WOXFymkOWRq', 'WR7cOmo0rmox', 'WRJcStSpWQi', 'W7hXIBkawSkftG', 'WOnbWO5PW7O', 'FSovEmkrW5u', 'fGPGW4pcLq', 'dgZcKmoYBa', 'vNlcMmkcba', 'WPTwqSoGWRm', 'pbzfm8oA', 'W7CytW', 'WR9uqCk9', 'BXOOW7VdQG', 'W4aqW5H4W6K', 'ix7cG3C', 'mMvaWQDx', 'W53cS8oomCkR', 'ECoSWQRcQq', 'W4RcMGa', 'jSoHWR3cPvK', 'Cw/dVfXb', 'WRa/W6RdSG', 'ittdK1/cVW', 'W5veFmoJWRC', 'DtLqiSox', 'WQv0zCokWQG', 'W57dUYhcJYe', 'WOeRqcRcGa', 'qxZdJmkdda', 'WR3dPbGDtq', 'WOfzyCoKWQy', 'C8oUW7ddKh4', 'qGJcVmkEgq', 'A3xcSbep', 'CMDTWPRdKa', 'qhtcSda5', 'W7/cSmo0xq', 'mGSOW6ldRa', 'oSoXWQhcOL0', 'YidiICMC4BEF4BwY', 'eCoQWQ4Yua', 'WPPLpa', 'W70quW', 'W4JcI1C', 'WRdcTCo5', 'Dw0SWONdNq', 'WODvzSo9WQ8', 'W4BcHLRcJCkM', 'xCocW6DyWRO', 'WPmrW4K', 'W6flv8kExq', 'W5ZcM8orW4/cKa', 'j/cVHyRdUpc3L5/WKAEN', 'i8o6WOdcMx4', 'nSoMWRVcSbe', 'feayxSku', 'YAj1YyRHTBtHTQi', 'tda5umkW', 'W5/cU8oClCkR', 'l8kXWOtcU8k3', 'DMBdICk/pG', 'F/c5Lj5IAaO', 'W4ysW55YW6K', 'xg7dQf5y', 'tZKqWRtdHa', 'W7FdVxpcSG', 'WP1ZkLSf', 'BunTWRK', 'jXbmpSopWRTh', 'W5RdUYdcN3C', 'W4VcJLLKW6G', 'W4ddMeP0W4a', 'cZpcImkofq', 'wKFdPIS1', 'EN/cLNLC', 'FmoWAYnC', 'WRFdJCo6W4FcMq', 'lcdcLHWw', 'W6VcPxtcTG', 'pCk3BZjt', 'W6Gov8kRaG', 'r2FdM8kPiG', 'kSkQaa', 'uIpcIWmR', 'k8k2AHtcHq', 't8ozsmkUW7W', 'pNXCWODv', 'Y6FcSCMT4BEX4BEE', 'WQaUAGtcVa', 'm0vIWQbd', 'fKhdU8kJja', 'gNbuWRVcMa', 'gmoIWRGUAG', 'WQBcQgW9tq', 'WPrYW57cLCks', 'fSkQCaddKG', 'pIVcMgRcSW', 'WRSXtCkz', 'WP7cRwddMcC', 'W6FcMSorW7tcLa', 'yKjIWQy', 'WRiEwCk3xW', 'hKbLWR9L', 'WOLZW4RcMSkd', 'kqlcKYew', 'm8kQDHO', 'v2BcIWK1', 'umozCmkvW4S', 'qKFdVW7dJa', 'WPz3W5S', 'bayrwSkn', 'icWjW4JdGG', 'W6vksW', 'WRNcVG0DvW', 'WQBdPb4eua', 'zmofDmkPW6e', 'W77cJmoVW4pcTG', 'W64AW51UW7O', 'WQBXHioDB27cOG', 'WO4vW4ZdNG8', 'qXpcVq', 'W4NcSCoynSkR', 'DM8KWOa', 'mmoQWOmAtW', 'WQ7cQdy', 'WO56kuGz', 'W6uWW6fjW54', 'waBdSCkpaG', 'kSoQyG', 'jIhdU1Lc', 'gSoGyWz9', 'ASo6l0JcKG', 'W5xcLSkEW43cNa', 'zMddISk9nW', 'kxeBW5NdJa', 'W61Dv8osrq', 'W7pcPmoHpdS', 'WQvhu8kBra', 'kJ4E', 'WPf/W5NcMmoA', 'WPFdPYSTEG', 'tcWb', 'W7RcVSoLoZq', 'W5BcN1ZcJCk6', 'W5/dVSkoECoT', 'nSkoWQmzW7i', 'FtilWRBdRa', 'WONdG8kWW5xcPG', 'yYPm', 'WO3cISoxW43dLq', 'WQldTt0rqq', 'W65ilog1LUg3Qq', 'W4lcIuFcNmk7', 'WRlcTZSDWQm', 'WQZcGhS8uq', 'W792d8kxW7a', 'WOnUcfWf', 'W6T8FCoPCG', 'xdakWRldNG', 'WPNcTSoVFmoD', 'rvJcPW', 'W5TuEmoNWQC', 'EwNdGY7dUW', 'zs4yECk0', 'WOGvW5xdIq', 'Cw/dTu0+', 'AK5QWQWu', 'W4b8kuSo', 'CfFcISkdoq', 'W7VcPCoZDq8', 'Awi5WOFdJa', 'W7ZcMg0N', 'pCk3Fsfk', 'WQldUqqF', 'ESk5W7/dVbe', 'WQBdPZ5f4PsI', 'FcquWPVdKG', 'WPTrFmoK', 'bIBcGSo1EW', 'q0BdJCkupW', 'WQCJDJRcJW', 'W7pHT5FlG1pdVa', 'W6JcIg0S', 'wYWMWP7dNW', 'EZ0AFmkE', 'rCotW5/dUwW', 'oWJdMNhdRa', '8lQwMVcqTi/WOBAb8lkKGCkq', 'zMBcJSktcG', 'WPaFW4O', 'cdOjW5RdHa', 'oN7dMZ/dPG', 'hmosWPRcV3y', 'W6BcNNeH', 'jCkjWPpcSCkC', 'vXxcOSkAgG', '8yQKISk98jELRVc5TBJWRQA/', 'WRPLpa4', 'W5xdNSkWbSku', 'hctcO8kjbq', 'WQ3IN6CtW5pcIW', 'WQldVW0', 'Bmkdmmo7', 'W47cSCocnCkM', 'WR7cTSo9oJ8', 'W4NdHe1QW6W', 'oSkWAXddGG', 'CSozW6SoW7u', 'W7/cUmo0wmon', 'WQ3dSr4rra', 'WPlcIIGvWOG', 'W5tdJSoiW5lcLa', 'AIhcOrba', 'DmoiWQ5cWRy', 'rSoxW4xdQuS', 'v8oBW5q', 'W4ddJHJcO3m', 'eJ4oW4RdJq', 'W5FdHfb4W7q', 'vNZcGCk4bq', 'W4pcJ0dcMG', 'yt8Lt8kI', 'kmk7WPRcHW', 'mSoPW6OwBW', 'uxFcR8kidG', 'cIBcH8o4Bq', 'WPXiqCo7WQ8', 'WPO+W5NdSXq', 'WRPewmkLsa', 'gmokDWv6', 'WQRdPmkWWQ3cJG', 'yePVWQzb', 'va7cTCkc', 'm8o1WQBcSa', 'WR06W6tdRZO', 'W6ZdLrVcV1C', 'ySoWW4BcImk4', 'uxtdHYJdRa', 'WPaFW4ZdMq', 'bLZdSwye', 'E2ddQ1LB', 'W7RcSmoMna', 'EwZdHW', 'xNBdJmkgqW', 'emoHWRK', 'DmkdW5LCWR4', 'xIGkWR/dHa', 'nZOBW4RdKq', 'zXxcKmkuaq', 'W67dJuKNqW', 'r1pdI8kaoa', 'WRNHTOtHTiJHT7lHT4u', 'W49Zk1Wg', 'yehdQCkqha', 'WRRcTd0BWR8', 'W5xdKKpcTmk7', 'W4NcOLqeuW', 'gSoLWQmT', 'iHtdM2lcQq', 'te8EWRO', 'W4SqFmoLWQq', 'F15LWQ4k', 'W7pdSCofptK', '4OgD4BsH4BsqYztHTiC', 'W5ddK08', 'W5NcV8ocka', 'q2/dKahdIW', 't1RcP8kukG', 'oSoRFsnF', 'uCokWP08vW', 'zduni8om', 'cbS0W4VdKa', '4PEV4PE5C3e', 'A8kbfSoqya', 'mSolWOuvqG', 'W6JcJgOU', 'sKehWQFdQG', 'FhlcNsCz', 'ncZdPdldUW', 'AuD9WQye', 'WQ1EvSk9ra', 'xSoBW69zWQ8', 'amoOWQ97lq', 'wCoxW5u', 'WOuPumkPW5K', 'vbxcTSkQbq', 'EwFdHYW', 'pbtdMMldRa', 'g8kBWPZcSam', 'WQ7dPmoGW73cIa', 'W4O8W5TsW6e', 'DEg3O+g0Mog1U8Up', 'tIaqWR3dJW', 'eSoTWQyKAq', 'BFcYS5NIGPdWLlcBWRhVV5lVVQq', 'CYTtn8oz', 'W4NcRmoQe8ki', 'W5mwW4tdKr4', 'itymWONcMW', 'fCkGWPuNsa', 'WOnzCCoTWQW', 'vh7cIq', '4lEu4lEK4lEop+c1Iq', 'WPFdGCkrW4ZcGG', 'WQBdSZOGyG', 'rNBcGSkdlG', 'WRBcSmo4rmok', 'duL/WR5W', 'YO3HTjllLmo84Bwx', 'W40yWO5PW7m', 'W5ftW7NcQ8k4', 'WRNdSSoJW7dcJG', 'BSoqW6S', 'bCoIWPKLqq', 'f3ZcK8k2kq', 'pHpcQa', 'WQFcQSoFW4/cKa', '8lMLGVcCPltXJBsw8kwuI8oE', 'W6FdThlcVSkG', 'zq7cQmk2pG', 'WRJcUY4FWQe', 'z0zTWQOe', 'W43cH30jsa', 'cGJdJLNcNG', 'Yk3HT6NHTRVcM8MS', 'Cg8Q', 'WPFdPmo8W4xcNG', 'qquf', 'ErSaAmkt', 'WOTZkG', 'h8oWWRVcN3i', 'WR8Ss8kCW7e', 'naeS', 'WQ/cVZKsW6K', 'W6NcNxfVtG', 'ECocB8kVW60', 'WPFdPqGHBW', 'mau9W5VdPW', 'pmoQAYnm', 'W49YmfHj', 'W5BdHe1PW5u', 'joc2SEc2T+c0MEc3IG', 'dSkVWR7cP8kJ', 'cmkeimobja', 'emoPWO8wta', 'iatdMNlcJG', 'W59GECoTWQi', 'twndWOm2', 'WO1+d2Sd', 'WOddVXGzqG', 'emkLAaFdLG', 'W4hcH8oqW5a', 'D1TP', 'WRCJysS', 'nelcTCoAkq', 'D2ddU3zD', 'WR8RhSkfW7i', 'WRRcT8oPc8oy', 'W6tcQmoZhs8', 'W5ZcJmoecmks', 'W5/dRWxcP34', 'Bc09WRBdQW', 'm8oEwInD', 'EtCanmox', 'uhlcN8kcqW', 'WPVdP8olACkK', 'sZpcOay3', 'BbqGWPhdPW', 'WPVcO8o2wSoP', 'W7utxq', 'WPX3pKS', 'ie9/WRGd', 'gmk7WOtcLmk+', 'WPGTsSku', 'kCoXAIDx', 'W7PI8j6YQ8ogka', 'W6xWMRktdKmb', 'WPH/h0Oe', 'vCozW4FdUfW', 'oGZdLxhcQq', 'vLldUXldJa', 'W4NcT8ozEmo5', 'lSkUhq', 'nZ4xWPVcMG', 'ASolFmkV', 'E2FdNmk+kG', 'F1FdPcJdRa', 'W5tdVIFcHmkQ', 'vXuZWO7dVW', 'W7eEfSk/qa', 'WQHqtCkSrG', 'C2ddKG', 'tcC3A8k5', 'W4e4DWq', 'iHKuW43dJW', 'vW4DWQhdIG', 'W7VcVd8oWQu', 'WQ1yvCkStW', 'W6HGx8o9yG', 'W5vwz8oNWQ4', 'wd9JjCoX', 'iXtdH34', 'rCocW4pdTea', 'uItcIqe', 'EYFcI8kclq', 'WR/cRYGBWRi', 'W4xdTdhdI2a', 'f8olWQySvq', 'lSk9hCoxBW', 'jmoVf8oflq', 'r0xdOgeH', 'e8kmmCke44gn', 'mCkUdCoqjq', 'WRTKyCkbqa', 'W4HF8lsZLW', 'eMdcLCoZzG', 'Bmo1EHxcNa', 'WQSSy27cLa', 'mLZdJmk9Ea', 'W57cSCoAnSkJ', 'qmooFmk8W6e', 'sNVdISkRcG', 'sYSEy8kX', 'WO0fW4ldIr4', 'nSo5WRC', 'WRTqtCk9ra', 'qduLWRFdQq', 'W5TwD8kOWRy', 'W73dSelcHmkX', 'WRtcGCoGoI4', 'EFcNGBO2WOaE', 'WRRcV8o8FSon', 'AbSBE8k8', 'q3hcTSkkja', 'fYO/W6ldKG', 'W4/dQsFcINu', 'W4DQDCo5Fa', 'pxHcWP5o', 'W5JcNCoBW4K', 'ECo3WR3cVre', 'gunJWR95', 'ygBdJmoXeW', 'eCkKWRKKAW', 'W57dVYBdI3m', 'WO3cMXaZWPq', 'W4jqW4NdLa0', 'tdCbWRBdJW', 'W4lcJ8oA', 'WPpdJSooW5lcLG', 'W6SWxmkEW7C', 'WQaNyG', '4BAuYRViKUg1Lxu', 'W5vtDmo8WQy', 'WQ/cSY4wWQm', 'wMhcLq', 'W5tcH8o9oCkH', 'WQxdRCogW7NcQa', 'imk7ga', 'hZpcHZm6'];
    _0x3cbe = function () {
      return _0xd839ca;
    };
    return _0x3cbe();
  }
  _0x22afc7.pattern = 'ig';
  _0x22afc7.alias = ["igstory"];
  _0x22afc7.react = '🎀';
  _0x22afc7.desc = "Download instagram videos/photos.";
  _0x22afc7.category = "download";
  _0x22afc7.use = ".ig <Instagram link>";
  _0x22afc7.filename = __filename;
  function _0x566acf(_0x580190, _0x35a72b, _0x5bca85, _0x4b56d2, _0x1b3ee1) {
    return _0xfd30(_0x5bca85 + 0x2ae, _0x35a72b);
  }
  cmd(_0x22afc7, async (_0x3397e9, _0x128371, _0x5a8641, {
    from: _0x3dd82d,
    l: _0x1f4035,
    quoted: _0x2b69be,
    body: _0x49dc48,
    isCmd: _0x1ef6ae,
    command: _0x47fa63,
    args: _0x21fd67,
    q: _0x376a6e,
    isGroup: _0xdac472,
    sender: _0x22be58,
    senderNumber: _0x497a79,
    botNumber2: _0x2657c9,
    botNumber: _0x277e58,
    pushname: _0x383973,
    isMe: _0x5a7bc9,
    isOwner: _0x58efc1,
    groupMetadata: _0x5c40b1,
    groupName: _0x119b4e,
    participants: _0x2008f3,
    groupAdmins: _0x5044bc,
    isBotAdmins: _0x6ec2fd,
    isAdmins: _0x1454d5,
    reply: _0x26c3fe
  }) => {
    try {
      if (!_0x376a6e) {
        return await _0x26c3fe(needus);
      }
      let _0x293f55 = await fetchJson("hhttps://widipe.com/download/igdl?url=" + _0x376a6e);
      for (let _0x53ebfb = 0; _0x53ebfb < _0x293f55.data.data.length; _0x53ebfb++) {
        const _0xac0bd4 = {
          quoted: _0x128371
        };
        const _0x55f60a = {
          quoted: _0x128371
        };
        if (_0x293f55.data.data[_0x53ebfb].type === "image") {
          await _0x3397e9.sendMessage(_0x3dd82d, {
            'image': {
              'url': _0x293f55.data.data[_0x53ebfb].url
            },
            'caption': config.FOOTER
          }, _0xac0bd4);
        } else {
          await _0x3397e9.sendMessage(_0x3dd82d, {
            'video': {
              'url': _0x293f55.data.data[_0x53ebfb].url
            },
            'caption': config.FOOTER
          }, _0x55f60a);
        }
      }
    } catch (_0x299a37) {
      _0x26c3fe();
      _0x1f4035(_0x299a37);
    }
  });
  const _0x22cc95 = {
    pattern: "snack",
    react: '🎀',
    desc: "Download snack videos/photos.",
    category: "download",
    use: ".snack <Snack link>",
    filename: __filename
  };
  cmd(_0x22cc95, async (_0x472c70, _0x4d7080, _0x504c95, {
    from: _0x357658,
    l: _0x3372dd,
    quoted: _0x31e886,
    body: _0x58441d,
    isCmd: _0x6ae0ac,
    command: _0x4855d3,
    args: _0x1a9dff,
    q: _0x50be0a,
    isGroup: _0xd6861,
    sender: _0x5ee177,
    senderNumber: _0x426381,
    botNumber2: _0x339c40,
    botNumber: _0x6b6008,
    pushname: _0x32f971,
    isMe: _0x4a5be3,
    isOwner: _0x49e556,
    groupMetadata: _0x2d7819,
    groupName: _0x311ed3,
    participants: _0xf2c83,
    groupAdmins: _0x488798,
    isBotAdmins: _0x2e231a,
    isAdmins: _0x49829c,
    reply: _0x490991
  }) => {
    try {
      if (!_0x50be0a) {
        return await _0x4d7080.reply("*Please provide a Snack video URL.*");
      }
      const _0x1b11cd = "https://api.maher-zubair.tech/download/snack?url=" + encodeURIComponent(_0x50be0a);
      const _0x37c020 = await fetchJson(_0x1b11cd);
      if (_0x37c020.status !== 200) {
        return await _0x4d7080.reply("*Error: " + _0x37c020.result + '*');
      }
      const {
        caption: _0x1ae557,
        q: _0x502b4e
      } = _0x37c020.result;
      const _0x1a9fe3 = {
        caption: _0x1ae557
      };
      await _0x472c70.sendMessage(_0x502b4e, _0x1a9fe3, "video", _0x4d7080);
    } catch (_0x497b7f) {
      console.error(_0x497b7f);
      await _0x4d7080.reply("*An error occurred while downloading the video.*");
      _0x490991();
      _0x3372dd(e);
    }
  });