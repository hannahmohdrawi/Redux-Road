const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
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
      const newSupplies = state.supplies - (20*days);
      if(newSupplies < 0 ){
        return state;
      }
      return {
        ...state, 
        supplies: newSupplies,
        distance: state.distance + (10*days), 
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
    case 'sell':{
      return{
        ...state, 
        supplies: state.supplies - 20,
        distance: state.distance,
        days: state.days,
        cash: state.cash + 5
      }
    }
    case 'buy':{
      return{
        ...state, 
        supplies: state.supplies + 25,
        distance: state.distance,
        days: state.days,
        cash: state.cash - 15
      }
    }
    case 'theft':{
      return{
        ...state, 
        supplies: state.supplies ,
        distance: state.distance,
        days: state.days,
        cash: state.cash / 2
      }
    }
    default: {
      return state;
    }
  }
}

let wagon = wagonReducer(undefined, {});
console.log(wagon);

//First day
wagon = wagonReducer(wagon, {type:'travel', payload:1})
console.log(wagon);

//Second day
wagon=wagonReducer(wagon, {type:'gather'})
console.log(wagon);

//Third day
wagon = wagonReducer(wagon, {type:'tippedWagon'})
console.log(wagon);

//Fourth day
wagon = wagonReducer(wagon, {type: 'travel', payload: 3})
console.log(wagon);

//Question 12 check
wagon = wagonReducer(wagon, {type: 'travel', payload: 3})
console.log(wagon);

//Question 13 check
//Theft check:
wagon = wagonReducer(wagon, {type: 'theft', payload: 3})
console.log(wagon);

//Sell check:
wagon = wagonReducer(wagon, {type: 'sell', payload: 3})
console.log(wagon);

//Buy check:
wagon = wagonReducer(wagon, {type: 'buy', payload: 3})
console.log(wagon);

