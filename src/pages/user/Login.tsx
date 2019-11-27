import React from 'react';
import {
  IonPage,
  IonContent,
  IonButton,
} from '@ionic/react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  form: {
    width: 300,
    height: 500,
  },
  input: {
    width: '100%',
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#c7c7c7',
    border: '1px solid #bdbdbd',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    borderRadius: 5,
    height: 37,
    fontSize: 12,
  },
};

const Login = () => {
  return (
    <IonPage>
      <IonContent>
        <div style={styles.container}>
          <div style={styles.form}>
            <h1>로그인</h1>
            <input placeholder='아이디' style={styles.input} />
            <input placeholder='비밀번호' style={styles.input} />
            <IonButton style={styles.button}>테스트</IonButton>
          </div>
        </div>
        {/* <IonItem>
          <IonInput clearInput placeholder='아이디'></IonInput>
        </IonItem> */}
      </IonContent>
    </IonPage>
  );
};

export default Login;