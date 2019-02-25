import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        userinfo: {
            name: "test"
        },
        windowtype: "top",
        routerlist: {

        },
        routeron: ""
    },
    mutations: {
        increment(state) {
            state.count++
        },
        checkwindowtype(state) {
            if (window == window.parent) {
                state.windowtype = "top"
            } else {
                state.windowtype = "child"
            }
        },
        setUserinfo(state, info) {
            state.userinfo = info
        },
        addRouter(state, router) {
            if (state.routerlist[router.name]) {
                if (router.fullPath != state.routerlist[router.name].fullPath) {
                    Vue.set(state.routerlist, router.name, router)
                }
                state.routeron = router.name
            } else {
                // state.routerlist[router.name] = router;
                Vue.set(state.routerlist, router.name, router)
                state.routeron = router.name
                console.log("addRouter", router, state)
            }
        },
        changeRouter(state, router) {
            state.routeron = router.name
            console.log("changeRouter", router, state)
        },
        removeRouter(state, router) {
            Vue.delete(state.routerlist, router.name)
            for(var key in state.routerlist){
                state.routeron = state.routerlist[key].name
                break;
            }
            console.log("removeRouter", router, state)
        }
    }
})
