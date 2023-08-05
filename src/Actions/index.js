export const ADD_HABITS = "ADD_HABITS";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const CHANGE_PREVIOUS_STATUS = "CHANGE_PREVIOUS_STATUS"
export const DELETE_HABIT = "DELETE_HABIT"

export function addHabits(id,habit){
    return {
        type:ADD_HABITS,
        payload :{
            id,
            habit
        }
    }
}

export function deleteHabit(habitID,habitName){
    return {
        type:DELETE_HABIT,
        payload :{
            habitID,
            habitName
        }
    }
}

export function changeStatus(status,habitName){
    return  {
        type:CHANGE_STATUS,
        payload:{
            status,
            habitName
        }
    }
}

export function changePreviousStatus(status,day,habitName){
    return  {
        type:CHANGE_PREVIOUS_STATUS,
        payload:{
            status,
            day,
            habitName
        }
    }
}