const words =
  'beach bean beauty because become beef before toy upper upset year yellow';
// 'beach bean beauty because become beef before begin behave behind believe below belt bench benefit best betray better between beyond cabbage cabin cable cactus cage cake call calm camera camp can canal cancel candy cannon canoe canvas canyon capable capital captain car carbon card cargo carpet carry cart case cash casino castle casual cat catalog catch category cattle caught cause caution cave cover coyote crack cradle craft cram crane crash crater crawl crazy cream credit creek crew cricket crime crisp critic crop cross crouch crowd crucial cruel cruise crumble crunch crush cry crystal piano picnic picture piece pig pigeon pill pilot pink pioneer pipe pistol pitch pizza place planet plastic plate play please pledge pluck plug plunge public pudding pull pulp pulse pumpkin punch pupil puppy purchase purity purpose purse push put toast tobacco today toddler toe together toilet token tomato tomorrow tone tongue tonight tool tooth top topic topple torch tornado tortoise toss total tourist toward tower town toy upper upset year yellow';

const arr = words.split(' ');
let count = 0,
  a = 'toy',
  b = 'upper',
  c = 'upset',
  e = 'year',
  k = 'yellow',
  idx0,
  idx1,
  idx2,
  idx4,
  idx10;

for (i = 0; i < arr.length; i++) {
  if (arr[i] == a) {
    idx0 = i;
  } else if (arr[i] == b) {
    idx1 = i;
  } else if (arr[i] == c) {
    idx2 = i;
  } else if (arr[i] == e) {
    idx4 = i;
  } else if (arr[i] == k) {
    idx10 = i;
  }
}

for (i = 0; i < arr.length; i++) {
  if (i != idx0 && i != idx1 && i != idx2 && i != idx4 && i != idx10) {
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
                              arr[idx0],
                              arr[idx1],
                              arr[idx2],
                              arr[i],
                              arr[idx4],
                              arr[j],
                              arr[l],
                              arr[m],
                              arr[n],
                              arr[o],
                              arr[idx10],
                              arr[p]
                            );
                            count++;
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
console.log(count);
