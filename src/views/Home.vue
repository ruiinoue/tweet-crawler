<template>
  <div class="home">
    <button @click="test">テスト</button>
    <div>{{ userTimeline }}</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, provide } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import axios from "axios";
import { useUserTimeline } from "@/store/modules/userTimeline"; // @ is an alias to /src
import { store, storeKey } from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    provide(storeKey, store);

    const test = () => {
      axios
        .get(
          "https://check-twitter-api.an.r.appspot.com/v1.1/user_timeline?screen_name=misaki_srt_love&count=10",
          {
            headers: {
              Authorization:
                "Bearer AAAAAAAAAAAAAAAAAAAAABkvUgEAAAAArn772RqyAWzaV%2BJX62C7pwWVOnE%3DksCVHD2rSbTj94YCrEWWb0Sf0wUOwfhPoytRdfpW5eJw98KIuJ",
            },
          }
        )
        .then(({ data }) => console.log(data));
    };

    const userTimelineStore = useUserTimeline();

    onMounted(async () => {
      userTimelineStore.mutations.setScreenName("misaki_srt_love");
      userTimelineStore.mutations.setCount("4");
      await userTimelineStore.actions.getUserTimeline();
    });

    const userTimeline = computed(() => {
      return userTimelineStore.getters.userTimeline()
    });

    return {
      test,
      userTimeline,
    };
  },
});
</script>
