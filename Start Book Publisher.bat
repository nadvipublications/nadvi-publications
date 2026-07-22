@echo off
title Nadvi Book Publisher
cd /d "%~dp0"
node tools\book-publisher\server.mjs
if errorlevel 1 (
  echo.
  echo The publisher could not start. Please take a screenshot of this window.
  pause
)
