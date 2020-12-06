import React, { Component } from 'react';
import { ButtonGroup, Card, Col, Container, Form, Navbar, Row, ToggleButton } from 'react-bootstrap'
import { HeartFill, HddFill } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Question } from './models';
import { questions } from './questions';
import { Helmet } from 'react-helmet';

interface Props { }
interface State {
  value: number,
  selectedAnswers: Array<number>
}

export class ServerMore extends Component<Props, State> {
  questions: Array<Question>

  constructor(props: Props) {
    super(props)

    this.questions = questions

    this.state = {
      value: 0,
      selectedAnswers: []
    }

    this.selectAnswer = this.selectAnswer.bind(this)
  }

  selectAnswer(questionIndex: number, answerIndex: number) {
    console.log(`select: Question: ${questionIndex}, Answer: ${answerIndex}`)
    let selectedAnswersCopy = [...this.state.selectedAnswers];
    selectedAnswersCopy[questionIndex] = answerIndex
    this.setState({ selectedAnswers: selectedAnswersCopy }, () => {
      this.updateValue()
    })
  }

  updateValue() {
    let newValue = 0

    this.state.selectedAnswers.forEach((answerIndex, questionIndex) => {
      console.log(`update: Question: ${questionIndex}, Answer: ${answerIndex}`)
      if (answerIndex !== undefined) {
        newValue += questions[questionIndex].answers[answerIndex].value
      }
    })

    this.setState({ value: newValue })
  }


  render() {
    return (
      <div>
        <Helmet>
          <title>ServerMore</title>
          <meta name="description" content="ServerMore - an application that guides you whether to go Serverless or not" />
          <link rel="canonical" href="https://brennerm.github.io/servermore" />
        </Helmet>
        <Navbar id="header" fixed="top" bg="light">
          <Navbar.Brand href="/">
            <HddFill className="text-info"></HddFill>
            {' '}
            Servermore
            </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Built with <HeartFill className="text-danger"></HeartFill> by <a href="https://brennerm.github.io/about.html">brennerm</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Container className="App">
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    ServerMore has the single purpose of helping you answering the questions whether going Serverless is a viable option for your application.
                    Answer as many questions as you want and the indicator on the bottom of the page will give an estimate whether going Serverless or using traditional servers fits your use case.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {this.questions.map((question, questionIndex) => (
            <Form.Group key={questionIndex}>
              <Row>
                <Col>
                  <Form.Label>{question.questionText}</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ButtonGroup toggle className="flex-wrap">
                    {question.answers.map((answer, answerIndex) => (
                      <ToggleButton
                        type="radio"
                        variant="info"
                        key={`${questionIndex}-${answerIndex}`}
                        value={answerIndex}
                        checked={this.state.selectedAnswers[questionIndex] === answerIndex}
                        onChange={e => this.selectAnswer(questionIndex, answerIndex)}>
                        {answer.answerText}
                      </ToggleButton>

                    ))}
                  </ButtonGroup>

                  {
                    this.state.selectedAnswers[questionIndex] !== undefined
                      ? <Row><Col><div className={this.questions[questionIndex].answers[this.state.selectedAnswers[questionIndex]].value > 0 ? "text-danger" : "text-success"}>
                        {this.questions[questionIndex].answers[this.state.selectedAnswers[questionIndex]].hint}
                      </div>
                      </Col></Row>
                      : null
                  }

                </Col>
              </Row>
            </Form.Group>
          ))}
        </Container>
        <ServerMoreValue value={this.state.value} />
      </div>
    );
  }
}

interface ServerMoreValueProps {
  value: number
}

interface ServerMoreValueState { }

class ServerMoreValue extends Component<ServerMoreValueProps, ServerMoreValueState> {
  props: ServerMoreValueProps

  constructor(props: ServerMoreValueProps) {
    super(props)

    this.props = props
  }

  render() {
    return <Navbar id="footer" fixed="bottom" className="justify-content-between bg-light">
      <Col xs="3">
        <Form.Label>serverless</Form.Label>
      </Col>
      <Col xs="6">
        <Form.Control type="range" value={this.props.value} readOnly max="100" min="-100" />
      </Col>
      <Col xs="3">
        <Form.Label>servermore</Form.Label>
      </Col>
    </Navbar>
  }
}

export default ServerMore;
