`27/02/2023`
- Islamic world in 16th centuris is mostly the Ottoman empire
- Before Turle Tower, there was two other tower was built at the same spot
- Lexer is a program to convert a sequence of characters to sequence of lexical tokens
- [More about Lexer](https://en.wikipedia.org/wiki/Lexical_analysis)

`26/02/2023`
- Statue of King Lý Công Uẩn (tile: Lý Thái Tổ) is inspired by Qin Shi Hoang's statue  
- The coffee origin told to be from Ethiopia Africa and there are tales about it
- Egg coffee at Giảng's Coffee is OK, the egg cream has a nice taste

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

