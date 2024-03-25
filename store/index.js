export const state = () => ({
    tareas: []
})
export const mutations = {
    SET_TAREAS(state, payload){
        state.tareas = payload;
    }
}
export const actions = {
    async nuxtServerInit({dispatch}){
        await dispatch("dispatchTareas");
    },
    async dispatchTareas({commit}){
        try {
            const {data} = await this.$axios.get("https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks", {
                headers: {
                    "Authorization": "Bearer " + `${process.env.API_KEY}`
                }
            });
            commit("SET_TAREAS", data);
        } catch (error) {
            console.log("Error on the get request: ", error);
        }
    }

}