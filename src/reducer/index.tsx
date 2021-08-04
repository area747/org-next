import {Action} from 'redux';

export function counter(state: any, action: Action<any>) {
    if (typeof state === 'undefined') {
        state = 0; // 상태가 undefined이면 기본값으로 초기화합니다.
    }

    if (action.type === 'INCREMENT') {
        return state + 1;
    } else if (action.type === 'DECREMENT') {
        return state - 1;
    } else {
        return state; // 정해놓지 않은 액션인 경우
    }
}
