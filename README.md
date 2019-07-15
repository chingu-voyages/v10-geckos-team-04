# v10-geckos-team-04
Add-project-description-here | Voyage-10 | https://chingu.io/

## Installation

Prepare boiler plate:<br>
create-react-app spiral-weather<br>
cd spiral-weather<br>
npm install --save redux react-redux axios redux-thunk<br>


### API key

App use API request to https://darksky.net/dev
We avoiding put API key to github. For checking or use this app neccessary to register through link above and get API key.
Next step is put this key inside src\api\key-example.js file (assign to variable APIkeyDarkSky ) and rename this file to keys.js.

### Access-Control-Allow-Origin issue

To resolve Access-Control-Allow-Origin issue neccessary to install and turn on extension for browser.

More details here: https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/
