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
* Currently, the toggles to do not display a sliding animation. Branch toggle-attampt-1 contains an attempt at it's implementation, but it contains bugs. 
* There is no persistence of the page state when navigating between questions, so a question will lock when correct, but coming back to it through navigation will refresh it.
* At 320px the toggle modify to top-down layout but there is a margin beneath the second option, that I was unable to remove
