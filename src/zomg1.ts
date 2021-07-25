
import { State, initialState, step, fromState, Amount, defaultAmount } from './zomg'

function fibonacci(c: Amount): void {
  let i = 0;  
  let state: State = initialState
  while(i < c) {
    const fib = fromState(state)
    console.log(fib)
    state = step(state)
    i += 1;
  }
}

function main() {
  fibonacci(defaultAmount)
}

main()

export {}