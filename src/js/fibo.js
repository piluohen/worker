/*
* 斐波那契数列 F(n) = Fn(n - 1) + Fn(n - 2)
*/
const fibo = (n) => {
  if (n < 1) return 0
  if (n < 2) return 1
  return fibo(n - 1) + fibo(n - 2)
}