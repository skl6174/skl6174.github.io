+++
title = "My First Post"
date = "2023-11-03"
description = "test"
tags = [
    "test",
]
+++

## Hello World!
***
## test2024022
![](../../assets/28_avatar_small.jpg)
***
> hugo不指定 -d 项的情况下，页面的渲染都是在内存中的，所有内存中只有页面数据，不是会有页面同目录的资源数据，而指定渲染目录后， hugo 会把相关资源以及渲染结果都输出到指定目录中，然后以这个目录为 web 服务的根目录，这样就可以正常显示所有相关资源了。

thanks to [*hugo 显相对路径下的图片*](https://leenzhu.com/posts/hugo-show-buddle-img.html)

```powershell
# following code should be run in Powershell instead of Windows Powershell
cd D:\Site\MySite
hugo server -d.
```