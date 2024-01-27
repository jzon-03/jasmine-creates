@echo off
setlocal

rem Set the source and destination folder paths
set "sourceFolder=.\..\docs\browser"
set "destinationFolder=.\..\docs"

rem Ensure source folder exists
if not exist "%sourceFolder%" (
    echo Source folder does not exist.
    exit /b
)

rem Ensure destination folder exists, create if not
if not exist "%destinationFolder%" mkdir "%destinationFolder%"

rem Move files from source to destination
move /Y "%sourceFolder%\*.*" "%destinationFolder%"

rem Copy index.html and rename it to 404.html
copy /Y "%destinationFolder%\index.html" "%destinationFolder%\404.html"
echo index.html copied and renamed to 404.html successfully.

echo Files moved successfully.

endlocal