import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    default:
      return state;
  }
};
