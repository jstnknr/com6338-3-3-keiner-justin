// Your code here


function runQuiz() {
    var questionsArr = [
            {
                question: 'The color of the sky is blue.',
                answer: true
            }
            {
                question: 'Wednesday is the day after Monday',
                answer: false
            }
            {
                question: 'Yellow is the complimentary color of Indigo.',
                answer:true
            }
            {
                question: 'The first president of the United States was John Adams.',
                answer: false
            }
            {
                question: 'There are 13 inches in a foot.',
                answer: false
            }       
        ]
        for (var i = 0; i < questionsArr.length; i++) {
            var questionsArr = questions[i]
            console.log(questionsArr)
            var answer = confirm(questionsArr)
        }
}
