export function getMinimalEpidemicProfile(dbEpidemic: any) {
  const epidemicProfile = {
    id: dbEpidemic.id,
    name: dbEpidemic.name,
    description: dbEpidemic.description,
    symptoms: dbEpidemic.symptoms,
    precautions: dbEpidemic.precautions,
    questionnaire: dbEpidemic.questionnaire,
    vaccine: dbEpidemic.vaccine,
    emergencyContacts: dbEpidemic.emergencyContacts
  }
  return epidemicProfile;
}
