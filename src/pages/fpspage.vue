<template>
  <hBtn />
  <q-page
    class="flex flex center"
    style="display: flex; flex-direction: column"
  >
    <div class="q-mx-lg" id="s">
      Best Score :{{ this.bestScore }} current score :{{ this.score }} ammo:{{
        this.ammo
      }}
    </div>
    <q-btn
      clickable
      label="start game"
      class="q-mx-lg"
      @click="this.start()"
    ></q-btn>

    <div
      :class="{
        game: this.reloading == false,
        gamerel: this.reloading == true,
      }"
    >
      <div
        id="e1"
        this.start="true;"
        @click="cycle(0)"
        v-bind:class="{
          hide: this.hide[0] == true,
          enemy: this.life[0] == true,
        }"
      ></div>
      <div
        id="e2"
        @click="cycle(1)"
        v-bind:class="{
          hide: this.hide[1] == true,
          enemy: this.life[1] == true,
        }"
      ></div>
      <div
        id="e3"
        @click="cycle(2)"
        v-bind:class="{
          hide: this.hide[2] == true,
          enemy: this.life[2] == true,
        }"
      ></div>
      <div
        id="e4"
        @click="cycle(3)"
        v-bind:class="{
          hide: this.hide[3] == true,
          enemy: this.life[3] == true,
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
        style="position: static"
      >
        health<z v-if="this.showHlthNum">{{ `:${this.health}` }}</z>
      </div>
      <div
        v-bind:class="{
          IV: this.ammo >= 6,
          III: this.ammo <= 5,
          II: this.ammo <= 3,
          empty: this.ammo == 0,
        }"
        style="position: static"
      ></div>
    </div>
    <q-btn
      clickable
      label="reload"
      class="q-mx-lg q-mb-none"
      @click="reload()"
    ></q-btn>
    <div>
      <q-card class="q-pa-xl q-ma-lg">
        <h2 style="text-align: center">Game-settings</h2>
        <h6>showHlthNum</h6>
        <q-toggle v-model="this.showHlthNum"></q-toggle>
        <h6>Health</h6>
        <q-input v-model="this.health" outlined></q-input>
        <h6>cap</h6>
        <q-input v-model="this.mag" outlined></q-input>
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
      life: [false, false, false, false],
      hide: [true, true, true, true],
      health: 4,
      showHlthNum: false,
      hit: false,
      score: 0,
      bestScore: 0,
      ammo: 6,
      reloading: false,
      mag: 6,
      r: 6 * Math.random(),
    };
  },
  methods: {
    async sleep(a) {
      return new Promise((resolve) => setTimeout(resolve, a * 1000));
    },
    async cycle(x) {
      if (this.ammo > 0 && this.reloading == false) {
        this.ammo = this.ammo - 1;
        this.score = this.score + 1;
        this.life[x] = false;
        this.hide[x] = true;
        await this.sleep(this.r);
        this.hide[x] = false;
        this.life[x] = true;
        if (this.ammo == 0) {
          this.reloading = true;
          await this.sleep(3);
          this.ammo = this.mag;
          this.reloading = false;
        }
      }
    },
    async reload() {
      if (this.ammo < this.mag && this.ammo > 0) {
        this.reloading = true;
        await this.sleep(2);
        this.ammo = this.mag;
        this.reloading = false;
      }
    },
    async start() {
      this.life.fill(true, 0, 4);
      this.hide.fill(false, 0, 4);
      this.health = 4;
      this.score = 0;
      this.ammo = this.mag;
      await this.sleep(4);
      while (this.health > 0) {
        await this.sleep(10);
        this.life.forEach(async (x, i) => {
          if (x == true && this.health > 0) {
            this.health = this.health - 1;
            console.log(i);
          }
        });
      }
      if (this.score > this.bestScore) {
              this.bestScore = this.score;
            }
      this.life.fill(false, 0, 4);
      this.hide.fill(true, 0, 4);
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
.gamerel {
  background: rgb(0, 0, 0);
  width: 90vh;
  height: 70vh;
  margin: auto;
  position: relative;
  overflow: hidden;
  cursor: wait;
}
.enemy {
  background-color: rgb(74, 60, 60);
  width: 10vh;
  height: 50vh;
  position: absolute;
  bottom: 0px;
  transition: ease-in 0.5s;
}
.hide {
  background-color: darkred;
  width: 10vh;
  height: 50vh;
  position: absolute;
  bottom: -50vh;
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
.IV {
  margin-top: 18vh;
  border-right: solid rgb(95, 95, 0) 1vh;
  background-color: rgb(247, 0, 255);
  width: 4vh;
  height: 50vh;
  position: absolute;
  bottom: 0px;
  transition: ease-in 0.5s;
}
.III {
  margin-top: 23vh;
  border-right: solid rgb(95, 95, 0) 1vh;
  background-color: rgb(218, 31, 31);
  width: 4vh;
  height: 45vh;
  position: absolute;
  bottom: 0px;
  transition: ease-in 0.5s;
}
.II {
  margin-top: 38vh;
  border-right: solid rgb(95, 95, 0) 1vh;
  background-color: rgb(190, 218, 31);
  width: 4vh;
  height: 30vh;
  position: absolute;
  bottom: 0px;
  transition: ease-in 0.5s;
}
.empty {
  margin-top: 68vh;
  border-right: solid rgb(95, 95, 0) 1vh;
  background-color: rgb(57, 20, 205);
  width: 4vh;
  height: 0vh;
  position: absolute;
  bottom: 0px;
  transition: ease-in 0.5s;
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
#s {
  text-align: center;
}
</style>
