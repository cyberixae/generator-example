

import { State, Fib, initialState, step, fromState, defaultAmount, Amount } from './zomg'

function* fibonacci(): Generator<Fib, void, undefined> {
  let state: State = initialState
  while(true) {
    yield fromState(state)
    state = step(state)
  }
}

function* logFibs(): Generator<void, void, undefined> {
  let c: Amount = defaultAmount
  let i: number = 0
  for (const fib of fibonacci()) {
    yield console.log(fib)
    i += 1
    if (i >= c) {
      return
    }
  }
}

function tick(g: Generator<void, void, undefined>) {
  const r = g.next()
  if (r.done === true) {
    return
  }
  setTimeout(() => tick(g), 0)
}

function main() {
    tick(logFibs())
}

main()

export {}