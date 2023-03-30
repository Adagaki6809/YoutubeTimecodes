// links to youtube with time, each link on new line
let links = ``;

let timecodes = links.split("\n");

// getting seconds
timecodes = timecodes.map(e => e.substring(e.indexOf("=") + 1));

// conversion to minutes and seconds
timecodes = timecodes.map(e => `${Math.floor(e / 60)}:${e % 60}`);

// conversion to hours, minutes and seconds
timecodes = timecodes.map(e => {
  if (e.substring(0, e.indexOf(":")) > 60)
    return `${Math.floor(e.substring(0, e.indexOf(":")) / 60)}:${e.substring(0, e.indexOf(":")) % 60}:${e.substring(e.indexOf(":") + 1)}`;
  else
    return e;
});

// adding zeros
timecodes = timecodes.map(e => {
  let hour, minute, second;

  if (e.split(":").length == 3)
    [hour, minute, second] = e.split(":");
  else
    [minute, second, hour="00"] = e.split(":");

  if (hour < 10 && hour != "00")
    hour = `0${hour}`;
  if (minute < 10)
    minute = `0${minute}`;
  if (second < 10)
    second = `0${second}`;
  return `${hour}:${minute}:${second}`;
});

console.log(timecodes.join("\n"));
