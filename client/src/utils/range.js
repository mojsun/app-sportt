export default function range(start, stop, step = 1) {
  let a = [start],
    b = start;
  while (b < stop) {
    a.push((b += step || 1));
  }
  return a.reverse();
}
