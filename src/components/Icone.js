import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


class Icone extends Component {
    render() {
        //this.props.escolha
        //this.props.jogador
        if (this.props.escolha == '') {
            return false;
        }
        else {
            if (this.props.escolha == 'pedra') {
                return (
                    <View>
                        <Text style={stylesicon.texticon}>{this.props.jogador}</Text>
                        <Image source={require('../../imgs/pedra.png')} />
                    </View>

                );
            }
            else {
                if (this.props.escolha == 'papel') {
                    return (
                        <View>
                            <Text style={stylesicon.texticon}>{this.props.jogador}</Text>
                            <Image source={require('../../imgs/papel.png')} />
                        </View>

                    );
                }
                else
                    if (this.props.escolha == 'tesoura') {
                        return (
                            <View>
                                <Text style={stylesicon.texticon}>{this.props.jogador}</Text>
                                <Image source={require('../../imgs/tesoura.png')} />
                            </View>

                        );
                    }
            }



        }
    }
}

const stylesicon = StyleSheet.create({
    texticon:{
        fontSize:18,
    }
});





export default Icone; 