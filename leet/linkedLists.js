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
  let fh = new ListNode(-1);
  let current = fh;
  while(l1 || l2){

      if(l2 == null || (l1 !== null && l1.val <= l2.val)){
          fh.next = l1;
          fh = fh.next;
          l1 = l1.next;
      } else {
          fh.next = l2;
          fh = fh.next;
          l2 = l2.next;
      }
  }
  return current.next;
}
console.log(mergeTwoLists(0))