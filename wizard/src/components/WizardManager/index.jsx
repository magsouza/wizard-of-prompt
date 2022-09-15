import React, { useState } from 'react';
import Subject from '../Subject';

const WizardManager = () => {
  const [subject, setSubject] = useState('');
  const [modifiers, setModifiers] = useState([]);
  const [solidifiers, setSolidifiers] = useState([]);
  const [magicTerms, setMagicTerms] = useState([]);
  const [weights, setWeights] = useState([]);

  return (
    <div>
      Hola!
      <Subject setSubject={setSubject} />
    </div>
  )
};

export default WizardManager;