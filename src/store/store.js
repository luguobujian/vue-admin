import Vue from 'vue'

let store = {
    state: Vue.observable({
        message: 'Hello!'
    }),
    setMessageAction(newValue) {
        this.state.message = newValue
    },
    clearMessageAction() {
        this.state.message = ''
    }
}

export default store