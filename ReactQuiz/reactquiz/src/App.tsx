// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz from './components/Quiz';
import { Question } from './types';
import './App.scss';

const questions: Question[] = [
  {
    questionText: 'What is the virtual DOM?',
    answerOptions: [
      { answerText: 'An exact copy of the real DOM', isCorrect: false },
      { answerText: 'A lightweight representation of the real DOM', isCorrect: true },
      { answerText: 'A place where React components are stored', isCorrect: false },
      { answerText: 'A way to style React components', isCorrect: false },
    ],
  },
  {
    questionText: 'What is JSX?',
    answerOptions: [
      { answerText: 'A JavaScript library', isCorrect: false },
      { answerText: 'A templating language used to write HTML-like syntax in JavaScript', isCorrect: true },
      { answerText: 'A CSS framework', isCorrect: false },
      { answerText: 'A type of React component', isCorrect: false },
    ],
  },
  {
    questionText: 'What is a React component?',
    answerOptions: [
      { answerText: 'A function or class that returns JSX', isCorrect: true },
      { answerText: 'A plain JavaScript object', isCorrect: false },
      { answerText: 'An HTML element', isCorrect: false },
      { answerText: 'A CSS style rule', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the purpose of the `key` prop when rendering lists?',
    answerOptions: [
      { answerText: 'To provide a unique identifier for each item in the list', isCorrect: true },
      { answerText: 'To style the list items', isCorrect: false },
      { answerText: 'To specify the order of the list items', isCorrect: false },
      { answerText: 'To access the index of each item in the list', isCorrect: false },
    ],
  },

  {
    questionText: 'What is the purpose of the `useState` hook?',
    answerOptions: [
      { answerText: 'To fetch data from an API', isCorrect: false },
      { answerText: 'To handle user input', isCorrect: false },
      { answerText: 'To manage side effects', isCorrect: false },
      { answerText: 'To add state to functional components', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the purpose of the `useEffect` hook?',
    answerOptions: [
      { answerText: 'To perform side effects in functional components', isCorrect: true },
      { answerText: 'To update state based on props', isCorrect: false },
      { answerText: 'To create reusable logic', isCorrect: false },
      { answerText: 'To render components conditionally', isCorrect: false },
    ],
  },
 
  {
    questionText: 'What is React Context?',
    answerOptions: [
      { answerText: 'A way to pass data through the component tree without prop drilling', isCorrect: true },
      { answerText: 'A tool for managing global state', isCorrect: false },
      { answerText: 'A mechanism for handling events', isCorrect: false },
      { answerText: 'A technique for optimizing performance', isCorrect: false },
    ],
  },

  {
    questionText: 'What is the purpose of React Fragments?',
    answerOptions: [
      { answerText: 'To group multiple elements without adding extra nodes to the DOM', isCorrect: true },
      { answerText: 'To define reusable components', isCorrect: false },
      { answerText: 'To handle events in React', isCorrect: false },
      { answerText: 'To create animations', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the difference between controlled and uncontrolled components?',
    answerOptions: [
      { answerText: 'Controlled components store their own state, while uncontrolled components rely on the DOM', isCorrect: true },
      { answerText: 'Controlled components are used for forms, while uncontrolled components are used for everything else', isCorrect: false },
      { answerText: 'Controlled components are more efficient than uncontrolled components', isCorrect: false },
      { answerText: 'Controlled components have more features than uncontrolled components', isCorrect: false },
    ],
  },
  {
    questionText: 'What is React Router?',
    answerOptions: [
      { answerText: 'A library for handling navigation and routing in React applications', isCorrect: true },
      { answerText: 'A tool for managing state in React', isCorrect: false },
      { answerText: 'A way to fetch data from an API', isCorrect: false },
      { answerText: 'A testing framework for React', isCorrect: false },
    ],
  },

  // ... more questions
];

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/quiz" className="nav-link">
            Quiz
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz questions={questions} />} /> 
        </Routes>
      </div>
    </Router>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the React Quiz!</h1>
      <p>Test your knowledge of React concepts.</p>
      <Link to="/quiz" className="start-button">
        Start Quiz
      </Link>
    </div>
  );
};

export default App;