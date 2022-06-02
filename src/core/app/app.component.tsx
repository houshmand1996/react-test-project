import { GlobalStyle } from 'core';
import { ErrorBoundary } from 'core/components/error-boundary';
import { Spinner } from 'core/components/spinner';
import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import './app.styles.scss';

const Home = lazy(() => import('plugins/home/home.component'));
const Vendors = lazy(() =>
  import('plugins/vendors/components/vendors.component')
);

export const App = () => (
  <>
    <GlobalStyle />
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Router >
            <Routes>
              <Route  path="/" element={<Home />} />
              <Route path="/vendors" element={<Vendors />} />
            </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  </>
);



