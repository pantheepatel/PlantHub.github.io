import React from 'react'
import { Container, Accordion } from 'react-bootstrap';

const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is PlantHub?',
        answer: 'PlantHub is a platform dedicated to providing information about plants and trees, including care tips, identification, and gardening advice.'
      },
      {
        question: 'How can I create an account?',
        answer: 'To create an account on PlantHub, click the "Sign Up" button and follow the registration process.'
      },
      {
        question: 'Is PlantHub free to use?',
        answer: 'Yes, PlantHub is entirely free to use for all plant enthusiasts.'
      }
    ]
  },
  {
    category: 'Plant Care',
    questions: [
      {
        question: 'How often should I water my plants?',
        answer: 'The watering frequency depends on the type of plant and its specific needs. It\'s essential to check the soil moisture before watering.'
      },
      {
        question: 'What should I do if my plant leaves turn yellow?',
        answer: 'Yellowing leaves can be a sign of overwatering, nutrient deficiency, or other issues. Check the soil, adjust watering, and consider fertilization.'
      }
    ]
  },
  {
    category: 'Account Management',
    questions: [
      {
        question: 'How can I change my profile picture?',
        answer: 'To change your profile picture, go to your profile settings, and click on the "Edit Profile" option. You can then upload a new image.'
      },
      {
        question: 'How do I reset my password?',
        answer: 'If you forget your password, you can reset it by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your email.'
      }
    ]
  }
];


function FAQ() {
  return (
    <div>
      {
        faqData.map((item) => {
          console.log(item)
          return (
            <Container className='pt-3 mb-3'>
              <h2>{item.category}</h2>
              <>
                {
                  item.questions.map((question) => {
                    return (
                      <Accordion defaultActiveKey="0" flush className='border-2 mb-2 border-success'>
                        <Accordion.Item classname="" eventKey="0">
                          <Accordion.Header style={{ backgroundColor: '#3D9970', color: '#ff' }}>{question.question}</Accordion.Header>
                          <Accordion.Body>
                            {question.answer}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    )
                  })
                }
              </>
            </Container>
          )
        })
      }
    </div>
  )
}

export default FAQ