const NEW_QUESTIONS = 'NEW_QUESTIONS'

function newQuestions(questionsArr) {
    return {
      type: NEW_QUESTIONS,
      payload: {
        questionsArr: questionsArr
      },
    };
}


export {newQuestions , NEW_QUESTIONS}