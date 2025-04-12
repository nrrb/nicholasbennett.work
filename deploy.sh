#!/bin/bash

HOST="$1"
KEY="$2"

if [[ -z "$HOST" || -z "$KEY" ]]; then
  echo "Usage: ./deploy.sh <host-ip> <key.pem>"
  exit 1
fi

echo "📦 Building Tailwind CSS..."
npx tailwindcss -i templates/styles.css -o templates/tailwind.css --minify

echo "🚀 Deploying to ${HOST}..."
fab setup --host-ip=$HOST --key-filename=$KEY
