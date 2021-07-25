
import { State, Fib, initialState, Amount, defaultAmount, step, fromState } from './zomg'

function fibonacci(c: Amount): Array<Fib> {
  let i = 0;
  let state: State = initialState
  const fibs: Array<Fib> = []
  while(i < c) {
    fibs.push(fromState(state))
    state = step(state)
    i += 1
  }
  return fibs
}

function main() {
  for (const fib of fibonacci(defaultAmount)) {
    console.log(fib)
  }
}

main()

export {}