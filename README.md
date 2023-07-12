<div align="center">
  <h1>Simple Text to Voice Converter</h1>
</div>

<div align="center">
  <strong>A simple React app that converts text to voice using the Web Speech API.</strong>
</div>

## Getting Started

To use this text to voice converter app, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/simple_text_to_voice_converter.git`
2. Change directory to the project folder: `cd simple_text_to_voice_converter`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to use the text to voice converter.

##  Features

- Allows users to input text in a textarea.
- Provides a dropdown to select the voice for speech synthesis.
- Supports speech synthesis in multiple languages and accents.
- Clicking the "Listen" button converts the text to voice using the selected voice.
- Clicking the "Clear" button clears the text from the textarea.

##  Usage

The main component of the text to voice converter is `App`, which handles the state and functionality of the app.

### App

The `App` component is responsible for the following:

- Fetches the available voices from the Web Speech API and sets them in the `voices` state.
- Sets the first voice from the available voices as the default selected voice.
- Handles the selection of the voice from the dropdown and updates the `selectedVoice` state.
- Handles the input change in the textarea and updates the `text` state.
- When the "Listen" button is clicked, creates a `SpeechSynthesisUtterance` object with the selected voice and text, and triggers speech synthesis.
- When the "Clear" button is clicked, clears the text from the textarea.

##  Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

##  License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.