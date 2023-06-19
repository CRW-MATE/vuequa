<template>
  <hBtn/>
  <q-page class="full-width">
    <div class="full-width flex flex-center">
      <q-card class="q-pa-xl" align:center>
        <h5 class="q-mx-xl text-center">{{ num }}</h5>
        <q-btn
          width:20px
          color="primary"
          clickable
          @click="num++"
          label="+"
          class="q-px-xl q-mr-sm"
        />
        <q-btn
          width:20px
          color="primary"
          clickable
          @click="num--"
          label="-"
          class="q-px-xl"
        />
        <br />
        <q-btn
          width:20px
          color="primary"
          clickable
          v-on:click="num = 0"
          label="reset"
          class="q-mt-sm full-width"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script>
import hBtn from 'src/components/hBtn.vue';
export default{
  name: "App-2",
  components:{hBtn},
  data() {
    return { num: 0 };
  }
};
</script>
