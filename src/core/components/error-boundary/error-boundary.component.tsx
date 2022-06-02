import {Component, ReactNode} from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}


export class ErrorBoundary  extends Component<Props, State> {
 
  public state: State = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasErrored: true };
  }

  render() { 
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}
