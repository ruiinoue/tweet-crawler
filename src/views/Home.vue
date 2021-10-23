<template>
  <div class="home">
    <button @click="test">テスト</button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import axios from "axios";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const test = () => {
      axios
        .get(
          "https://check-twitter-api.an.r.appspot.com/v1.1/user_timeline?screen_name=inouuuuuuuu_00&count=2",
          {
            headers: {
              Authorization:
                "Bearer AAAAAAAAAAAAAAAAAAAAABkvUgEAAAAATu7nL8iEzidNsVTGuDFFw3A0c6g%3Dv9sIHn1cRYzDaSUl4RvqdT6G8cEGD40hrJloNzTInMki7cIEGs",
            },
          }
        )
        .then(({ data }) => console.log(data));
    };

    return {
      test,
    };
  },
});
</script>
