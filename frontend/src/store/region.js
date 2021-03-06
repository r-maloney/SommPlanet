const SET_REGIONS = "regions/SET_REGIONS";

const setRegions = (payload) => ({
  type: SET_REGIONS,
  payload,
});

export const getRegions = () => async (dispatch) => {
  const res = await fetch(`/api/regions`);
  if (res.ok) {
    const regions = await res.json();
    dispatch(setRegions(regions));
  }
};

const initState = {};

const regionReducer = (state = initState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_REGIONS:
      for (let region of action.payload) {
        newState[region.id] = region;
      }
      return newState;
    default:
      return state;
  }
};

export default regionReducer;
