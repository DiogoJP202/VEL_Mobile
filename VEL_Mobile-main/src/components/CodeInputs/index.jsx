import React, { useState } from 'react';

const CodeInput = () => {
  const [code, setCode] = useState(new Array(6).fill(''));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < code.length - 1) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      document.getElementById(`code-input-${index - 1}`).focus();
    }
  };

  return (
    <div>
      <div>
          {code.map((value, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                width: '30px',
                height: '30px',
                fontSize: '24px',
                textAlign: 'center',
                marginRight: '8px',
                backgroundColor: "#D9D9D9",
                borderRadius: "5px"
              }}
            />
          ))}
      </div>
      <button onClick={() => alert(`Código ${code.join('')}`)}>Reenviar Código</button>
    </div>
  );
};

export default CodeInput;