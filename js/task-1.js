function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = quantity * pricePerDroid;
  if (customerCredits < totalPrice) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
