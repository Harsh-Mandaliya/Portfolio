import { useState, useEffect } from 'react';

const useTypewriter = (textArray, typeSpeed = 100, eraseSpeed = 50, delay = 2000) => {
  const [text, setText] = useState('');
  const [isErasing, setIsErasing] = useState(false);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!textArray || textArray.length === 0) return;

    const currentText = textArray[arrayIndex];

    const handleTyping = () => {
      if (!isErasing) {
        // Typing
        if (charIndex < currentText.length) {
          setText(prev => prev + currentText.charAt(charIndex));
          setCharIndex(prev => prev + 1);
        } else {
          // Finished typing, wait then erase
          setTimeout(() => setIsErasing(true), delay);
        }
      } else {
        // Erasing
        if (charIndex > 0) {
          setText(prev => prev.substring(0, prev.length - 1));
          setCharIndex(prev => prev - 1);
        } else {
          // Finished erasing, move to next text
          setIsErasing(false);
          setArrayIndex(prev => (prev + 1) % textArray.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isErasing ? eraseSpeed : typeSpeed);
    return () => clearTimeout(timeout);
    
  }, [text, isErasing, charIndex, arrayIndex, textArray, typeSpeed, eraseSpeed, delay]);

  return text;
};

export default useTypewriter;