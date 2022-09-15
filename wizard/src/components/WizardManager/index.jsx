import React, { useState } from 'react';

const WizardManager = () => {
  const [subject, setSubject] = useState('');
  const [modifiers, setModifiers] = useState([]);
  const [solidifiers, setSolidifiers] = useState([]);
  const [magicTerms, setMagicTerms] = useState([]);
  const [weights, setWeights] = useState([]);

  return (
    <div>
      Hola!
    </div>
  )
};

export default WizardManager;