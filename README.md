`25/02/2023`
<details>
  <summary>The green of Hoàn Kiếm lake is from the algae grow onder it</summary>

Despite changes in weather and seasons, the green color of Hoan Kiem Lake remains fairly consistent throughout the year. This is because the lake is relatively shallow, with an average depth of only about 1.5-2 meters, which allows sunlight to penetrate all the way to the bottom. As a result, algae and other plants are able to grow and thrive throughout the year, giving the water its characteristic green color.
</details>

`24/02/2023`
<details>
  <summary>I can use `details` tag to collapse content in markdown</summary>

  ## Rules
  1. Have an empty line after the `</summary>` tag or markdown/code blocks will not render.
  2. Have an empty line after each `</details>` tag if you have multiple collapsible sections.
</details>

----
`23/02/2023`  
<details>
  <summary>Typescript can declare overloads for a function</summary>

  ```typescript
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
  ```
</details>

