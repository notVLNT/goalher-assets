#!/bin/bash
MSG=${1:-"update CSS"}
git add .
git commit -m "$MSG"
git push
curl -s "https://purge.jsdelivr.net/gh/notVLNT/goalher-assets@main/goalher-main.css"
echo "✅ Deploy completato: $MSG"
