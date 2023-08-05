import { ADD_HABITS,CHANGE_STATUS,CHANGE_PREVIOUS_STATUS, DELETE_HABIT } from "../Actions";

const initialState = {
    habits : [],
    previousDays : {}
}

export function habitsReducer(state=initialState,action){

    switch(action.type)
    {
        case ADD_HABITS : {
            const {id,habit} = action.payload;            
            return {
            previousDays: {
                [habit] : ['No action','No action','No action','No action','No action','No action','No action'],
                ...state.previousDays
            },
            habits: [...state.habits,{id,habit}]
            }
        }

        case CHANGE_STATUS : {
            const {status,habitName} = action.payload;
            // console.log(status,habitName);
            state.previousDays[habitName][6] = status;  
            return state;
        }
        case CHANGE_PREVIOUS_STATUS : {
            const {status,day,habitName} = action.payload;
            state.previousDays[habitName][day] = status;
            return state;
        }

        case DELETE_HABIT : {
            state.habits = state.habits.filter((val) => val.id != action.payload.habitID);
            delete state.previousDays[action.payload.habitName]; 
            return state; 
        }

        default:
            return state;
    }
}