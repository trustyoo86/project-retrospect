import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';

// components
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Details from './pages/Details';

interface IProps {
  children: JSX.Element;
}

const Routes = (props: IProps) => {
  const { children } = props;

  return (
    <IonReactRouter>
      {children}
      <IonRouterOutlet>
        <Route path="/tab1" component={Tab1} exact={true} />
        <Route path="/tab2" component={Tab2} exact={true} />
        <Route path="/tab2/details" component={Details} />
        <Route path="/tab3" component={Tab3} />
        <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;
