param($msg = "update CSS")
git add .
git commit -m $msg
git push
Invoke-WebRequest -Uri "https://purge.jsdelivr.net/gh/notVLNT/goalher-assets@main/goalher-main.css" -UseBasicParsing | Out-Null
Write-Host "✅ Deploy completato: $msg"