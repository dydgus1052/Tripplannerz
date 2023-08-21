import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const notificationsCountState = atom({
  key: "notificationsCountState",
  default: 0,
});

const { persistAtom } = recoilPersist({
  key: "eventSourceLocal",
  storage: localStorage,
});

export const eventSource = atom({
  key: "eventSource",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
