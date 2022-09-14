import * as React from 'react';
import './style.css';

export default function App() {
  const ref = React.useRef<any>();
  const [state, setState] = React.useState('small');
  const change = () => {
    const action = state === 'small' ? 'large' : 'small';
    setState(action);
    const largeStyles = { width: '80%', marginTop: '60px', fontSize: '18px' };
    const smallStyles = { width: '40%', marginTop: '40px', fontSize: '12px' };
    if (ref.current) {
      const obj = action === 'large' ? largeStyles : smallStyles;
      for (let key in obj) {
        ref.current.style[key] = obj[key];
      }
    }
  };

  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <div className="info" style={{paddingTop: state === 'large' ? '300px' : '270px'}}>
        {state === 'large' && (
          <React.Fragment>
            <p>Email from Steve Jobs to himself 2010</p>
            <p>
              Steve often sent himself messages to capture what was on his mind.
            </p>
          </React.Fragment>
        )}
      </div>
      <div className="wrapper" ref={ref} onClick={change}>
        <p>From: Steve Jobs, sjobs@apple.com To: Steve Jobs, sjobs@apple.com</p>
        <p> Date: Thursday, September 2, 2010 at 11:08PM</p>
        <p>
          <div>
            I grow little of the food I eat, and of the little I do grow{' '}
          </div>
          <div>
            I did not breed or perfect the seeds. I do not make any of my own
            clothing.
          </div>
        </p>
        <p>I speak a language I did not invent or refine.</p>
        <p>I did not discover the mathematics I use. </p>
        <p>
          <div>
            I am protected by freedoms and laws I did not conceive of or
            legislate,
          </div>
          <div>and do not enforce or adjudicate.</div>
        </p>
        <p>I am moved by music I did not create myself.</p>
      </div>
    </div>
  );
}
