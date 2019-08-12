ng build --prod --output-path docs
copy ".\docs\index.html" ".\docs\404.html"
echo upside.down.pictures > .\DOCS\CNAME