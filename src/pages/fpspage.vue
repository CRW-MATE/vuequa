<template>
  <hBtn />
  <q-page class="flex flex center" style="display: flex; flex-direction: column"
    ><q-btn
      clickable
      label="reset health"
      class="q-mx-lg"
      @click="this.health = 3"
    ></q-btn>
    <div class="game">
      <div
        id="e1"
        this.start="true;"
        @click="cycle(0)"
        v-bind:class="{
          hide: this.hide[0] == true,
          enemy: this.life[0] == true,
          deadc: this.death[0] == true,
        }"
      ></div>
      <div
        id="e2"
        @click="cycle(1)"
        v-bind:class="{
          hide: this.hide[1] == true,
          enemy: this.life[1] == true,
          deadc: this.death[1] == true,
        }"
      ></div>
      <div
        id="e3"
        @click="cycle(2)"
        v-bind:class="{
          hide: this.hide[2] == true,
          enemy: this.life[2] == true,
          deadc: this.death[2] == true,
        }"
      ></div>
      <div
        id="e4"
        @click="cycle(3)"
        v-bind:class="{
          hide: this.hide[3] == true,
          enemy: this.life[3] == true,
          deadc: this.death[3] == true,
        }"
      ></div>

      <div
        v-bind:class="{
          th: this.health >= 3,
          tw: this.health == 2,
          one: this.health == 1,
          zero: this.health == 0,
          hit: this.hit == true,
        }"
      >
        health<z v-if="this.showHlthNum">{{ `:${this.health}` }}</z>
      </div>
    </div>
    <div>
      <q-card class="q-pa-xl q-ma-lg">
        <h6>showHlthNum</h6>
        <q-toggle v-model="this.showHlthNum"></q-toggle>
        <h6>Health</h6>
        <q-input v-model="this.health" outlined></q-input>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import hBtn from "src/components/hBtn.vue";
export default {
  name: "PageIndex",
  components: { hBtn },
  data() {
    return {
      death: [false, false, false, false],
      hide: [false, false, false, false],
      life: [true, true, true, true],
      health: 3,
      showHlthNum: false,
      hit: false,
    };
  },
  methods: {
    async sleep(a) {
      return new Promise((resolve) => setTimeout(resolve, a * 1000));
    },
    async cycle(x) {
      this.life[x] = false;
      this.death[x] = true;
      await this.sleep(0.5);
      this.death[x] = false;
      this.hide[x] = true;
      await this.sleep(6 * Math.random());
      this.hide[x] = false;
      this.life[x] = true;
      await this.sleep(3);
      for (let i = 0; this.life[x] == true && this.health > i; ) {
        await this.sleep(7);
        if (this.health > i) {
          this.health = this.health - 1;
          this.hit = true;
          await this.sleep(0.7);
          this.hit = false;
        } else {
          this.life.forEach((_a) => (_a = false));
          await this.sleep(2);
          this.life.forEach((_a) => (_a = true));
        }
      }
    },
  },
};
</script>
<style>
.game {
  background: rgb(0, 0, 0);
  width: 90vh;
  height: 70vh;
  margin: auto;
  position: relative;
  overflow: hidden;
  cursor: crosshair;
}
.enemy {
  background-color: gray;
  width: 10vh;
  height: 50vh;
  position: absolute;
  bottom: 0px;
  transition: ease-in 0.5s;
}
.hide {
  background-color: gray;
  width: 10vh;
  height: 50vh;
  position: absolute;
  bottom: -50vh;
  transition: ease-in 0.5s;
}
.deadc {
  background-color: darkred;
  width: 10vh;
  height: 20vh;
  position: absolute;
  bottom: 0px;
  transition: ease-in 0.5s;
}

.th {
  background-color: rgb(204, 53, 53);
  text-align: center;
  width: 90vh;
  border: black;
  position: fixed;
}

.tw {
  background-color: rgb(115, 27, 27);
  text-align: center;
  width: 75vh;
  border: black;
  transition: ease-in 0.5s;
  position: fixed;
}

.one {
  background-color: rgb(100, 23, 23);
  width: 45vh;
  border: black;
  text-align: center;
  transition: ease-in 0.5s;
  position: fixed;
}
.zero {
  background-color: rgb(170, 232, 255);
  border: black;
  text-align: center;
  width: 90vh;
  transition: ease-in 0.5s;
  position: fixed;
}
.hit {
  border: dashed;
  border-color: rgb(243, 195, 195);
  text-align: center;
  transition: ease-in 0.5s;
  position: fixed;
}

#e1 {
  left: 10vh;
}
#e2 {
  left: 30vh;
}
#e3 {
  left: 50vh;
}
#e4 {
  left: 70vh;
}
</style>
