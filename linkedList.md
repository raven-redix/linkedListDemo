# Linked Lists

### pre-reading
[linked-list](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d)

## What is a Linked List?
-- a linear data structure that contains data in the form of nodes

## What are the benefits of using Linked Lists as a data structure? (LL vs. Arrays)
-- non-contiguous (contiguous: side by side, one after the other)

Pros of Linked Lists : Memory allocation
-- a lot more flexible when it comes to storing information
-- for array's memory allocation is contiguously
-- linked lists data is stored dynamically

Cons of Linked Lists: Look up time
--Pros for Arrays: the look up time is 0(1)
-- Linked List: 0(n)


## What are the parts of a linked list? 
-- head - nodes - tail -> null (last node points to null)
-- head : the start of the linked list, still a node
-- tail : the end of the linked list, still a node and points to null
-- nodes : contains data and 

## What are the parts of a node? singly vs. doubly
-- singly node
    --[data | next] (data key: your info ; next pointer: reference to the next node)

-- doubly node
    --[prev | data | next] (pre: reference to previous node; data and next^^)

 
## What data type will we use to create a linked list?
-- Node  -- we will be creating a class that generates the nodes

singly node: 
this.data
this.next


doubly node:
this.data
this.prev
this.next

-- Linked List:
singly:
this.head
this.tail (not needed?)

doubly:
this.head
this.tail
this.size


## When should you use linked lists?