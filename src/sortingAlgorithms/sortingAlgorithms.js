export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations); 
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  ////////////////////////////////////////////////////
export function getBubbleSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, 0, array.length,animations); 
    return animations;

}
function bubbleSortHelper(mainArray,start,n,animations){
  for(let i=start;i<n-1;i++){
    let f = 0;
    for(let j=start;j<n-i-1;j++){
      animations.push([j,j+1]);
      animations.push([j,j+1]);
      if(mainArray[j] > mainArray[j+1]){
        let temp = mainArray[j];
        mainArray[j] = mainArray[j+1];
        mainArray[j+1] = temp;
        f=1;
      }
      animations.push([j,mainArray[j]]);
      animations.push([j+1,mainArray[j+1]]);
    }
    if(!f) break;
  }
}

/////////////////////////////////////////////////////////////
export function getSelectionSortAnimations(array){
  const animations = [];
  if (array.length <= 1) return array;
  selectionSortHelper(array,array.length,animations); 
  return animations;

}
function selectionSortHelper(mainArray,n,animations){
  let min_idx;
  for(let i=0;i<n-1;i++){
    min_idx = i;
    for(let j=i+1;j<n;j++){
      animations.push([min_idx,j]);
      animations.push([min_idx,j]);
      if(mainArray[min_idx] > mainArray[j]){
        let temp = mainArray[min_idx];
        mainArray[min_idx] = mainArray[j];
        mainArray[j] = temp;
      }
      animations.push([min_idx,mainArray[min_idx]]);
      animations.push([j,mainArray[j]]);
    }
  }
}
export function getInsertionSortAnimations(array){
  const animations = [];
  if (array.length <= 1) return array;
  insertionSortHelper(array,array.length,animations); 
  return animations;
}
function insertionSortHelper(mainArray,n,animations){
  let key,j;
  for (let i = 1; i < n; i++) {
    key = mainArray[i];
    j = i-1;
    while (j >=0 && mainArray[j] > key) {
      animations.push([j,j+1]);
      animations.push([j,j+1]);
      mainArray[j+1] = mainArray[j];
      animations.push([j+1,mainArray[j+1]]);
      j--;
    }
    animations.push([j+1,i]);
    animations.push([j+1,i]);
    mainArray[j+1] = key;
    animations.push([j+1,key]);
  }
}

//////////////////////////////////

