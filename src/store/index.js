import {createStore} from 'vuex'

export default createStore({
    state: {
        groups: {},
        searchedGroup: {},
    },
    mutations: {
        updateGroups(state, groups) {
            state.groups = JSON.parse(JSON.stringify(groups))
            console.log(state.groups)
        },
        updateSearchedGroup(state, group) {
            state.searchedGroup = group
        },
    },
    getters: {},
    actions: {
        async fetchClasses({commit, dispatch}) {
            try {
                const classes = await fetch('http://timetable/', {method: 'GET'})
                const data = await classes.json()
                commit('updateGroups', data)
            } catch (e) {
                console.error(e)
            }
        },
        renameLater({commit, dispatch},group) {
            commit('updateSearchedGroup',group)
            dispatch('deleteEmptyStrings')
        },
        deleteEmptyStrings({state, commit}) {
            let obj = state.searchedGroup
            for (let a in obj) {
                for (let b in obj[a]) {
                    let iterator = Object.keys(obj[a][b]).length
                    while (iterator > 0) {
                        obj[a][b][iterator.toString()] === '' ? delete obj[a][b][iterator.toString()] : iterator = 0;
                        iterator--
                    }
                }
            }
            commit('updateSearchedGroup', obj)
        }
    },
    modules: {}
})
