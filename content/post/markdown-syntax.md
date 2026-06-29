---
title: Markdown Test
date: '2025-12-31'
lastmod: '2026-06-29'
toc: true
categories:
  - Test
tags:
  - Markdown
---


# H1
## H2
### H3
#### H4
##### H5
###### H6

表情包测试：:bowtie:

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> — Rob Pike[^1]

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.


   Name | Age
--------|------
    Bob | 27
  Alice | 23

#### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |


```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

1. First item
2. Second item
3. Third item

* List item
* Another item
* And another item


* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

$$
\lim_{x \to 0}\frac{f(x)-a}{x-a}=b
$$

> [!NOTE] 
> Highlights information that users should take into account, even when skimming.

已知emission characters `$\sigma=\{A,T,C,G\}$`，hidden states `$Q=\{\alpha,\beta\}$`，
Transition Probabilities :
|          |  `$\alpha$` | `$\beta$`  |
| ------- | ------- | ---- |
|  `$\alpha$`  |   0.9   |  0.1 |
|  `$\beta$` |   0.1 | 0.9 |

#### 测试MASK

<span class="mask">
  试试看行不行
</span>

$$
\begin{aligned}\huge{不仅可以变大，还可以居中} \end{aligned}
\\
\begin{aligned}\Huge{\bbox[#fc5,12px]{我还可以调背景颜色居中变大}} \end{aligned}
\\
\begin{aligned}\bbox[#cf5,7px]{满屏乱飞} \end{aligned}
\\
\begin{aligned}\small{\color{deepskyblue}{变小，调色}} \end{aligned}
\\
\begin{aligned}\Large{\mathbf{\cancel{加粗划掉一回}}} \end{aligned}
\\
\Large{\mathbf{\cancel{\cancel{加粗划掉两回}}}}
\\
\begin{aligned}\Large{\mathbf{\cancel{\cancel{\cancel{加粗划掉三回}}}}} \end{aligned}
\\
\boxed{\begin{aligned} &\large{\color{orange}{爱和恨}}\huge{\color{green}{天各一方}},\\ &\small{我们}\Large{\color{red}{遍体鳞伤}},\\ &\Huge{\color{purple}{梦}}却\huge{\color{deepskyblue}{安然无恙}}\\ &\bbox[#EAF,20px]
\\{\cancel{\cancel{\cancel{\cancel{\cancel{\cancel{\cancel{\cancel{\cancel{\cancel{\Huge{\color{yellow}{不思量,自难忘}}}}}}}}}}}}}\\ \end{aligned} }\\
$$

嗯，好吧

```
ParseError: KaTeX parse error: Expected '}', got '#' at position 81: …ed}\Huge{\bbox[#̲fc5,12px]{我还可以调…
```

实际渲染效果：

<figure class="figure">
  <img src="/images/屏幕截图 2026-06-29 211545.png" alt="rendered">
</figure>