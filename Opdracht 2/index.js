const alphabet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=!@#$%^&*()_+<>?,./|";
const steps = 2;

console.log(alphabet.length);

function Decrypt() {
  const input = document.getElementById("Text").value;
  let decryptedText = document.getElementById("decrypted");
  let node;

  console.log(input.length);
  if (input) {
    for (let i = 0; i < input.length; i++) {
      for (let index = 0; index < alphabet.length; index++) {
        if (input[i] == alphabet[index]) {
          let letter = index - steps;
          if (letter < 0) {
            letter += alphabet.length;
          }
          if (alphabet[letter] == "|") {
            node = document.createTextNode(" ");
          } else {
            node = document.createTextNode(alphabet[letter]);
          }

          decryptedText.appendChild(node);
        }
      }
    }
  }
}

/* 
Qrpkgwyb_qhbpqibuvggfu+bdguogvbogvbeqtqpccbjqgbmcpbfcv.ccDguogvbtcmgpbogvbjgvbeqtqpcxktwu/bfcctxcpbjgtuvgnngp/bocctbfcctpcbqrpkgwybBkgmbyqtfgpcbjgvbkubrcvkccpvgpbkpbEjkpc/bLcrcpbgpb2wkf!Mqtgcbqxgtmqogp|bXqnigpubggpbigBqpfjgkfuhwpevkqpctkubwkvbfgbEjkpgugbmwuvrtqxkpekgbIwcpifqpibygtfbjgvbeqtqpcxktwubfcctbdklb36brtqegpvbxcpbfgbigpgBgpbxgtmncctfgbrcvkccpvgpbxqqtbfgbvyggfgbmggtbxcuviguvgnf|ccIkuvgtgpbigdgwtfgbfcvbqqmbdklbggpb95!lctkigbxtqwybwkvb2wkf!Mqtgc|b2klbycubqrb44bhgdtwctkbwkvbjgvbBkgmgpjwkubqpvuncigp/bocctbvguvvgbqrpkgwybrqukvkghbqrbjgvbxktwu|bKpbLcrcpbmtggibggpbxtqwybfkgbgkpfblcpwctkbigpgBgpbycubxgtmncctfbfgBgbyggmbyggtbncuvbxcpbmggnrklp|b2gbdnggmbjgvbeqtqpcxktwubpqibuvggfub!bqhbcnyggtb!bdklbBkejbvgbftcigp|ccJqgbmcpbfcv.bItqhygibBklpbgtbdklbBqcpbcjgtdguogvvkpicbxgtuejknngpfgbuegpctkqcuboqignklm/bxgtvgnvbxktqnqqibOctkgvbHgnvmcorbxcpbjgvbNgkfubWpkxgtukvcktbOgfkuejbEgpvtwo|bcKpbjgvbcnigoggpbignfvbxqqtbcnngbxgtmqwfjgkfuxktwuugp/bkpenwukghbfgbeqtqpccu/bfcvblgbgtbygnbkoowpkvgkvbxqqtbqrdqwyv/bocctbfkgbkubpkgvbjggnbtqdwwuv|bFcvbyknbBgiigpcbcnublgbfkvbugkBqgpbjgvbeqtqpcxktwubqrnqqrv/bfcpbdgpblgbxqnigpfblcctbokuuejkgpbdguejgtof/bocctbjgvblcctbfcctqrbmwpblgbjgvbigyqqpbyggtbmtkligp|bFkgbkoowpkvgkvbBcmvbygi|cccOcctbkpbfkvbigxcnbiccvbfcvbpkgvbqr/bfgpmvbfgbxktqnqqi|bcJgvbkubBggtbqpycctuejklpnklmbfcvblgbdkppgpbggpbyggmbqhboccpfbpcbfgbkphgevkgbqrpkgwybigccphgevggtfbyqtfv|cbKpbBqcpbmqtvgbrgtkqfgbmcpbfgbkoowpkvgkvbpqibpkgvbygiigBcmvbBklp/bBgivbBg|bDgjcnxgbokuuejkgpbcnublgbggpbjggnbungejvbchyggtuAuvggobjgdv/bdklxqqtdggnfbfqqtbggpbccpigdqtgpbchyklmkpibccpblgbkoowwpuAuvggo|ccMcpudgtgmgpkpiccYcctuejklpnklmgtbkubfcvbygbfgbxgtmnctkpibxqqtbfgbjgtuvgnfgbocctbvqejbyggtbBkgmgbrcvkccpvgpboqgvgpbBqgmgpbkpbggpbcpfgtgbjqgmcbfkgbxcpbfgbvguvu|bcQxgtbjgvbcnigoggpbBklpbfkgbeqtqpcvguvubjggnbigxqgnki/cbxgtvgnvbHgnvmcor/bcocctbBgbjgddgpbygnbggpbfgvgevkgnkokgv|bCnubgtbgejvbjggnbygkpkibxktwubqrbggpboqpuvgtvlgbBkv/bfcpbdguvccvbfgbmcpubfcvbfgbvguvbpgicvkghbku/bvgtyklnblgbjgvbxktwubfwubpqibygnbdklblgbftcciv|cccCcpbjgvbgkpfbxcpbggpbkphgevkgbpggovbfgbjqgxggnjgkfbxktwubkpblgbnkejccob!bfgbcxktcngbnqcfcb!buvggfubxgtfgtbch|bcFcpbicblgbuvggfuboggtbqpBgmgtjgfgpbBkgpbkpbfgbwkvuncibxcpbfgbvguv|bCnublgbjgvBgnhfgboqpuvgtbvkgpbmggtbqpfgtbfgbnqgrbpggov/bmcpbjgvbdklxqqtdggnfbigdgwtgpbfcvblgbBgubmggtbrqukvkghbvguvbgpbxkgtbmggtbpgicvkgh|bFgbwkvuncibkubfwubpkgvboggtbBqbByctv!ykvbcnubygbBqwfgpbyknngp|bCnubfgbxktcngbnqcfbjggnbnccibku/bvtggfvbgkigpnklmbigyqqpbmcpudgtgmgpkpibkp|cccHgnvmcorbxgtoqgfvbfcvbfkvbccpbfgbjcpfbkubdklbfgbrcvkccpvgpbkpb2wkfqquv!CBkcc/bfkgbpcbggpbpgicvkgxgbeqtqpcvguvbpwbyggtbrqukvkghbBklpbigvguv|bFcvbBqwbqqmbxgtmnctgpbycctqobBgbpcbjwpbqpvuncibwkvbjgvbBkgmgpjwkubpkgocpfboggtbjgddgpbdguogv/bycvbfgbEjkpgugbigBqpfjgkfuhwpevkqpctkubwkvbIwcpifqpibdgyggtv|bcYkgbygkpkibxktwubdklbBkejbftcciv/bkubokpfgtbdguogvvgnklmc/bxgtvgnvbHgnvmcor|ccItqqvuejcnkigbuvwfkguccQqmbxktqnqqibOctkqpbMqqrocpubxcpbjgvbGtcuowubOEbfgpmvbfcvbfgbCBkcvkuejgbrcvkccpvgpbogvbfgbvyggfgbrqukvkgxgbvguvbjgvbeqtqpcxktwubcnbfkgbvklfbigyqqpbdklbBkejbjgddgpbigftcigp/bqqmbvqgpbBgbigpgBgpbyctgpbxgtmncctf|bc2gnhubcnubjgvbxktwubpkgvboggtbkpvcevbkubgpblgbpkgvboggtbdguogvvgnklmbdgpv/bmwpblgbkpbvjgqtkgbpqibjggnbncpibrqukvkghbvguvgp|cbFcvbmqovbfqqtfcvbqpfgtfgngpbxcpbjgvbwkvggpigxcnngpbxktwubpqibyccnbigfgvgevggtfbmwppgpbyqtfgp|ccQrpkgwybyqtfgpbdguogvbkubpkgvbqpoqignklm/bBgivbBg/bocctbBqkgvuboqgvbitqpfkibyqtfgpbqpfgtBqejv|bcFcctbBklpbitqqvuejcnkigbuvwfkgubxqqtbpqfki/bycctdklblgbggpbitqvgbitqgrbrcvkccpvgpbogvbxgtuejknngpfgbigBqpfjgkfuvqguvcpfgpbqpfgtbfgbnqgrbpggov|bJqgbxgtnqqrvbfgbkphgevkg.bJqgbncpibdnklxgpbfgbrcvkccpvgpbrqukvkghbigvguv.ccc2wnmgbuvwfkgubBklpbgtbpwbpqibpkgv|bcGpbcnubkmboqgvbiqmmgp/bfgpmbkmbfcvbfgbrcvkccpvgpbkpbEjkpc/bLcrcpbgpb2wkf!MqtgcbigyqqpbvgbxtqgibpcctbjwkubBklpbigiccp|b2gbyctgpbjgvbxktwubpkgvbjgngoccnbmyklv|ccccc


*/
