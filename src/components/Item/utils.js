export function pad (num) {
  var s = num + "";
  while (s.length < 3) s = "0" + s;
  return s;
}
