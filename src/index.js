import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      points: [0, 0, 0, 0, 0, 0]
    }
  }

  selectRandom = () => {
      return() => this.setState({selected: Math.floor((Math.random() * 5))})
  }
 
  mostUpvotes = () => this.state.points.indexOf(Math.max.apply(null, this.state.points));
  

  vote = () => {
      return () => {
          const copypoints = [...this.state.points]
          copypoints[this.state.selected] += 1
          this.setState({points: copypoints})
      }
  }


  render() {
    return (
      <div>
        <h4>{this.props.anecdotes[this.state.selected]}</h4>
        <br />
        <br />
        This anecdote has {this.state.points[this.state.selected]} upvotes.
        <br />
        <button onClick={this.selectRandom()}>Random Anecdote</button>
        <button onClick={this.vote()}>Upvote</button>
        <br />
        <br />
        Most upvoted anecdote:<br />
        {this.props.anecdotes[this.mostUpvotes()]}
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)