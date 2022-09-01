import { NEW_QUESTIONS } from "./actions";

const initialState = {
    questionsArr: [],
    menuStatus: true,
    menuButtons: [{text: 'Начать игру ' , link: '/game' , id: 1 } ,{text: 'Рекорды' , link: '/records' , id: 2}],
    levelNumber : 1
};

function reducer(state = initialState, action) {
  
    if(action.type === NEW_QUESTIONS){
        const newQuestionsArr = action.payload.questionsArr;
        const newState = {...state , questionsArr: newQuestionsArr}
        return newState;
    }

    return state;
}

export default reducer;