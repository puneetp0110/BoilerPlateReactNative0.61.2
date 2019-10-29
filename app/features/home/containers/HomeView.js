import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Accordion } from "native-base";

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Header />
                <Content padder>
                    <Accordion dataArray={dataArray} expanded={0} />
                </Content>
            </Container>
        );
    }
}
