// class ListNode {
//   constructor(data) {
//     this.data = data
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//     this.head = head
//   }
// }

// let node1 = new ListNode(2)
// let node2 = new ListNode(5)

// node1.next = node2

// let list = new LinkedList(node1)

// console.log(list)


// let arr = [1, 2, 3]


// console.log(arr.next)

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }

var mergeTwoLists = function(list1, list2) {
  const newList = new ListNode(0)

  console.log(newList, 'here')
}
console.log(mergeTwoLists(0))