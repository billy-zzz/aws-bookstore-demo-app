#!/usr/bin/env bash
if [ $(python3 CommentCheck.py) = 0 ]; then
        echo 'comment not present!'
        exit 2
fi
echo 'comment check passed!'
npm install
npm run build
npm run test