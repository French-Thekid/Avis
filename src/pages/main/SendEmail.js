import { key } from './emailkey'

export default function SendEnail({
  elements,
  showNotification,
  showNotificationFailed,
  cleanUp,
  setloading,
}) {
  var params = {
    service_id: 'service_bu50v3r',
    template_id: key.TEMPLATE_ID,
    user_id: key.USER_ID,
    template_params: {
      ...elements,
      'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
    },
  }

  return fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then((response) => response)
    .then((data) => {
      console.log('Success:', data)
      setloading(false)
      if (data.status === 200 || data.status === 201) {
        showNotification()
        cleanUp()
      } else {
        showNotificationFailed()
      }
    })
    .catch((error) => {
      console.error('Error:', error)
      setloading(false)
    })
}

export const SendSlip = ({
  elements,
  showNotification,
  showNotificationFailed,
  cleanUp,
  setloading,
}) => {
  var params = {
    service_id: 'service_bu50v3r',
    template_id: 'template_kezrgdc',
    user_id: key.USER_ID,
    template_params: {
      ...elements,
      'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
    },
  }

  return fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then((response) => response)
    .then((data) => {
      console.log('Success:', data)
      setloading(false)
      if (data.status === 200 || data.status === 201) {
        showNotification()
        cleanUp()
      } else {
        showNotificationFailed()
      }
    })
    .catch((error) => {
      console.error('Error:', error)
      setloading(false)
    })
}
