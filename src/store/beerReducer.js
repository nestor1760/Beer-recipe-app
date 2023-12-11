
export const BeerActionTypes = {
  REQUEST_BEER_SUCCESS: 'REQUEST_BEER_SUCCESS',
  REQUEST_BEER_LOADING: 'REQUEST_BEER_LOADING',
  REQUEST_BEER_ERROR: 'REQUEST_BEER_ERROR',

}

const initialState = {
  beers: null,
  loading: true,
  error: false,
}

export const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BeerActionTypes.REQUEST_BEER_SUCCESS:
      return {...state, loading: false, error: null, beers: action.payload}
    case BeerActionTypes.REQUEST_BEER_LOADING:
      return {...state, loading: true, error: null}
    case BeerActionTypes.REQUEST_BEER_ERROR:
      return {...state, loading: false, error: action.payload, beers: null}
    
    
      default:
      return state
  }
}

export const beerRequestSuccessAction = (data) => ({type: BeerActionTypes.REQUEST_BEER_SUCCESS, payload: data})
export const beerRequestLoadingAction = () => ({type: BeerActionTypes.REQUEST_BEER_LOADING})
export const beerRequestErrorAction = (error) => ({type: BeerActionTypes.REQUEST_BEER_ERROR, payload: error})