<template>
  <hBtn /><q-page>
    <q-card
      style="
        display: flex;
        justify-content: center;
        background-color: darkblue;
        margin-left: 15vh;
        height: 60vh;
        width: 70vh;
      "
    >
      <div class="q-pa-md">
        <div
          style="
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
          "
        >
          <q-chat-message :text="['what can i get you today?']" />
          <q-chat-message
            :text="[`can i get a ${this.order}`]"
            sent
            style="margin: 10vh; margin-right: 0px"
          />
          <q-chat-message v-if="this.served == true" :text="['here you go']" />
          <q-chat-message
            v-if="this.stat == 'cor'"
            :text="['cool thank you']"
            sent
          />
          <q-chat-message
            v-if="this.stat == 'wop'"
            :text="['i didnt order it']"
            sent></q-chat-message>
            <q-chat-message v-if="this.served== false">
              <q-spinner-dots size="2rem" />
            </q-chat-message>
            <q-chat-message v-if="this.stat =='none'" sent>
            <q-spinner-dots size="2rem" />
          </q-chat-message>
        </div>
      </div>
    </q-card>
    <q-card
      style="
        height: max-content;
        width: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: gray;
      "
    >
      <q-card
        style="
          margin: 1vh;
          height: 15vh;
          width: 26vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: red;
        "
        ><h9>hotdog</h9> <input v-model="this.stock[0]" /><nCount
          @click="serve(0)"
      /></q-card>
      <q-card
        style="
          margin: 1vh;
          height: 15vh;
          width: 26vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: orange;
        "
        ><h9>burger</h9> <input v-model="this.stock[1]" /><nCount
          @click="serve(1)"
      /></q-card>
      <q-card
        style="
          margin: 1vh;
          height: 15vh;
          width: 26vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: green;
        "
      >
        <h9>salad</h9>
        <input v-model="this.stock[2]" /><nCount @click="serve(2)" /></q-card
    ></q-card>
    <q-btn
      color="primary"
      label="restock"
      icon="recycling"
      style="height: 7vh; width: 100vh"
      @click="restock()"
  /></q-page>
</template>
<script>
import hBtn from "src/components/hBtn.vue";
import nCount from "src/components/numCount.vue";
export default {
  components: { hBtn, nCount },
  data() {
    return {
      stock: [10, 10, 10],
      order: "salad",
      menu: ["hotdog", "burger", "salad"],
      served: false,
      stat: "none",
    };
  },
  methods: {
    async sleep(a) {
      return new Promise((resolve) => setTimeout(resolve, a * 1000));
    },
    ordering() {
      let rnd = Math.floor(Math.random() * 3);
      this.order = this.menu[rnd];
    },
    async serve(a) {
      if (this.stock[a] != "out of stock") {
        if (this.stock[a] > 0) {
          this.stock[a] = this.stock[a] - 1;
          this.served = true;
        }
        if (this.stock[a] == 0) {
          this.stock[a] = "out of stock";
          this.served = true;
        }
        if (this.menu[a] == this.order) {
          await this.sleep(1);
          this.stat = "cor";
        } else {
          await this.sleep(1);
          this.stat = "wop";
        }
        await this.sleep(.5);
        this.stat = "none";
        this.served = false;
        this.ordering();
      }
    },
    restock() {
      this.stock.forEach((el, i) => {
        if (el == "out of stock") {
          this.stock[i] = 5;
        }
      });
    },
  },
};
</script>
