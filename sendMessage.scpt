tell application "Messages"
		set targetService to 1st service whose service type = iMessage
		set targetBuddy to first buddy of targetService whose name is targetContact
		send targetMessage to targetBuddy
end tell
