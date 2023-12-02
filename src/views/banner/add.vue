<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="mr40 mt20">
          <router-link to="/list-banner">
            <img src="../../assets/icons/back.svg" />
          </router-link>
        </div>
        <div>
          <h1 class="m0">Add Banner</h1>
          <p class="mt5 mb20 tc-green">
            Make your customers tempted to shop via banners
          </p>
        </div>
      </div>
      <hr class="uline-grey" />
      <div class="mt50 row">
        <div class="w20">
          <label for="file" class="form-label">Banner Image</label>
        </div>
        <div class="form-upload">
          <input
          class="form-upload"
            type="file"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
          />
          <label><img class = "tc-green" src="../../assets/icons/imageadd.svg" alt= "Tambahkan Foto" style="width: 40px;">
            <p class="center tc-green">Tambahkan Foto</p>
          </label>
        </div>
      </div>
      <div class="mt30 row">
        <div class="w20">
          <label class="form-label" for="bannerName">Banner Name</label>
        </div>
        <div class="w80">
          <input
            class="form-text"
            id="bannerName"
            v-model="bannerName"
            @input="checkLength"
            maxlength="20"
            type="text"
            placeholder="Masukkan Banner Name"
            />
            <div class="character-count detail-title-bold">| {{ this.bannerName.length }} / 20</div>
        </div>
      </div>
      <div class="mt30 row">
        <div class="w20">
          <label class="form-label">Broadcast Schedule</label>
        </div>
        <div class="w80">
          <input class="form-text" type="text" placeholder="Pilih Hari" />
        </div>
      </div>
      <div class="mt30 row">
        <div class="w20">
          <label class="form-label">Valid From</label>
        </div>
        <div class="w80">
          <input class="form-text" type="text" placeholder="Masukkan Tanggal" />
        </div>
      </div>
      <div class="mt30 row">
        <div class="w20">
          <label class="form-label">Valid Until</label>
        </div>
        <div class="w80">
          <input class="form-text" type="text" placeholder="Masukkan Tanggal" />
        </div>
      </div>
      <div class="flex mt30">
        <router-link to="/list-user">
          <button v-on:click="submitFile()" class="bt-submit-green">
            Add User
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-banner",
  data() {
    return {
      file: "",
      bannerName: "",
      checkLength: 5,
    };
  },
  methods: {
    submitFile() {
      /* Ketika tombol submit diklik, kirim file ke server */
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    checkLength() {
      if (this.bannerName.length > 20 || checkLength < 5) {
        this.bannerName = alert("Nama Banner tidak boleh melebihi 20 karakter atau kurang dari 5 karakter");
      }
    },
  },
};
</script>
