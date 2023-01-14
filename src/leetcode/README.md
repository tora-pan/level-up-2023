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
A hash table (commonly referred to as hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function on an element to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

Hashing is the most common example of a space-time tradeoff. Instead of linearly searching an array every time to determine if an element is present, which takes O(n) time, we can traverse the array once and hash all the elements into a hash table. Determining if the element is present is a simple matter of hashing the element and seeing if it exists in the hash table, which is O(1) on average.

In the case of hash collisions, there are a number of collision resolution techniques that can be used. You will unlikely be asked about details of collision resolution techniques in interviews:

**Separate chaining** - A linked list is used for each value, so that it stores all the collided items.
**Open addressing** - All entry records are stored in the bucket array itself. When a new entry has to be inserted, the buckets are examined, starting with the hashed-to slot and proceeding in some probe sequence, until an unoccupied slot is found.
### Advantages
You can determine if the element that you are looking for is there without traversing the entire list.
### Disadvantages
You cannot access an element directly as the index isn't known.
### Time Complexity
|Operation|Big-O|
|---|---|
|Access|N/A|
|Search|O(1)|
|Insert|O(1)|
|Remove|O(1)|
** this is the average case
### Things to Look out for During Interviews
</details>

<details>
<summary>Linked List</summary>

### Introduction
Like arrays, a linked list is used to represent sequential data. It is a linear collection of data elements whose order is not given by their physical placement in memory, as opposed to arrays, where data is stored in sequential blocks of memory. Instead, each element contains an address of the next element. It is a data structure consisting of a collection of nodes which together represent a sequence.

In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence.
### Advantages
Insertion and deletion of a node in the list (given its location) is O(1) whereas in arrays the following elements will have to be shifted.
### Disadvantages
Access time is linear because directly accessing elements by its position in the list is not possible (in arrays you can do arr[4] for example). You have to traverse from the start.

### Types of Linked Lists
**Singly linked list**
A linked list where each node points to the next node and the last node points to null.

**Doubly linked list**
A linked list where each node has two pointers, next which points to the next node and prev which points to the previous node. The prev pointer of the first node and the next pointer of the last node point to null.

**Circular linked list**
A singly linked list where the last node points back to the first node. There is a circular doubly linked list variant where the prev pointer of the first node points to the last node and the next pointer of the last node points to the first node.
### Time Complexity
|Operation|Big-O|
|---|---|
|Access|O(n)|
|Search|O(n)|
|Insert|O(1)|
|Remove|O(1)|
### Things to Look out for During Interviews
Be familiar with the following routines because many linked list questions make use of one or more of these routines in the solution:
- Counting the number of nodes in a linked list
- Reversing a linked list in place
- Finding the middle of a linked list using a *fast* and *slow* pointer
- Merging two linked lists together
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

