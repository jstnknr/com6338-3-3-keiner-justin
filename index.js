function runQuiz () {
    var questionsArr = [
        "The sky is blue.",
        "Wednesday is the day after Monday.",
        "Yellow is the complimentary color of Indigo.",
        "The first president of the United States was John Adams.",
        "There are 13 inches in a foot."
    ]
    for (var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i]
        var answer = confirm(question)
        console.log(answer)
    }
}

//{
//    question: 'The color of the sky is blue.',
//    answer: true
//   }
//   {
//    question: 'Wednesday is the day after Monday',
//    answer: false
 //  }
 //  {
 //   question: 'Yellow is the complimentary color of Indigo.',
 //   answer: true
 //  }
 //  {
  //  question: 'The first president of the United States was John Adams.',
//    answer: false
//   }
//   {
//    question: 'There are 13 inches in a foot.',
//    answer: false
//   }