<template>
  <hBtn />
  <q-page>
    <div class="flex justify-center q-pa-xl">
      <q-input
        @keydown.enter="
          ftodo();
          text = '';
        "
        outlined
        filled
        v-model.trim="text"
        label="Whats on your mind"
        class="q-px-none"
        ><template v-slot:prepend
          ><q-icon
            name="close"
            @click="text = ''"
            class="cursor-pointer"
          /> </template
        ><template v-slot:append
          ><q-icon
            name="check"
            @click="
              ftodo();
              text = '';
            "
            class="cursor-pointer"
          /> </template
      ></q-input>
    </div>
    <div
      v-for="(el, i) in todo"
      :key="i"
      style="display: flex; justify-content: center"
    >
      <q-card style="width: 65vh; height: 5vh" class="q-my-md"
        >{{ el }}
        <div
          style="
            border: solid;
            border-color: gray;
            border-top: white;
            background-color: lightgray;
            display: flex;
            justify-content: end;
            align-content: start;
          "
        >
          <q-icon
            color="positive"
            name="check"
            @click="todo.splice(key, 1)"
            class="cursor-pointer q-mr-md"
            style="
              display: flex;
              justify-self: end;
              align-self: center;
              border: solid;
            "
          />
          <q-icon
            color="red"
            name="delete"
            @click="todo.splice(todo.indexOf(el), 1)"
            class="cursor-pointer q-mr-md"
            style="
              display: flex;
              justify-self: end;
              align-self: center;
              border: solid;
            "
          />
        </div>
      </q-card></div
  ></q-page>
</template>
<script>
import hBtn from "src/components/hBtn.vue";
export default {
  name: "App-1",
  components: { hBtn },
  data() {
    return {
      todo: [],
      text: "",
    };
  },
  methods: {
    ftodo() {
      if (this.text.trim() !== "") {
        this.todo.push(this.text.trim());
      }
    },
  },
};
</script>
