

const initialState = {
    questionsArr: [],
    menuStatus: true,
    menuButtons: [{text: 'Начать игру ' , link: '/game' , id: 1 } ,{text: 'Рекорды' , link: '/records' , id: 2}],
    levelNumber : 1
};

function reducer(state = initialState, action) {
    const { questionsArr } = state;


    switch (action.type) {

    }
    return state;
}

export default reducer;