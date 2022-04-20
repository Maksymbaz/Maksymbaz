const words =
  'beach bean beauty because become beef before toy upper upset year yellow';
// 'beach bean beauty because become beef before begin behave behind believe below belt bench benefit best betray better between beyond cabbage cabin cable cactus cage cake call calm camera camp can canal cancel candy cannon canoe canvas canyon capable capital captain car carbon card cargo carpet carry cart case cash casino castle casual cat catalog catch category cattle caught cause caution cave cover coyote crack cradle craft cram crane crash crater crawl crazy cream credit creek crew cricket crime crisp critic crop cross crouch crowd crucial cruel cruise crumble crunch crush cry crystal piano picnic picture piece pig pigeon pill pilot pink pioneer pipe pistol pitch pizza place planet plastic plate play please pledge pluck plug plunge public pudding pull pulp pulse pumpkin punch pupil puppy purchase purity purpose purse push put toast tobacco today toddler toe together toilet token tomato tomorrow tone tongue tonight tool tooth top topic topple torch tornado tortoise toss total tourist toward tower town toy upper upset year yellow';

const arr = words.split(' ');
let count = 0,
  known = 'toy upper upset year yellow',
  // a = 'toy',
  // b = 'upper',
  // c = 'upset',
  // e = 'year',
  // k = 'yellow',
  idx0,
  idx1,
  idx2,
  idx4,
  idx10;

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
//                             count++;
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
// console.log(count);

for (i = 0; i < arr.length; i++) {
  if (
    arr[i] ==
    arr.map((a, idx) => {
      return idx;
    })
  ) {
    idx0 = i;
    console.log(arr[i]);
  }
}
console.log(idx0);