---
title: conda + VS Code + R Workflow
date: '2026-01-18'
lastmod: '2026-01-19'
categories:
  - Study
tags:
  - R
---
- - -

无聊写了个conda + VS Code + R的Workflow，要求有miniconda，vscode，R，Rtools，且都已添加系统/用户环境变量。

以batch文件所在目录为工作路径，启动所在文件夹同名的conda环境，启动vscode识别到conda环境中的R语言并添加Rtools路径。

```bat
cd /d %~dp0
for %%i in (.) do set ENV_NAME=%%~nxi
REM change this to your RTOOLS directory
set RTOOLS_ROOT=C:\rtools44
call conda activate %ENV_NAME%
if errorlevel 1 (
    echo [ERROR] Failed to activate conda env: %ENV_NAME%
    pause
    exit /b 1
)
set RTOOLS_PATH=%RTOOLS_ROOT%\usr\bin;%RTOOLS_ROOT%\mingw64\bin
set PATH=%RTOOLS_PATH%;%PATH%
code . -n
```
