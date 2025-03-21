import '../css/EX1.css'

function EX1 () {
  const questions = [
    {
    statement: "2+2?",
    answer: "2+2 = 4"
    },
    {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
    },
    {
    statement:
    "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
    }
    ];
    
    const handleClick = (e, index) => {
      const button = e.currentTarget;
      const answer = document.createElement('p');

      answer.textContent = questions[index].answer;
      answer.classList.add('ex1-answers');

      button.replaceWith(answer);
    }

  return (
    <div
      id='ex1-container'>
        <div
          id='ex1-content'>
            {questions.map((question, index) => (
              <>
                <h2>{question.statement}</h2>
                <button
                  className='ex1-btn'
                  // addEventListener equivalent
                  onClick={(e) => handleClick(e, index)}>Reveal Answer</button>
              </>
            ))}
          </div>
      </div>
  )
}

export default EX1