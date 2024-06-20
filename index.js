const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
  }
  
  const wagonReducer = (state = initialWagonState, action) => {
    switch (action.type){
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1
        }
        
      }
      case 'travel': {
        const days = action.payload;
        return {
          ...state, 
          supplies: state.supplies - (20*days),
          distance: state.distance - (10*days), 
          days: state.days + days
        }
      }
      case 'tippedWagon':{
        return {
          ...state, 
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days + 1
        }
      }
      default: {
        return state;
      }
  }
  
  let wagon = reducer{(undefined), []}
  console.log(wagon);