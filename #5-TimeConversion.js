/*
  * Link : https://www.hackerrank.com/challenges/time-conversion/problem
  * 
  * Day 5 - Time Conversion - 22/03/2025
  *
    Given a time in -hour AM/PM format, convert it to military (24-hour) time.

    Note: 
    - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

  * 
  * 
*/

function timeConversion(s) {
  const time = s.replace("PM", "").replace("AM", "").split(":");
  const PMorAM = `${s[s.length-2]}${s[s.length-1]}`;
  const result = [];

  let hours = Number(time[0]);
  const minutes = time[1];
  const seconds = time[2];

  if(hours < 12 && PMorAM === 'PM') {
    hours = hours + 12
  }

  if(hours === 12 && PMorAM === 'AM') {
    hours = '00';
  }

  hours = hours > 0 && hours < 10 ? `0${hours.toString()}` : hours.toString();

  result.push(hours, minutes, seconds);
  
  return result.join(":");
}

console.log(timeConversion('12:05:45PM'))