const clientId = "927c0c41137b165756bba59b9dc100ee";
const sandboxClientId = "e179e357750320e2e652c80b61c4dc02";
const redirectUri = "https://0t3e4.csb.app/callback";
const sandboxRedirectUri = "https://0t3e4.csb.app/sandbox/callback";
const responseType = "token";
const scopes = [
  "identity",
  "military_us",
  "responder_us",
  "student_us",
  "teacher_us",
  "government_us",
  "alumni",
  "medical",
  "nurse",
  "employee",
  "senior",
  "military_canada",
  "responder_canada",
  "student_canada",
  "teacher_canada",
  "government_canada",
  "nurse_canada",
  "hospital_employee",
  "kba_replacement/covid/verify",
  "kba_replacement/covid/questionnaire"
  // "kba_replacement/covid/pcr_test"
  // "sdca_resident",
  // "mcnj_resident"
].join(",");

export const groupsEndpoint = (sandbox) => {
  const endpoint = "https://groups.id.me";
  const parameters = [
    `client_id=${sandbox ? sandboxClientId : clientId}`,
    `redirect_uri=${sandbox ? sandboxRedirectUri : redirectUri}`,
    `response_type=${responseType}`,
    `scopes=${scopes}`
  ];

  if (sandbox) {
    parameters.push(`sandbox=${sandbox}`);
  }

  return `${endpoint}?${parameters.join("&")}`;
};
