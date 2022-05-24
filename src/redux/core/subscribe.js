import { Subject } from "rxjs"

export const SET_TO_DO = 'SET_TO_DO'

export const subscriptions = {
    [SET_TO_DO]: new Subject()
}