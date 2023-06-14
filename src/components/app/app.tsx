import { Button } from '@components/button';
import kangurekKao from '../../assets/kangurekKao.jpeg'; // Why no errors? See custom.d.ts + tsconfig.json + webpack.config.ts files

export const App = () => {
  return (
    <div className="app">
      <h1 data-testid="app-header">Hello, this is App component</h1>
      <img src={kangurekKao} />
      <p>
        Mariuszku nie wezwałem Cię tu aby prosić Cię o wybaczenie. Chce Cię
        prosić o pożyczkę.
      </p>
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
