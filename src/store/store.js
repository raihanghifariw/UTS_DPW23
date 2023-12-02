// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'

// Vue.use(Vuex)

// const state = {
// 	items: [],
// }

// const mutations = {
// 	updateQty(state, payload){
// 		axios.put('http://localhost:3000/items/' + payload.id, payload)
// 	},
// 	setItem(state, payload){
// 		if(payload.from == 'catalog'){
// 			payload.item.is_selected = true
// 			axios.put('http://localhost:3000/items/' + payload.item.id, payload.item)
// 		}
// 		else{
// 			payload.item.is_selected = false
// 			payload.item.qty = 1
// 			axios.put('http://localhost:3000/items/' + payload.item.id, payload.item)
// 		}
// 	},
// 	setItems(state, payload){
// 		state.items = payload
// 	},
// 	sortItems(state, payload){
// 		if(payload == 1){
// 			state.items = state.items.sort((a, b) => {
// 				if (a.price < b.price) {
// 					return -1;
// 				}
// 			});
// 		}
// 		else if(payload == 2){
// 			state.items = state.items.sort((a, b) => {
// 				if (a.price > b.price) {
// 					return -1;
// 				}
// 			});
// 		}
// 		else if(payload == 3){
// 			state.items = state.items.sort((a, b) => {
// 				if (a.name < b.name) {
// 					return -1;
// 				}
// 			});
// 		}
// 		else if(payload == 4){
// 			state.items = state.items.sort((a, b) => {
// 				if (a.name > b.name) {
// 					return -1;
// 				}
// 			});
// 		}
// 		else{
// 			state.items = state.items.sort((a, b) => {
// 				if (a.id < b.id) {
// 					return -1;
// 				}
// 			});
// 		}
// 	}
// }

// const actions = {
// 	getItems: ({commit, state}) => {
// 		try{
// 			const getData = async () => {
// 				try {
// 					const res = await axios.get('http://localhost:3000/items');
// 					console.log(res.data);
// 					commit('setItems', res.data)
// 				} catch (err) {
// 					console.error(err);
// 				}
// 			};
// 			getData();
// 		}catch(e){
// 			console.log(e)
// 		}
// 	},
// }

// export default new Vuex.Store({
// 	state,
// 	mutations,
// 	actions
// })
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  selected_menu: "user",
  user: {
    detail: {
      id: "",
      name: "",
      username: "",
      email: "",
      role: 0,
      image: "",
    },
    list: [],
    search: "",
  },
};

const mutations = {
  setSelectedMenu(state, payload) {
    state.selected_menu = payload;
  },
  setDetailUser(state, payload) {
    state.user.detail = payload;
  },
  setListUser(state, payload) {
    state.user.list = payload;
  },
  setSearchUser(state, payload) {
    console.log("set asjdkhaskjld");
    state.user.search = payload;
  },
};

const actions = {
  addUser: ({ commit, state, dispatch }, payload) => {
    try {
      axios.post("http://localhost:3000/user", payload);
      dispatch("listUser");
    } catch (e) {
      console.log(e);
    }
  },
  listUser: ({ commit, state }) => {
    try {
      const getData = async () => {
        try {
          const res = await axios.get("http://localhost:3000/user");
          if (state.user.search) {
            let filter = [
              res.data.find((user) => user.username === state.user.search),
            ];
            commit("setListUser", filter[0] !== undefined ? filter : []);
          } else {
            commit("setListUser", res.data);
          }
        } catch (err) {
          console.error(err);
        }
      };
      getData();
    } catch (e) {
      console.log(e);
    }
  },
  detailUser: ({ commit, state }, id) => {
    try {
      const getDetail = async () => {
        try {
          const res = await axios.get("http://localhost:3000/user/" + id);
          commit("setDetailUser", res.data);
        } catch (err) {
          console.error(err);
        }
      };
      getDetail();
    } catch (e) {
      console.log(e);
    }
  },
  deleteUser: ({ commit, state, dispatch }, id) => {
    try {
      const delUser = async () => {
        try {
          const res = await axios.delete("http://localhost:3000/user/" + id);
          if (res.status === 200) {
            dispatch("listUser");
          }
        } catch (err) {
          console.error(err);
        }
      };
      delUser();
    } catch (e) {
      console.log(e);
    }
  },
  editUser: ({ commit, state, dispatch }, data) => {
    try {
      const delUser = async () => {
        try {
          const res = await axios.put("http://localhost:3000/user/" + data.id, {
            name: data.name,
            username: data.username,
            email: data.email,
            role: parseInt(data.role),
            image: data.image,
          });
          if (res.status === 200) {
            dispatch("listUser");
          }
        } catch (err) {
          console.error(err);
        }
      };
      delUser();
    } catch (e) {
      console.log(e);
    }
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});

