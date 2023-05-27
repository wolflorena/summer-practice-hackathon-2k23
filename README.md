# summer-practice-hackathon-2k23

In this hackathon challenge, you will be tasked with developing a Multi-Factor Authentication (MFA) code generator. Don't worry it's not as scary as it sounds.

**Requirements:**
Web application that runs locally in the browser
A user can view all the available MFA name-code pairs
A user can add a new MFA name-code pair, by providing a name for the new application they want to use (if you ever wondered how to use a <form> tag, now’s the time to try!)
Codes are made of 6 randomly generated digits. Bet you did this in college already.
When the browser tab is closed and reopened, I want all my registered MFA name-code pairs to be preserved (see localStorage)

**Bonus:**
All MFA codes are regenerated once every 30 seconds (see window.setInterval())
A user can delete an existing MFA name-code pair. Remember localStorage?
The name of the new MFA name-code pairs is obtained via call to https://swapi.dev/api/people. Ever made an API call before? “fetch()”-ing information is simple once you get the hang of it.

Or, if you want to make it harder and more impressive:

The name of the new MFA name-code pairs is obtained via call to the OpenAI API

Notes:

Documentation and clean code will be highly appreciated
Have fun!

Best of luck! Happy hacking!