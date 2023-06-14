import { Button } from '@components/button';

export const App = () => {
  return (
    <div className="app">
      <h1 data-testid="app-header">Hello, this is App component</h1>
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
