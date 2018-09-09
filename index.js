// Code your solution in this file!

const logDriverNames = function(drivers) {
  return drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, hometown) {
  return drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const sort_by_revenue = function (num1, num2) {
  return num1 - num2;
};

const driversByRevenue = function(drivers) {
  return drivers.sort(sort_by_revenue);
};
