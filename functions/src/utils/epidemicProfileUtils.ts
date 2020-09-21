export function getMinimalEpidemicProfile(dbEpidemic: any) {
    const epidemicProfile = {
      id: dbEpidemic.id,
      name: dbEpidemic.name,
      photoURL : dbEpidemic.photoURL,
      description: dbEpidemic.description,
      symptoms: dbEpidemic.symptoms,
      precautions: dbEpidemic.precautions,
      questionnaire: getMinimalQuestionnaire(dbEpidemic.questionnaire),
      vaccine: dbEpidemic.vaccine,
      emergencyContacts: dbEpidemic.emergencyContacts,
    }
    return epidemicProfile;
  }

  function getMinimalQuestionnaire(dbQuestionnaire: any) {
    const questionnaire: any = {};
    questionnaire.id = dbQuestionnaire.id;
    questionnaire.description = dbQuestionnaire.description;
    questionnaire.questions = getMinimalQuestion(dbQuestionnaire.questions);
    return questionnaire;
  }

  function getMinimalQuestion(dbQuestions: any[]) {
    const questions = [];
    dbQuestions.forEach(dbQuestion => {
      const question: any = {};
      question.id = dbQuestion.id;
      question.type = dbQuestion.type;
      question.question = dbQuestion.question;
      question.options = getMinimalQuestionOptions(dbQuestion.options);
      questions.push(question);
    })
    return questions;
  }

  function getMinimalQuestionOptions(dbQuestionOptions: any[]) {
    const options = [];
    dbQuestionOptions.forEach(dbQuestionOption => {
      const option: any = {};
      // option.id = dbQuestionOption.id;
      option.option = dbQuestionOption.option;
      options.push(option);
    })
    return options;
  }
