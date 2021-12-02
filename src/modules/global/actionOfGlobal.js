/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 입력합니다.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const SET_GNB_MODE = "global/SET_GNB_MODE";
const SET_TIME_INTERVAL = "global/SET_TIME_INTERVAL";
const SET_TIMER = "global/SET_TIMER";

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보냅니다.
export const setGnbMode = (data) => ({ type: SET_GNB_MODE, data });
export const setTimeInterval = (data) => ({ type: SET_TIME_INTERVAL, data });
export const setTimer = (data) => ({ type: SET_TIMER, data });

/* 초기 상태 선언 */
const initialState = {
  gnbView: "show",
  timeInterval: "",
  timer: 0,
};

/* 리듀서 선언 */
// 리듀서는 export default 로 작성합니다.
export default function actionOfGlobal(state = initialState, action) {
  switch (action.type) {
    case SET_GNB_MODE:
      return {
        ...state,
        gnbView: action.data,
      };
    case SET_TIME_INTERVAL:
      return {
        ...state,
        timeInterval: action.data,
      };
    case SET_TIMER:
      return {
        ...state,
        timer: action.data,
      };
    default:
      return state;
  }
}
