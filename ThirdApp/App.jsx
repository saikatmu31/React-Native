import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
// Form Validators

import * as Yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Minimum 4 Digit is Required')
    .max(16, 'Max Support is 16 characters')
    .required('Number is Required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  // Function to generate a password string based on specified length
  const generatePasswordString = passwordLength => {
    let charset = '';
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const numbersSet = '1234567890';
    const symbolsSet = '!@#$%^&*()/:;<=>?';

    // Include lowercase characters if specified
    if (lowercase) {
      charset += lowerCaseCharacters;
    }

    // Include uppercase characters if specified
    if (uppercase) {
      charset += upperCaseCharacters;
    }

    // Include numbers if specified
    if (numbers) {
      charset += numbersSet;
    }

    // Include symbols if specified
    if (symbols) {
      charset += symbolsSet;
    }

    // Call the createPasswords function with the generated charset and password length
    return createPasswords(charset, passwordLength);
  };

  // Function to create a password using the specified charset and length
  const createPasswords = (charset, passwordLength) => {
    let password = '';
    // Generate each character of the password
    for (let i = 0; i < passwordLength; i++) {
      // Generate a random index within the range of the charset
      const charIndex = Math.floor(Math.random() * charset.length);

      // Append the character at the random index to the password
      password += charset.charAt(charIndex);
    }

    // Return the generated password
    setPassword(password);
    setIsPasswordGenerated(true);
    console.log(password);
    return password;
  };
  const resetState = () => {
    setLowercase(true);
    setNumbers(false);
    setIsPasswordGenerated(false);
    setPassword('');
    setUppercase(false);
    setSymbols(false);
  };

  return (
    <View keyboardShouldPersistTaps="handled">
      <View style={styles.heading}>
        <Text style={styles.headingText}>Password Generator</Text>
      </View>
      <View style={styles.container}>
        <Formik
          initialValues={{passwordLength: ''}}
          validationSchema={passwordSchema}
          onSubmit={values => {
            console.log(values);
            generatePasswordString(Number(values.passwordLength));
          }}>
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleSubmit,
            handleReset,
            /* and other goodies */
          }) => (
            <>
              <View style={styles.inputForm}>
                <View>
                  <Text style={styles.inputHeading}>Password Length : </Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <View>
                      <Text style={styles.inputWarning}>
                        {errors.passwordLength}
                      </Text>
                    </View>
                  )}
                </View>

                <View>
                  <TextInput
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex: 8"
                    keyboardType="numeric"
                    style={styles.inputFormText}
                    keyboardAppearance="light"></TextInput>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setLowercase(!lowercase);
                }}
                style={styles.checkboxContainer}>
                <Text style={styles.checkboxText}>Include Lowercase </Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={lowercase}
                  fillColor="red"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setUppercase(!uppercase);
                }}
                style={styles.checkboxContainer}>
                <Text style={styles.checkboxText}>Include Uppercase </Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={uppercase}
                  fillColor="blue"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setNumbers(!numbers);
                }}
                style={styles.checkboxContainer}>
                <Text style={styles.checkboxText}>Include Numbers </Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={numbers}
                  fillColor="#E07C24"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSymbols(!symbols);
                }}
                style={styles.checkboxContainer}>
                <Text style={styles.checkboxText}>Include Symbols </Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={symbols}
                  fillColor="green"
                />
              </TouchableOpacity>

              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.submitButton}
                  disabled={!isValid}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonsText}>Generate Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.resetButton}
                  onPress={() => {
                    handleReset();
                    resetState();
                  }}>
                  <Text style={styles.buttonsText}>Reset</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
        <View style={styles.passwordBox}>
          <View>
            <Text style={styles.passwordBoxTitle}>Long Press To Copy</Text>
          </View>
          {isPasswordGenerated ? (
            <View>
              <Text style={styles.generatedPassword} selectable>
                {password}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginBottom: 30,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  container: {
    // backgroundColor: 'black',
  },
  inputForm: {
    // flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  inputFormText: {
    // backgroundColor: 'black',
    width: 150,
    fontSize: 20,
  },
  inputHeading: {
    fontSize: 20,
    fontWeight: '600',
  },
  inputWarning: {
    fontSize: 14,
    color: 'red',
  },
  checkboxContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 25,
    paddingVertical: 20,
    // borderColor: 'white',
    backgroundColor: '#CAD5E2',
    marginVertical: 4,
    marginHorizontal: 3,
    borderRadius: 5,
    elevation: 5,
  },
  checkboxText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  buttons: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDC126',
    // paddingHorizontal: 20,
    width: 160,
    // paddingVertical: 10,
    height: 55,
  },
  resetButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E21717',
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    width: 180,
    height: 55,
  },
  buttonsText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  passwordBox: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    // paddingHorizontal:50,
    paddingVertical: 50,
  },
  passwordBoxTitle: {
    fontSize: 15,
    color: '#758283',
  },
  generatedPassword: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 25,
  },
});
