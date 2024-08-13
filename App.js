import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {

  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.container}>  
      <StatusBar style="auto" />
      
      <View style={styles.titulo}>
        <Pressable onPress={() => {setVisivel(true)}} style={styles.botaoInfo}>
          <Image source={require('./assets/info.png')}/>
        </Pressable>
        
        <View style={styles.imagemTitulo}>
          <Image  source={require('./assets/titulo.png')}/>
        </View>
      </View>

      <View style={styles.placar}>
        <View style={styles.placarTitulo}> 
          <Text style={styles.textoPlacar}>Placar</Text>
        </View>
        <View style={styles.placarPontos}>
          <View style={styles.pontos}>
            <Text style={styles.textoPontos}>0</Text>
          </View>
          <View style={styles.pontos}>
            <Text style={styles.textoPontos}>0</Text>
          </View>
        </View> 
      </View>

      <View style={styles.jogo}>
        <View style={styles.jogada}>
          <Image style={styles.imagemJogada} source={require('./assets/caixa.png')}/>
        </View>
        <View style={styles.vs}>
          <Image source={require('./assets/vs.png')}/>
        </View>
        <View style={styles.jogada}>
          <Image style={styles.imagemJogada} source={require('./assets/caixa.png')}/>
        </View>
      </View>

      <View style={styles.novoJogo}>
        <Pressable>
          <Image source={require('./assets/nova-partida.png')}/>
        </Pressable>
      </View>

      <View style={styles.escolhas}>
        <ScrollView>
          <View style={styles.item}>
            <Image source={require('./assets/pedra.png')}/>
            <Image source={require('./assets/papel.png')}/>
            <Image source={require('./assets/tesoura.png')}/>
          </View>
          <View style={styles.item}>
            <Image source={require('./assets/arma.png')}/>
            <Image source={require('./assets/esponja.png')}/>
            <Image source={require('./assets/fogo.png')}/>
          </View>
          <View style={styles.item}>
            <Image source={require('./assets/ar.png')}/>
            <Image source={require('./assets/pessoa.png')}/>
            <Image source={require('./assets/agua.png')}/>
          </View>
        </ScrollView>
      </View>

      <Modal visible={visivel}>

        <View style={styles.infoArea}>
          <Image source={require('./assets/jokenpo2.png')} style={styles.jokenpo2}/>
        </View>

        <View style={styles.botaoInfo}>
          <Pressable onPress={() => {setVisivel(false)}} style={styles.botao}>
            <Image source={require('./assets/nova-partida.png')}/>
          </Pressable>
        </View>
        

      </Modal>
      

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
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
  botaoInfo: {
    justifyContent: 'left',
    padding: 10,
  },
  imagemTitulo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPlacar: {
    fontSize: 50,
  },
  textoPontos: {
    fontSize: 30,
  },
  placar: {
    flex: 2,
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
  jogada: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemJogada: {
    width: '90%',
    height: '75%',
    margin: '10%',
  },
  vs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  novoJogo: {
    flex: 1,
  },
  escolhas: {
    flex: 3,
  },
  item: {
    flex: 10,
    flexDirection: 'row',
  },
  infoArea: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokenpo2: {
    width: 300,
    height: 300,
  },
  botaoVoltar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    margin: "auto",
  },
});
