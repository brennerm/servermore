import React, { Component } from 'react';
import { ButtonGroup, Col, Container, Form, Navbar, Row, ToggleButton, Image, Jumbotron, Alert, Collapse, OverlayTrigger, Tooltip, Card } from 'react-bootstrap'
import { HeartFill, Moon, Sun, Hammer } from 'react-bootstrap-icons';
import './scrollbar.css';
import './slider.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Question } from './models';
import { questions } from './questions';
import logo from './logo.svg';

interface Props { }
interface State {
  value: number,
  selectedAnswers: Array<number>,
  darkMode: boolean
}

export class ServerMore extends Component<Props, State> {
  questions: Array<Question>

  constructor(props: Props) {
    super(props)

    this.questions = questions.sort((first, second) => second.maxAnswerValue - first.maxAnswerValue)

    const userPrefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const storedDarkFlag = localStorage.getItem("dark-mode");

    console.log(`User prefer dark color scheme: ${userPrefersDarkScheme.matches}`)
    console.log(`stored dark mode flag: ${storedDarkFlag}`)
    let enableDarkMode: boolean

    if (userPrefersDarkScheme.matches && storedDarkFlag === undefined) {
      enableDarkMode = true
    } else if (storedDarkFlag === "true") {
      enableDarkMode = true
    } else {
      enableDarkMode = false
    }

    this.state = {
      value: 0,
      selectedAnswers: [],
      darkMode: enableDarkMode
    }

    this.setDarkMode(enableDarkMode)

    this.selectAnswer = this.selectAnswer.bind(this)
    this.setDarkMode = this.setDarkMode.bind(this)
  }

  selectAnswer(questionIndex: number, answerIndex: number) {
    let selectedAnswersCopy = [...this.state.selectedAnswers];
    selectedAnswersCopy[questionIndex] = answerIndex
    this.setState({ selectedAnswers: selectedAnswersCopy }, () => {
      this.updateValue()
    })
  }

  updateValue() {
    let newValue = 0

    this.state.selectedAnswers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== undefined) {
        newValue += questions[questionIndex].answers[answerIndex].value
      }
    })

    this.setState({ value: newValue })
  }

  setDarkMode(value: boolean) {
    document.documentElement.classList.toggle("dark-mode", value);

    this.setState({
      darkMode: value
    }, () => {
      localStorage.setItem("dark-mode", String(this.state.darkMode));
    })
  }

  render() {
    return (
      <div>
        <Navbar id="header" fixed="top" className="justify-content-between">
          <Col xs="5" className="text-left">
            <Image className="App-logo img-responsive" src={logo}></Image> <strong>ServerMore</strong>
          </Col>
          <Col xs="1" onClick={() => this.setDarkMode(!this.state.darkMode)}>
            <h5>
              {
                this.state.darkMode
                  ? <Sun className="text-warning"></Sun>
                  : <Moon className="text-warning"></Moon>
              }
            </h5>
          </Col>
          <Col xs="5" className="text-right">
            <Hammer className="text-secondary"></Hammer> with <HeartFill className="text-danger"></HeartFill> by <a href="https://brennerm.github.io/about.html">brennerm</a>
          </Col>
        </Navbar>
        <div className="content">
          <Container>
            <Row>
              <Col>
                <Jumbotron>
                  <h2>
                    Go <OverlayTrigger trigger="click" key="top" placement="top"
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          Don't know what's serverless? <a href="https://en.wikipedia.org/wiki/Serverless_computing">Read about it!</a>
                        </Tooltip>
                      }>
                      <span className="tooltip-text">serverless</span>
                    </OverlayTrigger> or run on regular servers?
                  </h2>
                  <p>
                    That's what ServerMore is going to help you with.
                    Answer as many questions as you want and the slider at the bottom will give you an indication based on your responses.
                  </p>
                </Jumbotron>
              </Col>
            </Row>
            {this.questions.map((question, questionIndex) => (
              <Collapse key={questionIndex} in={(questionIndex === 0 || this.state.selectedAnswers[questionIndex - 1] !== undefined)}>
                <Card className="question">
                  <Card.Header>
                    <Form.Label>{question.questionText}</Form.Label>
                  </Card.Header>
                  <Card.Body>
                    <ButtonGroup toggle className="flex-wrap">
                      {question.answers.map((answer, answerIndex) => (
                        <ToggleButton
                          type="radio"
                          variant={answer.value === 0 ? "secondary" : "primary"}
                          key={`${questionIndex}-${answerIndex}`}
                          value={answerIndex}
                          checked={this.state.selectedAnswers[questionIndex] === answerIndex}
                          onChange={() => this.selectAnswer(questionIndex, answerIndex)}>
                          {answer.answerText}
                        </ToggleButton>

                      ))}
                    </ButtonGroup>
                  </Card.Body>
                  <div className={this.state.selectedAnswers[questionIndex] === undefined || this.questions[questionIndex].answers[this.state.selectedAnswers[questionIndex]].hint === null ? "invisible" : "visible"}>
                    <Card.Footer>
                      {
                        this.state.selectedAnswers[questionIndex] !== undefined
                          ? <div className={this.questions[questionIndex].answers[this.state.selectedAnswers[questionIndex]].value > 0 ? "text-danger" : "text-success"}>
                            {this.questions[questionIndex].answers[this.state.selectedAnswers[questionIndex]].hint}
                          </div>
                          : null
                      }
                    </Card.Footer>
                  </div>
                </Card>
              </Collapse>
            ))}
            <Row>
              <Col></Col>
              <Col sm="auto">
                <Alert variant="info">
                  Missing a question or don't agree with an existing one?
                  <br></br>
                  <Alert.Link href="https://github.com/brennerm/servermore/issues">
                    Submit an issue
                </Alert.Link> or <Alert.Link href="https://github.com/brennerm/servermore/pulls">
                    propose the change yourself!
                </Alert.Link>
                </Alert>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
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
    return <Navbar id="footer" fixed="bottom" className="justify-content-center">
      <Col xs="3" className="text-right">
        <Form.Label><strong>serverless</strong></Form.Label>
      </Col>
      <Col xs="6">
        <Form.Control type="range" value={this.props.value} readOnly max="100" min="-100" />
      </Col>
      <Col xs="3" className="text-left">
        <Form.Label><strong>servermore</strong></Form.Label>
      </Col>
    </Navbar>
  }
}

export default ServerMore;
