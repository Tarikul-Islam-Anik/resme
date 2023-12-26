/* eslint-disable react/display-name */

import React, { Fragment, ReactNode } from 'react';

type ProviderProps = {
  children: ReactNode;
};

type ComponentWithProps = [React.ComponentType<ProviderProps>, ProviderProps?];

const buildProviderTree = (componentsWithProps: ComponentWithProps[]) => {
  const initialComponent = ({ children }: ProviderProps) => (
    <Fragment>{children}</Fragment>
  );
  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      return ({ children }: ProviderProps) => (
        <AccumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
      );
    },
    initialComponent
  );
};

buildProviderTree.displayName = 'buildProviderTree';
export default buildProviderTree;
