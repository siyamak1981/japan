// const state = {
//     isLoggedIn: false,
//     userDetailes: {}
// };
// // const getters = {
// //     isLoggedIn(state){
// //         return state.isLoggedIn
// //     }
// // }

// const mutations = {
//     setLoggedIn(state, payload) {
//         state.isLoggedIn = payload;
//     }
// };
// const actions = {
//     login(context, payload) {
//         return new Promise((resolve, reject) => {
//             axios
//                 .post("localhost:8000/api/login", payload)
//                 .then(response => {
//                     const token = response.data.success.token;
//                     console.log(token)
//                     localStorage.setItem("access_token", token);
//                     localStorage.setItem("user", response.data.success.name);
//                     context.commit("setLoggedIn", true);
//                     resolve(response);
//                     //   this.status = response.status;
//                     //   if (localStorage.getItem("access_token") != null) {
//                     //     setTimeout(() => {
//                     //       this.$router.push("/landing");
//                     //     }, 4000);
//                     //   }
//                 })
//                 .catch(error => {
//                     reject(error);
//                 });
//         });
//     }
// };

// export default {
//     namespaced: true,
//     state,
//     mutations,
//     // getters,
//     actions
// };
