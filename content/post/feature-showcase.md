---
title: 功能调试大全
slug: feature-showcase
date: '2026-10-01'
lastmod: '2026-10-17'
description: "用于调试当前 Hugo 主题全部功能的示例文章。"
toc: true
tocTitle: "本文目录"
draft: true
categories:
  - 调试
  - Test
tags:
  - Feature
  - Markdown
  - KaTeX
  - highlight.js
  - Terminal
---

# 功能调试大全

这是一篇用于调试当前主题的示例文章，尽量覆盖 Markdown、Hugo、KaTeX、highlight.js 和自定义样式。

> 调试说明：切换系统亮/暗模式查看配色；hover 标题查看 `§` 锚点；hover 代码块查看复制按钮；TOC 可点击折叠。

## 文本与行内元素

普通段落、**粗体**、*斜体*、***粗斜体***、~~删除线~~、`行内代码`、<mark>高亮文本</mark>。

HTML 行内元素：<kbd>Ctrl</kbd> + <kbd>C</kbd>、H<sub>2</sub>O、x<sup>2</sup>、<abbr title="HyperText Markup Language">HTML</abbr>。

Emoji 测试：:smile: :rocket: :warning: :bowtie:

链接测试：[Hugo 官网](https://gohugo.io/ "Hugo")、[引用式链接][hugo]、自动链接 <https://gohugo.io/>。

[hugo]: https://gohugo.io/ "Hugo 引用链接"

## 标题与锚点

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

每个标题右侧的 `§` 是标题锚点，hover 或键盘聚焦时显示。可以测试跳转：[跳到代码高亮](#代码高亮)。

## 列表

### 无序列表

- 第一项
- 第二项
  - 嵌套项 A
  - 嵌套项 B
    - 更深一层
- 第三项

### 有序列表

1. 第一步
2. 第二步
   1. 子步骤一
   2. 子步骤二
3. 第三步

### 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 另一个未完成任务

### 混合列表

1. 有序项
   - 无序子项
   - 另一个无序子项
2. 有序项
   - 子项

## 引用与提示

> 这是一段普通引用。
>
> 引用中可以包含 **粗体**、`行内代码` 和 [链接](https://gohugo.io/)。
>
> > 这是嵌套引用。

> [!NOTE]
> 这是 GitHub 风格提示块，用于观察当前 blockquote 的渲染效果。

> [!WARNING]
> 这是警告提示块，同样用于调试。

> 调试提示：当前主题未对 GitHub alert 做特殊着色，`[!NOTE]` 会作为普通引用文本显示。

## 表格

| 左对齐 | 居中 | 右对齐 |
| :--- | :---: | ---: |
| 文本 | `code` | 123 |
| **粗体** | *斜体* | 456 |
| 行内公式 | \(a^2 + b^2 = c^2\) | \(\sum_{i=1}^{n} i\) |

宽表格用于测试横向滚动：

| 列一 | 列二 | 列三 | 列四 | 列五 | 列六 | 列七 |
| --- | --- | --- | --- | --- | --- | --- |
| 一段比较长的内容 | 另一段比较长的内容 | 更多内容 | 更多内容 | 更多内容 | 更多内容 | 更多内容 |

## 代码高亮

### HTML

```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>代码高亮测试</title>
</head>
<body>
  <p class="message">Hello, world!</p>
</body>
</html>
```

### JavaScript

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const values = Array.from({ length: 10 }, (_, index) => fibonacci(index));
console.log(values.join(", "));
```

这是一行很长的代码，用于测试代码块横向滚动，不会换行，也不会影响右上角复制按钮的定位：`const veryLongVariableName = "abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789";`

```javascript
const veryLongVariableName = "abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789";
```

### CSS

```css
:root {
  --accent: #23b0ff;
  --background: #1d1e28;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--accent);
}
```

### Python

```python
from dataclasses import dataclass


@dataclass
class Post:
    title: str
    tags: list[str]


post = Post(title="功能调试大全", tags=["Feature", "Markdown"])
print(post)
```

### Bash

```bash
hugo --gc --minify --cleanDestinationDir
hugo server --port 1313 --bind 127.0.0.1
```

### R

```r
# 测试
values <- c(1, 2, 3, 4, 5)
mean(values)
sd(values)
cat(values[2],"\n")
```

### DOS

```dos
@echo off
echo Hello from DOS
dir
```

### JSON

```json
{
  "title": "功能调试大全",
  "tags": ["Feature", "Markdown"],
  "math": true,
  "highlight": "highlight.js"
}
```

### 无语言代码块

```
这是一段没有指定语言的代码块。
它仍然应该有边框、复制按钮和自动高亮回退。
<tag>不会被识别为 HTML 语言。</tag>
```

## 数学公式

### 行内公式

质能方程 \(E = mc^2\)，勾股定理 \(a^2 + b^2 = c^2\)，求和 \(\sum_{i=1}^{n} i = \frac{n(n+1)}{2}\)。

### 块级公式

$$
\lim_{x \to 0}\frac{f(x)-a}{x-a}=b
$$

$$
\begin{aligned}
  \int_0^\infty e^{-x^2}\,\mathrm{d}x &= \frac{\sqrt{\pi}}{2} \\
  \sum_{n=1}^{\infty}\frac{1}{n^2} &= \frac{\pi^2}{6}
\end{aligned}
$$

\[
\boxed{
  \begin{pmatrix}
    a & b \\
    c & d
  \end{pmatrix}
  \begin{pmatrix}
    x \\
    y
  \end{pmatrix}
  \;=\;
  \begin{pmatrix}
    ax + by \\
    cx + dy
  \end{pmatrix}
}
\]

> 调试提示：块级公式中避免单独一行 `=`，Goldmark 可能将其识别为 setext 标题下划线；这里使用 `\;=\;` 规避。

使用方括号分隔符的公式：

\[
\color{deepskyblue}{\mathbf{A}} =
\begin{cases}
  1, & x > 0 \\
  0, & x = 0 \\
  -1, & x < 0
\end{cases}
\]

带颜色、取消线和缩放的公式：

$$
\Large{
  \color{orange}{\cancel{x + y}} + \color{green}{\mathbf{z}} = \color{red}{\frac{1}{2}}
}
$$

## 图片与图注

Markdown 图片：

![Minecraft fox](/images/fox.gif "Minecraft fox")

HTML figure：

<figure class="figure">
  <img src="/images/fox.gif" alt="Minecraft fox" width="360">
  <figcaption>图注：终端风格的 figure 与 figcaption。</figcaption>
</figure>

双栏 figure-row：

<div class="figure-row">
  <figure class="figure">
    <img src="/images/fox.gif" alt="左图" width="260">
    <figcaption>左图图注</figcaption>
  </figure>
  <figure class="figure">
    <img src="/images/fox.gif" alt="右图" width="260">
    <figcaption>右图图注</figcaption>
  </figure>
</div>

包含空格和中文路径的图片：

<figure class="figure">
  <img src="/images/屏幕截图 2026-06-29 211545.png" alt="包含空格和中文路径的图片" width="520">
  <figcaption>测试含空格和中文的静态图片路径。</figcaption>
</figure>

## 自定义样式

### Mask 遮罩

<span class="mask">把鼠标移到这段文字上，或者触摸它</span>

<span class="mask">带链接和行内代码的 mask：<a href="https://gohugo.io/">Hugo 官网</a> <code>inline code</code></span>

### details / summary

<details>
  <summary>点击展开 raw HTML 内容</summary>
  <p>这里是 details 内部的 raw HTML 内容。</p>
  <ul>
    <li>可以包含普通 HTML 列表</li>
    <li>也可以包含 <code>行内代码</code></li>
  </ul>
</details>

<details open>
  <summary>默认展开的 details</summary>
  <p>这个 details 默认展开，用于检查展开状态的样式。</p>
</details>

### 定义列表

<dl>
  <dt>Hugo</dt>
  <dd>静态网站生成器。</dd>
  <dt>KaTeX</dt>
  <dd>浏览器端的数学公式渲染库。</dd>
  <dt>highlight.js</dt>
  <dd>浏览器端的代码语法高亮库。</dd>
</dl>

### 分隔线

---

上面的分隔线使用 Markdown `---` 生成。

***

下面的分隔线使用 Markdown `***` 生成。

## 脚注

这是一段带脚注的文字[^1]。这里还有另一个脚注[^2]。

[^1]: 第一个脚注的内容，包含 `行内代码` 和 [链接](https://gohugo.io/)。
[^2]: 第二个脚注的内容，用于测试脚注列表和返回链接。

## 短代码

内置 `figure` shortcode：

{{< figure src="/images/fox.gif" alt="Minecraft fox" title="内置 figure shortcode" width="320" >}}

内置 `relref` shortcode：

[关于页面]({{< relref "/about.md" >}})

## 其他测试

### 长段落

这是一段较长的中文段落，用来测试正文的行高、字距、换行和中文回退字体。当前主题使用系统等宽字体栈，拉丁字符优先使用等宽字体，中文使用系统中文字体回退。终端风格通常会让正文也使用等宽字体，但为了避免中文阅读过于拥挤，正文行高设置为 1.7。你可以检查这段文字在亮色和暗色模式下的可读性、链接颜色、标点符号和行间距。

This is a longer English paragraph used to check the monospace font stack, line height, and letter spacing. The quick brown fox jumps over the lazy dog. 0123456789 !@#$%^&*().

### 键盘与高亮

按 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> 打开命令面板。使用 <mark>mark 标签</mark> 标记重点内容。

### 上下标

H<sub>2</sub>O、CO<sub>2</sub>、x<sup>2</sup>、e<sup>iπ</sup> + 1 = 0。

### 引用式图片

![引用式图片][fox]

[fox]: /images/fox.gif "引用式图片"

## 调试检查清单

- [x] 标题层级与 `§` 锚点
- [x] 自动亮色/暗色模式
- [x] TOC 与 TOC 标题覆盖
- [x] 分类、标签与更新时间
- [x] 置顶文章
- [x] 代码高亮与复制按钮
- [x] KaTeX 行内公式与块级公式
- [x] 表格、引用、列表
- [x] figure、figure-row 与图注
- [x] mask、details、kbd、mark、上下标
- [x] 脚注与短代码
- [ ] 检查移动端布局
- [ ] 检查打印样式
