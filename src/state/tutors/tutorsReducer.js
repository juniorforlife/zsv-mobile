const initState = {
  data: [],
};
export default (state = initState, action) => {
  const {payload} = action;
  switch (action.type) {
    case 'GET_TUTORS': {
      return {
        data: payload.data,
      };
    }
    default: {
      return state;
    }
  }
};
