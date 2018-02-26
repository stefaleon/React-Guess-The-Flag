import React, { Component } from 'react';
import './App.css';
import FlagQuestion, {QuestionStates} from './FlagQuestion';

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      options: [],
      correctOption: undefined,
      questionState: undefined
    };

    this.guessHandler = this.guessHandler.bind(this);
    this.nextQuestionHandler = this.nextQuestionHandler.bind(this);
  }

  guessHandler(answer) {
    const {correctOption} = this.state;
    let questionState = answer === correctOption ?
      QuestionStates.ANSWER_CORRECT : QuestionStates.ANSWER_WRONG;
    this.setState({questionState});
  }

  nextQuestionHandler() {
    const {countries} = this.state;
    const correctOption = Math.floor(Math.random() * countries.length);
    const options = this.getOptions(correctOption, countries);
    this.setState({      
      correctOption,
      options,
      questionState: QuestionStates.QUESTION
    });
  }

  componentDidMount() {
    const allCountries = 'https://restcountries.eu/rest/v2/all';

    fetch(allCountries)
      .then(data => data.json())
      .then(countries => {
        const correctOption = Math.floor(Math.random() * countries.length);
        const options = this.getOptions(correctOption, countries);
        this.setState({
          countries,
          correctOption,
          options,
          questionState: QuestionStates.QUESTION
        });
      })
      .catch(console.warn);
  }

  getOptions(correctOption, countries) {
    let options = [correctOption];
    let tries = 0;
    while (options.length < 4 && tries < 15) {
      let option =  Math.floor(Math.random() * countries.length);
      if (options.indexOf(option) === -1) {
        options.push(option);
      } else {
        tries++;
      }
    }
    return shuffle(options);
  }


  render() {
    let { countries,
      correctOption,
      options,
      questionState } = this.state;

    let output = <div>Loading...</div>;

    if (correctOption !== undefined) {
      const { flag, name } =  countries[correctOption];
      let opts = options.map( opt => {
        return {
          id: opt,
          name: countries[opt].name
        };
      });
      output = (
        <div>
          <FlagQuestion
            answerText = {name}
            onGuess = {this.guessHandler}
            onNext = {this.nextQuestionHandler}
            options = {opts}
            questionState = {questionState}
            flag = {flag}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h2>Guess the Flag!</h2>
        {output}
      </div>
    );
  }
}

export default App;
