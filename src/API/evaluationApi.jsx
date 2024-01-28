/* eslint-disable import/no-anonymous-default-export */
import backendInstance from "./backendApi";

const api = backendInstance();

const sendEvaluationEmail = async (id, subject, body) => {
  const payload = {
    id,
    emailSubject: subject,
    emailBody: body,
  };
  const response = await api.post(`valuation/email`, payload);
  return response;
};

export default { sendEvaluationEmail };
