// let activity = "roller-skate";
// // function saturdayFun() {
// // //   switch (activity) {
// // //     default:
// // //       return `This Saturday, I want to ${activity}!`;
// // //     case "bathe my dog":
// // //       return "This Saturday, I want to bathe my dog!";
// // //   }
// // // }

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function inner(orig = "special") {
    return `You are ${flair}${orig}${flair}!`;
  };
}
