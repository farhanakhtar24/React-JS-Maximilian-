/*
Whenever we need to schedule a state update which depends on a previous state using the state upadting function 
from useState function we use a function insde of the the function which is returned by the useState function
like:
setEnteredAmount("23")❌
setEnteredAmount(prevState){
    return {...prevState,23};
}
*/