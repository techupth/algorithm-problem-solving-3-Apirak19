function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let i;
  let j;
  for (i = 0; i < customers.length; i++) {
    for (j = i + 1; j < customers.length; j++) {
      if (customers[i] > customers[j]) {
        let formerCustomer = customers[i];
        customers[i] = customers[j];
        customers[j] = formerCustomer;
      }
    }
  }
  return customers;
}

// ตอบคำถามตรงนี้จ้า
// O(n^2) เพราะมีการวนลูป 2 รอบ ซึ่งแต่ละรอบต้องวน n ครั้ง

const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));
// ["Arthit", "Napasorn", "Pimchanok", "Somchai", "Suchada"];
