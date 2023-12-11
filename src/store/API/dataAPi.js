import axios from 'axios';
import { beerRequestErrorAction, beerRequestLoadingAction, beerRequestSuccessAction} from '../beerReducer'

export const dataBeers = (beers) => async (dispatch) => {
  dispatch(beerRequestLoadingAction())
  try {
    const responce = await axios.get(beers)
    dispatch(beerRequestSuccessAction(responce.data))
  } catch (error) {
    dispatch(beerRequestErrorAction(error))
  }
}
