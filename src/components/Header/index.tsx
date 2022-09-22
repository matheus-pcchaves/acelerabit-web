import { Container, Content, Elements } from "./styles";

interface HeaderProps {
    title: string;
    buttonTitle: string;
    setRedirection: () => void;
}

export function Header(props: HeaderProps){
    
    return(
        <Container>
            <Content>
                <h1 className="title"><strong>A</strong>celerabit</h1>
                <Elements>
                    <p>{props.title}</p>
                    <button onClick={props.setRedirection}>{props.buttonTitle}</button>
                </Elements>
            </Content>
        </Container>
    )
}