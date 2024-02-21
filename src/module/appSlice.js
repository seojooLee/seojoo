import {
  createSlice,
  createDraftSafeSelector,
  PayloadAction,
} from "@reduxjs/toolkit";
interface MainPayload {
  placeId: string;
  placeNm: string;
  accountId: string;
  licenseSeat: string;
}

interface PlaceState {
  placeList: Array<PlaceInfo>;
  placeInfo: PlaceInfo;
  actionResult: string;
  isLoading: boolean;
  error: string | null;
}

const placeInitialState: PlaceState = {
  placeInfo: {},
  placeList: [],
  placeAliasList: [],
  actionResult: "",
  isLoading: false,
  error: null,
};

const reducers = {
  list: (state: PlaceState, { payload }: PayloadAction<PlacePayload>) => {
    state.actionResult = "LIST_REQ";
    state.isLoading = true;
    state.error = null;
  },
};

const slice = createSlice({
  name: "place",
  initialState: placeInitialState,
  reducers: reducers,
});

const selectPlaceList = createDraftSafeSelector(
  (state: PlaceState) => state.placeList,
  (placeList) => placeList
);

const selectStatus = createDraftSafeSelector(
  (state: PlaceState) => state.actionResult,
  (state: PlaceState) => state.isLoading,
  (state: PlaceState) => state.error,
  (actionResult, isLoading, error) => ({ actionResult, isLoading, error })
);

export const placeSelector = {
  placeList: (state) => selectPlaceList(state[MAIN]),
  status: (state) => selectStatus(state[MAIN]),
};

export const MAIN = slice.name;
export const mainReducer = slice.reducer;
export const placeAction = slice.actions;
