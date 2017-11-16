import axios from 'axios';
import { API_PLANETS, API_PLANETS_PAGE } from '../API';

const fetchRequest = () => ({ type: 'FETCH_PLANETS_REQUEST' });
const fetchSuccess = (items) => ({ type: 'FETCH_PLANETS_SUCCESS', items });
const fetchError = () => ({ type: 'FETCH_PLANETS_ERROR' });

export default () => (dispatch) => {
  dispatch(fetchRequest());
  return axios.get(API_PLANETS)
    .then(({ data }) => Math.ceil(data.count / data.results.length))
    .then(count =>
      Promise.all(
        new Array(count)
          .fill(null)
          .map((e, i) => axios.get(`${API_PLANETS_PAGE}${i+1}`))
      )
    )
    .then(res => res.reduce((acc, e) => [...acc, ...e.data.results], []))
    .then(res => dispatch(fetchSuccess(res)))
    .catch(err => {
      console.warn(err);
      return dispatch(fetchError());
    });
}
