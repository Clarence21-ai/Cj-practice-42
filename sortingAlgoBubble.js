// sortingAlgoBubble.js

let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Enter a number:"));
        numbers.push(num);
        }

        function bubbleSort(arr) {
            let n = arr.length;
                let swapped;
                    do {
                            swapped = false;
                                    for (let i = 0; i < n - 1; i++) {
                                                if (arr[i] > arr[i + 1]) {
                                                                // Swap elements
                                                                                let temp = arr[i];
                                                                                                arr[i] = arr[i + 1];
                                                                                                                arr[i + 1] = temp;
                                                                                                                                swapped = true;
                                                                                                                                                console.log(`Swapped ${arr[i]} and ${arr[i+1]}`);
                                                                                                                                                            }
                                                                                                                                                                    }
                                                                                                                                                                            n--; // Optimization: Last element is already in place
                                                                                                                                                                                } while (swapped);
                                                                                                                                                                                    console.log("Sorted array:", arr);
                                                                                                                                                                                    }

                                                                                                                                                                                    bubbleSort(numbers);
                                                                                                                                                                                    