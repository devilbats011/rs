const axios = require('axios')

// hantar value ke other application
export default async function visWaxInfos () {
  const visWaxRawData = await axios.get('http://localhost:3000/api/vis-wax', {
    headers: {
      // eslint-disable-next-line comma-dangle
      'Access-Control-Allow-Origin': '*',
    }
    // eslint-disable-next-line indent
      }).then(function (result) {
    // console.log(res)
    return result.data.rawText
  })
    .catch(function (error) { console.log(error) })
  return await viswaxTextBreakDown(visWaxRawData)
}

async function viswaxTextBreakDown (text) {
  const visWaxInfos = {}
  visWaxInfos.date = await (visWaxDatehandler(text))
  visWaxInfos.slot1 = await (visWaxSlot1handler(text))
  visWaxInfos.slot2 = await visWaxSlot2handler(text)
  return visWaxInfos
}

function visWaxDatehandler (text) {
  const regexDate = /Combination[ \w\d]+/g
  const found01 = text.match(regexDate)
  let str = found01[0].split('Slot 1:')
  str = str[0].split('for')
  str = str[1].trim()
  // console.info('viswaxtextBreakDownMethod', str)
  const viswaxDate = str
  return viswaxDate
}

function visWaxSlot1handler (text) {
  const regexSlot1 = /Slot 1:[\s\S]*Slot 2:/g
  const found02 = text.match(regexSlot1)
  // eslint-disable-next-line prefer-const
  let str02 = found02[0].split(/Slot [1-9]:/g)
  str02 = str02[1].split(/[-]/g)
  const viswaxSlot1 = str02[1].trim()
  return viswaxSlot1
}

function visWaxSlot2handler (text) {
  const regexSlot2 = /Slot 2:[\s\S]*Slot 3/g
  const found03 = text.match(regexSlot2)
  // eslint-disable-next-line prefer-const
  // eslint-disable-next-line no-unused-vars
  const str03 = found03[0].split(/Slot [1-9]:?/g)
  const strTrim = str03[1].split(/[-]/g)
  const viswaxSlot2 = strTrim.filter(word => {
    const w = word.replace(/\n/g, '')
    // console.log(w, 'w')
    // const ww = w.replace(/!semak!/g, '')
    // console.log(ww, 'ww')
    if (w !== '') { return w.trim() }
  })
  return viswaxSlot2
}

// export default vixwaxInfo
// const paragraph = `Fc\".\n\nCombination for Sunday the 20th\n\nSlot 1:\n\n- Steam ( earth 23, death 26 )\n\nSlot 2:\n\n- Water\n- Chaos ( water* 25, body* 27 )\n- Mind ( earth* 27, Chaos* 29 )\n\nSlot 3\n\n- Is RANDOM\n\nAlts are listed in order of cost-efficiency! Lost wax is included.\n* = only use if ironman or if needed for 3rd alternative.\n\nIf you're new here then I highly recommend you check out Vivy's beginner vis wax guide! Click me\n\nHow to read the fc title\nThe fc title represents the first and second slot runes, since the third slot is random.\nSlot 1 = First rune in the fc title\nSlot 2 = One of the 2nd, 3rd or 4th abbreviations in the title will be your correct 2nd slot\nSlot 3 = Random, therefore not represented in the title\n\nAbbreviations and the # of runes used are in the forth post below\n\nI can't promise that this first post will always be updated in time. Please look carefully at the DATE, if the title isn't updated then look at the post below mine or check CuddleBuckets post at the end of the thread.\n\nHave fun waxing! (Couldn't resist the pun)\nUmbrielle/15`
// --------------------------------------------------------------------------

// const regex = /Combination[ \w\d]+[^/n]/g;
// const found = paragraph.match(regex);
// let str = found[0].split('Slot 1:');
// str = str[0].split('for')
// str = str[1].trim();
// console.log(str);
// // expected output: Sunday the 20th

// const regex = /Slot 1:[\s\S]*Slot 2:/g;
// const found = paragraph.match(regex);
// const str = found[0].split(/Slot [1-9]:/g);
// console.log(str[1].trim());
// expected output: - Steam ( earth 23, death 26 )

// const regex = /Slot 2:[\s\S]*Slot 3/g;
// const found = paragraph.match(regex);
// const str = found[0].split(/Slot [1-9]:?/g);
// console.log(str[1].trim());
/*
expected output:
- Water
- Chaos ( water* 25, body* 27 )
- Mind ( earth* 27, Chaos* 29 )
*/
