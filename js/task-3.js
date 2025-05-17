function checkForSpam(message) {
  let toLowerMessage = message.toLowerCase();
  //   console.log(toLowerMessage);

  if (toLowerMessage.includes("spam") || toLowerMessage.includes("sale")) {
    // console.log(true);

    return true;
  } else {
    // console.log(false);

    return false;
  }
}
