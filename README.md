# Link to Deployed App

https://seneca-toggle.netlify.app/


# Assumptions

This solution assumes:
* The question data is provided as an array of objects with all necessary information
* An option for a question can max have three potential toggle positions
* There will be a maximum of 4 options to toggle for any question
* A user will reach questions via a home-page
* Options shouldn't be pre-selected when the user is presented with a question

Limitations:
* Currently, the toggles to do not display a sliding animation
* There is no persistence of the page state when navigating between questions
* At 320px the toggles do not modify to an top-down toggle layout  (for longer option texts)
* Currently, answer positions are not randomised
