/*class NodoList{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}



function findmiddle(head){
       let slow=head, fast= head
     while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
     }
     return slow;
}
function removeduplicate(head){
let current = head;
const value = new set()
let prev=null
while(current){
if(value.has(current.value)){
    prev.next = current.next
}else{
    value.add(current.value)
    prev = current
}
current = current.next
}

}
function findCycle(head){
    let slow = head, fast = head;
    while(fast && fast.next){
        slow= slow.next
        fast = fast.next.next
        if(fast === slow) return true
    }
        return false
    
}

function inverseLinkList(head){
let prev = null;
let current = head
while(current){
   let next = current.next;
   current.next=prev
   prev = current
   current = next
}
return prev

}

let one = new NodoList(1)
let two = new NodoList(3)
let three = new NodoList(3)
one.next = two
two.next = three
three.next = two
console.log(one)

console.log(removeduplicate(one))*/
