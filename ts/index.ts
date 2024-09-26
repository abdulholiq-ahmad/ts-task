// 1
let userName: string = "John Doe";
let age: number = 30;
let isStudent: boolean = true;
let hobbies: string[] = ["Reading", "Gaming", "Coding"];

// 2
function countPositiveNumbers(arr: number[]): number {
  return arr.filter((num) => num > 0).length;
}

console.log(countPositiveNumbers([1, 3, 5, -12, -4, 1]));

// 3
function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(15));

// 4
function sumOfArray(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// 5
function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// 6
function findMax(arr: number[]): number {
  return Math.max(...arr);
}

// 7
function findMin(arr: number[]): number {
  return Math.min(...arr);
}

// 8
function containsElement(arr: number[], target: number): boolean {
  return arr.includes(target);
}

// 9
function reverseArray(arr: number[]): number[] {
  return arr.slice().reverse();
}

// 10
function capitalizeWords(text: string): string {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
