
export type State = [Fib, Fib]
export const initialState: State = [1, 1]
export function step([a, b]: State): State {
  return [b, a + b]
}

export type Fib = number
export function fromState([a, _b]: State): Fib {
  return a
}

export type Amount = number
export const defaultAmount: Amount = 1000