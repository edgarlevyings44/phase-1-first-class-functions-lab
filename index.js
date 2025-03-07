// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2, drivers.length);
  };
  
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = (multiplier) => {
    // returns a function
    return (fare) => {
      return fare * multiplier;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = (drivers, anyValue) => {
    return anyValue(drivers);
  };
    
