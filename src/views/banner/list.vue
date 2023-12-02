<template>
  <div>
    <Menu />
    <div class="container">
      <h1 class="m0">Banner</h1>
      <div class="row">
        <div class="col">
          <p class="mt5 mb20 tc-green">
            Manage your Banner to atrract visitor's attention
          </p>
        </div>
        <div class="col flex">
          <router-link to="/add-banner">
            <button class="bt-green">+ Add</button>
          </router-link>
        </div>
      </div>
      <div class="row bg-blue mt10 p10">
        <div class="col">
          <input
            class="search-field"
            type="text"
            id="deskripsi"
            placeholder="Search by invoice number, name, amount..."
          />
        </div>
        <div class="col flex">
          <button class="bt-blue">Filter</button>
        </div>
      </div>
      <div class="mt50">
        <table>
          <thead>
            <tr>
              <th>BANNER NAME</th>
              <th>BROADCAST SCHEDULE</th>
              <th>VALID FROM</th>
              <th>VALID UNTIL</th>
              <th>BANNER STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of list_banner" :key="item.id">
              <td class="center">{{ item.bannername }}</td>
              <td class="center">{{ item.broadcastschedule }}</td>
              <td class="center">
                <label class="label-green">{{ item.validfrom }}</label>
              </td>
              <td class="center">
                <label class="label-green">{{ item.validuntil }}</label>
              </td>
              <td class="center">
                <div v-if="item.active === true">
                  <label class="label-green">{{ item.bannerstatus }}</label>
                </div>
                <div v-if="item.active === false">
                  <label class="label-red">{{ item.bannerstatus }}</label>
                </div>
              </td>
              <td class="center">
                <div class="mt5">
                  <router-link to="/edit-banner">
                    <img src="../../assets/icons/edit.svg" />
                  </router-link>
                </div>
                <div class="mt5">
                  <router-link to="/detail-banner">
                    <img src="../../assets/icons/detail.svg" />
                  </router-link>
                </div>
                <div class="mt5">
                  <img src="../../assets/icons/delete.svg" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../../components/menu.vue";

export default {
  name: "list-banner",
  components: {
    Menu,
  },
  data() {
    return {
      list_banner: [
        {
          id: "1",
          bannername: "NEW PHONE",
          broadcastschedule: "senin",
          validfrom: "01-06-2021",
          validuntil: "03-06-2021",
          bannerstatus: "Active",
          active: true,
        },
        {
          id: "2",
          bannername: "Snaphat",
          broadcastschedule: "Kamis",
          validfrom: "05-06-2021",
          validuntil: "06-06-2021",
          bannerstatus: "Active",
          active: true,
        },
        {
          id: "3",
          bannername: "Speaker Jdoo",
          broadcastschedule: "Jumat",
          validfrom: "08-06-2021",
          validuntil: "09-06-2021",
          bannerstatus: "Inactive",
          active: false,
        },
        {
          id: "4",
          bannername: "Bowling",
          broadcastschedule: "Minggu",
          validfrom: "15-05-2021",
          validuntil: "16-05-2021",
          bannerstatus: "Inactive",
          active: false,
        },
        {
          id: "5",
          bannername: "Laptop Gaming",
          broadcastschedule: "Rabu",
          validfrom: "20-10-2021",
          validuntil: "22-10-2021",
          bannerstatus: "Active",
          active: true,
        },
      ],
    };
  },
};
</script>
