import now from "performance-now";

export default function(fun, args) {
  const start = now();

  const actual = fun.apply(this, args);

  const end = now();

  console.log(`Running time: ${(start - end).toFixed(3)}`);
  return actual;
}
