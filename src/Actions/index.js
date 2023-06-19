export const ADD_HABITS = "ADD_HABITS";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const CHANGE_PREVIOUS_STATUS = "CHANGE_PREVIOUS_STATUS"

export function addHabits(id,habit){
    return {
        type:ADD_HABITS,
        payload :{
            id,
            habit
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