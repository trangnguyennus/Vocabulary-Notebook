export function toggleForm () {
    return {type: 'TOGGLE_FORM'}
}

export function addingWord(eng, vn) {
    return {type: 'ADDING_WORD', eng, vn}
}

export function toggleMemorized(id) {
    return {type: 'TOGGLE_MEMORIZED', id}
}

export function toggleShow(id) {
    return {type: 'TOGGLE_SHOW', id}
}

export function showAll() {
    return {type: 'FILTER_SHOW_ALL'}
}

export function showMemorized() {
    return {type: 'FILTER_MEMORIZED'}
}

export function showPracticeMore() {
    return {type: 'FILTER_PRACTICE_MORE'}
}