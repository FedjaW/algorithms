export default function bubble_sort(arr: number[]): void {
    for (var i = 0; i < arr.length - 1; ++i) {
        for (var j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
