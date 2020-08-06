echo "Creating Dmg!"
create-dmg \
  --volname "Message Repeater Installer" \
  --volicon "icon.icns" \
  --background "background.png" \
  --window-pos 200 120 \
  --window-size 800 400 \
  --icon-size 100 \
  --icon "../electron-quick-start/MessageRepeater-darwin-x64/MessageRepeater.app" 200 190 \
  --hide-extension "MessageRepeater.app" \
  --app-drop-link 600 185 \
  "Message-Repeater-Installer.dmg" \
  "../electron-quick-start/MessageRepeater-darwin-x64"