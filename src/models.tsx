export class Question {
  questionText: string;
  answers: Array<Answer>;

  constructor(questionText: string, answers: Array<Answer>) {
    this.questionText = questionText
    this.answers = answers
  }

  public get maxAnswerValue(): number {
    return Math.max(...this.answers.map((answer) => Math.abs(answer.value)), 0)
  }
}

export class Answer {
  answerText: string;
  value: number;
  hint: string;

  constructor(answerText: string, value: number, hint: string) {
    this.answerText = answerText
    this.value = value
    this.hint = hint
  }
}