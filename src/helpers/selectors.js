
export function getAppointmentsForDay (state,day) {
   const filteredDays = state.days.filter((singleDay) => {
       return singleDay.name === day
   })
   if (filteredDays.length === 0) {
       return [];
   }
   const appointmentMapped = filteredDays[0].appointments.map((appointment) => {
       return state.appointments[appointment];
   })
   return appointmentMapped;
};
export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find(dayOfDays => dayOfDays.name === day);
  if (!state.days.length || !filteredDay) {
    return [];
  } else {
    return filteredDay.interviewers.map((id) => state.interviewers[id])
  }
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerInfo = state.interviewers[interview.interviewer];
  return {
    "student": interview.student,
    "interviewer": interviewerInfo
  }
}