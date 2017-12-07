var arr = ['mouse', 'cat', 'dog', 'human'];

function sort(arr) {

    var swaps;
    do {
        swaps = false;
        for (var i = 0; i < arr.length - 1; i++) {
            var x = arr[i];
            var y = arr[i + 1];
            if (x > y) {
                var temp = y;
                y = x;
                x = temp;
                swaps = true;
            }
        }
    } while (swaps);

    return arr;
}

sort(arr)
console.log(arr);