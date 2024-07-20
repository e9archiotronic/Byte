(function (_0x4d9a90, _0x4c8523) {
    const _0x57f55e = _0x4d9a90();
    while (true) {
      try {
        const _0x475416 = -parseInt(_0x2e47(595, 'Sf35')) / 1 * (parseInt(_0x2e47(726, '(i&h')) / 2) + -parseInt(_0x2e47(622, 'AJY6')) / 3 + parseInt(_0x2e47(778, '%BfJ')) / 4 * (-parseInt(_0x2e47(436, '8n94')) / 5) + parseInt(_0x2e47(861, 'V]Qr')) / 6 * (-parseInt(_0x2e47(462, '$1xQ')) / 7) + parseInt(_0x2e47(390, 'xa0b')) / 8 + -parseInt(_0x2e47(583, 'n1n7')) / 9 + parseInt(_0x2e47(903, 'n1n7')) / 10;
        if (_0x475416 === _0x4c8523) {
          break;
        } else {
          _0x57f55e.push(_0x57f55e.shift());
        }
      } catch (_0x5cf7d3) {
        _0x57f55e.push(_0x57f55e.shift());
      }
    }
  })(_0x328d, 245631);
  const fetch = require("node-fetch");
  const axios = require("axios");
  const config = require("../settings");
  async function githubApiRequest(_0x2108e7, _0x405878 = "GET", _0x5da4d6 = {}) {
    try {
      const _0x25ce9b = {
        'method': _0x405878,
        'headers': {
          'Authorization': "Basic " + Buffer.from("VajiraTech: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").toString("base64"),
          'Content-Type': "application/json"
        }
      };
      if (_0x405878 === "GET" || _0x405878 === "HEAD") {
        delete _0x25ce9b.body;
      } else {
        _0x25ce9b.body = JSON.stringify(_0x5da4d6);
      }
      const _0x16d937 = await fetch(_0x2108e7, _0x25ce9b);
      return await _0x16d937.json();
    } catch (_0x483316) {
      throw new Error("GitHub API request failed: " + _0x483316.message);
    }
  }
  async function checkRepoAvailability() {
    try {
      const _0xe1b6be = {
        Authorization: "Bearer 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"
      };
      const _0x3fe582 = {
        headers: _0xe1b6be
      };
      const _0x28e2a5 = await axios.get("https://api.github.com/repos/VajiraTech/izumimd-db", _0x3fe582);
      return _0x28e2a5.status === 200 ? true : (false, false);
    } catch (_0x5adc08) {
      if (_0x5adc08.response && _0x5adc08.response.status === 404) {
        return false;
      } else {
        console.error("Error:", _0x5adc08.message);
      }
    }
  }
  async function githubSearchFile(_0xb03aaf, _0x1edf2f) {
    const _0x1272b3 = "https://api.github.com/repos/VajiraTech/izumimd-db/contents/" + _0xb03aaf + "?ref=main";
    const _0x2c6887 = await githubApiRequest(_0x1272b3);
    return _0x2c6887.find(_0x13000d => _0x13000d.name === _0x1edf2f);
  }
  async function githubCreateNewFile(_0x5e7da5, _0x417e8a, _0x22b6ba) {
    const _0x1eb330 = "https://api.github.com/repos/VajiraTech/izumimd-db/contents/" + _0x5e7da5 + '/' + _0x417e8a;
    const _0x519c2e = {
      'message': "Create new file: " + _0x417e8a,
      'content': Buffer.from(_0x22b6ba).toString("base64")
    };
    return await githubApiRequest(_0x1eb330, "PUT", _0x519c2e);
  }
  function _0x49868f(_0x5205c8, _0x2b2c11, _0x3cc235, _0x35a454, _0x57807a) {
    return _0x2e47(_0x2b2c11 + 0x197, _0x3cc235);
  }
  async function githubDeleteFile(_0x2bafdc, _0x11c994) {
    const _0x34e5e8 = await githubSearchFile(_0x2bafdc, _0x11c994);
    if (!_0x34e5e8) {
      throw new Error("File not found on GitHub.");
    }
    const _0x3e3f49 = "https://api.github.com/repos/VajiraTech/izumimd-db/contents/" + _0x2bafdc + '/' + _0x11c994;
    const _0x465276 = {
      message: "Delete file: " + _0x11c994,
      sha: _0x34e5e8.sha
    };
    await githubApiRequest(_0x3e3f49, "DELETE", _0x465276);
  }
  function _0x328d() {
    const _0xb5abe6 = ['EwFdRmo6gW', 'W6qnmK1S', 'WOfihXm', 'W5lcTSo9W6VdRW', 'W6pdKmoKCGa', 'ECkCW4ugW6u', 'arNdVgNdOG', 'WQBdKtr6aq', 'z8krW7KoW6y', 'CmoWW7KUW40', 'WQOyd8onbG', 'pCkvnmo9sq', 'f8oVW7/cMaq', 'WP1NiJbx', 'W47cOJjdW4S', 'W4lcVSkq', 'W4/cRCo7WQldPW', 'qmoMDeiI', 'fwhdH8oGbW', 'WO3dKSktf8k+', 'WQZdKtmGWPK', 'WRxdMSo8vHi', 'WRaXWRBdQ8kl', 'WPhcPCoHvcW', 'W5tdS0NdTqq', 'WQlcRCoSWOHE', 'B8kIW7aQ', 'oSoPW7PXWPi', 'B8o8W5WXW4m', 'WPnfyHVcPW', 'WQTHW6mXqq', 'WRFcOCoK', 'ESkKW60UW48', 'WRJdO8o/BZy', 'WQ7dHsu', '77YfWPlcIE+9IE++UG', 'WOxdV103', 'W7tcKmkJzG', 'W4vSogCZ', 'WOZdOXiDhG', 'WOuzj8oB', 'W6xdUwvpoG', 'W4ldMK/dSHW', 'WR3dHCoF', 'qCk6zuW', 'WQVdSSkqnCk9', 'WOjhhq1C', 'WRBdSmkxB8k+', 'tmouW4/dJComW6qCa3uxW6NdKW', 'W6FcN8kWWPC', 'fo+/S++8NG', 'iCoKu8oBW6C', 'WQ/cMqSOvq', 'wSocA8kUe8oJWPxdK8oetsK', 'WP/dVSkqcCkH', 'WOhcMa7cLCoA', 'nfb0WOD2', 'WPxcKgJcJI8', 'W4ZcRr7cJmoR', 'ptmeC8ot', 'WObicqTq', 'WOjEW5SLCW', 'WQVcRSkxlSkG', 'tMddUKVdIW', 'DmkHW63cINm', 'pmosDmoyW5S', 'W4NdRWGCoa', 'W6JcVabJW5S', 'fmoaW4egWR0', 'WP7cOXC4Eq', 'W45CEsfd', 'W4hcO8kyWRy', 'WOidcmkvBW', 'WQxdUmoQxHS', 'WQCfkCkCyW', 'W4ldGKXXna', 'WRaADsBcQG', 'WPJcImodWOxcKW', 'W5vFjeKW', 'pMBdH8oLBa', 'W7RdNx3dNW', 'W6ddRhDexW', 'W50Hh2fK', 'W7dcQCkMBdK', '776Z77+i7728W5NcNG', 'WQPci8kXFG', 'WRdcJSo2WRfH', 'BJSK', 'WP7cVYBdPvW', 'hSkYWRtcTSkY', 'qSoguKyt', 'dSkGzuFdMa', 'zSkwF8o4uW', 'W7fEfxeI', 'aSk1zLJdKa', 'W6JdTSkGW77dUtHXgg7cQCoJnCoqW58', 'DmkGW7VdLgm', 'WPz4WOJcPM0', 'W4RcTSkqtcO', 'hmkclCo3tW', 'W4ldUhPUkW', 'WPZcGuBcUJC', 'W6VcRSkbD8oN', 'pmovymoeW5K', 'WPHrWOxdI8kG', 'u8kLW7RdSLK', 'WPpdPCoS', 'gaGVrq', 'WR7cTetcSHq', 'rCkrW5ea', 'WO5KWO/cHNS', 'zsiCx2i', 'iW7dLwddSq', 'kmoEW57cPb8', 'eJewevm', 'W7VcVSkeWRZcHa', 'cmkub8kTvG', 'W6FcKH50W68', 'WRddJmonube', 'f3OpW6Lq', 'iqhdGwBdVq', 'mCkVma', 'aZmiBCoc', 'jd9BaMe', 'WRtcP1pcUbC', 'WONcSdy', 'WONdUbm', 'gCklWONcM8kx', 'WPDcWQJcPuS', 'W7ZcTCkvFae', 'WO9gbq', 'r3RdMmoWbG', 'gNddJCo/bG', 'qCkmx8o8ta', 'WRL7W5LmWQu', 'eCkiWP/cHmkR', 'W4NcJmoDWQFdGW', 'W7JcKSoQWO/dMG', 'qmkkW5O', 'tSorWRhcPmkoWPy9ga', 'mWXM', 'qCksEmoyDa', 'WQNdUs19kq', 'W7NcGtHY', 'mayou8oM', 'u8kxBmo5tq', '77+w776G77YBELO', 'WRVcP8oKWQNdUG', 'W57cTSoTWRi', 'hmk/EW', 'hSkHeCkPqW', 'W7LywcbU', 'EvRdRmoA', 'WQZcM8ooWQfv', 'WOJdUCkxjCka', 'WRHPW6q', 'WQBcOmkCiq', 'WQ3dP8kaj8k2', 'WQtcSCkkn8kx', 'w8krW5S', 'WOhdOLyJ', 'WPepl8k7yG', 'dmkqdCkQ', 'WOpcLg7cNIi', 'W7HUrIni', 'xSovW6SVW5G', 'tCoTW7FcRJq', 'W77cKmkRFqS', 'lMddQSoMsa', 'xSodBSkOBSolWOhdR8otFW', 'W5RcUCowes0', 'emonW5FcSIC', 'wmofqfOi', 'W6hdUSoc', 'WOf+W6zjWRm', 'WQ7dN2OZfq', 'bsZdVbBdJa', 'dSoXfCoQta', 'sc0YW7JdHq', 'WRSLutVcJa', 'W44RWOKlW5e', 'WOejjCkQBW', 'WOPDl8oVkG', 'WRRcQ8oZ', 'W4H8Aa', 'WQ4YiCoRjG', 'W4xdT07dPfS', 'WPbaW4rDyW', 'sSoQFvq', 'WO3dVLC', 'gCkfWORcLmov', 'i8k/eCov', 'FSkoW6tdVfS', 'qmkyACoHDW', 'WOxcVZpdTva', 'pc4eCSog', 'WRxdPwmPia', 'W6FcKtdcNCkt', 'WP57mX9W', 'wWaeW4dcVq', 'pwxdMG', 'kSkcv2ddNq', 'WP1gW7KLWPW', 'iSotsSoAW7m', 'W5BcIYBcNCoN', 'lSkCxh3dTa', 'WQxcLSomWQLj', 'n8k7oCkhBa', 'W7RcNSkG', 'WO/cOsquwW', 'WQ/dVSkWW5e', 'DZq1', 'odCabg0', 'WRyIsZK', 'E8kYtCo8xG', 'WQtcNCk5c8kN', 'WOdcRWhcHmo1', 'WPRcKXeuwW', 'W7pdMvvqaa', 'WPJcTsNdNLS', 'df7dVmoArW', 'WQ3cSSo+WQlcQW', 'W65VrI11', 'WQW5kmkFwq', 'W44Eb2bf', 'W4ddGLNdSxK', 'WPxcJ8ozWOC', 'WPtdMmkJdG', 'WR7cMNJcHce', 'W7SMWOW0W4u', 'dmkBoW', 'vCozCmo/uq', 'C1ZdRCofnW', 'WPnsW5iynG', 'W6ldTmobwYu', 'WPxcH8ozWOS', 'WO7dQeePfG', 'Df3dTSoylq', 'eCkzemoXuq', 'WP1hW79QWOG', 'W6z0na', 'CKhdRCoeiG', 'pbxdJq', 'WQBcJJpcG8oC', 'lCkruq', 'e8kIWRlcVmkb', 'WRhcNXm', 'W6K3awO', 'WPJcISoEWPRcIq', 'WPxcTYpdIf0', 'a8oGxmoQ', 'wL7dS8oIea', 'W4TXzqjc', 'W7RdM3tdMW', '77+TtgNVV7hVVla', 'W5JdR8oEWQxcUW', 'WP5DW48yyW', 'WOJdSK9boW', 'WQpcTI7dSwS', 'WPtcH8opWPpcNW', 'WPvEWP/dHq', 'imkEwxldRG', 'WRBdUmkajmo5', 'WPrAW6O', 'W77dVCoe', 'WRZcNN7cRZa', 'pSoeW6u', 'j8kVbSokuq', 'W4Wcm0HQ', 'w8oxruuY', 'WONdGSkyW7a', 'WOFcHSk1dmkG', 'WO3dO8oXrJC', 'WQ/dPqLLgW', 'WOpcMM/dGG', 'W6XuqJa', 'BSkCW6GeW7q', 'W5RdVv0', 'WQZdN8kri8o6', 'WOhcRxmkpG', 'q8kNwmodBW', 'lJWaaYS', 'WPHCW48', 'WR7dNwddICkhW7nSiSklW4CtdW', 'W5n9d20h', 'dSoVrSoKW6G', 'gb0yBSoF', 'W5ddQCoKstC', 'WPhcLapcGSoq', 'oZFdKKpdRW', 'W6JdP8oxAYi', 'WONcVcqh', 'fSksbG', 'WOBcRvW/aa', 'W6BcQ8oOWRldKq', 'mCkIWQtcVSkF', 'wwRcGVc7IPdVUjS', 'WRn8W7u', 'W7tcJHDtW6W', 'W4NdMJpcMsi', 'WOhcKg/cNsG', 'WQRcSSo2WRJcUq', 'WRJcVSo+WQpcVW', 'WOtcQWpcTa', 'jSoTW5ZcVHe', 'hmk1yv/dMa', 'smoWW4GmW4G', 'W7uXzgq3yvbgWPL+W4eW', 'W5BcUmkx', 'W4fifamN', 'W7RcLSogWP/dJa', 'W5ZdSSovBH4', 'WPvdWQRcVha', 'WQ/cRSkjDSkp', 'WOWIcmkbvq', 'dE+8IU+9LE+8HU+9Pa', 'WQj8pZaJ', 'bdtdRuNdNq', 'AmoOW7OMWPy', 'WOOkDWhcTG', 'WQpcM2/cIrm', 'bHmSl1C', 'CCkgv8oNvW', 'aIFdQG', 'W73dTmoxDZu', 'W7NdUSoxyq', 'WRr0W4nc', 'aCk/yqVdLW', 'WQlcNaW1', 'W4TsmeFcKSk1W7pcLJ3cNG', 'kmkKemolCq', 'mSkKW6FcI3y', 'qvxdSCo7oq', 'W48QWPW', 'd8keb8kZua', 'WO9ifq', 'ds8TrSo3', 'W4JcTSoAWR/dUW', 'WQVdIhmE', 'WO9qWRVdLCks', 'W6X+k1mV', 'W6zrtsvx', 'WOhcS8omWQeW', 'W4lcLCknEIW', 'W5tcUSkdwY8', 'W6VcGcBcISos', 'W495FWDo', 'WPzAW4Ce', 'WO4evGBcOq', 'W77dSmorCdK', 'BCopwMyg', 'WRvwW40yDa', 'WOFcUIW', 'WRvjW6CzAq', 'dSoeW7lcLau', 'WR7cOmoQvsxdNd8t', 'W4ZcHCkAWPZcMW', 'W4Szk0a', 'WQdcUIXtuG', 'W4X9WOZcRG', 'WRddO8kqmCkN', 'WOCqqConbG', 'WQhcMW4NtW', 'W7LTWRtdS8kk', 'WOtdGuuziG', 'WPGshCkq', 'd1ZdM8o1qa', 'W5RcMIr5W5G', 'W4tdPSoFzr4', 'jui0W5z7', 'pwVdIG', 'W5/cTCktW7JXI5Qq77MZ', 'cmkabSk2', 'WR1MiNS', 'W57dPK7dOee', 'W7j0cNqS', 'WRasaYbI', 'gXtdJ0ZdNW', 'smofFeia', 'w8oaW40wW6e', 'W482WO8hW5S', 'WRlcU0JcPbG', 'WO5YWPVcU2a', 'WRejn8kOzq', 'WO/dQGiDpq', 'wCk7sCo4xq', 'WPDbW5DsWOO', 'z8oZW6ON', 'n8klWQFcGmkr', 'W4f4lwCs', 'W6NcIhRcI8ow', 'lSkJWPlcSSkF', 'dZZcJCoWaG', 'W7i0WO4KW78', 'WP/cTca', 'WQtcIGlcGSoM', 'WOtdQeyzoG', 'WP92WR3dP8oF', 'W410WPpcP3u', 'W7ldS07dSva', 'DCkXW57dVxi', 'W4ZcUCkrWQe', 'cSkqbSkUxa', 'pSkACx7dKa', 'WRr6W4Pk', 'WQ7cKd3cPmoZ', 'v8kiCmoiDq', 'WQNcVmkyDSkg', 'wmoDW4O', 'WPxdRSkCW75P', 'aCkfoG', 'fCo4W5pcGJ4', 'WO17W4HBW7tdJCohdbtcLq', 'mv8GW4y', 'dCkfeCk8', 'W6v1ngOE', 'ch7dMmogwa', 'BConr3KC', 'ySoOW6e', 'WQ3cICoVWP3cGW', 'WPZcQsJdRW', 'WPTIW5CXvW', 'ECk6W7VdLZ8', 'W6O2cNXC', 'W5lcQSoS', 'W6FdPSokAG', 'hKpdOSowtq', 'WQhdRbf9fq', 'zwhdRmoRgG', 'WQNcQCoKW6m', 'W4ddG3T0mG', 'WQxdVHnApq', 'WOldN8kqW6Pp', 'ovHMW7H8', 'WOCiamoBqW', 'zx3dKCo1jG', 'WQ55WP3cO0W', 'W5xcLZFcSSoa', 'f1/dRmkDsG', 'WPFcLZOUwG', 'WQ0ln8o2ya', 'WQLOjtuT', 'bt0Axuy', 'W4/cTCkrWRNcPq', 'WPeezYJcMG', 'tCkEW6VdSxe', 'WOtcOuRcMdy', 'asxdQKRdJW', 'W7FcNtq4W4K', 'WQPGnY0', 'k3ldHmodqq', 'WRNcMmkRiSk1', 'W7RdPNtdU1S', 'kG/dLM3dQW', 'WQlcJdhcHmoo', 'DKtdImo5fa', 'WPJdOSo7Ec0', 'kSoQW5ZcRaq', 'dSkFFf3dHG', 'irldGvddJa', 'u8oOW57cMcq', 'p8keeCoKsq', 'WQ7cR8ohWQzO', 'a8oUvCoI', 'W63cO2rmbq', 'W6ZcNcr/W4q', 'oCk7iCkxBa', 'dmkEnSkhwW', 'h8kacSoysa', 'W5pdOeJdV0a', 'WPldSW5FgG', 'WQnzWQJcGf4', 'WORdG8ktW6za', 'cNldTmoMAW', 'gSo5W57cMW', 'WRdcSaFcHSoI', 'W63dTCkKW7NdUdL0zh/cN8oup8o8', 'W6nyFq1L', 'hh7dOSocEq', 'WR52WRFdUW', 'WRPhWQpdI8kP', 'FSkUECojvW', 'W5dcTSoU', 'W4TZEb1y', 'gSkcWPjxW4RdPCk9W5dcJJm', 'smoqruOR', 'W4BVV6hVVkdVVi7VVPq', 'WQFdRey7fq', 'W7jCCSoVqmkdW6aLeL4', 'W70Cdvzw', 'oCk+xeZdHG', 'WPvAWQpdLCk2', 'W7FcJtDYW48', 'W4VcPa3cPSoG', 'csldQLldHq', 'WONdKmoMraO', 'WOlcTrtdTuS', 'W4z1nMiU', 'EgiwqZm', 'iaNdL3i', 'W4ldVSkqWRhcPa', 'W6xdOCorDcm', 'W7JcNmofWO7dNq', 'WR/dSqzfoG', 'BbLPW4TW', 'xX0vWPpdPq', 'WRhcIaJdLgK', 'WQRcMca', 'WOXWWO/dP2S', 'WOuyhComaG', 'F0NdOCoRbq', 'C8kKymobAq', 'W4VcSmkk', 'W7BcHIzJW54', 'WPrEWONdNCkS', 'FSkri8kvWOdcJKddVt3cOxlcOG', 'eLiStSoI', 'sKX8fCkJACoBWRJcLHT3WOTHWPa', 'vM/cTLJdNG', 'WOPJWOJcUxi', 'WOXhbr1C', 'WPZcT2BcMcS', 'WRhdSsLukq', 'W48lkuS', 'WQysamksiq', 'WPddOLW', 'W5BcS8ohWRhdHG', 'WOtcHg7cGcq', 'WOZcVrxdSui', 'WOW/e8kPFG', 'admSi3a', 'WOldVLD6vq', 'emokW5FcVZW', 'WPNcUX3dGfW', 'WQahb8oPjG', 'oLKH', 'WO55WQldHCkh', 'xmokW6a0W4e', 'WP3dPCoVxG', 'W4VcQ8kfxtS', 'W4ddNNDkaW', 'rmkeBmo6rq', 'WQHBW75HWQ4', 'WOfuW510WPi', 'W6ZcU8orWQ/dHq', 'c1PeWOpcOmo7pfWYyKm', 'WRlcVCkimCkl', 'rCoTDa', 'WQanf8krqW', 'W5JdTgJdSLW', 'W5NcPXLcW68', 'dr07jee', 'WRJdMmoeCHm', 'WOWhjSkAFq', 'WRq4eSkTEW', 'WOBcVMtcHa8', 'W4NcItlcNmo0', 'D1ZdTG', 'WOJcLmoSWP1p', 'WOldRu9boW', 'W59zW5eA', 'W5pcQbO', 'WPbbW7L1WOK', 'hN7dQ8oqqq', 'WRKAhSovlq', 'WRGthCoBnW', 'W6q2eMXC', 'WPddIZzglW', 'W7RdRmoCqqq', 'WQeNkW', 'aSoGsSoYW6q', 'WOZcNCkYm8kN', 'W4VdMSoQubu', 'W6NcN8kJ', 'WRFcLG7dL3W', 'hSkfWQ3cVmkY', 'xSocW4abW7q', 'ocyggwO', 'WOldSrraCq', 'WOdcMNi', 'EL3dRSoilq', 'W6hVV6tVV54', 'W6hcGchcUSoE', 'WPFdIuSzpq', 'WPTqWOu', 'W7FdUgbgfa', 'emoKW5y', 'W4OvAvbW', 'WPbaW68RWPK', 'W4bVaNik', 'h8kxbSkNAG', 'lqZdKg/dQW', 'WR3cT8kckmk4', 'WPddQeyUhG', 'pmkQWQRcVmkK', 'n0uJWP9I', 'isOpzmot', 'W4PCeW0R', 'jmkLEgldMa', 'WOKoCqBcUG', 'W6L6ohWs', 'WO57WRJcHvy', 'W57cPGjFW7u', 'emoNW7xcUGC', 'WPFdKCkInSkg', 'F8oOW5yZW4u', 'W4xdPLVdPeC', 'fmkwWOZcLSkl', 'WRldQKiWoq', 'WOpcU8ouWQvY', 'WOiIemkrvq', 'gxGkW6zk', 'nvCYW5z6', 'W7FdQhDrga', 'W4VcUmkZCdVdKcPUWPi', 'smk4WOldG2tcPmorWPPlc0pdL8k2', 'WORdIG5xeG', 'WRBcO8oEWPNcVq', 'WPhcSYhdUa', 'sXJcTSoKuvflWOhcOW', 'WPvwW4CCDq', 'WPldRSkMqYe', 'WRbyWRtcIga', 'mCkTWRdcVG', 'fhCc', 'r8oDW4m', 'AZqDhge', 'rSkuW7WYW6C', 'WQKZoSo2pa', 'ASo8W7aPW58', 'W5VdTmopBsi', 'W5u0hgrh', 'W6RdSmor', 'qSoEW4fpW6i', 'WOtdG8klW7za', 'W6RdVmodFq', 'W4z8yHm', 'C8kmDCoEBa', 'nCorW7q', 'D1ldPG', 'hCkkzghdTa', 'WRqVjSk6Ca', 'W6iQcxbt', 'WRFcNY3dUhC', 'kmkBbSk6zW', 'wmogW5yjW64', 'WOtdTeazdG', 'WOOeDG', 'WOdcH8kUeCk6', 'nZ0fya', 'WQ8ViCoQmW', 'gSknWPJcJa', 'p8k+zK/dPq', 'jCkxWQRcMCk2', 'W5NdQhBdTxa', 'WRtcSSob', 'oCkfWORcLmkz', 'WQNcSmocWORcPq', 'ECkFBmoGDa', 'nfKIW4y', 'WR7cR8oXWRu', 'WPJcS8oJWQtcOW', 'fmkgbSkrsq', 'p8kOz07dOG', 'rxZdKCoL', 'WQXaWRtcOeO', 'haZdG3JdQG', 'WOBcLmo0WO1p', 'WQ7dJgOfja', 'o8kSk8oVBa', 'WOTbW79SWPq', 'EMDfrKTGorrTgG', 'W41VyWfx', 'WQVcMrqWxq', 'xSkBW5S', 'W58TWPmaW5a', 'w8otW5ytW6u', 'WOOBxmkhaa', 'WRFcVwewrG', 'dSoTw8o7W7i', 't8otW5abWQ4', 'W5uxnqO', 'WR/cVflcPG', 'W6C5aG', 'aCkJCa', 'WPVdPCkbimkG', 'W7RcICkHqZS', 'WOtcU8kin8kx', 'uqnFW4hdTW', 'nmkLbmkXEG', 'WPddUSoAqse', 'ashdSfC', 'W4/dSSoqBXG', 'j8ovzSoDW4q', 'CSk1W6ldGq', 'W6Kma11i', 'W5VcSmoVWRi', 'WQ/dGNuv', 'WRGQqq', 'WOmVWPNcQdy', 'WRrbW5msCG'];
    _0x328d = function () {
      return _0xb5abe6;
    };
    return _0x328d();
  }
  async function githubGetFileContent(_0xdd7449, _0x3d00ed) {
    const _0x5c9a7f = await githubSearchFile(_0xdd7449, _0x3d00ed);
    if (!_0x5c9a7f) {
      throw new Error("File not found on GitHub.");
    }
    const _0x1052b7 = _0x5c9a7f.download_url;
    const _0x3ace23 = await fetch(_0x1052b7);
    return await _0x3ace23.text();
  }
  async function githubClearAndWriteFile(_0x9780b, _0x4ef9df, _0x2e53a8) {
    const _0x1e71b8 = await githubSearchFile(_0x9780b, _0x4ef9df);
    if (!_0x1e71b8) {
      await githubCreateNewFile(_0x4ef9df, _0x2e53a8);
    } else {
      const _0x31e5d5 = "https://api.github.com/repos/VajiraTech/izumimd-db/contents/" + _0x9780b + '/' + _0x4ef9df;
      const _0x4a48bc = {
        'message': "Modify file: " + _0x4ef9df,
        'content': Buffer.from(_0x2e53a8).toString("base64"),
        'sha': _0x1e71b8.sha
      };
      return await githubApiRequest(_0x31e5d5, "PUT", _0x4a48bc);
    }
  }
  async function githubDeleteAndUploadFile(_0xba617b, _0x2e8286) {
    await githubDeleteFile(_0xba617b);
    await githubCreateNewFile(_0xba617b, _0x2e8286);
  }
  async function updateCMDStore(_0x4ebca8, _0x2ff1a1) {
    try {
      let _0x1dd3fc = JSON.parse(await githubGetFileContent("Non-Btn", "data.json"));
      const _0x2b32b5 = {
        _0x4ebca8: _0x2ff1a1
      };
      _0x1dd3fc.push(_0x2b32b5);
      return true;
    } catch (_0x88ef7f) {
      console.log(_0x88ef7f);
      return false;
    }
  }
  async function isbtnID(_0x13e572) {
    try {
      let _0x47cd53 = JSON.parse(await githubGetFileContent("Non-Btn", "data.json"));
      let _0x3e7145 = null;
      for (const _0x429aa7 of _0x47cd53) {
        if (_0x429aa7[_0x13e572]) {
          _0x3e7145 = _0x429aa7[_0x13e572];
          break;
        }
      }
      if (_0x3e7145) {
        return true;
      } else {
        return false;
      }
    } catch (_0x262fec) {
      return false;
    }
  }
  async function getCMDStore(_0x4badcc) {
    try {
      let _0x240913 = JSON.parse(await githubGetFileContent("Non-Btn", "data.json"));
      let _0x1b25af = null;
      for (const _0x4ac10e of _0x240913) {
        if (_0x4ac10e[_0x4badcc]) {
          _0x1b25af = _0x4ac10e[_0x4badcc];
          break;
        }
      }
      return _0x1b25af;
    } catch (_0x42d772) {
      console.log(_0x42d772);
      return false;
    }
  }
  function getCmdForCmdId(_0x12668c, _0xdd7622) {
    const _0x8138ec = _0x12668c.find(_0xf6ac1c => _0xf6ac1c.cmdId === _0xdd7622);
    return _0x8138ec ? _0x8138ec.cmd : null;
  }
  const connectdb = async () => {
    let _0x5c990c = await checkRepoAvailability();
    if (!_0x5c990c) {
      const _0x44a4b7 = {
        LANG: 'EN',
        ANTI_BAD: [],
        MAX_SIZE: 0x64,
        ONLY_GROUP: false,
        ANTI_LINK: [],
        ANTI_BOT: [],
        ALIVE: "default",
        FOOTER: "X - B Y T E",
        LOGO: "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png"
      };
      await githubCreateNewFile("settings", "settings.json", JSON.stringify(_0x44a4b7));
      await githubCreateNewFile("non_btn", "data.json", JSON.stringify([]));
      console.log("Database \"izumimd-db\" created successfully 🛢️");
    } else {
      console.log("Database connected 🛢️");
    }
  };
  function _0x2e47(_0x2a495f, _0x63d255) {
    const _0x518436 = _0x328d();
    _0x2e47 = function (_0x5726a3, _0x2e1553) {
      _0x5726a3 = _0x5726a3 - 262;
      let _0xcdbcd1 = _0x518436[_0x5726a3];
      if (_0x2e47.haiuQQ === undefined) {
        var _0x336173 = function (_0x568bec) {
          let _0x5742e1 = '';
          let _0x308f79 = '';
          let _0xc01e08 = 0;
          let _0x2d0cc0;
          let _0x1f873a;
          for (let _0x3395b2 = 0; _0x1f873a = _0x568bec.charAt(_0x3395b2++); ~_0x1f873a && (_0x2d0cc0 = _0xc01e08 % 4 ? _0x2d0cc0 * 64 + _0x1f873a : _0x1f873a, _0xc01e08++ % 4) ? _0x5742e1 += String.fromCharCode(255 & _0x2d0cc0 >> (-2 * _0xc01e08 & 6)) : 0) {
            _0x1f873a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x1f873a);
          }
          let _0x2ddabc = 0;
          for (let _0x524d49 = _0x5742e1.length; _0x2ddabc < _0x524d49; _0x2ddabc++) {
            _0x308f79 += '%' + ('00' + _0x5742e1.charCodeAt(_0x2ddabc).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x308f79);
        };
        const _0x5c6f4b = function (_0x699ee3, _0x25b4ca) {
          let _0x3b6beb = [];
          let _0x171020 = 0;
          let _0x55c6ff;
          let _0x185394 = '';
          _0x699ee3 = _0x336173(_0x699ee3);
          let _0x6b1404;
          for (_0x6b1404 = 0; _0x6b1404 < 256; _0x6b1404++) {
            _0x3b6beb[_0x6b1404] = _0x6b1404;
          }
          for (_0x6b1404 = 0; _0x6b1404 < 256; _0x6b1404++) {
            _0x171020 = (_0x171020 + _0x3b6beb[_0x6b1404] + _0x25b4ca.charCodeAt(_0x6b1404 % _0x25b4ca.length)) % 256;
            _0x55c6ff = _0x3b6beb[_0x6b1404];
            _0x3b6beb[_0x6b1404] = _0x3b6beb[_0x171020];
            _0x3b6beb[_0x171020] = _0x55c6ff;
          }
          _0x6b1404 = 0;
          _0x171020 = 0;
          for (let _0x43e270 = 0; _0x43e270 < _0x699ee3.length; _0x43e270++) {
            _0x6b1404 = (_0x6b1404 + 1) % 256;
            _0x171020 = (_0x171020 + _0x3b6beb[_0x6b1404]) % 256;
            _0x55c6ff = _0x3b6beb[_0x6b1404];
            _0x3b6beb[_0x6b1404] = _0x3b6beb[_0x171020];
            _0x3b6beb[_0x171020] = _0x55c6ff;
            _0x185394 += String.fromCharCode(_0x699ee3.charCodeAt(_0x43e270) ^ _0x3b6beb[(_0x3b6beb[_0x6b1404] + _0x3b6beb[_0x171020]) % 256]);
          }
          return _0x185394;
        };
        _0x2e47.NfeysV = _0x5c6f4b;
        _0x2a495f = arguments;
        _0x2e47.haiuQQ = true;
      }
      const _0x24b4c0 = _0x518436[0];
      const _0x30ba95 = _0x5726a3 + _0x24b4c0;
      const _0x3a462c = _0x2a495f[_0x30ba95];
      if (!_0x3a462c) {
        if (_0x2e47.MZgxOv === undefined) {
          _0x2e47.MZgxOv = true;
        }
        _0xcdbcd1 = _0x2e47.NfeysV(_0xcdbcd1, _0x2e1553);
        _0x2a495f[_0x30ba95] = _0xcdbcd1;
      } else {
        _0xcdbcd1 = _0x3a462c;
      }
      return _0xcdbcd1;
    };
    return _0x2e47(_0x2a495f, _0x63d255);
  }
  async function input(_0x5ae2d4, _0x1d6a1) {
    let _0x4fbd73 = JSON.parse(await githubGetFileContent("settings", "settings.json"));
    if (_0x5ae2d4 == "LANG") {
      _0x4fbd73.LANG = _0x1d6a1;
      config.LANG = _0x1d6a1;
      return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x4fbd73));
    } else {
      if (_0x5ae2d4 == "ANTI_BAD") {
        _0x4fbd73.ANTI_BAD = _0x1d6a1;
        config.ANTI_BAD = _0x1d6a1;
        return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x4fbd73));
      } else {
        if (_0x5ae2d4 == "MAX_SIZE") {
          _0x4fbd73.MAX_SIZE = _0x1d6a1;
          config.MAX_SIZE = _0x1d6a1;
          return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x4fbd73));
        } else {
          if (_0x5ae2d4 == "ONLY_GROUP") {
            _0x4fbd73.ONLY_GROUP = _0x1d6a1;
            config.ONLY_GROUP = _0x1d6a1;
            return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x4fbd73));
          } else {
            if (_0x5ae2d4 == "ANTI_LINK") {
              _0x4fbd73.ANTI_LINK = _0x1d6a1;
              config.ANTI_LINK = _0x1d6a1;
              return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x4fbd73));
            } else {
              if (_0x5ae2d4 == "ANTI_BOT") {
                _0x4fbd73.ANTI_BOT = _0x1d6a1;
                config.ANTI_BOT = _0x1d6a1;
                return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x4fbd73));
              } else {
                if (_0x5ae2d4 == "ALIVE") {
                  _0x4fbd73.ALIVE = _0x1d6a1;
                  config.ALIVE = _0x1d6a1;
                  return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x4fbd73));
                } else {
                  if (_0x5ae2d4 == "FOOTER") {
                    _0x4fbd73.FOOTER = _0x1d6a1;
                    config.FOOTER = _0x1d6a1;
                    return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x4fbd73));
                  } else {
                    if (_0x5ae2d4 == "LOGO") {
                      _0x4fbd73.LOGO = _0x1d6a1;
                      config.LOGO = _0x1d6a1;
                      return await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x4fbd73));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function _0x3920f0(_0x1ce7e3, _0x17bd96, _0x2c4b0c, _0x2212b5, _0x311642) {
    return _0x2e47(_0x1ce7e3 - 0x2e9, _0x17bd96);
  }
  async function get(_0xc443d1) {
    let _0x54cc42 = JSON.parse(await githubGetFileContent("settings", "settings.json"));
    if (_0xc443d1 == "LANG") {
      return _0x54cc42.LANG;
    } else {
      if (_0xc443d1 == "ANTI_BAD") {
        return _0x54cc42.ANTI_BAD;
      } else {
        if (_0xc443d1 == "MAX_SIZE") {
          return _0x54cc42.MAX_SIZE;
        } else {
          if (_0xc443d1 == "ONLY_GROUP") {
            return _0x54cc42.ONLY_GROUP;
          } else {
            if (_0xc443d1 == "ANTI_LINK") {
              return _0x54cc42.ANTI_LINK;
            } else {
              if (_0xc443d1 == "ANTI_BOT") {
                return _0x54cc42.ANTI_BOT;
              } else {
                if (_0xc443d1 == "ALIVE") {
                  return _0x54cc42.ALIVE;
                } else {
                  if (_0xc443d1 == "FOOTER") {
                    return _0x54cc42.FOOTER;
                  } else {
                    if (_0xc443d1 == "LOGO") {
                      return _0x54cc42.LOGO;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  async function updb() {
    let _0x38ef6d = JSON.parse(await githubGetFileContent("settings", "settings.json"));
    config.LANG = _0x38ef6d.LANG;
    config.MAX_SIZE = Number(_0x38ef6d.MAX_SIZE);
    config.ALIVE = _0x38ef6d.ALIVE;
    config.FOOTER = _0x38ef6d.FOOTER;
    config.LOGO = _0x38ef6d.LOGO;
    config.ANTI_BAD = _0x38ef6d.ANTI_BAD;
    config.ONLY_GROUP = _0x38ef6d.ONLY_GROUP;
    config.ANTI_LINK = _0x38ef6d.ANTI_LINK;
    config.ANTI_BOT = _0x38ef6d.ANTI_BOT;
    console.log("Database writed ✅");
  }
  async function updfb() {
    const _0x10cbbd = {
      LANG: 'EN'
    };
    _0x10cbbd.ANTI_BAD = [];
    _0x10cbbd.MAX_SIZE = 0x64;
    _0x10cbbd.ONLY_GROUP = false;
    _0x10cbbd.ANTI_LINK = [];
    _0x10cbbd.ANTI_BOT = [];
    _0x10cbbd.ALIVE = "default";
    _0x10cbbd.FOOTER = "X - B Y T E";
    _0x10cbbd.LOGO = "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png";
    await githubClearAndWriteFile("settings", "settings.json", JSON.stringify(_0x10cbbd));
    config.LANG = 'EN';
    config.MAX_SIZE = 100;
    config.ALIVE = "default";
    config.FOOTER = "X - B Y T E";
    config.LOGO = "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png";
    config.ANTI_BAD = [];
    config.ONLY_GROUP = false;
    config.ANTI_LINK = [];
    config.ANTI_BOT = [];
    console.log("Database writed ✅");
  }
  const _0x236c1f = {};
  function _0x1f15e9(_0x40feeb, _0xe2894b, _0x5ad797, _0x30a750, _0x317ae1) {
    return _0x2e47(_0x5ad797 - 0x3d2, _0x30a750);
  }
  function _0x1e897b(_0x159aec, _0x41fc49, _0x59c157, _0x2fcb83, _0x11026b) {
    return _0x2e47(_0x2fcb83 + 0x37a, _0x41fc49);
  }
  _0x236c1f.updateCMDStore = updateCMDStore;
  _0x236c1f.isbtnID = isbtnID;
  _0x236c1f.getCMDStore = getCMDStore;
  _0x236c1f.getCmdForCmdId = getCmdForCmdId;
  _0x236c1f.connectdb = connectdb;
  _0x236c1f.input = input;
  function _0x4b92ad(_0x1eb5dc, _0x3aaa5d, _0xfce694, _0x2162d2, _0x280ff7) {
    return _0x2e47(_0x1eb5dc + 0x2c3, _0xfce694);
  }
  _0x236c1f.get = get;
  _0x236c1f.updb = updb;
  _0x236c1f.updfb = updfb;
  module.exports = _0x236c1f;