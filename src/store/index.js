import { createStore } from 'vuex'
// import createPersistedState from "vuex-persistedstate";
import messagesManager from "./modules/messages_manager";
import sessiosManager from "./modules/sessions_manager";

const store = createStore({
    // plugins: [createPersistedState()],
    modules: {
        messagesManager,
        sessiosManager
    }
})

export default store