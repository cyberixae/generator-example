
import { State, Fib, initialState, step, fromState, defaultAmount, Amount } from './zomg'

function* fibonacci(): Generator<Fib, void, undefined> {
  let state: State = initialState
  while(true) {
    yield fromState(state)
    state = step(state)
  }
}

function main() {
  let c: Amount = defaultAmount
  let i: number = 0
  for (const fib of fibonacci()) {
    console.log(fib)
    i += 1
    if (i >= c) {
      return
    }
  }
}

main()

export {}