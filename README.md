# Netflix Blocker Remover

A browser extension that enhances your Netflix viewing experience by removing password sharing blocker screens and enabling video controls.

## Features

- Automatically removes the "Not part of Netflix Household" blocker screens
- Uses Chrome's default video player for better playback control
- Works seamlessly in the background
- No configuration needed

## Installation

1. Download or clone this repository
2. Open your browser's extension management page
   - For Chrome: Navigate to `chrome://extensions/`
   - For Edge: Navigate to `edge://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the folder containing the extension files

## How It Works

The extension monitors Netflix pages and:
- Removes any full-screen blocker modals that appear
- Replaces Netflix's native player with Chrome's default video player
- Continuously observes page changes to maintain functionality

## Files

- `manifest.json`: Extension configuration and permissions
- `content.js`: Core functionality for removing blockers and enabling controls

## Permissions

This extension requires minimal permissions:
- `activeTab`: To interact with Netflix web pages

## Disclaimer

This extension is for educational purposes only. Users should comply with Netflix's terms of service and usage policies.

## License

This project is open source and available for personal use.