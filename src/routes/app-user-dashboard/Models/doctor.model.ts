export interface IDoctorTimeline{
    address:String;
    ailmentsTreated:String[];
    averageRating:String;
    city:String;
    country:String;
    designation:String;
    education: IEducationDetails[];
    email:String;
    experience:IExperienceDetails[];
    firstName:String,
    gender:String;
    hospital:IHospitalDetails;
    isPersonAllowed:String;
    isVideoAllowed: String;
    landmark: String,
    languages:  String[],
    lastName: String,
    licenses:ILicenseDetail;
    locality: String,
    location: String,
    name: String,
    phone: String,
    specialization: String,
    state: String,
    yearsOfExperience: String;
    schedule:IScheduleDetails[];
}


  export interface IScheduleDetails{
    day: String,
    slotTimeInMinutes: String,
    workingTime:IWorkingTimeDetails[]
  }
  export interface IEducationDetails{
    degree: String,
    description:String,
    endDate: String,
    fieldOfStudy: String,
    grade: String,
    school:String,
    startDate: String
}
export interface IExperienceDetails{
    comapanyName: String;
    description: String;
    endDate: String;
    location: String;
    startDate: String;
    title: String 
}
export interface IHospitalDetails{
    identifier:String;
    name:String

}
export interface ILicenseDetail{
    identifier: String,
    name: String,
    registrationYear: String,
    validUpTo: String,
    provider: String
}
export interface IWorkingTimeDetails{
    startTime: String,
    endTime: String
}