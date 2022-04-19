let words = 'beach bean beauty because become beef before';
// 'beach bean beauty because become beef before begin behave behind believe below belt bench benefit best betray better between beyond cabbage cabin cable cactus cage cake call calm camera camp can canal cancel candy cannon canoe canvas canyon capable capital captain car carbon card cargo carpet carry cart case cash casino castle casual cat catalog catch category cattle caught cause caution cave cover coyote crack cradle craft cram crane crash crater crawl crazy cream credit creek crew cricket crime crisp critic crop cross crouch crowd crucial cruel cruise crumble crunch crush cry crystal piano picnic picture piece pig pigeon pill pilot pink pioneer pipe pistol pitch pizza place planet plastic plate play please pledge pluck plug plunge public pudding pull pulp pulse pumpkin punch pupil puppy purchase purity purpose purse push put toast tobacco today toddler toe together toilet token tomato tomorrow tone tongue tonight tool tooth top topic topple torch tornado tortoise toss total tourist toward tower town toy upper upset year yellow';

let arr = [];
arr = words.split(' ');
let a = 'toy',
  b = 'upper',
  c = 'upset',
  e = 'year',
  k = 'yellow';

for (i = 0; i < arr.length; i++) {
  if (arr[i] != a && arr[i] != b && arr[i] != c && arr[i] != k) {
    for (let j = 0; j < arr.length; j++) {
      if (
        arr[j] != a &&
        arr[j] != b &&
        arr[j] != c &&
        arr[j] != k &&
        arr[j] != arr[i]
      ) {
        for (let l = 0; l < arr.length; l++) {
          if (
            arr[l] != a &&
            arr[l] != b &&
            arr[l] != c &&
            arr[l] != k &&
            arr[l] != arr[i] &&
            arr[l] != arr[j]
          ) {
            for (let m = 0; m < arr.length; m++) {
              if (
                arr[m] != a &&
                arr[m] != b &&
                arr[m] != c &&
                arr[m] != k &&
                arr[m] != arr[i] &&
                arr[m] != arr[j] &&
                arr[m] != arr[l]
              ) {
                for (let n = 0; n < arr.length; n++) {
                  if (
                    arr[n] != a &&
                    arr[n] != b &&
                    arr[n] != c &&
                    arr[n] != k &&
                    arr[n] != arr[i] &&
                    arr[n] != arr[j] &&
                    arr[n] != arr[l] &&
                    arr[n] != arr[m]
                  ) {
                    for (let o = 0; o < arr.length; o++) {
                      if (
                        arr[o] != a &&
                        arr[o] != b &&
                        arr[o] != c &&
                        arr[o] != k &&
                        arr[o] != arr[i] &&
                        arr[o] != arr[j] &&
                        arr[o] != arr[l] &&
                        arr[o] != arr[m] &&
                        arr[o] != arr[n]
                      ) {
                        for (let p = 0; p < arr.length; p++) {
                          if (
                            arr[p] != a &&
                            arr[p] != b &&
                            arr[p] != c &&
                            arr[p] != k &&
                            arr[p] != arr[i] &&
                            arr[p] != arr[j] &&
                            arr[p] != arr[o] &&
                            arr[p] != arr[l] &&
                            arr[p] != arr[m] &&
                            arr[p] != arr[n]
                          ) {
                            console.log(
                              a,
                              b,
                              c,
                              arr[i],
                              e,
                              arr[j],
                              arr[l],
                              arr[m],
                              arr[n],
                              arr[o],
                              k,
                              arr[p]
                            );
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
      }
    }
  }
}

// // let sol = [
// //     ['crazy', 'upper', 'coyote'],
// //     [' casino', 'cave', 'belt '],
// //     ['yellow', 'pulse', 'tool'],
// //     ['pink', 'cover', 'play']
// // ];
// // console.log(arr);

// let wordz = 'beach bean beauty because';

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == a) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] == b)
//         for (let k = 0; k < arr.length; k++) {
//           if (arr[k] == c)
//             for (let l = 0; l < arr.length; l++) {
//               for (let m = 0; m < arr.length; m++) {
//                 if (arr[m] == e) {
//                   for (let n = 0; n < arr.length; n++) {
//                     if (
//                       j != i &&
//                       k != j &&
//                       l != k &&
//                       m != l &&
//                       m != n &&
//                       i != n
//                     ) {
//                       console.log(
//                         arr[i],
//                         arr[j],
//                         arr[k],
//                         arr[l],
//                         arr[m],
//                         arr[n]
//                       );
//                     }
//                   }
//                 }
//               }
//             }
//         }
//     }
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == a) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] == b) {
//         for (let k = 0; k < arr.length; k++) {
//           if (arr[k] == c) {
//             for (let l = 0; l < arr.length; l++) {
//               for (let m = 0; m < arr.length; m++) {
//                 if (arr[m] == e) {
//                   for (let n = 0; n < arr.length; n++) {
//                     for (let o = 0; o < arr.length; o++) {
//                       for (let p = 0; p < arr.length; p++) {
//                         for (let q = 0; q < arr.length; q++) {
//                           for (let r = 0; r < arr.length; r++) {
//                             if (arr[r] == k) {
//                               for (let s = 0; s < arr.length; s++) {
//                                 for (let t = 0; t < arr.length; t++) {
//                                   if (
//                                     i != j &&
//                                     i != k &&
//                                     i != l &&
//                                     i != m &&
//                                     i != n &&
//                                     i != o &&
//                                     i != p &&
//                                     i != q &&
//                                     i != r &&
//                                     i != s &&
//                                     i != t &&
//                                     j != k &&
//                                     j != l &&
//                                     j != m &&
//                                     j != n &&
//                                     j != o &&
//                                     j != p &&
//                                     j != q &&
//                                     j != r &&
//                                     j != s &&
//                                     j != t &&
//                                     k != l &&
//                                     k != m &&
//                                     k != n &&
//                                     k != o &&
//                                     k != p &&
//                                     k != q &&
//                                     k != r &&
//                                     k != s &&
//                                     k != t &&
//                                     l != m &&
//                                     l != n &&
//                                     l != o &&
//                                     l != p &&
//                                     l != q &&
//                                     l != r &&
//                                     l != s &&
//                                     l != t &&
//                                     m != n &&
//                                     m != o &&
//                                     m != p &&
//                                     m != q &&
//                                     m != r &&
//                                     m != s &&
//                                     m != t &&
//                                     n != o &&
//                                     n != p &&
//                                     n != q &&
//                                     n != r &&
//                                     n != s &&
//                                     n != t &&
//                                     o != p &&
//                                     o != q &&
//                                     o != r &&
//                                     o != s &&
//                                     o != t &&
//                                     p != q &&
//                                     p != r &&
//                                     p != s &&
//                                     p != t &&
//                                     q != r &&
//                                     q != s &&
//                                     q != t &&
//                                     r != s &&
//                                     r != t &&
//                                     s != t
//                                   ) {
//                                     console.log(
//                                       arr[i],
//                                       arr[j],
//                                       arr[k],
//                                       arr[l],
//                                       arr[m],
//                                       arr[n],
//                                       arr[o],
//                                       arr[p],
//                                       arr[q],
//                                       arr[r],
//                                       arr[s],
//                                       arr[t]
//                                     );
//                                   }
//                                 }
//                               }
//                             }
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
