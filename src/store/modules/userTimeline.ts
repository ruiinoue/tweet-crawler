import { InjectionKey, reactive } from "vue";
import axios from "axios";

import { Tweet } from "@/types/api/Tweet";

type userTimeline = {
  userId: string;
  screenName: string;
  sinceId: string;
  count: string;
  maxId: string;
  trimUser: string;
  excludeReplies: string;
  includeRts: string;
  userTimeline: Tweet[];
};

export const state: userTimeline = reactive({
  userId: "",
  screenName: "",
  sinceId: "",
  count: "",
  maxId: "",
  trimUser: "",
  excludeReplies: "",
  includeRts: "",
  userTimeline: [],
});

export const getters = {
  userId: (): string => state.userId,
  screenName: (): string => state.screenName,
  sinceId: (): string => state.sinceId,
  count: (): string => state.count,
  maxId: (): string => state.maxId,
  trimUser: (): string => state.trimUser,
  excludeReplies: (): string => state.excludeReplies,
  includeRts: (): string => state.includeRts,
  userTimeline: (): Tweet[] => state.userTimeline,
};

export const mutations = {
  setUserId: (userId: string): void => {
    state.userId = userId;
  },
  setScreenName: (screenName: string): void => {
    state.screenName = screenName;
  },
  setSinceId: (sinceId: string): void => {
    state.sinceId = sinceId;
  },
  setCount: (count: string): void => {
    state.count = count;
  },
  setMaxId: (maxId: string): void => {
    state.maxId = maxId;
  },
  setTrimUser: (trimUser: string): void => {
    state.trimUser = trimUser;
  },
  setExcludeReplies: (excludeReplies: string): void => {
    state.excludeReplies = excludeReplies;
  },
  setIncludeRts: (includeRts: string): void => {
    state.includeRts = includeRts;
  },
  setUserTimeline: (userTimeline: Tweet[]): void => {
    state.userTimeline.splice(0);
    userTimeline.forEach((tweet) => {
      state.userTimeline = [...state.userTimeline, tweet];
    });
  },
};

export const actions = {
  getUserTimeline: async (): Promise<void> => {
    const userInfo = (): string => {
      return state.userId !== "" && state.screenName === ""
        ? `?user_id=${state.userId}`
        : state.userId === "" && state.screenName !== ""
        ? `?screen_name=${state.screenName}`
        : "";
    };
    const sinceId = (): string => {
      return state.sinceId !== "" ? `&since_id=${state.sinceId}` : "";
    };
    const count = (): string => {
      return state.count !== "" ? `&count=${state.count}` : "";
    };
    const maxId = (): string => {
      return state.maxId !== "" ? `&max_id=${state.maxId}` : "";
    };
    const trimUser = (): string => {
      return state.trimUser !== "" ? `&trim_user=${state.trimUser}` : "";
    };
    const excludeReplies = (): string => {
      return state.excludeReplies !== ""
        ? `&exclude_replies=${state.excludeReplies}`
        : "";
    };
    const includeRts = (): string => {
      return state.includeRts !== "" ? `&include_rts=${state.includeRts}` : "";
    };

    const response = await axios.get<Tweet[]>(
      `${
        process.env.VUE_APP_API_BASE_URL
      }/v1.1/user_timeline${userInfo()}${sinceId()}${count()}${maxId()}${trimUser()}${excludeReplies()}${includeRts()}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_TWITTER_BEARER_TOKEN}`,
        },
      }
    );
    if (response.data.length !== 0) {
      mutations.setUserTimeline(response.data);
    } else {
      alert("ツイートはありません");
    }
  },
};

const userTimelineStore = {
  state,
  getters,
  mutations,
  actions,
};

export const useUserTimeline = (): typeof userTimelineStore =>
  userTimelineStore;

export const userTimelineStoreKey: InjectionKey<typeof userTimelineStore> =
  Symbol("userTimelineStore");
