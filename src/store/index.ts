import { InjectionKey, reactive, readonly } from "vue";

import {
  state as userTimelineState,
  getters as userTimelineGetters,
  mutations as userTimelineMutations,
  actions as userTimelineActions,
} from "./modules/userTimeline";

const state = reactive({
  userTimeline: userTimelineState,
});

const getters = {
  userTimeline: userTimelineGetters,
};

const mutations = {
  userTimeline: userTimelineMutations,
};

const actions = {
  userTimeline: userTimelineActions,
};

export const store = {
  state: readonly(state),
  getters,
  mutations,
  actions,
};

export const storeKey: InjectionKey<typeof store> = Symbol("storeKey");
