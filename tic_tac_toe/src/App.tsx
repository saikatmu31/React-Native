import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icons from './Components/Icons';
import Snackbar from 'react-native-snackbar';
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [isWinner, setIsWinner] = useState('');
  const [blocks, setBlocks] = useState(new Array(9).fill('empty', 0, 9));

  // Reset Game / Restart Game Logic
  const resetGame = () => {
    // Put All the States to Default
    setIsCross(false);
    setIsWinner('');
    setBlocks(new Array(9).fill('empty', 0, 9));
  };

  // Winning Logic
  const evaluateWinner = () => {
    // Rows
    if (
      blocks[0] === blocks[1] &&
      blocks[1] === blocks[2] &&
      blocks[0] !== 'empty'
    ) {
      setIsWinner(`${blocks[0]} Won 💋`);
    } else if (
      blocks[3] === blocks[4] &&
      blocks[4] === blocks[5] &&
      blocks[3] !== 'empty'
    ) {
      setIsWinner(`${blocks[3]} Won 💋`);
    } else if (
      blocks[6] === blocks[7] &&
      blocks[7] === blocks[8] &&
      blocks[6] !== 'empty'
    ) {
      setIsWinner(`${blocks[6]} Won 💋`);
    }

    // Columns
    else if (
      blocks[0] === blocks[3] &&
      blocks[3] === blocks[6] &&
      blocks[0] !== 'empty'
    ) {
      setIsWinner(`${blocks[0]} Won 💋`);
    } else if (
      blocks[1] === blocks[4] &&
      blocks[4] === blocks[7] &&
      blocks[1] !== 'empty'
    ) {
      setIsWinner(`${blocks[1]} Won 💋`);
    } else if (
      blocks[2] === blocks[5] &&
      blocks[5] === blocks[8] &&
      blocks[2] !== 'empty'
    ) {
      setIsWinner(`${(<Icons name={`${blocks[2]}`} />)} Won 💋`);
    }

    // Diagonals
    else if (
      blocks[0] === blocks[4] &&
      blocks[4] === blocks[8] &&
      blocks[0] !== 'empty'
    ) {
      setIsWinner(`${blocks[0]} Won 💋`);
    } else if (
      blocks[2] === blocks[4] &&
      blocks[4] === blocks[6] &&
      blocks[2] !== 'empty'
    ) {
      setIsWinner(`${blocks[2]} Won 💋`);
    }
  };
  const onChangeItem = (itemNumber: number) => {
    if (isWinner) {
      return Snackbar.show({
        text: isWinner,
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
      });
    }
    if (blocks[itemNumber] === 'empty') {
      blocks[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
      evaluateWinner();
    } else {
      return Snackbar.show({
        text: 'Position is Already Filled',
        backgroundColor: 'red',
        textColor: '#FFFFFF',
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tic-Tac-Toe</Text>
      <Text
        style={[styles.turnText, {backgroundColor: isCross ? 'red' : 'green'}]}>
        {isCross ? "X's Turn" : "O's Turn"}
      </Text>

      <FlatList
        numColumns={3}
        data={blocks}
        renderItem={({item, index}) => (
          <Pressable style={styles.block} onPress={() => onChangeItem(index)}>
            <Icons name={item} />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {isWinner ? (
        <View style={styles.winnerBanner}>
          <Text style={styles.winnerText}>{isWinner}</Text>
        </View>
      ) : (
        ''
      )}

      <Pressable
        style={[
          styles.resetButton,
          {backgroundColor: isWinner ? '#EB4D4B' : '#383CC1'},
        ]}
        onPress={resetGame}>
        <Text style={[styles.resetButtonText]}>
          {isWinner ? 'Reset Game' : 'Reload Game'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CAD5E2',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0D0D0D',
  },
  turnText: {
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: 'green',
    color: 'white',
    width: 300,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  block: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0.4,
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    color: '#E07C24',
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginBottom: 50,
  },
  resetButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  winnerBanner: {
    backgroundColor: '#F7CD2E',
    margin: 'auto',
    paddingHorizontal: 40,
    paddingVertical: 20,
    width: 350,
    textAlign: 'center',
    borderRadius: 12,
  },
  winnerText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#0D0D0D',
  },
});

export default App;
