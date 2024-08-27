import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {

  const [visivel, setVisivel] = useState(false);

  const [pontosJogador, setPontosJogador] = useState(0);

  const [pontosCpu, setPontosCpu] = useState(0);

  const [imagemPadrao, setImagemPadrao] = useState(require('./assets/caixa.png'))

  const [jogadorImagem, setJogadorImagem] = useState(imagemPadrao);

  const [cpuImagem, setCpuImagem] = useState(imagemPadrao);

  const [figuras, setFiguras] = useState([
    {
      nome: "Pedra",
      imagem: require('./assets/pedra.png'),
      vantagens: [1, 2, 3, 4],
    },
    {
      nome: "Fogo",
      imagem: require('./assets/fogo.png'),
      vantagens: [2, 3, 4, 5],
    },
    {
      nome: "Tesoura",
      imagem: require('./assets/tesoura.png'),
      vantagens: [3, 4, 5, 6],
    },
    {
      nome: "Pessoa",
      imagem: require('./assets/pessoa.png'),
      vantagens: [4, 5, 6, 7],
    },
    {
      nome: "Esponja",
      imagem: require('./assets/esponja.png'),
      vantagens: [5, 6, 7, 8],
    },
    {
      nome: "Papel",
      imagem: require('./assets/papel.png'),
      vantagens: [6, 7, 8, 0],
    },
    {
      nome: "Ar",
      imagem: require('./assets/ar.png'),
      vantagens: [7, 8, 0, 1],
    },
    {
      nome: "Água",
      imagem: require('./assets/agua.png'),
      vantagens: [8, 0, 1, 2],
    },
    {
      nome: "Arma",
      imagem: require('./assets/arma.png'),
      vantagens: [0, 1, 2, 3],
    },

  ])

  const jogar = (i) => {

    setJogadorImagem(figuras[i].imagem);

    var escolhaCpu = (Math.random() * 9) | 0;

    setCpuImagem(figuras[escolhaCpu].imagem);

    figuras[i].vantagens.forEach(figura => {
      
      if(figura == escolhaCpu) {
        setPontosJogador(pontosJogador + 1);
      }

    });

    figuras[escolhaCpu].vantagens.forEach(figura => {
      
      if(figura == i) {
        setPontosCpu(pontosCpu + 1);
      }
      
    });

  };

  const novaPartida = () => {
    setPontosJogador(0);
    setPontosCpu(0);
    setJogadorImagem(imagemPadrao)
    setCpuImagem(imagemPadrao)
  }

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.titulo}>
        <Pressable onPress={() => { setVisivel(true) }} style={styles.botaoInfo}>
          <Image source={require('./assets/info.png')} />
        </Pressable>

        <View style={styles.textoTitulo}>
          <Image style={styles.imagemTitulo} source={require('./assets/titulo.png')} />
        </View>
      </View>


      <View style={styles.corpo}>
        <View style={styles.placar}>
          <View style={styles.placarTitulo}>
            <Text style={styles.textoPlacar}>Placar</Text>
          </View>
          <View style={styles.placarPontos}>
            <View style={styles.pontos}>
              <Text style={styles.textoPontos}>{pontosJogador}</Text>
            </View>
            <View style={styles.pontos}>
              <Text style={styles.textoPontos}>{pontosCpu}</Text>
            </View>
          </View>
        </View>

        <View style={styles.jogo}>

          <View style={styles.jogada}>
            <Image style={styles.imagemJogada} source={jogadorImagem} />
          </View>
          <View style={styles.vs}>
            <Image style={styles.vsImg} source={require('./assets/vs.png')} />
          </View>

          <View style={styles.jogada}>
            <Image style={styles.imagemJogada} source={cpuImagem} />
          </View>

        </View>

        <View style={styles.novoJogo}>
          <Pressable onPress={() => novaPartida()}>
            <Image source={require('./assets/nova-partida.png')} />

          </Pressable>
        </View>


        <View style={styles.escolhas}>
          <ScrollView>
            <View style={styles.fileira}>
              <Pressable style={styles.item} onPress={() => jogar(0)}>
                <Image style={styles.itemImagem} source={figuras[0].imagem} />
              </Pressable>
              <Pressable style={styles.item} onPress={() => jogar(1)}>
                <Image style={styles.itemImagem} source={figuras[1].imagem} />
              </Pressable>
              <Pressable style={styles.item} onPress={() => jogar(2)}>
                <Image style={styles.itemImagem} source={figuras[2].imagem} />
              </Pressable>
            </View>
            <View style={styles.fileira}>
              <Pressable style={styles.item} onPress={() => jogar(3)}>
                <Image style={styles.itemImagem} source={figuras[3].imagem} />
              </Pressable>
              <Pressable style={styles.item} onPress={() => jogar(4)}>
                <Image style={styles.itemImagem} source={figuras[4].imagem} />
              </Pressable>
              <Pressable style={styles.item} onPress={() => jogar(5)}>
                <Image style={styles.itemImagem} source={figuras[5].imagem} />
              </Pressable>
            </View>
            <View style={styles.fileira}>
              <Pressable style={styles.item} onPress={() => jogar(6)}>
                <Image style={styles.itemImagem} source={figuras[6].imagem} />
              </Pressable>
              <Pressable style={styles.item} onPress={() => jogar(7)}>
                <Image style={styles.itemImagem} source={figuras[7].imagem} />
              </Pressable>
              <Pressable style={styles.item} onPress={() => jogar(8)}>
                <Image style={styles.itemImagem} source={figuras[8].imagem} />
              </Pressable>
            </View>
          </ScrollView>
        </View>

      </View>



      <Modal visible={visivel}>
        <View style={styles.infoArea}>
          <Image source={require('./assets/jokenpo2.png')} style={styles.jokenpo2} />
        </View>

        <View style={styles.botaoVoltar}>
          <Pressable onPress={() => { setVisivel(false) }} style={styles.botao}>
            <Image source={require('./assets/voltar.png')} />
          </Pressable>
        </View>
      </Modal>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
  textoTitulo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemTitulo: {
    width: '80%',
    resizeMode: "contain",
    margin: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  corpo: {
    flex: 7,
    width: "100%",
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jogo: {
    flex: 2,
    width: "100%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  jogada: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemJogada: {
    width: '80%',
    resizeMode: "contain",
    margin: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vsImg: {
    width: '80%',
    resizeMode: "contain",
    margin: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  novoJogo: {
    flex: 1,
  },
  escolhas: {
    flex: 3,
    width: "100%",
  },
  fileira: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImagem: {
    width: "100%",
    resizeMode: "contain",
    alignItems: 'center',
    justifyContent: 'center',
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
