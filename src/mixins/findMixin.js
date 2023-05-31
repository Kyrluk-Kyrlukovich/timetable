import {mapActions, mapMutations, mapState} from "vuex";

export default {
    data() {
        return {
            hasgotError: false,
            group: '',
        }
    },
    methods: {

        ...mapMutations({
            updateSearchedGroup: 'updateSearchedGroup',

        }),
        ...mapActions({
            renLat: 'renameLater',
            delEmpty: 'deleteEmptyStrings'
        }),

        findGroup() {
            try {
                this.renLat(JSON.parse(JSON.stringify(this.oneGroup[this.group.toUpperCase()])))
                this.delEmpty()
            } catch (e) {
                this.hasgotError = true
                console.log(e)
            }
            console.log(this.searchedGroup)
        },
        autocomplete(group){
            this.group = group
            this.findGroup()
            this.$router.push(`/${this.group}`)
        },
        suggestioner(key) {
            const group = this.oneGroup
            let groupArray = []
            for(let i in group){

                groupArray.push(i)
            }
            const groupToSuggest = groupArray.filter(item => item.substring(key.length, 0) === key.toUpperCase().trim()).sort().slice(0, 4)
            return groupToSuggest
        },
    },
    computed: {
        ...mapState({
            oneGroup: (state) => state.groups,
            searchedGroup: (state) => state.searchedGroup
        })
    }
}
