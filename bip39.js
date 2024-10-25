const words =
  'beach bean beauty upper because become toy beef before upset year behave yellow';
// 'beach bean beauty because become beef before begin behave behind believe below belt bench benefit best betray better between beyond cabbage cabin cable cactus cage cake call calm camera camp can canal cancel candy cannon canoe canvas canyon capable capital captain car carbon card cargo carpet carry cart case cash casino castle casual cat catalog catch category cattle caught cause caution cave cover coyote crack cradle craft cram crane crash crater crawl crazy cream credit creek crew cricket crime crisp critic crop cross crouch crowd crucial cruel cruise crumble crunch crush cry crystal piano picnic picture piece pig pigeon pill pilot pink pioneer pipe pistol pitch pizza place planet plastic plate play please pledge pluck plug plunge public pudding pull pulp pulse pumpkin punch pupil puppy purchase purity purpose purse push put toast tobacco today toddler toe together toilet token tomato tomorrow tone tongue tonight tool tooth top topic topple torch tornado tortoise toss total tourist toward tower town toy upper upset year yellow';

const arr = words.split(' '),
  knownWords = 'toy upper upset year yellow',
  known = knownWords.split(' ');
let count = 0,
  idx = [];

known.forEach((a, j) => {
  idx.push(j);
});

arr.forEach((a, i) => {
  arr.forEach((b, j) => {
    arr.forEach((d, l) => {
      arr.forEach((e, m) => {
        arr.forEach((f, n) => {
          arr.forEach((g, o) => {
            arr.forEach((h, p) => {
              if (
                i != idx[0] &&
                i != idx[1] &&
                i != idx[2] &&
                i != idx[3] &&
                i != idx[4] &&
                j != idx[0] &&
                j != idx[1] &&
                j != idx[2] &&
                j != idx[3] &&
                j != idx[4] &&
                l != idx[0] &&
                l != idx[1] &&
                l != idx[2] &&
                l != idx[3] &&
                l != idx[4] &&
                m != idx[0] &&
                m != idx[1] &&
                m != idx[2] &&
                m != idx[3] &&
                m != idx[4] &&
                n != idx[0] &&
                n != idx[1] &&
                n != idx[2] &&
                n != idx[3] &&
                n != idx[4] &&
                o != idx[0] &&
                o != idx[1] &&
                o != idx[2] &&
                o != idx[3] &&
                o != idx[4] &&
                p != idx[0] &&
                p != idx[1] &&
                p != idx[2] &&
                p != idx[3] &&
                p != idx[4] &&
                j != i &&
                l != i &&
                l != j &&
                m != i &&
                m != j &&
                m != l &&
                n != i &&
                n != j &&
                n != l &&
                n != m &&
                o != i &&
                o != j &&
                o != l &&
                o != m &&
                o != n &&
                p != i &&
                p != j &&
                p != l &&
                p != m &&
                p != n &&
                p != o
              )
                console.log(
                  known[idx[0]],
                  known[idx[1]],
                  known[idx[2]],
                  a,
                  known[2],
                  b,
                  d,
                  e,
                  f,
                  g,
                  known[3],
                  h
                );
            });
          });
        });
      });
    });
  });
});

// for (i = 0; i < arr.length; i++) {
//   if (
//     arr[i] ==
//     arr.map(a => {
//       return a;
//     })
//   ) {
//     idx0 = i;
//   } else if (arr[i] == b) {
//     idx1 = i;
//   } else if (arr[i] == c) {
//     idx2 = i;
//   } else if (arr[i] == e) {
//     idx4 = i;
//   } else if (arr[i] == k) {
//     idx10 = i;
//   }
// }

// for (i = 0; i < arr.length; i++) {
//   if (i != idx0 && i != idx1 && i != idx2 && i != idx4 && i != idx10) {
//     for (let j = 0; j < arr.length; j++) {
//       if (
//         j != idx0 &&
//         j != idx1 &&
//         j != idx2 &&
//         j != idx4 &&
//         j != idx10 &&
//         j != i
//       ) {
//         for (let l = 0; l < arr.length; l++) {
//           if (
//             l != idx0 &&
//             l != idx1 &&
//             l != idx2 &&
//             l != idx4 &&
//             l != idx10 &&
//             l != i &&
//             l != j
//           ) {
//             for (let m = 0; m < arr.length; m++) {
//               if (
//                 m != idx0 &&
//                 m != idx1 &&
//                 m != idx2 &&
//                 m != idx4 &&
//                 m != idx10 &&
//                 m != i &&
//                 m != j &&
//                 m != l
//               ) {
//                 for (let n = 0; n < arr.length; n++) {
//                   if (
//                     n != idx0 &&
//                     n != idx1 &&
//                     n != idx2 &&
//                     n != idx4 &&
//                     n != idx10 &&
//                     n != i &&
//                     n != j &&
//                     n != l &&
//                     n != m
//                   ) {
//                     for (let o = 0; o < arr.length; o++) {
//                       if (
//                         o != idx0 &&
//                         o != idx1 &&
//                         o != idx2 &&
//                         o != idx4 &&
//                         o != idx10 &&
//                         o != i &&
//                         o != j &&
//                         o != l &&
//                         o != m &&
//                         o != n
//                       ) {
//                         for (let p = 0; p < arr.length; p++) {
//                           if (
//                             p != idx0 &&
//                             p != idx1 &&
//                             p != idx2 &&
//                             p != idx4 &&
//                             p != idx10 &&
//                             p != i &&
//                             p != j &&
//                             p != l &&
//                             p != m &&
//                             p != n &&
//                             p != o
//                           ) {
//                             console.log(
//                               arr[idx0],
//                               arr[idx1],
//                               arr[idx2],
//                               arr[i],
//                               arr[idx4],
//                               arr[j],
//                               arr[l],
//                               arr[m],
//                               arr[n],
//                               arr[o],
//                               arr[idx10],
//                               arr[p]
//                             );
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// // “If we have a set of words that we know, can we put them in an array and check with one command whether the current word matches an element in the array?”
// // console.log(known);
