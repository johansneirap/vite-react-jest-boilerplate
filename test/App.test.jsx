import { render } from '@testing-library/react';
import App from '@/App';

describe('App Component', () => {
  it('should render the component initially', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
