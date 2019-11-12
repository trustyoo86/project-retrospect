import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apps, flash, send } from 'ionicons/icons';

// components
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Details from './Details';

const Apps = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* <Route path='/main' component={Tab1} exact={true} />
            <Route path='/mypage' component={Tab2} exact={true} />
            <Route path='/tab3' component={Tab3} exact={true} />
            <Route path='/tab2/details' component={Details} />
            <Route path="/apps" render={() => <Redirect to='/main' />} exact={true} /> */}
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href='/main'>
              <IonIcon icon={flash} />
              <IonLabel>Main</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href='/mypage'>
              <IonIcon icon={apps} />
              <IonLabel>My Page</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href='/tab3'>
              <IonIcon icon={send} />
              <IonLabel>Tab Three</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default Apps;