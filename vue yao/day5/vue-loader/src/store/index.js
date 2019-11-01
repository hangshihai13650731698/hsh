export default {
    state: {
        // 搜索的值
        searchText: '',
        // 选项卡的值
        tabbar: 0
    },
    setSearchText(newValue) {
        this.state.searchText = newValue
    },
    setTabbar(newValue) {
        this.state.tabbar = newValue
    }
}