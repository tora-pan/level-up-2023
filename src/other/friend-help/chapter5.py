largest = 0
smallest = 0

# ["3, 4, 1, 5, dog, 20"] = Minimum: 3 , Maximum: 20

while True:
  num = input("Enter a number: ")
  if num == "done":
    break
  
  try:
    num = int(num)
    # sets the largest number
  except ValueError:
    print("Invalid input")
    continue

  if num > largest:
    largest = num
  # sets the smallest number
  if num < smallest:
    smallest = num

  print(num)
print("Minimum", smallest)
print("Maximum", largest)
