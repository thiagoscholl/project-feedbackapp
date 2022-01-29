import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is Feedback 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This item is Feedback 2',
      rating: 7,
    },
    {
      id: 3,
      text: 'This item is Feedback 3',
      rating: 9,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //  Deletar Feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //  Adicionar Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //  Seleciona o item para ser modificado
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        //  data state
        feedback,
        //  delete feedback function
        deleteFeedback,
        //  add feedback function
        addFeedback,
        //  editfeedback function
        editFeedback,
        //  feedbackedit state
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
