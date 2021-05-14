import { SINGIN_CORRECTO, SINGOUT_CORRECTO } from "../types";

export default (state, action) => {
  switch (action.type) {
    case  SINGIN_CORRECTO:
      return {
          singIn: action.payload
      }
    case SINGOUT_CORRECTO:
      return {
        singIn: action.payload
      }
    default:
      return state;
  }
};
