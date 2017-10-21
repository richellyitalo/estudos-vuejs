import * as types from './mutation-types'

export const signIn = (context, user_payload) => {
    context.commit(types.SIGN_IN, user_payload)
}

export const signOut = (context) => {
    context.commit(types.SIGN_OUT)
}

export const setEvents = (context, events_payload) => {
    context.commit(types.SET_EVENTS, events_payload);
}