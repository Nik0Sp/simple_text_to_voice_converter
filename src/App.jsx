import React, { useState, useEffect } from "react";

function App() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const speechSynthesis = window.speechSynthesis;

    const onVoicesChanged = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0]);
    };

    speechSynthesis.onvoiceschanged = onVoicesChanged;

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleVoiceSelect = (event) => {
    const selectedVoiceIndex = event.target.value;
    setSelectedVoice(voices[selectedVoiceIndex]);
  };

  const handleListenClick = () => {
    if (text) {
      const speechUtterance = new SpeechSynthesisUtterance();
      speechUtterance.text = text;
      speechUtterance.voice = selectedVoice;
      window.speechSynthesis.speak(speechUtterance);
    }
  };

  return (
    <div className="section">
      <h1 className="title">Simple Text to Voice Converter</h1>
      <div className="container glass">
        <textarea
          placeholder="write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="btn-container glass">
          <select onChange={handleVoiceSelect}>
            {voices.map((voice, index) => (
              <option key={index} value={index}>
                {voice.name}
              </option>
            ))}
          </select>
          <button onClick={handleListenClick}>Listen</button>
        </div>
      </div>
    </div>
  );
}

export default App;
