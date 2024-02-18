import { render } from "@testing-library/react";
import EmptyPlaceholder from "../components/Placeholder/emptyPlaceholder";

describe('EmptyPlaceholder component', () => {
    test('renders children', () => {
        const ChildComponent = () => <div>Child Component</div>;
        const { getByText } = render(
          <EmptyPlaceholder>
            <ChildComponent />
          </EmptyPlaceholder>
        );
        const renderedText = getByText('Child Component');
        expect(renderedText).toBeInTheDocument();
      });
})