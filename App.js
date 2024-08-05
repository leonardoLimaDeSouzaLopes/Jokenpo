import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>  
      <StatusBar style="auto" />
      
      <View style={styles.titulo}>
        <Image source={require('./assets/titulo.png')}/>
      </View>

      <View style={styles.placar}>
        <View style={styles.placarTitulo}> 
          <Text>Placar</Text>
        </View>
        <View style={styles.placarPontos}>
          <View style={styles.pontos}>
            <Text>0</Text>
          </View>
          <View style={styles.pontos}>
            <Text>0</Text>
          </View>
        </View> 
      </View>

      <View style={styles.jogo}>
        <View style={styles.jogador}>
          <Image source={require('./assets/caixa.png')}/>
        </View>
        <View style={styles.vs}>
          <Image source={require('./assets/vs.png')}/>
        </View>
        <View style={styles.jogador}>
          <Image source={require('./assets/caixa.png')}/>
        </View>
      </View>

      <View style={styles.novoJogo}>
        <Pressable>
          <Image source={require('./assets/nova-partida.png')}/>
        </Pressable>
      </View>

      <View style={styles.escolhas}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placar: {
    flex: 3,
    width: "100%",
  },
  placarTitulo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placarPontos: {
    flex: 1,
    flexDirection: "row",
  },
  pontos: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jogo: {
    flex: 2,
    width: "100%",
    flexDirection: "row",
  },
  jogador: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  novoJogo: {
    flex: 2,
  },
  escolhas: {
    flex: 2,
  },
});
