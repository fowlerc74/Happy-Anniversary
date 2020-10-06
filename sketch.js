var y = 2019
var m = 9
var d = 25
var days = 0;

function setup() {
  createCanvas(400, 400);
  
  if (year() >= 2020) {
    days += 97;
  }
  
  days += (year() - 2020) * 365;
  
  if (month() > 1) {
    days += 31; // jan
  } 
  if (month() > 2) {
    days += 28; // fab
  }
  if (month() > 3) {
    days += 31; // mar
  }
  if (month() > 4) {
    days += 30; // apr
  }
  if (month() > 5) {
    days += 31; // may
  }
  if (month() > 6) {
    days += 30; // jun
  }
  if (month() > 7) {
    days += 31; // jul
  }
  if (month() > 8) {
    days += 31; // aug
  }
  if (month() > 9) {
    days += 30; // sep
  } 
  if (month() > 10) {
    days += 31; // oct
  }
  if (month() > 11) {
    days += 30; // nov
  }
  
  days += day();
  
  days += floor(year() - 2019 + 3 / 4)
  
  
}

function draw() {
  background(255);
  textAlign(CENTER);
  fill(0, 102, 153);
  textSize(60);
  text("Happy", width / 2, 90)

  if (days - floor(year() - 2019 + 3 / 4) % 365 == 0) {
    text(floor(days / 365) + " year", width / 2, 222);
  } else {
    text(days + " day", width / 2, 222);
  }
  
  
  text("anniversary!", width / 2, 340);

  
}
