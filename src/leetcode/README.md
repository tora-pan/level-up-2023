# LeetCode Grind 

## Prerequisites  
- Data Structure Study / Implementation

## Data Structures
<details>
<summary>Array</summary>

### Introduction
Arrays hold values of the same type at **contiguous memory locations**. In an array, we're usually concerned about two things - the position/index of an element and the element itself. Different programming languages implement arrays under the hood differently and can affect the time complexity of operations you make to the array. In some languages like Python, JavaScript, Ruby, PHP, the array (or list in Python) size is dynamic and you do not need to have a size defined beforehand when creating the array. As a result, people usually have an easier time using these languages for interviews.
### Advantages
- Store multiple elements of the **same type** with one single variable name.
- Accessing elements is fast as long as you have the index, as opposed to *linked lists* where you have to traverse from the head.
### Disadvantages
- Addition and removal of elements into/from the middle of an array is slow because the remaining elements need to be shifted to accommodate the new/missing element. An exception to this is if the position to be inserted/removed is at the end of the array.
- For certain languages where the array size is fixed, it cannot alter its size after initialization. If an insertion causes the total number of elements to exceed the size, a new array has to be allocated and the existing elements have to be copied over. The act of creating a new array and transferring elements over takes **O(n) time**.
### Time Complexity
|Operation|Big-O|
|---|---|
|Access|O(1)|
|Search|O(n)|
|Search(sorted)|O(log(n))|
|Insert|O(n)|
|Insert(at end)|O(1)|
|Remove|O(n)|
|Remove(at end)|O(1)|
### Things to Look out for During Interviews
- Clarify if there are duplicate values in the array. 
- When using an index to iterate through array elements, be careful not to go out of bounds.
- Be mindful about slicing or concatenating arrays in your code. Typically, slicing and concatenating arrays would take O(n) time. Use start and end indices to demarcate a subarray/range where possible.
</details>

<details>
<summary>String</summary>

### Introduction
A string is a sequence of characters surrounded by quotation marks. A lot of the things you can do on arrays, you can also do with strings.  Common data structures for looking up strings are:
- Trie/Prefix Tree
- Suffix Tree
### Time Complexity
|Operation|Big-O|
|---|---|
|Access|O(1)|
|Search|O(n)|
|Insert|O(n)|
|Remove|O(n)|
### Things to Look out for During Interviews
- Ask about input character set and case sensitivity. 
- Usually the characters are limited to lowercase Latin characters, for example a to z.
</details>

<details>
<summary>Hash Table</summary>

### Introduction
### Advantages
### Disadvantages
### Time Complexity
### Things to Look out for During Interviews
</details>

<details>
<summary>Linked List</summary>

### Introduction
### Advantages
### Disadvantages
### Time Complexity
### Things to Look out for During Interviews
</details>

<details>
<summary>Queue</summary>

### Introduction
### Advantages
### Disadvantages
### Time Complexity
### Things to Look out for During Interviews
</details>

<details>
<summary>Stack</summary>

### Introduction
### Advantages
### Disadvantages
### Time Complexity
### Things to Look out for During Interviews
</details>

<details>
<summary>Tree</summary>

### Introduction
### Advantages
### Disadvantages
### Time Complexity
### Things to Look out for During Interviews
</details>

<details>
<summary>Graph</summary>

### Introduction
### Advantages
### Disadvantages
### Time Complexity
### Things to Look out for During Interviews
</details>

<details>
<summary>Heap</summary>

### Introduction
### Advantages
### Disadvantages
### Time Complexity
### Things to Look out for During Interviews
</details>

<details>
<summary>Trie</summary>

### Introduction
### Advantages
### Disadvantages
### Time Complexity
### Things to Look out for During Interviews
</details>

## 14 Common Techniques for DSAs
[Found Here](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)

### Sliding Window Technique
The Sliding Window pattern is used to perform a required operation on a specific window size of a given array or linked list, such as finding the longest subarray containing all 1s. Sliding Windows start from the 1st element and keep shifting right by one element and adjust the length of the window according to the problem that you are solving. In some cases, the window size remains constant and in other cases the sizes grows or shrinks.
### Two Pointer
Two Pointers is a pattern where two pointers iterate through the data structure in tandem until one or both of the pointers hit a certain condition.Two Pointers is often useful when searching pairs in a sorted array or linked list; for example, when you have to compare each element of an array to its other elements.

Two pointers are needed because with just pointer, you would have to continually loop back through the array to find the answer. This back and forth with a single iterator is inefficient for time and space complexity — a concept referred to as asymptotic analysis. While the brute force or naive solution with 1 pointer would work, it will produce something along the lines of O(n²). In many cases, two pointers can help you find a solution with better space or runtime complexity.
### Fash and Slow Pointers

### Merge Intervals

### Cyclic Sort

### In-place Reversal of Linked List

### Tree BFS

### Tree DFS

### Two Heaps

### Subsets

### Modified Binary Search

### Top K Elements

### K-Way Merge

### Topological Sort


## Blind 75

