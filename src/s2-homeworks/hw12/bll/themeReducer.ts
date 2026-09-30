const initState = {
    themeId: 3,
};
type themeStateType = {
    themeId: number;
};

export const themeReducer = (
    state = initState,
    action: changeThemeActionType,
): themeStateType => {
    // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id };
        default:
            return state;
    }
};

type changeThemeActionType = {
    type: 'SET_THEME_ID';
    id: number;
};

export const changeThemeId = (id: number): changeThemeActionType => ({
    type: 'SET_THEME_ID',
    id,
}); // fix any
