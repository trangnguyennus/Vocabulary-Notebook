const defaultWordArr = [
        {id: 1, eng: 'house', vn: 'ngôi nhà ', memorized: true, isShow: false},
        {id: 2, eng: 'table', vn: 'bàn', memorized: true, isShow: false},
        {id: 3, eng: 'chair', vn: 'ghế', memorized: true, isShow: false},
        {id: 4, eng: 'bed', vn: 'giường', memorized: true, isShow: false},
        {id: 5, eng: 'kitchen', vn: 'nhà bếp', memorized: false, isShow: true},
        {id: 6, eng: 'living room', vn: 'phòng khách', memorized: false, isShow: true},
        {id: 7, eng: 'microwave', vn: 'lò vi sóng', memorized: false, isShow: true},
        {id: 8, eng: 'rice cooker', vn: 'nồi cơm điện', memorized: false, isShow: true},
        {id: 9, eng: 'refrigerator', vn: 'tủ lạnh', memorized: false, isShow: true},
        {id: 10, eng: 'air conditioner', vn: 'máy lạnh', memorized: false, isShow: true},
    ]

const wordArrReducer = (state = defaultWordArr, action) => { 
    if (action.type === 'TOGGLE_MEMORIZED') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return {...e, memorized: !e.memorized}
        });
    }
    
    if (action.type === 'TOGGLE_MEMORIZED') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, memorized: !e.memorized };
        });
    }

    if (action.type === 'TOGGLE_SHOW') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return {...e, isShow: !e.isShow}
        }); 
    }

    if (action.type === 'ADDING_WORD') {
        return [{
          id: state.length + 1,
          eng: action.eng,
          vn: action.vn,
          memorized: false,
          isShow: false
        }].concat(state);
    }
    return state;
}
  

export default wordArrReducer;