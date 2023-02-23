export function add(n1: number): (n3: number) => number;
export function add(n1: number, n2: number): number;
export function add(n1: number, n2?: number) {
  if (!n2) {
    return function(n3: number): number {
      return n1 + n3;
    }
  }

  return n1 + n2;
}

add(1, 2) // result: 3
add(1)(2) // result: 3
