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
### Advantages
### Disadvantages
### Time Complexity
### Things to Look out for During Interviews
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


## Blind 75

