
export function getAppointmentsForDay (state,day) {
   const filteredDays = state.days.filter((singleDay) => {
       return singleDay.name === day;
   })
   if (filteredDays.length === 0) {
       return [];
   }
   const appointmentMapped = filteredDays[0].appointments.map((appointment) => {
       return state.appointments[appointment];
   })
   return appointmentMapped;
};
