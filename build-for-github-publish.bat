call npm version minor
if errorlevel 1 goto Unsuccessful
call ng build --prod --output-path docs
if errorlevel 1 goto Unsuccessful
copy ".\docs\index.html" ".\docs\404.html"
if errorlevel 1 goto Unsuccessful
echo upside.down.pictures > .\DOCS\CNAME
if errorlevel 1 goto Unsuccessful

:Unsuccessful