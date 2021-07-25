

import { State, Fib, initialState, step, fromState, defaultAmount } from './zomg'

function* fibonacci(): Generator<Fib, void, undefined> {
  let state: State = initialState
  while(true) {
    yield fromState(state)
    state = step(state)
  }
}

type GF<A> = () => Generator<A, void, undefined>

function take<A>(c: number, as: GF<A>): GF<A> {
  return function*() {
    let i: number = 0
    for (const a of as()) {
      yield a
      i += 1
      if (i >= c) {
        return
      }
    }
  }
}

function* logFibs(): Generator<void, void, undefined> {
  const fibs = take(defaultAmount, fibonacci)
  for (const fib of fibs()) {
    yield console.log(fib)
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