// EXAMPLE ACTION
import {
    INCREASE,
    DECREASE
} from '../constants/counter.constant';

export function increase() {
    return {
        type: INCREASE,
    };
}

export function decrease() {
    return {
        type: DECREASE,
    };
}