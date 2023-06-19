<template>
  <q-page class="full-width flex flex-center">
    <q-card
      class="q-pa-xl"
      style="width: 90vh; height: 75vh; border-radius: 20px"
      align:center
    >
      <h4 class="text-left q-pb-xs" style="font-weight: bolder">
        Welcome to
        <h2
          style="
            width: max-content;
            color: gainsboro;
            border-style: dashed;
            border-color: black;
            background-color: black;
            border-width: 20px;
            border-radius: 20px;
          "
        >
          [REDACTED]
        </h2>
      </h4>
      <div
        class="flex flex center"
        style="
          padding-left: 1vh;
          margin-right: 1vh;
          height: 25vh;
          width: 75vh;
          display: inline-flex;
          flex-direction: row;
          display: flex;
          justify-content: space-evenly;
          background-color: lightgray;
          border-style: solid;
        "
      >
        <q-btn
          clickable
          @click="$router.push('/fps')"
          color="black"
          icon="adjust"
          class="q-ma-sm"
          style="height: 50px; width: 50px"
        >
        </q-btn>
        <q-btn
          clickable
          @click="$router.push('/num')"
          color="accent"
          icon="tag"
          class="q-ma-sm"
          style="height: 50px; width: 50px"
        >
        </q-btn>
        <q-btn
          clickable
          @click="$router.push('/td')"
          color="positive"
          icon="check"
          class="q-ma-sm"
          style="height: 50px; width: 50px"
        >
        </q-btn>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>
