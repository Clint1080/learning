import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch) => {
  const { data } = await streams.post("/streams", formValues);

  dispatch({ type: CREATE_STREAM, payload: data });
};

export const fetchStreams = () => async (dispatch) => {
  const { data } = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: data });
};

export const fetchStream = (streamId) => async (dispatch) => {
  const { data } = await streams.get(`streams/${streamId}`);

  dispatch({ type: FETCH_STREAM, payload: data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const { data } = await streams.put(`streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
