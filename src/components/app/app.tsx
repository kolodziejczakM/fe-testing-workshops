import { Button } from '@components/button';
import kangurekKao from '../../assets/kangurekKao.jpeg'; // Why no errors? See custom.d.ts + tsconfig.json + webpack.config.ts files
import shave from 'shave';
import { useLayoutEffect } from 'react';

export const App = () => {
  useLayoutEffect(() => {
    shave('#michalek', 22);
  }, [shave]);

  return (
    <div className="app">
      <h1 data-testid="app-header">Hello, this is App component</h1>
      <img src={kangurekKao} />
      <p>
        Mariuszku nie wezwałem Cię tu aby prosić Cię o wybaczenie. Chce Cię
        prosić o pożyczkę.
      </p>
      <span
        id="michalek"
        data-testid="app-story"
        style={{ display: 'inline-block', width: 200, border: '1px solid red' }}
      >
        Czy znacie historię o niemym Michałku, który żuł gumę tak długo, aż
        oślepł?
      </span>
      <Button
        onClick={() => {
          console.log('Button clicked');
        }}
        text="I'm logging on click"
        iconName="check-circle-fill"
      />
    </div>
  );
};
