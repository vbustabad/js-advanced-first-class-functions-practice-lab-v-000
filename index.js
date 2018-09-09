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

const comparator = function (a, b) {
  return a.localeCompare(b);
});

const comparator = function (a, b) {
  return a.localeCompare(b);
};

const driversByRevenue = function(drivers) {
  return drivers.sort(comparator);
};

