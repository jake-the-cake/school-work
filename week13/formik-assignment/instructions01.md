## Using Formik

_Note: This lesson takes a long time to load because it has to download the dependencies and then start the React development server._

**Formik** is a small library that helps you with the three most annoying aspects of creating forms in React:

- Getting values in and out of the form state
- Validation and error messages
- Handling form submission

By collocating all of the above in one place, **Formik** will keep things organized, thereby, making testing, refactoring, and reasoning about your forms a breeze.

**In this activity, your task is to create a login form with validation using Formik.**

Your form should include the following:

- An Email field
- A Password field
- A Submit Button

Your form should implement the following input validation rules:

- If the username or password inputs are empty, display the message "field required" under the text input.
- If the username is not in an email format, display the message "username should be an email" under the text input.
- If the username and password pass the validation above, then display the message "Login Successful" in an `alert` box.

Your form should implement the following specific details:

- The email input field should have an id of `emailField`
- The email error message should be within a `div` element that has an id of `emailError`
- The password input field should have an id of `pswField`
- The password error message should be within a `div` element that has an id of `pswError`
- The submit button should have an id of `submitBtn`

The starter code can be found inside `src/App.js`.
